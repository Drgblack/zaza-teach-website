import { getAllPosts } from "@/lib/blog-locale";
import { canonical } from "@/lib/site";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Lehrer Produktivitätstipps & Klassenzimmer-Strategien | Zaza Teach",
  description: "Zeit sparen, Stress reduzieren und Vertrauen stärken mit Experten-Lehrstrategien. Ihr Unterrichtsplanungspartner für intelligenteres Klassenzimmer-Management.",
  keywords: "Lehrer Produktivitätstipps, Unterrichtsplanungspartner, Klassenzimmer Wohlbefinden Strategien, Lehrvertrauen, zeitsparende Strategien für Lehrer",
  alternates: { canonical: canonical("/de/blog") },
  openGraph: { url: canonical("/de/blog"), title: "Lehrer Produktivitätstipps & Klassenzimmer-Strategien | Zaza Teach" },
  twitter: { card: "summary_large_image" }
};

export default function BlogIndex() {
  const posts = getAllPosts('de');
  const tags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();

  return <BlogClient posts={posts} allTags={tags} />;
}