import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";

export const metadata: Metadata = {
  title: "Radius",
};

const radii = [
  { name: "none", className: "rounded-none", value: "0px" },
  { name: "xs", className: "rounded-xs", value: "2px" },
  { name: "sm", className: "rounded-sm", value: "4px" },
  { name: "md", className: "rounded-md", value: "6px" },
  { name: "lg", className: "rounded-lg", value: "8px" },
  { name: "xl", className: "rounded-xl", value: "12px" },
  { name: "2xl", className: "rounded-2xl", value: "16px" },
  { name: "3xl", className: "rounded-3xl", value: "24px" },
  { name: "4xl", className: "rounded-4xl", value: "32px" },
  { name: "full", className: "rounded-full", value: "9999px" },
];

export default function RadiusPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Radius"
        description="Corner radius scale confirmed against the live Figma file. Default control radius is md (6px) — the shadcn baseline used throughout the system."
      />

      <Callout>
        Use <code>rounded-md</code>, <code>rounded-lg</code>,{" "}
        <code>rounded-xl</code>, etc. Never invent values like{" "}
        <code>rounded-[7px]</code>.
      </Callout>

      <DocsSection title="Scale">
        <div className="grid gap-3 sm:grid-cols-2">
          {radii.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div
                className={`size-14 shrink-0 border border-border bg-primary ${item.className}`}
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-foreground">
                  radius-{item.name}
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {item.className} · {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>
    </div>
  );
}
