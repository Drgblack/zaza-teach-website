'use client';

import { MouseEvent } from 'react';
import { useCurrency } from '@/components/CurrencyProvider';
import { redirectToFreeSignup } from '@/lib/free-signup';
import { DEFAULT_INTERVAL } from '@/lib/pricing';
import { trackCtaClick } from './GoogleAnalytics';
import { useLocale } from './LocaleProvider';

type Props = {
  label?: string;
  ariaLabel?: string;
  from?: string; // e.g., "home_hero"
  className?: string;
};

export default function PrimaryCTA({
  label = 'Start Free Today',
  ariaLabel = 'Start your free Zaza Teach trial',
  from = 'home_hero',
  className = '',
}: Props) {
  const locale = useLocale();
  const { currency } = useCurrency();

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Map from prop to tracking location
    const locationMap: Record<string, 'hero' | 'mid-cta' | 'pricing'> = {
      'home_hero': 'hero',
      'mid-cta': 'mid-cta',
      'pricing': 'pricing',
    };
    
    const location = locationMap[from] || 'hero';
    trackCtaClick(location, 'start_free');

    try {
      redirectToFreeSignup({
        currency,
        interval: DEFAULT_INTERVAL,
        locale: locale === 'de' ? 'de' : 'en',
        source: from,
      });
    } catch (error) {
      console.error('Failed to start free signup flow:', {
        currency,
        error,
        interval: DEFAULT_INTERVAL,
        locale,
        source: from,
      });
      window.alert(
        locale === 'de'
          ? 'Der kostenlose Start konnte nicht geöffnet werden. Bitte versuchen Sie es erneut.'
          : 'We could not open the free signup flow. Please try again.',
      );
    }
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        'inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold',
        'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white',
        'shadow-lg shadow-fuchsia-400/30 hover:shadow-xl hover:shadow-fuchsia-400/40',
        'transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
        className,
      ].join(' ')}
      data-cta="start-free-today"
      data-source={from}
    >
      <span className="i-lucide-sparkles" aria-hidden="true" />
      {label}
      <span className="i-lucide-arrow-right" aria-hidden="true" />
    </button>
  );
}
