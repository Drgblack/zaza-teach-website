interface QuoteBoxProps {
  author: string;
  role?: string;
  children: React.ReactNode;
}

export default function QuoteBox({ author, role, children }: QuoteBoxProps) {
  return (
    <figure className="my-8 rounded-2xl border border-slate/10 bg-paper p-6 shadow-[0_6px_24px_var(--tw-shadow-color)] shadow-shadow">
      <blockquote className="text-lg italic leading-relaxed text-ink">
        "{children}"
      </blockquote>
      <figcaption className="mt-3 text-sm text-slate">
        — {author}{role ? `, ${role}` : ""}
      </figcaption>
    </figure>
  );
}