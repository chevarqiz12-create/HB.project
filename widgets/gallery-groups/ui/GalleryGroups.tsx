
import { Container } from "@/shared/ui/Container/Container";
import { getAllGalleryItems,} from "@/entities/gallery-item/api/gallery-item.api";
import { GalleryTile } from "@/entities/gallery-item";
import { GalleryItem } from "@/entities/gallery-item";

function groupByTitle(items: GalleryItem[]) {
  const groups = new Map<string, GalleryItem[]>();
  for (const item of items) {
    const key = item.title.trim() || "Без названия";
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return [...groups];
}

export async function GalleryGroups() {
  const items = await getAllGalleryItems();
  const groups = groupByTitle(items);

  return (
    <section className="bg-white py-10 lg:py-14">
      <Container className="flex flex-col gap-10">
        <h1 className="sr-only">Галерея</h1>

        {groups.length === 0 && (
          <p className="text-neutral-500">Скоро здесь появятся фото наших работ.</p>
        )}

        {groups.map(([title, group]) => (
          <div key={title}>
            <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>

            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {group.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[10/7] overflow-hidden bg-neutral-200"
                >
                  <GalleryTile
                    item={item}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}