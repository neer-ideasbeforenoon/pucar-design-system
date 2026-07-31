import { cn } from "@/lib/utils";

export function Callout({
  title,
  children,
  tone = "info",
  className,
}: {
  title?: string;
  children: React.ReactNode;
  tone?: "info" | "warning" | "success";
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-lg border px-4 py-3 text-sm leading-relaxed",
        tone === "info" &&
          "border-info-muted bg-info-muted text-info-muted-foreground",
        tone === "warning" &&
          "border-warning-muted bg-warning-muted text-warning-muted-foreground",
        tone === "success" &&
          "border-success-muted bg-success-muted text-success-muted-foreground",
        className
      )}
    >
      {title ? <p className="mb-1 font-medium">{title}</p> : null}
      <div className="opacity-90 [&_code]:rounded-sm [&_code]:bg-background/60 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-foreground">
        {children}
      </div>
    </aside>
  );
}
