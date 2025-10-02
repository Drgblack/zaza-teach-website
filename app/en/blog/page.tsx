import { getAllPosts } from "@/lib/blog-locale";
import { canonical } from "@/lib/site";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Teacher Productivity Tips & Classroom Strategies | Zaza Teach",
  description: "Save time, reduce stress, and boost confidence with expert teaching strategies. Your lesson planning partner for smarter classroom management.",
  keywords: "teacher productivity tips, lesson planning partner, classroom wellbeing strategies, teaching confidence, time-saving strategies for teachers",
  alternates: { canonical: canonical("/blog") },
  openGraph: { url: canonical("/blog"), title: "Teacher Productivity Tips & Classroom Strategies | Zaza Teach" },
  twitter: { card: "summary_large_image" }
};

export default function BlogIndex() {
  const posts = getAllPosts('en');
  const tags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();

  return <BlogClient posts={posts} allTags={tags} />;
}