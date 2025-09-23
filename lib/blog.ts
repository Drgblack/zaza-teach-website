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
};

export type Post = PostMeta & { html: string };

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith(".md") || f.endsWith(".mdx"))
    .map(f => f.replace(/\.mdx?$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map(slug => getPost(slug))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as PostMeta[];
}

export function getPost(slug: string): Post | null {
  const fpMd = path.join(CONTENT_DIR, `${slug}.md`);
  const fpMdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const fp = fs.existsSync(fpMd) ? fpMd : fs.existsSync(fpMdx) ? fpMdx : null;
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
  };

  const htmlStr = remark().use(html).processSync(content).toString();
  return { ...meta, html: htmlStr };
}