
import { Suspense } from "react";
import { ShopCatalog } from "@/widgets/shop-catalog";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function ShopPage({ searchParams }: Props) {
  return (
    <main>
      <Suspense fallback={<div className="min-h-[60vh] bg-neutral-100" />}>
        <ShopCatalog searchParams={searchParams} />
      </Suspense>
    </main>
  );
}