import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
  heroImage?: string;
  ogImage?: string;
  featured?: boolean;
  content: string;
  excerpt: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const readingStats = readingTime(matterResult.content);

      // Create excerpt from content (first 150 chars, clean)
      const excerpt = matterResult.content
        .replace(/^import.*$/gm, '') // Remove import statements
        .replace(/^export.*$/gm, '') // Remove export statements
        .replace(/<[^>]*>/g, '') // Remove HTML/JSX tags
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim()
        .substring(0, 150) + '...';

      return {
        slug,
        content: matterResult.content,
        excerpt,
        readingTime: readingStats.text,
        ...matterResult.data,
      } as BlogPost;
    });

  // Sort posts by date (most recent first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const readingStats = readingTime(matterResult.content);

    const excerpt = matterResult.content
      .replace(/^import.*$/gm, '')
      .replace(/^export.*$/gm, '')
      .replace(/<[^>]*>/g, '')
      .replace(/\n+/g, ' ')
      .trim()
      .substring(0, 150) + '...';

    return {
      slug,
      content: matterResult.content,
      excerpt,
      readingTime: readingStats.text,
      ...matterResult.data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.tags?.some(postTag => 
      postTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllPosts().filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.content.toLowerCase().includes(lowercaseQuery)
  );
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap(post => post.tags || []);
  return Array.from(new Set(tags)).sort();
}