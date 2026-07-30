import { cn } from "@/lib/utils";

export function Preview({
  children,
  className,
  label = "Preview",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border px-4 py-2">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
      </div>
      <div
        className={cn(
          "flex min-h-32 flex-wrap items-center justify-center gap-3 p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
