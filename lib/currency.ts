import { CurrencyCode, DEFAULT_CURRENCY } from '@/lib/pricing';

export const CURRENCY_META: Record<
  CurrencyCode,
  {
    label: string;
    symbol: string;
    locale: string;
  }
> = {
  EUR: {
    label: 'EUR',
    symbol: '€',
    locale: 'en-IE',
  },
  USD: {
    label: 'USD',
    symbol: '$',
    locale: 'en-US',
  },
  GBP: {
    label: 'GBP',
    symbol: '£',
    locale: 'en-GB',
  },
};

function getFractionDigits(amount: number) {
  return Number.isInteger(amount) ? 0 : 2;
}

export function formatPrice(
  amount: number,
  currency: CurrencyCode,
  locale = CURRENCY_META[currency].locale,
) {
  const fractionDigits = getFractionDigits(amount);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount);
}

function getRegionFromLocale(locale: string) {
  try {
    return new Intl.Locale(locale).region ?? null;
  } catch {
    const match = locale.match(/[-_]([A-Za-z]{2})/);
    return match?.[1]?.toUpperCase() ?? null;
  }
}

export function detectCurrencyFromBrowser(
  locales?: readonly string[] | string | null,
): CurrencyCode {
  const localeList = Array.isArray(locales)
    ? locales
    : locales
      ? [locales]
      : [];

  for (const locale of localeList) {
    const region = getRegionFromLocale(locale);

    if (region === 'US') {
      return 'USD';
    }

    if (region === 'GB') {
      return 'GBP';
    }
  }

  return DEFAULT_CURRENCY;
}

