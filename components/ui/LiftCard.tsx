'use client';

import { HTMLAttributes } from 'react';

export default function LiftCard({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        // base
        'group relative rounded-2xl border',
        'bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60',
        // elevation
        'shadow-[0_6px_20px_rgba(16,24,40,0.08)]',
        // hover/focus lift
        'transition-all duration-200 ease-out',
        'hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(16,24,40,0.12)]',
        'focus-within:-translate-y-0.5 focus-within:shadow-[0_12px_28px_rgba(16,24,40,0.12)]',
        // outline
        'focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-400/60',
        className,
      ].join(' ')}
    />
  );
}