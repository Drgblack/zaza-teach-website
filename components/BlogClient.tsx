"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from './LocaleProvider';
import type { PostMeta } from "@/lib/blog-locale";

type BlogClientProps = {
  posts: PostMeta[];
  allTags: string[];
};

type CategoryConfig = {
  label: string;
  tags: string[];
  defaultOpen?: boolean;
};

const getCategoriesConfig = (t: any): Record<string, CategoryConfig> => ({
  "teaching-practice": {
    label: t('blog.categories.teachingPractice'),
    tags: ["Classroom Management", "Classroom Practice", "Student Engagement", "Assessment", "Feedback", "Differentiation", "Components", "Teaching Tips"]
  },
  "curriculum-planning": {
    label: t('blog.categories.curriculumPlanning'),
    tags: ["Lesson Planning", "Grading", "Curriculum Standards", "Educational Innovation"]
  },
  "ai-innovation": {
    label: t('blog.categories.aiInnovation'),
    tags: ["AI in Education", "AI Teaching Assistants", "Educational Technology", "Digital Teacher Assistants", "Future Classroom 2035", "EdTech Trends", "Robots in Classroom"]
  },
  "classroom-culture": {
    label: t('blog.categories.classroomCulture'),
    tags: ["Classroom Culture", "Positive Environment", "Collaboration", "Classroom Strategies", "Creating Joy"]
  },
  "teacher-wellbeing": {
    label: t('blog.categories.teacherWellbeing'),
    tags: ["Stress Management", "Teacher Wellbeing", "Work-Life Balance", "Self Care", "Teacher Efficiency"]
  },
  "professional-growth": {
    label: t('blog.categories.professionalGrowth'),
    tags: ["Productivity", "Teaching Innovation", "Future of Education"]
  }
});

export default function BlogClient({ posts, allTags }: BlogClientProps) {
  const t = useTranslations();
  const locale = useLocale();
  const CATEGORIES = getCategoriesConfig(t);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(Object.keys(CATEGORIES).filter(key => CATEGORIES[key].defaultOpen))
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (categoryKey: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(categoryKey)) {
      newOpenCategories.delete(categoryKey);
    } else {
      newOpenCategories.add(categoryKey);
    }
    setOpenCategories(newOpenCategories);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenCategories(new Set());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenCategories(new Set());
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Get available tags for each category (only tags that exist in posts)
  const availableTagsByCategory = useMemo(() => {
    const result: Record<string, string[]> = {};
    Object.entries(CATEGORIES).forEach(([key, config]) => {
      result[key] = config.tags.filter(tag => allTags.includes(tag));
    });
    return result;
  }, [allTags, CATEGORIES]);

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

  // Format date according to locale
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === 'de') {
      return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long", 
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('blog.searchPlaceholder')}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Cross-Product CTA Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-700 font-medium text-lg">
                {t('blog.crossSell.text')}
              </p>
            </div>
            <a 
              href="https://zazadraft.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              {t('blog.crossSell.cta')} →
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8" ref={containerRef}>
          {/* All Posts Button */}
          <div className="mb-6">
            <button
              onClick={() => setActiveTag(null)}
              aria-pressed={!activeTag}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                !activeTag
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              {t('blog.allPosts')}
            </button>
          </div>

          {/* Category Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {Object.entries(CATEGORIES).map(([categoryKey, config]) => {
              const availableTags = availableTagsByCategory[categoryKey] || [];
              const isOpen = openCategories.has(categoryKey);
              
              if (availableTags.length === 0) return null;

              return (
                <div key={categoryKey} className="relative">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(categoryKey)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {config.label}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Content */}
                  {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                      <div className="p-2">
                        {availableTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setActiveTag(tag);
                              // Close dropdown on mobile after selection
                              if (typeof window !== 'undefined' && window.innerWidth < 768) {
                                setOpenCategories(new Set());
                              }
                            }}
                            aria-pressed={activeTag === tag}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 ${
                              activeTag === tag
                                ? "bg-purple-600 text-white"
                                : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Filter Display */}
          {activeTag && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-600">{t('blog.activeFilter')}</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {activeTag}
                <button
                  onClick={() => setActiveTag(null)}
                  className="ml-1 hover:text-purple-600"
                  aria-label={t('blog.removeFilter')}
                >
                  ×
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/${locale}/blog/${post.slug}`} className="block">
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
                        {post.readTime ? `${post.readTime} ${t('blog.minRead')}` : `5 ${t('blog.minRead')}`}
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
                        {t('blog.writtenBy')} {post.author}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        {t('blog.readMore')}
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
              {t('blog.noResults')}
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveTag(null);
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {t('blog.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}