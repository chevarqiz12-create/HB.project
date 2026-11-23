
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getProducts, ProductCard, type Product } from "@/entities/product";
import { Container } from "@/shared/ui/Container/Container";

export async function SimilarProducts({ product }: { product: Product }) {
  if (!product.category) return null;

  const data = await getProducts({ category: product.category });
  const items = data.results.filter((p) => p.id !== product.id).slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="bg-white py-10 lg:py-14">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Похожие товары</h2>
          <Link
            href={`/shop?category=${product.category}`}
            className="inline-flex items-center gap-2 text-sm text-brand-to hover:underline"
          >
            Показать все <FiArrowRight />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}