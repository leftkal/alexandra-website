import { getCollection } from 'astro:content';
import type { LandingPage } from '../types/guides';

const guideOrder = [
  'photographer-athens',
  'portrait-photographer-athens',
  'personal-branding-photographer-athens',
  'editorial-photographer-athens',
  'photoshoot-athens',
  'acropolis-photoshoot',
  'plaka-photoshoot',
  'photographer-athens-prices',
];

const guideOrderIndex = new Map(guideOrder.map((slug, index) => [slug, index]));

export async function getGuides(): Promise<LandingPage[]> {
  const guides = await getCollection('guides', ({ data }) => {
    return import.meta.env.DEV || data.draft !== true;
  });

  return guides
    .sort((a, b) => {
      const aIndex = guideOrderIndex.get(a.data.slug) ?? Number.MAX_SAFE_INTEGER;
      const bIndex = guideOrderIndex.get(b.data.slug) ?? Number.MAX_SAFE_INTEGER;

      return aIndex - bIndex;
    })
    .map(({ data }) => ({
      slug: data.slug,
      title: data.title,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      h1: data.h1,
      introduction: data.introduction,
      keyword: data.keyword,
      heroImage: data.heroImage,
      sections: data.sections,
      faq: data.faq,
      galleryImages: data.galleryImages,
      relatedPages: data.relatedPages,
      schemaType: data.schemaType,
      socialImage: data.socialImage,
      ctaText: data.ctaText,
    }));
}
