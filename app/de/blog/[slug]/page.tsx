import { getAllSlugs, getPost } from "@/lib/blog-locale";
import { generateSEOMetadata } from "@/lib/seo";
import { BlogPostingJsonLd } from "@/components/SEOJsonLd";
import { siteUrl } from "@/lib/site";
import Link from "next/link";

const locale = 'de';

export async function generateStaticParams() {
  return getAllSlugs(locale).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, locale);
  if (!post) return {};
  
  return generateSEOMetadata({
    title: `${post.title} | Zaza Teach Blog`,
    description: post.description,
    keywords: post.tags,
    locale: 'de',
    path: `blog/${post.slug}`,
    type: 'article',
    image: post.image,
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    author: post.author,
    tags: post.tags,
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, locale);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Beitrag nicht gefunden</h1>
          <p className="text-gray-600 mb-6">Der gesuchte Blog-Beitrag existiert nicht.</p>
          <Link href={`/${locale}/blog`} className="text-purple-600 hover:text-purple-700 font-medium">
            ← Zurück zum Blog
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
        image={post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`}
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
              ← Zurück zum Blog
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
                Veröffentlicht {new Date(post.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.updated && post.updated !== post.date && (
                <span>
                  Aktualisiert {new Date(post.updated).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              <span>•</span>
              <span>{post.readTime ? `${post.readTime} Min Lesezeit` : "5 Min Lesezeit"}</span>
            </div>
            
            {post.author && (
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                <span className="font-medium">Geschrieben von {post.author}</span>
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
                Weitere Artikel →
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}