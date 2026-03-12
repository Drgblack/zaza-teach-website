export const SUPPORTED_CURRENCIES = ['EUR', 'USD', 'GBP'] as const;
export type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number];

export const SUPPORTED_INTERVALS = ['monthly', 'yearly'] as const;
export type BillingInterval = (typeof SUPPORTED_INTERVALS)[number];

export const CHECKOUT_PLANS = ['free', 'draft', 'teach', 'bundle'] as const;
export type CheckoutPlan = (typeof CHECKOUT_PLANS)[number];
export type PaidPlan = Exclude<CheckoutPlan, 'free'>;

export const DEFAULT_CURRENCY: CurrencyCode = 'EUR';
export const DEFAULT_INTERVAL: BillingInterval = 'monthly';

type StripePriceConfig = {
  amount: number;
  stripePriceId: string;
};

type PlanPricing = Record<
  PaidPlan,
  Record<BillingInterval, Record<CurrencyCode, StripePriceConfig>>
>;

export const PRICING: PlanPricing = {
  draft: {
    monthly: {
      EUR: { amount: 14.99, stripePriceId: 'price_1TA6ouHXkbT25qrKoapecaPz' },
      USD: { amount: 16.0, stripePriceId: 'price_1TA6ouHXkbT25qrKoapecaPz' },
      GBP: { amount: 13.0, stripePriceId: 'price_1TA6ouHXkbT25qrKoapecaPz' },
    },
    yearly: {
      EUR: { amount: 149.0, stripePriceId: 'price_1TA6ouHXkbT25qrKUW5KmHXr' },
      USD: { amount: 160.0, stripePriceId: 'price_1TA6ouHXkbT25qrKUW5KmHXr' },
      GBP: { amount: 130.0, stripePriceId: 'price_1TA6ouHXkbT25qrKUW5KmHXr' },
    },
  },
  teach: {
    monthly: {
      EUR: { amount: 19.99, stripePriceId: 'price_1TA6gIHXkbT25qrK5l8sKOX3' },
      USD: { amount: 22.0, stripePriceId: 'price_1TA6gIHXkbT25qrK5l8sKOX3' },
      GBP: { amount: 17.0, stripePriceId: 'price_1TA6gIHXkbT25qrK5l8sKOX3' },
    },
    yearly: {
      EUR: { amount: 199.0, stripePriceId: 'price_1TA6gIHXkbT25qrKckEqdVd3' },
      USD: { amount: 220.0, stripePriceId: 'price_1TA6gIHXkbT25qrKckEqdVd3' },
      GBP: { amount: 170.0, stripePriceId: 'price_1TA6gIHXkbT25qrKckEqdVd3' },
    },
  },
  bundle: {
    monthly: {
      EUR: { amount: 24.99, stripePriceId: 'price_1TA6mFHXkbT25qrK40mdltez' },
      USD: { amount: 27.0, stripePriceId: 'price_1TA6mFHXkbT25qrK40mdltez' },
      GBP: { amount: 22.0, stripePriceId: 'price_1TA6mFHXkbT25qrK40mdltez' },
    },
    yearly: {
      EUR: { amount: 249.0, stripePriceId: 'price_1TA6mFHXkbT25qrKzZq3qTtE' },
      USD: { amount: 270.0, stripePriceId: 'price_1TA6mFHXkbT25qrKzZq3qTtE' },
      GBP: { amount: 220.0, stripePriceId: 'price_1TA6mFHXkbT25qrKzZq3qTtE' },
    },
  },
};

export const FREE_PLAN_PRICE = 0;

export function isSupportedCurrency(value: string): value is CurrencyCode {
  return SUPPORTED_CURRENCIES.includes(value as CurrencyCode);
}

export function isSupportedInterval(value: string): value is BillingInterval {
  return SUPPORTED_INTERVALS.includes(value as BillingInterval);
}

export function isCheckoutPlan(value: string): value is CheckoutPlan {
  return CHECKOUT_PLANS.includes(value as CheckoutPlan);
}
