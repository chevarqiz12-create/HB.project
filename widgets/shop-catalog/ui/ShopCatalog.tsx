import { redirect } from "next/navigation";
import { getProducts, ProductCard } from "@/entities/product";
import { getCategories } from "@/entities/category";
import { ApiError } from "@/shared/api/client";
import {
  PAGE_SIZE,
  buildHref,
  parseQuery,
  ProductFilters,
  ProductPagination,
  type ProductQuery,
} from "@/features/filter-products";
import { Container } from "@/shared/ui/Container/Container";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function loadProducts(query: ProductQuery) {
  try {
    return await getProducts({
      page: query.page,
      category: query.category,
      search: query.q,
    });
  } catch (e) {
    // DRF отвечает 404, если запрошена несуществующая страница
    if (e instanceof ApiError && e.status === 404 && query.page > 1) {
      redirect(buildHref({ ...query, page: 1 }));
    }
    throw e;
  }
}

export async function ShopCatalog({ searchParams }: Props) {
  const query = parseQuery(await searchParams);
  const categories = await getCategories();

  const [data, countEntries] = await Promise.all([
    loadProducts(query),
    // число товаров в каждой категории: берём count из ответа API
    Promise.all(
      categories.map(
        async (c) => [c.id, (await getProducts({ category: c.id })).count] as const
      )
    ),
  ]);
  const counts = new Map<number, number>(countEntries);

  const totalPages = Math.max(1, Math.ceil(data.count / PAGE_SIZE));

  return (
    <section className="bg-neutral-100 py-8 lg:py-12">
      <Container className="grid items-start gap-6 lg:grid-cols-[250px_1fr]">
        <ProductFilters categories={categories} counts={counts} query={query} />

        <div>
          {data.results.length === 0 ? (
            <p className="bg-white p-8 text-neutral-500">
              По вашему запросу ничего не найдено. Попробуйте сбросить фильтр.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {data.results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <ProductPagination page={query.page} totalPages={totalPages} query={query} />
        </div>
      </Container>
    </section>
  );
}