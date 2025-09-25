import { getAllSlugs, getPost } from "@/lib/blog";
import { canonical } from "@/lib/site";
import { BlogPostingJsonLd } from "@/components/SEOJsonLd";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Zaza Teach Blog`,
    description: post.description,
    alternates: { canonical: canonical(`/blog/${post.slug}`) },
    openGraph: {
      url: canonical(`/blog/${post.slug}`),
      title: post.title,
      description: post.description,
      images: [canonical(post.image)],
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: "Education",
      tags: post.tags,
    },
    twitter: { 
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [canonical(post.image)]
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const locale = 'de'; // Since this is in /de folder
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href={`/${locale}/blog`} className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogPostingJsonLd
        slug={post.slug}
        title={post.title}
        description={post.description}
        image={canonical(post.image)}
        datePublished={post.date}
        dateModified={post.updated ?? post.date}
        tags={post.tags}
        author={post.author}
      />
      
      <article className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href={`/${locale}/blog`} className="text-purple-600 hover:text-purple-700 font-medium">
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
            />
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>
                Published {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.updated && post.updated !== post.date && (
                <span>
                  Updated {new Date(post.updated).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              <span>•</span>
              <span>{post.readTime ? `${post.readTime} min read` : "5 min read"}</span>
            </div>
            
            {post.author && (
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                <span className="font-medium">Written by {post.author}</span>
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                href={`/${locale}/blog`}
                className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
              >
                More Articles →
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}