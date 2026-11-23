// src/widgets/hero/ui/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui/Container/Container";
import { ButtonLink } from "@/shared/ui/Button/Button";
import pipes from "@/shared/assets/imeges/pipes.svg"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg text-white">
      <Container className="relative min-h-[560px] py-16 lg:min-h-[700px] lg:py-24">
        <div className="max-w-[620px]">
          <h1 className="text-4xl font-bold leading-[1.15] lg:text-5xl">
            Нержавейка по выгодным ценам в Оше — всё для ваших проектов!
          </h1>

          <p className="mt-6 text-base text-muted lg:text-lg">
            Листы, трубы, уголки, фитинги и комплектующие из нержавеющей стали —
            оптом и в розницу. Широкий ассортимент на складе, быстрая доставка по Кыргызстану!
          </p>

          <div className="relative z-10 max-w-[760px] min-[1139px]:max-w-[620px]">
            <ButtonLink className="mt-5 mr-3 " href="/shop">Интернет магазин</ButtonLink>
            <Link href="/gallery" className="hidden text-lg hover:underline min-[581px]:inline">
              Перейти к галерее →
            </Link>
          </div>
        </div>

        <Image
          src={pipes}
          alt=""
          priority
          className="pointer-events-none absolute -right-16 top-1/2 hidden w-[620px] -translate-y-1/2 min-[1139px]:block"
        />
      </Container>
    </section>
  );
}