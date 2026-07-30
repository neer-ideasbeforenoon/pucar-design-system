import { cn } from "@/lib/utils";

export function TokenSwatch({
  name,
  token,
  className,
  foregroundClassName,
}: {
  name: string;
  token: string;
  className: string;
  foregroundClassName?: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div
        className={cn(
          "flex h-20 items-end p-3",
          className,
          foregroundClassName
        )}
      >
        <span className="text-xs font-medium">Aa</span>
      </div>
      <div className="flex flex-col gap-0.5 border-t border-border px-3 py-2">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{token}</p>
      </div>
    </div>
  );
}
