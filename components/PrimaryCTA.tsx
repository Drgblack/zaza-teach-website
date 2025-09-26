'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

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
    // lightweight analytics hook; safe if window.gtag undefined
    // @ts-ignore
    window?.gtag?.('event', 'cta_click', { from, target, product: 'teach' });
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