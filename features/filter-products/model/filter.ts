// features/filter-products/model/filter.ts
import type { Product } from "@/entities/product";

export const PAGE_SIZE = 9;

type RawParams = Record<string, string | string[] | undefined>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export type ProductQuery = { q: string; category: number | null; page: number };

export function parseQuery(sp: RawParams): ProductQuery {
  const category = Number(first(sp.category));
  const page = Number(first(sp.page));
  return {
    q: (first(sp.q) ?? "").trim(),
    category: Number.isInteger(category) && category > 0 ? category : null,
    page: Number.isInteger(page) && page > 0 ? page : 1,
  };
}

export function filterProducts(
  products: Product[],
  { q, category }: Pick<ProductQuery, "q" | "category">
) {
  const needle = q.toLowerCase();
  return products.filter(
    (p) =>
      (category === null || p.category === category) &&
      (!needle || p.title.toLowerCase().includes(needle))
  );
}

export function buildHref(query: Partial<ProductQuery>) {
  const sp = new URLSearchParams();
  if (query.q) sp.set("q", query.q);
  if (query.category) sp.set("category", String(query.category));
  if (query.page && query.page > 1) sp.set("page", String(query.page));
  const s = sp.toString();
  return s ? `/shop?${s}` : "/shop";
}