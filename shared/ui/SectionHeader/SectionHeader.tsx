// src/shared/ui/SectionHeader/SectionHeader.tsx
import { ButtonLink } from "@/shared/ui/Button/Button";

type Props = { title: string; href?: string; linkLabel?: string };

export function SectionHeader({ title, href, linkLabel = "Показать все" }: Props) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
      {href && (
        <ButtonLink href={href} className="px-6 py-3 text-sm lg:px-8 lg:py-4">
          {linkLabel}
        </ButtonLink>
      )}
    </div>
  );
}