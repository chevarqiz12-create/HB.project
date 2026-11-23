
import Image from "next/image";
import type { GalleryItem } from "../model/types";

export function GalleryTile({ item, sizes }: { item: GalleryItem; sizes: string }) {
  if (!item.image_url) return <div className="size-full bg-neutral-200" />;

  return (
    <Image
      src={item.image_url}
      alt={item.alt_text || item.title}
      fill
      sizes={sizes}
      className="object-cover"
    />
  );
}