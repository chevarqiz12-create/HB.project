// src/widgets/services-preview/ui/ServicesPreview.tsx
// src/entities/service/ui/ServiceCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Service } from "../model/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="group relative block min-h-[220px] overflow-hidden bg-neutral-100 p-6 lg:min-h-[252px]"
    >
      <div className="relative z-10 max-w-[55%]">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-4 text-sm text-neutral-600">{service.description}</p>
      </div>

      {service.image_url && (
        <Image
          src={service.image_url}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 270px, 45vw"
          className="!left-auto !top-auto !h-[85%] !w-[48%] object-contain object-right-bottom transition-transform group-hover:scale-105"
        />
      )}
    </Link>
  );
}