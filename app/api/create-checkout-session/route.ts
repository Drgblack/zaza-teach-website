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

function getPricingUrl(locale: 'en' | 'de') {
  return new URL(locale === 'de' ? '/de/pricing' : '/en/pricing', siteUrl);
}

function buildFreeSignupUrl({
  currency,
  interval,
  locale,
  plan,
  source,
}: {
  currency: CurrencyCode;
  interval: BillingInterval;
  locale: 'en' | 'de';
  plan: CheckoutPlan;
  source?: string;
}) {
  const signupUrl = process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.zazateach.com/signup';
  const url = new URL(signupUrl);

  url.searchParams.set('plan', plan);
  url.searchParams.set('interval', interval);
  url.searchParams.set('currency', currency);
  url.searchParams.set('locale', locale);

  if (source) {
    url.searchParams.set('source', source);
  }

  return url.toString();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = CheckoutRequestSchema.parse(body);

    if (data.plan === 'free') {
      return NextResponse.json({
        url: buildFreeSignupUrl(data),
      });
    }

    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Set STRIPE_SECRET_KEY to enable checkout.' },
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

    const session = await stripe.checkout.sessions.create({
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

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error('Create checkout session error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid checkout request.',
          details: error.flatten(),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Unable to create checkout session.' },
      { status: 500 },
    );
  }
}
