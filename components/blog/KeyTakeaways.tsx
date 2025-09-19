export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside className="not-prose my-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
        Key takeaways
      </div>
      <ul className="space-y-2 list-disc pl-5 marker:text-brand">
        {items.map((item, i) => (
          <li key={i} className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}