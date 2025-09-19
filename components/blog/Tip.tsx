export default function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-violet-200 bg-violet-50/60 p-4 text-slate-900 dark:border-violet-800 dark:bg-violet-950/40 dark:text-slate-100">
      <div className="text-sm font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
        Tip
      </div>
      <div className="mt-1 [&>p]:m-0">{children}</div>
    </div>
  );
}