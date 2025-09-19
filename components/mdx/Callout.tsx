export default function Callout({ 
  type = 'info', 
  title, 
  children 
}: {
  type?: 'info' | 'tip' | 'warning';
  title?: string; 
  children: React.ReactNode;
}) {
  const styles = {
    info: 'border-sky-300 bg-sky-50 dark:bg-sky-900/30',
    tip: 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/30',
    warning: 'border-amber-300 bg-amber-50 dark:bg-amber-900/30',
  }[type];
  
  return (
    <div className={`not-prose my-6 rounded-xl border p-4 ${styles}`}>
      {title && <p className="m-0 font-semibold">{title}</p>}
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}