
import { api } from "@/shared/api/client";
import type { Paginated } from "@/shared/api/types";
import type { GalleryItem } from "../model/types";

export const getGalleryItems = (params?: { page?: number }) => {
  const query = params?.page ? `?page=${params.page}` : "";
  return api<Paginated<GalleryItem>>(`/gallery-items/${query}`, { next: { revalidate: 60 } });
};

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  const all: GalleryItem[] = [];
  for (let page = 1; page <= 50; page++) {
    const data = await getGalleryItems({ page });
    all.push(...data.results);
    if (!data.next) break;
  }
  return all;
}

export const getGalleryItem = (id: number | string) =>
  api<GalleryItem>(`/gallery-items/${id}/`, { next: { revalidate: 60 } });