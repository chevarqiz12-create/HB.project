
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SOCIALS } from "@/shared/config/socials";
import { cn } from "@/shared/lib/cn";

const links = [
  { href: SOCIALS.telegram, Icon: FaTelegramPlane, label: "Telegram" },
  { href: SOCIALS.whatsapp, Icon: FaWhatsapp, label: "WhatsApp" },
  { href: SOCIALS.instagram, Icon: FaInstagram, label: "Instagram" },
];

type Props = { variant?: "light" | "dark"; className?: string };

export function SocialLinks({ variant = "light", className }: Props) {
  return (
    <div className={cn("flex gap-3", className)}>
      {links.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={cn(
            "flex size-10 items-center justify-center rounded-full transition-colors",
            variant === "light"
              ? "bg-neutral-100 hover:bg-neutral-200"
              : "bg-white text-bg hover:bg-white/80"
          )}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}