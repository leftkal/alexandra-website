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
  heroImage: z.object({
    image: z.string(),
    alt: z.string(),
    width: z.number().optional(),
    height: z.number().optional(),
  }).optional(),
  sections: z.array(z.discriminatedUnion('type', [
    z.object({
      type: z.literal('text'),
      heading: z.string(),
      body: z.string(),
    }),
    z.object({
      type: z.literal('image'),
      image: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    }),
  ])).default([]),
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

const albums = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/albums' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    photos: z.array(z.union([
      z.string(),
      z.object({
        image: z.string(),
        alt: z.string().optional(),
      }),
    ])).default([]),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const homepage = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content/homepage' }),
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    previewImage: z.string(),
    previewImageAlt: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      text: z.string(),
      buttonText: z.string(),
      imageLabel: z.string(),
      projectLabel: z.string(),
      caption: z.string(),
      frames: z.array(z.object({
        image: z.string(),
        number: z.string(),
        alt: z.string(),
      })).default([]),
    }),
    introText: z.string(),
    albumsEyebrow: z.string(),
    albumsTitle: z.string(),
    about: z.object({
      image: z.string(),
      imageAlt: z.string(),
      eyebrow: z.string(),
      title: z.string(),
      paragraphs: z.array(z.string()).default([]),
      note: z.string(),
    }),
    guidesEyebrow: z.string(),
    guidesTitle: z.string(),
    guidesButtonText: z.string(),
    contact: z.object({
      eyebrow: z.string(),
      title: z.string(),
      text: z.string(),
      buttonText: z.string(),
      buttonUrl: z.string().url(),
    }),
  }),
});

export const collections = { blog, guides, albums, homepage };
