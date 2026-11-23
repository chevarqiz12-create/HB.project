
import Link from "next/link";
import { cn } from "@/shared/lib/cn";
import { buildHref, type ProductQuery } from "../model/filter";

type Props = { page: number; totalPages: number; query: ProductQuery };

export function ProductPagination({ page, totalPages, query }: Props) {
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Страницы">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <Link
          key={n}
          href={buildHref({ ...query, page: n })}
          aria-current={n === page ? "page" : undefined}
          className={cn(
            "flex size-10 items-center justify-center bg-white text-sm hover:bg-neutral-200",
            n === page && "bg-[#1570d4] text-white hover:bg-[#1570d4]"
          )}
        >
          {n}
        </Link>
      ))}
    </nav>
  );
}