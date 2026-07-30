import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { Preview } from "@/components/docs/preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Spacing",
};

const recipes = [
  {
    title: "Tight control group",
    classes: "gap-2",
    description: "Related buttons, badge clusters, inline form controls.",
  },
  {
    title: "Default stack",
    classes: "gap-4",
    description: "Section internals, form fields stacked vertically.",
  },
  {
    title: "Page rhythm",
    classes: "gap-6 / gap-8 / gap-10",
    description: "Between major page sections and documentation blocks.",
  },
  {
    title: "Panel padding",
    classes: "p-4 / p-6",
    description: "Cards, preview frames, and inset content regions.",
  },
];

export default function SpacingPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Spacing"
        description="Use Tailwind’s spacing scale via gap, padding, and margin utilities. Prefer consistent recipes over one-off values."
      />

      <Callout>
        Stay on the scale (<code>2</code>, <code>3</code>, <code>4</code>,{" "}
        <code>6</code>, <code>8</code>, <code>10</code>, <code>12</code>). Avoid
        arbitrary spacing like <code>gap-[13px]</code>.
      </Callout>

      <DocsSection title="Common recipes">
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-2.5 font-medium">Pattern</th>
                <th className="px-4 py-2.5 font-medium">Classes</th>
                <th className="px-4 py-2.5 font-medium">When</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recipes.map((row) => (
                <tr key={row.title}>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.title}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {row.classes}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection title="Live example">
        <Preview label="gap-3 button group" className="gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </Preview>
      </DocsSection>
    </div>
  );
}
