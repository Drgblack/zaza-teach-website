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
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
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
              <User size={16} />
              <span>{post.author}</span>
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
              <div className="w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center">
                <User size={32} className="text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-2">
                  {post.author}
                </h3>
                <p className="text-slate dark:text-gray-300 leading-relaxed">
                  Practical insights and strategies for teachers who want to work smarter, not harder. 
                  Helping educators reclaim their time and rediscover their passion for teaching.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}