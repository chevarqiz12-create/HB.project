// src/entities/product/ui/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/shared/lib/FormatPrice";
import type { Product } from "../model/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <div className="relative h-40 w-full">
        {product.image_url && (
          <Image
            src={product.image_url}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 250px, (min-width: 640px) 45vw, 90vw"
            className="object-contain"
          />
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>

      {product.description && (
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{product.description}</p>
      )}

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <span className="text-sm text-neutral-500">Цена</span>
          <span className="font-semibold">
            {formatPrice(product.price)} <span className="text-sm font-normal text-neutral-500">сом</span>
          </span>
        </div>

        <Link
          href={`/shop/${product.id}`}
          className="mt-4 block bg-[#1570d4] py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Подробнее
        </Link>
      </div>
    </article>
  );
}