import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { DoDont } from "@/components/docs/do-dont";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";

export const metadata: Metadata = {
  title: "Principles",
};

export default function PrinciplesPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Principles"
        description="Non-negotiable rules that keep Pucar UI consistent across products, teams, and generated code."
      />

      <DocsSection
        title="1. Tokens over inventing"
        description="Never hardcode a color, spacing, or radius value. Always use the Tailwind utility that maps to a token."
      >
        <DoDont
          do={[
            "Use bg-primary, text-muted-foreground, border-border, rounded-md, gap-4.",
            "Add semantic meaning via tokens (success, warning, destructive).",
          ]}
          dont={[
            "Hardcode hex or oklch values in components.",
            "Use arbitrary Tailwind values like bg-[#007e7e] or rounded-[7px].",
          ]}
        />
      </DocsSection>

      <DocsSection
        title="2. Reuse before create"
        description="Check src/components/ui/ first. Install new shadcn components upstream — do not hand-write them."
      >
        <Callout>
          Hand-written primitives drift from upstream, break updates, and
          fragment the system. Prefer{" "}
          <code>npx shadcn@latest add &lt;component&gt;</code>.
        </Callout>
      </DocsSection>

      <DocsSection
        title="3. Light and dark are equal"
        description="Every color token must exist in both :root and .dark. Theme switching is a first-class product requirement."
      >
        <DoDont
          do={[
            "Define pairs for any new semantic color.",
            "Verify contrast in both themes with the docs toggle.",
          ]}
          dont={[
            "Ship light-only tokens.",
            "Rely on OS preference alone without a class-based .dark strategy.",
          ]}
        />
      </DocsSection>

      <DocsSection
        title="4. Teal is the brand"
        description="Primary actions use teal. Status colors (success, warning, info, destructive) stay semantic and distinct from brand."
      >
        <Callout title="Legacy naming" tone="warning">
          The Figma file sometimes labeled brand tokens as &quot;green.&quot;
          Live values are teal — this documentation is authoritative.
        </Callout>
      </DocsSection>
    </div>
  );
}
