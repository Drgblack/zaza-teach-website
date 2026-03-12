import { CheckoutPlan, CurrencyCode } from '@/lib/pricing';

type StartCheckoutArgs = {
  currency: CurrencyCode;
  locale: 'en' | 'de';
  plan: CheckoutPlan;
  source?: string;
};

export async function startCheckout({
  currency,
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
      currency,
      locale,
      source,
    }),
  });

  const data = (await response.json()) as {
    error?: string;
    url?: string;
  };

  if (!response.ok || !data.url) {
    throw new Error(data.error || 'Unable to start checkout.');
  }

  window.location.assign(data.url);
}
