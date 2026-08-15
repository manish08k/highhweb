import { clsx } from "clsx";

export function ProductWindow({
  title,
  dark = false,
  className,
  toolbar,
  children
}: {
  title: string;
  dark?: boolean;
  className?: string;
  toolbar?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border shadow-lg",
        dark ? "border-dark-line bg-dark-surface" : "border-line-strong bg-white",
        className
      )}
    >
      <div
        className={clsx(
          "flex h-11 items-center gap-3 border-b px-4",
          dark ? "border-dark-line bg-dark-surface2" : "border-line bg-surface-soft"
        )}
      >
        <div className="flex gap-[6px]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#EF4444]/70" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#F59E0B]/70" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#22C55E]/70" />
        </div>
        <span
          className={clsx(
            "font-mono text-[12px]",
            dark ? "text-dark-muted" : "text-ink-500"
          )}
        >
          {title}
        </span>
        {toolbar && <div className="ml-auto flex items-center gap-2">{toolbar}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}
