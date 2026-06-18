export const SITE_URL = 'https://alexandra-maria-deli.gr';

export function getSiteUrl(): string {
  return SITE_URL;
}

export function getPageUrl(slug: string): string {
  return `/${slug}/`;
}

export function getAbsolutePageUrl(slug: string): string {
  return `${SITE_URL}/${slug}/`;
}

export function getCanonicalUrl(slug?: string): string {
  if (!slug) return `${SITE_URL}/`;
  return `${SITE_URL}/${slug}/`;
}

export function getImageUrl(path: string): string {
  return `${SITE_URL}/${path.replace(/^\//, '')}`;
}
