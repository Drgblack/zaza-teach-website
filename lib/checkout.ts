import { BillingInterval, CheckoutPlan, CurrencyCode } from '@/lib/pricing';

type StartCheckoutArgs = {
  currency: CurrencyCode;
  interval: BillingInterval;
  locale: 'en' | 'de';
  plan: CheckoutPlan;
  source?: string;
};

export async function startCheckout({
  currency,
  interval,
  locale,
  plan,
  source,
}: StartCheckoutArgs) {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      plan,
      interval,
      currency,
      locale,
      source,
    }),
  });

  const rawBody = await response.text();
  let data: {
    debug?: unknown;
    details?: unknown;
    error?: string;
    url?: string;
  } = {};

  try {
    data = rawBody ? JSON.parse(rawBody) : {};
  } catch (parseError) {
    console.error('Checkout API returned a non-JSON response.', {
      parseError,
      rawBody,
      status: response.status,
    });
  }

  if (!response.ok || !data.url) {
    console.error('Checkout API request failed.', {
      body: data,
      rawBody,
      request: {
        currency,
        interval,
        locale,
        plan,
        source,
      },
      status: response.status,
      statusText: response.statusText,
    });

    throw new Error(
      data.error || `Unable to start checkout. HTTP ${response.status} ${response.statusText}`.trim(),
    );
  }

  window.location.assign(data.url);
}
