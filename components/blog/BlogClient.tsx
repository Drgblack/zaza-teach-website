"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, User, Tag, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { type BlogPost } from '@/lib/blog';

interface BlogClientProps {
  initialPosts: BlogPost[];
  allTags: string[];
}

export default function BlogClient({ initialPosts, allTags }: BlogClientProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    let filtered = initialPosts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags?.includes(selectedTag)
      );
    }

    setFilteredPosts(filtered);
  }, [initialPosts, searchQuery, selectedTag]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
          Teacher Insights & Resources
        </h1>
        <p className="text-xl text-slate dark:text-gray-300 max-w-3xl mx-auto">
          Practical strategies, time-saving tips, and thoughtful perspectives to help teachers thrive - not just survive.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate/20 rounded-xl bg-paper dark:bg-gray-800 text-ink dark:text-white placeholder-slate focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
            />
          </div>

          {/* Tag Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate" size={20} />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="pl-10 pr-8 py-3 border border-slate/20 rounded-xl bg-paper dark:bg-gray-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent appearance-none cursor-pointer"
            >
              <option value="">All topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedTag) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {searchQuery && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky/10 text-sky rounded-full text-sm">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="hover:text-sky/80"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTag && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-lavender/10 text-lavender rounded-full text-sm">
                <Tag size={12} />
                {selectedTag}
                <button
                  onClick={() => setSelectedTag('')}
                  className="hover:text-lavender/80"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ink dark:text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-ink dark:text-white mb-8">
            {featuredPosts.length > 0 ? 'More Articles' : 'All Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-slate/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={40} className="text-slate" />
          </div>
          <h3 className="text-2xl font-semibold text-ink dark:text-white mb-4">
            No posts found
          </h3>
          <p className="text-slate dark:text-gray-300 mb-6">
            Try adjusting your search or filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('');
            }}
            className="px-6 py-3 bg-lavender hover:bg-lavender/90 text-white rounded-lg transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-paper dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
        {post.heroImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-slate dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-ink dark:text-white mb-3 group-hover:text-lavender transition-colors">
            {post.title}
          </h3>
          <p className="text-slate dark:text-gray-300 mb-4 leading-relaxed">
            {post.description}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-lavender/10 text-lavender rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-paper dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] h-full">
        <div className="flex items-center gap-3 text-sm text-slate dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{format(new Date(post.date), 'MMM d')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readingTime}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-ink dark:text-white mb-3 group-hover:text-lavender transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate/10 text-slate rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}