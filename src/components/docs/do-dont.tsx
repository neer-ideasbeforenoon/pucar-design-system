import { cn } from "@/lib/utils";

export function DoDont({
  do: doItems,
  dont: dontItems,
  className,
}: {
  do: string[];
  dont: string[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      <div className="rounded-xl border border-success/30 bg-success/5 p-4">
        <p className="mb-3 text-sm font-semibold text-success">Do</p>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          {doItems.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
        <p className="mb-3 text-sm font-semibold text-destructive">Don&apos;t</p>
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          {dontItems.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
