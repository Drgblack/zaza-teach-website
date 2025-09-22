"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

type BlogSearchProps = {
  posts: PostMeta[];
  allTags: string[];
};

export default function BlogSearch({ posts, allTags }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    const searchText = query.toLowerCase();
    return posts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchText) ||
        post.description.toLowerCase().includes(searchText);
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [query, activeTag, posts]);

  return (
    <>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts by title or description..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Tag Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeTag
              ? "bg-purple-600 text-white"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-purple-50 hover:text-purple-600"
          }`}
        >
          All Posts
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-purple-50 hover:text-purple-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {post.readTime ? `${post.readTime} min read` : "5 min read"}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {post.author && (
                    <p className="text-sm text-gray-500 mb-4">
                      Written by {post.author}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            No posts match your current search and filters.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveTag(null);
            }}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </>
  );
}