import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { format } from 'date-fns';

// Import MDX components
import Callout from '@/components/blog/Callout';
import QuoteBox from '@/components/blog/QuoteBox';
import Checklist from '@/components/blog/Checklist';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import Divider from '@/components/blog/Divider';

const components = {
  Callout,
  QuoteBox,
  Checklist,
  KeyTakeaways,
  Divider,
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: post.authorData ? [{ name: post.authorData.name, url: post.authorData.links.linkedin }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
      authors: post.authorData ? [post.authorData.name] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
      creator: post.authorData?.links?.linkedin ? `@${post.authorData.name}` : undefined,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 bg-cloud dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sky hover:text-sky/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Hero Image */}
        {post.heroImage && (
          <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate dark:text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              {post.authorData?.avatar ? (
                <Image
                  src={post.authorData.avatar}
                  alt={post.authorData.name}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
              ) : (
                <User size={16} />
              )}
              <span>{post.authorData?.name || post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-lavender/10 text-lavender rounded-full text-sm"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-xl text-slate dark:text-gray-300 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                       prose-headings:text-ink dark:prose-headings:text-white
                       prose-p:text-ink dark:prose-p:text-gray-300 
                       prose-p:leading-relaxed prose-p:text-lg
                       prose-strong:text-ink dark:prose-strong:text-white
                       prose-a:text-sky prose-a:no-underline hover:prose-a:underline
                       prose-ul:text-ink dark:prose-ul:text-gray-300
                       prose-ol:text-ink dark:prose-ol:text-gray-300
                       prose-li:text-ink dark:prose-li:text-gray-300
                       prose-blockquote:border-lavender prose-blockquote:text-slate
                       prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* Author Bio */}
        <footer className="mt-16 pt-8 border-t border-slate/20">
          <div className="bg-paper dark:bg-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center overflow-hidden">
                {post.authorData?.avatar ? (
                  <Image
                    src={post.authorData.avatar}
                    alt={post.authorData.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <User size={32} className="text-lavender" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-2">
                  {post.authorData?.name || post.author}
                </h3>
                <p className="text-slate dark:text-gray-300 leading-relaxed mb-3">
                  {post.authorData?.bio || "Practical insights and strategies for teachers who want to work smarter, not harder. Helping educators reclaim their time and rediscover their passion for teaching."}
                </p>
                {post.authorData?.links?.linkedin && (
                  <a 
                    href={post.authorData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky hover:text-sky/80 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}