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

export function normalizePublicImagePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;

  const normalized = path.replace(/^\/+/, '');
  if (normalized.startsWith('images/')) return `/${normalized}`;

  return `/${normalized}`;
}

export function getImageUrl(path: string): string {
  return normalizePublicImagePath(path);
}

export function getAbsoluteImageUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;

  return `${SITE_URL}${normalizePublicImagePath(path)}`;
}
