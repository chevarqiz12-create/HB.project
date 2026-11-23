
import { Suspense } from "react";
import { GalleryGroups } from "@/widgets/gallery-groups";
import { Questions } from "@/widgets/questions";

export function GalleryPage() {
  return (
    <main>
      <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
        <GalleryGroups />
      </Suspense>
      <Questions />
    </main>
  );
}