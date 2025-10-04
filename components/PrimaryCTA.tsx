'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { trackCtaClick } from './GoogleAnalytics';

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
  const router = useRouter();
  const target = process.env.NEXT_PUBLIC_SIGNUP_URL || '/signup';

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    // Map from prop to tracking location
    const locationMap: Record<string, 'hero' | 'mid-cta' | 'pricing'> = {
      'home_hero': 'hero',
      'mid-cta': 'mid-cta',
      'pricing': 'pricing',
    };
    
    const location = locationMap[from] || 'hero';
    trackCtaClick(location, 'start_free');
    
    router.push(target);
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