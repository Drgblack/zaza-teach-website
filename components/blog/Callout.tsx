type Variant = "info" | "success" | "warning";

const STYLES: Record<Variant, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-100",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-100",
  warning: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100"
};

export default function Callout({
  title,
  children,
  variant = "info"
}: {
  title?: string;
  variant?: Variant;
  children: React.ReactNode;
}) {
  return (
    <div className={`not-prose my-6 rounded-xl border px-4 py-3 ${STYLES[variant]}`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="[&>p]:m-0">{children}</div>
    </div>
  );
}