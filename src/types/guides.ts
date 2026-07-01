export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface GalleryImage {
  src: string;
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
  sections: ContentSection[];
  faq: FAQ[];
  galleryImages: GalleryImage[];
  relatedPages: string[];
  schemaType: 'Photographer' | 'LocalBusiness';
  socialImage?: string;
  ctaText?: string;
}
