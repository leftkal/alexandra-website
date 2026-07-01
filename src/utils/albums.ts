import { getCollection } from 'astro:content';
import type { Album } from '../types/albums';

export const getAlbumUrl = (slug: string) => `/albums/${slug}/`;

export const getAlbumImagePath = (album: Album, photo: string) => {
  const normalized = photo.replace(/^\/+/, '');
  if (normalized.startsWith('images/')) return normalized;

  return `images/${album.slug}/${normalized}`;
};

export const getAlbums = async (): Promise<Album[]> => {
  const entries = await getCollection('albums');

  return entries
    .map(({ data }, index) => ({ ...data, order: data.order ?? index }))
    .filter((album) => import.meta.env.DEV || !album.draft)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};
