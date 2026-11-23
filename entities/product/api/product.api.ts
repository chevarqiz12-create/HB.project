import { api } from "@/shared/api/client";
import type { Paginated } from "@/shared/api/types";
import type { Product } from "../model/types";

export const getProducts = (params?: {
  page?: number;
  category?: number | null;
  search?: string;
}) => {
  const qs = new URLSearchParams();
  if (params?.page && params.page > 1) qs.set("page", String(params.page));
  if (params?.category) qs.set("category", String(params.category));
  if (params?.search) qs.set("search", params.search);
  const query = qs.size ? `?${qs}` : "";

  return api<Paginated<Product>>(`/products/${query}`, { next: { revalidate: 60 } });
};

export const getProduct = (id: number | string) =>
  api<Product>(`/products/${id}/`, { next: { revalidate: 60 } });