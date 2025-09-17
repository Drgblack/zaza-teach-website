import fs from 'fs';
import path from 'path';

export interface Author {
  slug: string;
  name: string;
  bio: string;
  avatar: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const authorsDirectory = path.join(process.cwd(), 'content/authors');

export function getAuthorBySlug(slug: string): Author | null {
  try {
    const fullPath = path.join(authorsDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents) as Author;
  } catch (error) {
    // Fallback for unknown authors
    return {
      slug: slug,
      name: 'Zaza Teach',
      bio: 'Helping teachers thrive with practical AI tools and strategies.',
      avatar: '/placeholder-user.jpg',
      links: {}
    };
  }
}

export function getAllAuthors(): Author[] {
  if (!fs.existsSync(authorsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(authorsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map((fileName) => {
      const slug = fileName.replace(/\.json$/, '');
      return getAuthorBySlug(slug);
    })
    .filter((author): author is Author => author !== null);
}