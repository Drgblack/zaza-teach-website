"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; text: string; level: number };

export default function TOC() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("article h2, article h3")
    ) as HTMLHeadingElement[];

    const tocItems = headings.map((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent
          ?.toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
          .slice(0, 60) ?? "";
      }
      
      return {
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      };
    });

    setItems(tocItems);
  }, []);

  if (!items.length) return null;

  return (
    <aside className="not-prose sticky top-24 hidden lg:block lg:w-64 lg:shrink-0">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          On this page
        </div>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${item.id}`}
                className="block text-slate-700 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors leading-relaxed"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}