import clsx from "clsx";
import { PropsWithChildren } from "react";

type Tone = "mint" | "lavender" | "peach";

interface CalloutProps extends PropsWithChildren {
  title?: string;
  tone?: Tone;
  className?: string;
}

export default function Callout({
  title,
  tone = "mint",
  className,
  children,
}: CalloutProps) {
  const toneStyles: Record<Tone, string> = {
    mint: "border-emerald-400/50 bg-emerald-50 dark:bg-emerald-400/10",
    lavender: "border-violet-400/50 bg-violet-50 dark:bg-violet-400/10",
    peach: "border-amber-400/50 bg-amber-50 dark:bg-amber-400/10",
  };

  return (
    <div
      className={clsx(
        "my-6 rounded-xl border p-4 sm:p-5 shadow-sm",
        toneStyles[tone],
        "text-slate-800 dark:text-slate-200",
        className
      )}
      role="note"
    >
      {title ? (
        <div className="mb-1 text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300">
          {title}
        </div>
      ) : null}
      <div className="prose prose-slate max-w-none dark:prose-invert">{children}</div>
    </div>
  );
}