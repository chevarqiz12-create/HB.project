
import Image from "next/image";
import type { Product } from "@/entities/product";
import { formatPrice } from "@/shared/lib/FormatPrice";
import { Container } from "@/shared/ui/Container/Container";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="bg-neutral-100 py-8 lg:py-12">
      <Container className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[4/3] bg-white">
          {product.image_url && (
            <Image
              src={product.image_url}
              alt={product.title}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain p-6"
            />
          )}
        </div>

        <div className="flex flex-col bg-white p-6 lg:p-8">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            {product.description ||
              "Подробное описание скоро появится. Уточните характеристики и наличие по телефону или оставьте заявку."}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4 pt-8">
            <p className="text-2xl font-semibold">
              {formatPrice(product.price)}{" "}
              <span className="text-base font-normal text-neutral-500">сом</span>
            </p>

            <a
              href="#request"
              className="bg-[#1570d4] px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Купить
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}