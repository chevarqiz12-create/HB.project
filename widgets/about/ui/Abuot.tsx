// src/widgets/about/ui/About.tsx
import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Container } from "@/shared/ui/Container/Container";
import { SOCIALS } from "@/shared/config/socials";
import about from "@/shared/assets/imeges/about.svg"

const links = [
  { href: SOCIALS.telegram, Icon: FaTelegramPlane, label: "Telegram" },
  { href: SOCIALS.whatsapp, Icon: FaWhatsapp, label: "WhatsApp" },
  { href: SOCIALS.instagram, Icon: FaInstagram, label: "Instagram" },
];

export function About() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
            &quot;Нержавейка Борбору&quot; - более 6 лет на рынке
          </h2>

          <p className="mt-8 text-sm text-neutral-600 lg:text-base">
            Производим и продаём изделия из нержавеющей стали в Оше. Изготавливаем
            конструкции любой сложности и дизайна — от простых элементов до
            индивидуальных заказов.
          </p>
          <p className="mt-6 text-sm text-neutral-600 lg:text-base">
            В наличии трубы, листы, уголки, фитинги и комплектующие. Работаем с оптом
            и розницей, предлагаем резку, сборку и доставку по всему Кыргызстану.
          </p>

          <div className="mt-8 flex gap-3">
            {links.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <Image src={about} alt="Команда Нержавейка Борбору" className="h-auto w-full object-cover" />
      </Container>
    </section>
  );
}