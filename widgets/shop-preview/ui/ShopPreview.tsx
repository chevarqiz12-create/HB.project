
import { getProducts, ProductCard } from "@/entities/product";
import { Container } from "@/shared/ui/Container/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader/SectionHeader";

export async function ShopPreview() {
  const data = await getProducts();
  const products = data.results.slice(0, 4);

  return (
    <section className="bg-white py-12 lg:py-20">
      <Container>
        <SectionHeader title="Интернет магазин" href="/shop" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}