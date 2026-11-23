import { getGalleryItems, GalleryTile, type GalleryItem } from "@/entities/gallery-item";
import { cn } from "@/shared/lib/cn";
import { Container } from "@/shared/ui/Container/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader/SectionHeader";

function Tile({
  item,
  className,
  sizes,
}: {
  item?: GalleryItem;
  className?: string;
  sizes: string;
}) {
  if (!item) return null;
  return (
    <div className={cn("relative overflow-hidden bg-neutral-200", className)}>
      <GalleryTile item={item} sizes={sizes} />
    </div>
  );
}

function MosaicBlock({
  items,
  reverse = false,
  className,
}: {
  items: GalleryItem[];
  reverse?: boolean;
  className?: string;
}) {
  const [big, wide, a, b] = items;
  if (!big) return null;

  return (
    <div
      className={cn(
        "grid gap-3 min-[1139px]:h-[360px]",
        reverse
          ? "min-[1139px]:grid-cols-[400fr_565fr]"
          : "min-[1139px]:grid-cols-[565fr_400fr]",
        className
      )}
    >
      <Tile
        item={big}
        sizes="(min-width: 1139px) 565px, 100vw"
        className={cn("aspect-[2/1] min-[1139px]:aspect-auto", reverse && "min-[1139px]:order-2")}
      />

      <div className="grid grid-cols-2 gap-3 min-[1139px]:grid-rows-[178fr_167fr]">
        {/* широкая плитка есть только в полной мозаике */}
        <Tile
          item={wide}
          sizes="(min-width: 1139px) 400px, 100vw"
          className="hidden min-[1139px]:col-span-2 min-[1139px]:block"
        />
        <Tile
          item={a}
          sizes="(min-width: 1139px) 195px, 50vw"
          className="aspect-[4/3] min-[1139px]:aspect-auto"
        />
        <Tile
          item={b}
          sizes="(min-width: 1139px) 195px, 50vw"
          className="aspect-[4/3] min-[1139px]:aspect-auto"
        />
      </div>
    </div>
  );
}

export async function GalleryPreview() {
  const data = await getGalleryItems();
  const items = data.results.slice(0, 8);

  if (items.length === 0) return null;

  return (
    <section className="bg-white pb-12 min-[1139px]:pb-20">
      <Container>
        <SectionHeader title="Наши завершённые работы" href="/gallery" />

        <div className="mt-10 flex flex-col gap-3">
          <MosaicBlock items={items.slice(0, 4)} />
          {/* второй блок только в полной мозаике */}
          <MosaicBlock
            items={items.slice(4, 8)}
            reverse
            className="hidden min-[1139px]:grid"
          />
        </div>
      </Container>
    </section>
  );
}