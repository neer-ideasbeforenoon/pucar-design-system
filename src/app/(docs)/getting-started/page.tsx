import type { Metadata } from "next";
import Link from "next/link";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { Preview } from "@/components/docs/preview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Getting started",
};

export default function GettingStartedPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Getting started"
        description="How to run this documentation site and how consuming apps should pull from the Pucar system."
      />

      <DocsSection
        title="Run the docs site"
        description="From the repository root:"
      >
        <Preview label="Commands" className="items-start justify-start">
          <pre className="w-full overflow-x-auto font-mono text-sm leading-relaxed text-foreground">
            {`npm install
npm run dev`}
          </pre>
        </Preview>
        <p className="text-sm text-muted-foreground">
          Open <code className="text-foreground">http://localhost:3000</code>{" "}
          to walk through foundations and components. Use the header toggle to
          switch light and dark themes.
        </p>
      </DocsSection>

      <DocsSection
        title="Using the system in product UI"
        description="This repo is the source of truth. Prefer copying patterns from here over inventing new ones."
      >
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            Import tokens via Tailwind utilities that map to CSS variables (
            <code className="text-foreground">bg-primary</code>,{" "}
            <code className="text-foreground">text-muted-foreground</code>,{" "}
            <code className="text-foreground">rounded-md</code>).
          </li>
          <li>
            Reuse components from{" "}
            <code className="text-foreground">src/components/ui/</code> before
            creating new ones.
          </li>
          <li>
            Add new shadcn pieces with{" "}
            <code className="text-foreground">npx shadcn@latest add …</code> —
            never hand-write upstream primitives.
          </li>
          <li>
            Any new color token must be defined in both{" "}
            <code className="text-foreground">:root</code> and{" "}
            <code className="text-foreground">.dark</code>.
          </li>
        </ol>
      </DocsSection>

      <Callout title="For AI coding agents" tone="success">
        Follow <code>AGENTS.md</code> in this repository. Never hardcode hex,
        oklch, or arbitrary Tailwind values like{" "}
        <code>bg-[#007e7e]</code>.
      </Callout>

      <Button asChild variant="outline">
        <Link href="/principles">Read the principles</Link>
      </Button>
    </div>
  );
}
