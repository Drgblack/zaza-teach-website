import { getAllPosts, getAllTags } from '@/lib/blog';
import BlogClient from '@/components/blog/BlogClient';

export const metadata = {
  title: "Teacher Insights & Resources - Zaza Teach",
  description: "Practical strategies, time-saving tips, and thoughtful perspectives to help teachers thrive - not just survive.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen pt-24 bg-cloud dark:bg-gray-900">
      <BlogClient initialPosts={posts} allTags={tags} />
    </div>
  );
}