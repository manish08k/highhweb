import { clsx } from "clsx";

export function Section({
  id,
  className,
  dark = false,
  children
}: {
  id?: string;
  className?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-18 md:py-30",
        dark ? "bg-dark-bg text-dark-ink" : "bg-transparent",
        className
      )}
    >
      {children}
    </section>
  );
}
