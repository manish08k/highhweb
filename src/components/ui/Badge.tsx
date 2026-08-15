import { clsx } from "clsx";

export function Badge({
  children,
  dark = false,
  className
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-pill border px-3 py-1 text-[13px] font-medium",
        dark
          ? "border-dark-line bg-dark-surface text-dark-muted"
          : "border-line-strong bg-white text-ink-500",
        className
      )}
    >
      {children}
    </span>
  );
}
