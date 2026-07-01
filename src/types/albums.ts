export type AlbumPhoto = string | {
  image: string;
  alt?: string;
};

export interface Album {
  title: string;
  slug: string;
  description: string;
  photos: AlbumPhoto[];
  order?: number;
  draft?: boolean;
}
