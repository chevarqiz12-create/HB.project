import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { NAV } from "@/shared/config/nav";
import { PHONES } from "@/shared/config/contacts";
import { cn } from "@/shared/lib/cn";
import { Container } from "@/shared/ui/Container/Container";
import { ButtonLink } from "@/shared/ui/Button/Button";
import logo2 from "@/shared/assets/imeges/logo2.svg"
import logoDark from "@/shared/assets/imeges/logoDark.svg";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

// Показывается, пока NavLinks ждёт адрес страницы (те же ссылки, но без подчёркивания)
function NavFallback({ className }: { className?: string }) {
  return (
    <nav className={cn("gap-10 text-base", className)}>
      {NAV.map(({ label, href }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function Header({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <header
      className={cn(
        "relative z-40",
        isDark
          ? "border-t-4 border-brand-to bg-bg text-white"
          : "bg-white text-neutral-900 shadow-sm"
      )}
    >
      <Container className="flex items-center justify-between gap-6 py-5">
        <Link href="/">
          <Image
            src={isDark ? logoDark : logo2}
            alt="Euro Truck Service"
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <Suspense fallback={<NavFallback className="hidden menu:flex" />}>
          <NavLinks className="hidden menu:flex" />
        </Suspense>

        <div className="hidden items-center gap-3 text-sm menu:flex">
          <FiPhone size={20} />
          <div className="flex flex-col">
            {PHONES.map((p) => (
              <a key={p} href={`tel:${p.replace(/\D/g, "")}`}>
                {p}
              </a>
            ))}
          </div>
        </div>

        <ButtonLink href="/contacts" className="hidden menu:inline-block">
          Контакты
        </ButtonLink>

        <Suspense fallback={null}>
          <MobileMenu variant={variant} />
        </Suspense>
      </Container>
    </header>
  );
}