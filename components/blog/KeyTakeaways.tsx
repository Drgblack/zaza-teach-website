interface KeyTakeawaysProps {
  points: string[];
}

export default function KeyTakeaways({ points = [] }: KeyTakeawaysProps) {
  return (
    <div className="my-8 rounded-2xl border border-lavender/30 bg-lavender/5 p-5">
      <div className="mb-2 text-sm font-semibold text-slate">
        🎯 Key takeaways
      </div>
      <ol className="list-decimal pl-5 space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-ink dark:text-white leading-relaxed">
            {point}
          </li>
        ))}
      </ol>
    </div>
  );
}