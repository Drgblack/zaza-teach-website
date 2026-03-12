'use client';

import { CURRENCY_META } from '@/lib/currency';
import { CurrencyCode, SUPPORTED_CURRENCIES } from '@/lib/pricing';
import { useCurrency } from '@/components/CurrencyProvider';

type CurrencySwitcherProps = {
  className?: string;
};

export default function CurrencySwitcher({
  className = '',
}: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={[
        'inline-flex items-center rounded-full border border-blue-100 bg-white/90 p-1 shadow-sm backdrop-blur',
        className,
      ].join(' ')}
      role="group"
      aria-label="Currency selector"
    >
      {SUPPORTED_CURRENCIES.map((code) => {
        const meta = CURRENCY_META[code as CurrencyCode];
        const isActive = currency === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setCurrency(code)}
            className={[
              'rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4',
              isActive
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100',
            ].join(' ')}
            aria-pressed={isActive}
          >
            <span aria-hidden="true">{meta.symbol}</span>{' '}
            <span>{meta.label}</span>
          </button>
        );
      })}
    </div>
  );
}

