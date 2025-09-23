import React from "react";

export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">{title}</h1>
      <div className="prose prose-invert max-w-none">{children}</div>
    </main>
  );
}