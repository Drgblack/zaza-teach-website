interface CalloutProps {
  type?: "tip" | "note" | "warn" | "well";
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = "tip", title, children }: CalloutProps) {
  const styles = {
    tip: "border-mint/50 bg-mint/5",
    note: "border-sky/40 bg-sky/5",
    warn: "border-peach/50 bg-peach/5",
    well: "border-lavender/40 bg-lavender/5",
  }[type] || "border-sky/30 bg-sky/5";
  
  const icon = { 
    tip: "💡", 
    note: "📝", 
    warn: "⚠️", 
    well: "🫶" 
  }[type] || "💡";
  
  return (
    <div className={`my-6 rounded-xl border p-4 ${styles}`}>
      {title && (
        <div className="mb-1 text-sm font-semibold text-slate">
          {icon} {title}
        </div>
      )}
      <div className="prose prose-slate dark:prose-invert prose-p:my-2 prose-p:leading-relaxed">
        {children}
      </div>
    </div>
  );
}