import { getCollection } from 'astro:content';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: Date;
  image?: string;
  category?: string;
  tags?: string[];
  author: string;
  readingTime: string;
  draft?: boolean;
  canonical?: string;
}

export const blogCategories = [
  'Athens Photography',
  'Portrait Tips',
  'Behind the Lens',
  'Location Guides',
  'Client Stories',
  'Photography Gear',
] as const;

function toDate(value: unknown): Date {
  if (value instanceof Date) return value;
  if (typeof value === 'string' || typeof value === 'number') return new Date(value);
  return new Date();
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const collection = await getCollection('blog');
  return collection
    .map((entry) => {
      const d = entry.data;
      return {
        slug: entry.id,
        title: d.title,
        description: d.description,
        date: toDate(d.date),
        image: d.image,
        category: d.category,
        tags: d.tags,
        author: d.author,
        readingTime: d.readingTime,
        draft: d.draft,
        canonical: d.canonical,
      };
    })
    .filter((post) => {
      if (import.meta.env.PROD && post.draft) return false;
      return true;
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
