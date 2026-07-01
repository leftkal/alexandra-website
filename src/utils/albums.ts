import { getCollection } from 'astro:content';
import type { Album, AlbumPhoto } from '../types/albums';

export const getAlbumUrl = (slug: string) => `/albums/${slug}/`;

export const getAlbumPhotoImage = (photo: AlbumPhoto) => typeof photo === 'string' ? photo : photo.image;

export const getAlbumPhotoAlt = (album: Album, photo: AlbumPhoto, index: number) => {
  if (typeof photo !== 'string' && photo.alt) return photo.alt;

  return `${album.title} photograph ${index + 1}`;
};

export const getAlbumImagePath = (album: Album, photo: AlbumPhoto) => {
  const normalized = getAlbumPhotoImage(photo).replace(/^\/+/, '');
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
