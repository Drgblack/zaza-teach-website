import { getAllPosts } from "@/lib/blog-locale";
import { canonical } from "@/lib/site";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Teaching insights and tips | Zaza Teach",
  description: "Expert advice, strategies, and insights for teachers using AI and modern educational technology.",
  alternates: { canonical: canonical("/blog") },
  openGraph: { url: canonical("/blog"), title: "Teaching insights and tips | Zaza Teach" },
  twitter: { card: "summary_large_image" }
};

export default function BlogIndex() {
  const posts = getAllPosts('en');
  const tags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();

  return <BlogClient posts={posts} allTags={tags} />;
}