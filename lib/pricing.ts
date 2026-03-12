export const SUPPORTED_CURRENCIES = ['EUR', 'USD', 'GBP'] as const;
export type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number];

export const CHECKOUT_PLANS = ['free', 'pro', 'bundle'] as const;
export type CheckoutPlan = (typeof CHECKOUT_PLANS)[number];
export type PaidPlan = Exclude<CheckoutPlan, 'free'>;

export const DEFAULT_CURRENCY: CurrencyCode = 'EUR';

type PaidPlanPrice = {
  price: number;
  stripePriceId: string;
};

export const PRICING: Record<PaidPlan, Record<CurrencyCode, PaidPlanPrice>> = {
  pro: {
    EUR: {
      price: 19.99,
      stripePriceId: 'price_pro_eur',
    },
    USD: {
      price: 19.99,
      stripePriceId: 'price_pro_usd',
    },
    GBP: {
      price: 17.99,
      stripePriceId: 'price_pro_gbp',
    },
  },
  bundle: {
    EUR: {
      price: 24.99,
      stripePriceId: 'price_bundle_eur',
    },
    USD: {
      price: 24.99,
      stripePriceId: 'price_bundle_usd',
    },
    GBP: {
      price: 21.99,
      stripePriceId: 'price_bundle_gbp',
    },
  },
};

export const FREE_PLAN_PRICE = 0;

export function isSupportedCurrency(value: string): value is CurrencyCode {
  return SUPPORTED_CURRENCIES.includes(value as CurrencyCode);
}

export function isCheckoutPlan(value: string): value is CheckoutPlan {
  return CHECKOUT_PLANS.includes(value as CheckoutPlan);
}

