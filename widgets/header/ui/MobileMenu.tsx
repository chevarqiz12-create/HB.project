"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { PHONES } from "@/shared/config/contacts";
import { cn } from "@/shared/lib/cn";
import { ButtonLink } from "@/shared/ui/Button/Button";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu({ variant = "dark" }: { variant?: "dark" | "light" }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isDark = variant === "dark";
    const close = () => setOpen(false);

    // Esc закрывает меню, пока оно открыто, страница под ним не прокручивается
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className="menu:hidden">
            <button
                type="button"
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((o) => !o)}
                className="flex size-11 items-center justify-center text-3xl"
            >
                {open ? <FiX /> : <FiMenu />}
            </button>

            {open && (
                <div
                    id="mobile-menu"
                    className={cn(
                        "absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t px-4 pb-8 pt-4 shadow-lg md:px-10",
                        isDark ? "border-white/10 bg-bg text-white" : "border-neutral-200 bg-white text-neutral-900"
                    )}
                >
                    <NavLinks
                        className="flex flex-col gap-0"
                        linkClassName="block py-3 text-lg"
                        onNavigate={close}
                    />

                    {pathname === "/" && (
                        <Link
                            href="/gallery"
                            onClick={close}
                            className="block py-3 text-lg min-[581px]:hidden"
                        >
                            Перейти к галерее →
                        </Link>
                    )}

                    <div
                        className={cn(
                            "mt-4 flex flex-col gap-2 border-t pt-4 text-base",
                            isDark ? "border-white/10" : "border-neutral-200"
                        )}
                    >
                        {PHONES.map((p) => (
                            <a key={p} href={`tel:${p.replace(/\D/g, "")}`}>
                                {p}
                            </a>
                        ))}
                    </div>

                    <ButtonLink href="/contacts" onClick={close} className="mt-6 block w-full">
                        Контакты
                    </ButtonLink>
                </div>
            )}
        </div>
    );
}