import Image from "next/image";
import { RequestForm } from "@/features/send-request";
import { Container } from "@/shared/ui/Container/Container";
import cubes from "@/shared/assets/imeges/cubes.svg"

export function Questions() {
  return (
    <section
      id="request"
      className="bg-[linear-gradient(to_bottom,#fff_50%,var(--color-footer)_50%)]"
    >
      <Container>
        <div className="relative mt-15 overflow-hidden bg-bg px-6 py-10 text-white min-[1160px]:px-10 min-[1160px]:py-12">
          <div className="relative z-10 mx-auto max-w-[560px] text-center min-[1160px]:mx-0 min-[1160px]:max-w-[410px] min-[1160px]:text-left">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl min-[1160px]:text-5xl">
              Остались вопросы?
            </h2>
            <p className="mt-4 text-white/90">
              Оставьте заявку, и мы свяжемся с вами, подберём материалы и рассчитаем стоимость.
            </p>
            <RequestForm className="mt-8 text-left min-[1160px]:mt-10" />
          </div>

          <Image
            src={cubes}
            alt=""
            className="pointer-events-none absolute right-0 top-1/2 hidden w-[480px] -translate-y-1/2 min-[1160px]:block"
          />
        </div>
      </Container>
    </section>
  );
}