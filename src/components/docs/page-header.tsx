import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 flex flex-col gap-3", className)}>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
