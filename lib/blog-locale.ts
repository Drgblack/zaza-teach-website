import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  title: string; 
  description: string; 
  slug: string;
  date: string; 
  updated?: string; 
  image: string;
  tags: string[]; 
  readTime?: number;
  author?: string;
  locale?: string;
};

export type Post = PostMeta & { html: string };

const getContentDir = (locale: string) => path.join(process.cwd(), "content", "blog", locale);

export function getAllSlugs(locale: string = 'en'): string[] {
  const contentDir = getContentDir(locale);
  const fallbackDir = getContentDir('en'); // fallback to English
  
  let slugs: string[] = [];
  
  // Get slugs from locale-specific directory
  if (fs.existsSync(contentDir)) {
    slugs = fs.readdirSync(contentDir)
      .filter(f => f.endsWith(".md") || f.endsWith(".mdx"))
      .map(f => f.replace(/\.mdx?$/, ""));
  }
  
  // If no locale-specific content and not English, fallback to English
  if (slugs.length === 0 && locale !== 'en' && fs.existsSync(fallbackDir)) {
    slugs = fs.readdirSync(fallbackDir)
      .filter(f => f.endsWith(".md") || f.endsWith(".mdx"))
      .map(f => f.replace(/\.mdx?$/, ""));
  }
  
  return slugs;
}

export function getAllPosts(locale: string = 'en'): PostMeta[] {
  return getAllSlugs(locale)
    .map(slug => getPost(slug, locale))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as PostMeta[];
}

export function getPost(slug: string, locale: string = 'en'): Post | null {
  const contentDir = getContentDir(locale);
  const fallbackDir = getContentDir('en');
  
  // Try locale-specific file first
  let fp: string | null = null;
  const fpMd = path.join(contentDir, `${slug}.md`);
  const fpMdx = path.join(contentDir, `${slug}.mdx`);
  
  if (fs.existsSync(fpMd)) fp = fpMd;
  else if (fs.existsSync(fpMdx)) fp = fpMdx;
  
  // Fallback to English if locale version doesn't exist
  if (!fp && locale !== 'en') {
    const fallbackMd = path.join(fallbackDir, `${slug}.md`);
    const fallbackMdx = path.join(fallbackDir, `${slug}.mdx`);
    
    if (fs.existsSync(fallbackMd)) fp = fallbackMd;
    else if (fs.existsSync(fallbackMdx)) fp = fallbackMdx;
  }
  
  if (!fp) return null;

  const raw = fs.readFileSync(fp, "utf8").replace(/^\uFEFF/, "");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    title: data.title ?? slug,
    description: data.description ?? "",
    slug: data.slug ?? slug,
    date: data.date ?? new Date().toISOString(),
    updated: data.updated ?? data.date,
    image: data.image ?? "/images/blog/default.jpg",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: data.readTime ?? undefined,
    author: data.author ?? undefined,
    locale: locale,
  };

  const htmlStr = remark().use(html).processSync(content).toString();
  return { ...meta, html: htmlStr };
}

// Create locale-specific content directories if they don't exist
export function initializeLocaleDirectories() {
  const locales = ['en', 'de'];
  const baseContentDir = path.join(process.cwd(), "content", "blog");
  
  locales.forEach(locale => {
    const localeDir = path.join(baseContentDir, locale);
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true });
      console.log(`Created blog directory for locale: ${locale}`);
    }
  });
}