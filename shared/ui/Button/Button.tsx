// src/shared/ui/Button/Button.tsx
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

const base =
  "inline-block bg-gradient-to-b from-brand-from to-brand-to px-8 py-5 text-center text-base font-semibold text-white transition-opacity hover:opacity-90";

type ButtonProps = React.ComponentProps<"button">;
type LinkProps = React.ComponentProps<typeof Link>;

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(base, className)} {...props} />;
}

export function ButtonLink({ className, ...props }: LinkProps) {
  return <Link className={cn(base, className)} {...props} />;
}