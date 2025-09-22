import { PropsWithChildren } from "react";

interface PullQuoteProps extends PropsWithChildren {
  cite?: string; // e.g., "Year 4 teacher"
}

export default function PullQuote({ children, cite }: PullQuoteProps) {
  return (
    <figure className="my-8 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-md dark:border-slate-700/50 dark:bg-slate-900">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-violet-500 to-emerald-400"
        />
        <blockquote className="text-lg italic leading-relaxed text-slate-800 dark:text-slate-100">
          "{children}"
        </blockquote>
      </div>
      {cite ? (
        <figcaption className="mt-3 pl-5 text-sm text-slate-500 dark:text-slate-400">
          {cite}
        </figcaption>
      ) : null}
    </figure>
  );
}