
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProduct } from "@/entities/product";
import { ApiError } from "@/shared/api/client";
import { ProductDetails } from "@/widgets/product-details";
import { GalleryPreview } from "@/widgets/gallry-preview/ui/GalleryPreview";
import { SimilarProducts } from "@/widgets/similar-products/ui/SimilarProducts";
import { Questions } from "@/widgets/questions";

type Props = { params: Promise<{ id: string }> };

async function ProductContent({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id).catch((e) => {
    if (e instanceof ApiError && e.status === 404) notFound();
    throw e;
  });

  return (
    <>
      <ProductDetails product={product} />
      <GalleryPreview />
      <SimilarProducts product={product} />
      <Questions />
    </>
  );
}

export function ProductPage({ params }: Props) {
  return (
    <main>
      <Suspense fallback={<div className="min-h-[60vh] bg-neutral-100" />}>
        <ProductContent params={params} />
      </Suspense>
    </main>
  );
}