
import { getServices, ServiceCard } from "@/entities/service";
import { Container } from "@/shared/ui/Container/Container";

export async function ServicesList() {
  const data = await getServices();
  const services = data.results;

  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        {services.length === 0 ? (
          <p className="text-neutral-500">Скоро здесь появятся наши услуги.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}