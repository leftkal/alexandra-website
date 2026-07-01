import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    readingTime: z.string(),
    draft: z.boolean().optional(),
    canonical: z.string().optional(),
  }),
});

const guideSchema = z.object({
  slug: z.string(),
  title: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  h1: z.string(),
  introduction: z.string(),
  keyword: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    body: z.string(),
  })).default([]),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).default([]),
  galleryImages: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number().optional(),
    height: z.number().optional(),
  })).default([]),
  relatedPages: z.array(z.string()).default([]),
  schemaType: z.enum(['Photographer', 'LocalBusiness']).default('Photographer'),
  socialImage: z.string().optional(),
  ctaText: z.string().optional(),
  draft: z.boolean().optional(),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: guideSchema,
});

export const collections = { blog, guides };
