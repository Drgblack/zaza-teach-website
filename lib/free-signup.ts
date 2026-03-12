import { BillingInterval, CurrencyCode } from '@/lib/pricing';

type FreeSignupArgs = {
  currency: CurrencyCode;
  interval: BillingInterval;
  locale: 'en' | 'de';
  source?: string;
};

export function buildFreeSignupUrl({
  currency,
  interval,
  locale,
  source,
}: FreeSignupArgs) {
  const signupUrl = process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://app.zazateach.com/signup';
  const url = new URL(signupUrl);

  url.searchParams.set('plan', 'free');
  url.searchParams.set('interval', interval);
  url.searchParams.set('currency', currency);
  url.searchParams.set('locale', locale);

  if (source) {
    url.searchParams.set('source', source);
  }

  return url.toString();
}

export function redirectToFreeSignup(args: FreeSignupArgs) {
  const url = buildFreeSignupUrl(args);

  console.info('Redirecting to free signup flow.', {
    ...args,
    destination: url,
  });

  window.location.assign(url);
}
