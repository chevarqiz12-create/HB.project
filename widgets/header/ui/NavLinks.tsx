"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/shared/config/nav";
import { cn } from "@/shared/lib/cn";

type Props = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({ className, linkClassName, onNavigate }: Props) {
  const pathname = usePathname();

  return (
    <nav className={cn("gap-10 text-base", className)}>
      {NAV.map(({ label, href }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn("underline-offset-8 hover:underline", active && "underline", linkClassName)}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}