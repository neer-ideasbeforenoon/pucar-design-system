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
        tone === "info" && "border-info/30 bg-info/5 text-foreground",
        tone === "warning" && "border-warning/40 bg-warning/10 text-foreground",
        tone === "success" && "border-success/30 bg-success/5 text-foreground",
        className
      )}
    >
      {title ? <p className="mb-1 font-medium">{title}</p> : null}
      <div className="text-muted-foreground [&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-foreground">
        {children}
      </div>
    </aside>
  );
}
