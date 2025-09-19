export default function Quote({ 
  cite, 
  children 
}: { 
  cite?: string; 
  children: React.ReactNode 
}) {
  return (
    <blockquote className="not-prose my-8 rounded-xl border-l-4 border-brand/70 bg-slate-50 p-5 text-slate-800 dark:bg-slate-900/40 dark:text-slate-100">
      <p className="m-0 text-lg leading-relaxed">{children}</p>
      {cite && (
        <footer className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}