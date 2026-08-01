import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";

export const metadata: Metadata = {
  title: "Radius",
};

const radii = [
  { name: "none", className: "rounded-none", value: "0px", role: "" },
  { name: "xs", className: "rounded-xs", value: "4px", role: "micro insets" },
  { name: "sm", className: "rounded-sm", value: "6px", role: "inset sm" },
  { name: "md", className: "rounded-md", value: "8px", role: "insets" },
  { name: "lg", className: "rounded-lg", value: "10px", role: "controls" },
  { name: "xl", className: "rounded-xl", value: "14px", role: "containers" },
  { name: "2xl", className: "rounded-2xl", value: "18px", role: "" },
  { name: "3xl", className: "rounded-3xl", value: "22px", role: "" },
  { name: "4xl", className: "rounded-4xl", value: "26px", role: "" },
  { name: "full", className: "rounded-full", value: "9999px", role: "chips & pills" },
];

export default function RadiusPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Radius"
        description="One 10px knob, roles not choices. Every step below is derived from a single --radius value (0.625rem) — change the knob and the whole system rounds together."
      />

      <Callout>
        Assignment is by role, never by taste: <code>rounded-xl</code> for
        containers, <code>rounded-lg</code> for controls (buttons, inputs),{" "}
        <code>rounded-md</code>/<code>rounded-sm</code> for insets,{" "}
        <code>rounded-full</code> for chips. Never invent values like{" "}
        {/* ds-tokens-ignore — anti-example in docs prose */}
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
                  {item.role ? ` · ${item.role}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>
    </div>
  );
}
