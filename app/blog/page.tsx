import { getAllPosts } from "@/lib/blog";
import { canonical } from "@/lib/site";
import BlogSearch from "./BlogSearch";

export const metadata = {
  title: "Teaching insights and tips | Zaza Teach",
  description: "Expert advice, strategies, and insights for teachers using AI and modern educational technology.",
  alternates: { canonical: canonical("/blog") },
  openGraph: { url: canonical("/blog"), title: "Teaching insights and tips | Zaza Teach" },
  twitter: { card: "summary_large_image" }
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teaching insights and tips
          </h1>
          <p className="text-xl text-gray-600">
            Expert advice, strategies, and insights for modern educators
          </p>
        </div>

        <BlogSearch posts={posts} allTags={tags} />
      </div>
    </main>
  );
}