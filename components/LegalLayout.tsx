import * as React from "react";

export default function LegalLayout({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">{title}</h1>
      <div className="prose prose-invert">{children}</div>
    </main>
  );
}