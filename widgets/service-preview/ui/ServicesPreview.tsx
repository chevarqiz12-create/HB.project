// src/widgets/services-preview/ui/ServicesPreview.tsx
import { getServices, ServiceCard } from "@/entities/service";
import { Container } from "@/shared/ui/Container/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader/SectionHeader";

export async function ServicesPreview() {
  const data = await getServices(); // без .catch, пусть падает и показывает ошибку
  const services = data.results.slice(0, 4);

  return (
    <section className="bg-white py-12 lg:py-20">
      <Container>
        <SectionHeader title="Что мы вам предлагаем" href="/gallery" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}