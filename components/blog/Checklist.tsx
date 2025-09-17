interface ChecklistProps {
  items: string[];
}

export default function Checklist({ items = [] }: ChecklistProps) {
  return (
    <ul className="my-6 grid gap-3">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3 rounded-xl bg-cloud p-3 dark:bg-white/5">
          <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint text-white text-xs">
            ✓
          </span>
          <span className="text-ink dark:text-white leading-relaxed">{text}</span>
        </li>
      ))}
    </ul>
  );
}