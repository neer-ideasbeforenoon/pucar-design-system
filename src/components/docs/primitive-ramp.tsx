const STEPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export function PrimitiveRamp({
  family,
  label,
}: {
  family: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="font-mono text-xs text-muted-foreground">
          --{family}-1 … --{family}-12
        </p>
      </div>
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-12">
          {STEPS.map((step) => (
            <div
              key={step}
              title={`${family}-${step}`}
              className="aspect-square min-h-8 w-full"
              style={{ backgroundColor: `var(--${family}-${step})` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-12 border-t border-border bg-card">
          {STEPS.map((step) => (
            <div
              key={step}
              className="px-0.5 py-1.5 text-center font-mono text-[10px] text-muted-foreground"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
