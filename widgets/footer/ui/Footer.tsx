
import Link from "next/link";
import { NAV } from "@/shared/config/nav";
import { Container } from "@/shared/ui/Container/Container";
import { SocialLinks } from "@/shared/ui/SocialLinks/SocialLinks";

const MORE = [
  { label: "Контакты", href: "/contacts" },
  { label: "Адрес", href: "/#contacts" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/80 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container className="py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-[460px]">
            <p className="text-2xl font-semibold">Нержавейка</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Интернет-магазин изделий из нержавеющей стали и сервис по оказанию профильных услуг.
              Более 6 лет опыта в надёжных решениях для вашего бизнеса и дома.
            </p>
            <SocialLinks variant="dark" className="mt-8" />
          </div>

          <div className="flex gap-16">
            <Column title="Компания" links={NAV} />
            <Column title="Ещё" links={MORE} />
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          © 2026 Все права защищены.
        </p>
      </Container>
    </footer>
  );
}