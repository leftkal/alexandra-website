export interface Album {
  title: string;
  slug: string;
  description: string;
  photos: string[];
  order?: number;
  draft?: boolean;
}
