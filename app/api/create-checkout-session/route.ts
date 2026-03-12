import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { siteUrl } from '@/lib/site';
import {
  BillingInterval,
  CheckoutPlan,
  CurrencyCode,
  DEFAULT_INTERVAL,
  PRICING,
} from '@/lib/pricing';

const CHECKOUT_DEBUG_ENABLED =
  process.env.CHECKOUT_DEBUG === 'true' || process.env.NODE_ENV !== 'production';

const CheckoutRequestSchema = z.object({
  plan: z.enum(['free', 'draft', 'teach', 'bundle']),
  interval: z.enum(['monthly', 'yearly']).default(DEFAULT_INTERVAL),
  currency: z.enum(['EUR', 'USD', 'GBP']),
  locale: z.enum(['en', 'de']).default('en'),
  source: z.string().max(100).optional(),
});

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

function getStripeKeyMode(secretKey?: string) {
  if (!secretKey) {
    return 'missing';
  }

  if (secretKey.startsWith('sk_live_')) {
    return 'live';
  }

  if (secretKey.startsWith('sk_test_')) {
    return 'test';
  }

  return 'unknown';
}

function getSafeErrorDetails(error: unknown) {
  if (error instanceof Stripe.errors.StripeError) {
    return {
      code: error.code,
      decline_code: error.decline_code,
      message: error.message,
      param: error.param,
      requestId: error.requestId,
      type: error.type,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      type: error.name,
    };
  }

  return {
    message: 'Unknown error',
    type: 'UnknownError',
  };
}

function getPricingUrl(locale: 'en' | 'de') {
  return new URL(locale === 'de' ? '/de/pricing' : '/en/pricing', siteUrl);
}

export async function POST(request: NextRequest) {
  let debugContext:
    | {
        cancelUrl?: string;
        currency?: CurrencyCode;
        interval?: BillingInterval;
        locale?: 'en' | 'de';
        plan?: CheckoutPlan;
        priceId?: string;
        source?: string;
        stripeKeyMode: string;
        successUrl?: string;
      }
    | undefined;

  try {
    const body = await request.json();
    const data = CheckoutRequestSchema.parse(body);
    const stripeKeyMode = getStripeKeyMode(process.env.STRIPE_SECRET_KEY);

    debugContext = {
      currency: data.currency,
      interval: data.interval,
      locale: data.locale,
      plan: data.plan,
      source: data.source,
      stripeKeyMode,
    };

    if (data.plan === 'free') {
      console.warn('[checkout] free plan sent to paid checkout endpoint', {
        ...debugContext,
      });

      return NextResponse.json(
        {
          error: 'Free plan should use the signup flow directly, not Stripe Checkout.',
          ...(CHECKOUT_DEBUG_ENABLED
            ? {
                debug: {
                  ...debugContext,
                  expectedFlow: 'direct_signup',
                },
              }
            : {}),
        },
        { status: 400 },
      );
    }

    if (!stripe) {
      console.error('[checkout] stripe not configured', debugContext);

      return NextResponse.json(
        {
          error: 'Stripe is not configured. Set STRIPE_SECRET_KEY to enable checkout.',
          ...(CHECKOUT_DEBUG_ENABLED
            ? {
                debug: {
                  ...debugContext,
                  envVar: 'STRIPE_SECRET_KEY',
                },
              }
            : {}),
        },
        { status: 500 },
      );
    }

    const priceId = PRICING[data.plan][data.interval][data.currency].stripePriceId;
    const pricingUrl = getPricingUrl(data.locale);
    const successUrl = new URL(pricingUrl);
    const cancelUrl = new URL(pricingUrl);

    successUrl.searchParams.set('checkout', 'success');
    successUrl.searchParams.set('plan', data.plan);
    successUrl.searchParams.set('interval', data.interval);
    successUrl.searchParams.set('currency', data.currency);

    cancelUrl.searchParams.set('checkout', 'cancelled');
    cancelUrl.searchParams.set('plan', data.plan);
    cancelUrl.searchParams.set('interval', data.interval);
    cancelUrl.searchParams.set('currency', data.currency);

    debugContext = {
      ...debugContext,
      cancelUrl: cancelUrl.toString(),
      priceId,
      successUrl: successUrl.toString(),
    };

    console.info('[checkout] creating session', debugContext);

    const session = await stripe.checkout.sessions.create({
      currency: data.currency.toLowerCase(),
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl.toString(),
      cancel_url: cancelUrl.toString(),
      metadata: {
        currency: data.currency,
        interval: data.interval,
        locale: data.locale,
        plan: data.plan,
        source: data.source || 'marketing_site',
      },
    });

    if (!session.url) {
      throw new Error('Stripe did not return a checkout URL.');
    }

    console.info('[checkout] session created', {
      ...debugContext,
      sessionId: session.id,
      sessionUrl: session.url,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    const errorDetails = getSafeErrorDetails(error);

    console.error('[checkout] create session failed', {
      ...debugContext,
      error: errorDetails,
    });

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid checkout request.',
          details: error.flatten(),
          ...(CHECKOUT_DEBUG_ENABLED
            ? {
                debug: {
                  ...debugContext,
                  error: errorDetails,
                },
              }
            : {}),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: 'Unable to create checkout session.',
        ...(CHECKOUT_DEBUG_ENABLED
          ? {
              debug: {
                ...debugContext,
                error: errorDetails,
              },
            }
          : {}),
      },
      { status: 500 },
    );
  }
}
