export const metadata = {
  robots: { index: false, follow: true },
};

export default function ScaffoldPage({
  title = "Coming soon",
  description = "This page is being prepared. Please check back shortly.",
}: { title?: string; description?: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-4 text-base text-white/80">{description}</p>
    </main>
  );
}