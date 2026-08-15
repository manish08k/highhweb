import { clsx } from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "md" | "sm";
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 ease-out active:scale-[0.98] hover:-translate-y-[1px] focus-visible:outline-2";

  const sizes = {
    md: "h-11 px-5 text-[15px]",
    sm: "h-9 px-4 text-sm"
  };

  const variants = {
    primary: "bg-indigo text-white hover:bg-indigo-dark shadow-sm",
    secondary: "bg-white text-ink-900 border border-line-strong hover:border-ink-900",
    ghost: "text-ink-700 hover:text-ink-900",
    dark: "bg-dark-ink text-dark-bg hover:bg-white"
  };

  return (
    <Link href={href} className={clsx(base, sizes[size], variants[variant], className)}>
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2} className="translate-y-px" />}
    </Link>
  );
}
