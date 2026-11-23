
import { api } from "@/shared/api/client";
import type { Paginated } from "@/shared/api/types";
import type { Category } from "@/entities/category/model/type";

export const getCategories = async () => {
  const data = await api<Paginated<Category>>("/categories/", { next: { revalidate: 60 } });
  return data.results;
};