
import { Container } from "@/shared/ui/Container/Container";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-100">
      <Container className="py-8 lg:py-10">
        <h1 className="text-3xl font-bold lg:text-4xl">{children}</h1>
      </Container>
    </div>
  );
}