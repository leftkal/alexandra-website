export interface FAQ {
  question: string;
  answer: string;
}

export interface TextSection {
  type: 'text';
  heading: string;
  body: string;
}

export interface ImageSection {
  type: 'image';
  image: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export type ContentSection = TextSection | ImageSection;

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HeroImage {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LandingPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  keyword: string;
  heroImage?: HeroImage;
  sections: ContentSection[];
  faq: FAQ[];
  galleryImages: GalleryImage[];
  relatedPages: string[];
  schemaType: 'Photographer' | 'LocalBusiness';
  socialImage?: string;
  ctaText?: string;
}
