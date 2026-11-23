
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import type { Category } from "@/entities/category";
import { cn } from "@/shared/lib/cn";
import { buildHref, type ProductQuery } from "../model/filter";

type Props = {
  categories: Category[];
  counts: Map<number, number>;
  query: ProductQuery;
};

const control =
  "w-full border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-to";

export function ProductFilters({ categories, counts, query }: Props) {
  return (
    <aside className="h-fit bg-white p-5 shadow-sm">
      <h2 className="font-semibold">Категории</h2>
      <ul className="mt-4 flex flex-col gap-2 text-sm">
        {categories.map((c) => {
          const active = c.id === query.category;
          return (
            <li key={c.id}>
              <Link
                href={buildHref({ q: query.q, category: active ? null : c.id })}
                className={cn("hover:text-brand-to", active && "font-medium text-brand-to")}
              >
                {c.name} ({counts.get(c.id) ?? 0})
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="font-semibold">Фильтр</h2>
        <Link href="/shop" className="text-xs text-brand-to hover:underline">
          Сбросить значения
        </Link>
      </div>

      <form action="/shop" className="mt-4 flex flex-col gap-4">
        <label className="relative block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            name="q"
            defaultValue={query.q}
            placeholder="Что ищем?"
            className={cn(control, "pl-9")}
          />
        </label>

        <label className="block">
          <span className="text-xs text-neutral-400">Категории</span>
          <select name="category" defaultValue={query.category ?? ""} className={cn(control, "mt-1")}>
            <option value="">Во всех категориях</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="bg-[#1570d4] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Применить
        </button>
      </form>
    </aside>
  );
}