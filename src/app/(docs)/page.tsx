import Link from "next/link";
import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Pucar Design System"
        description="The source of truth for Pucar's visual language — tokens, foundations, and UI components — so every product surface stays consistent for humans and AI agents alike."
      />

      <Callout title="Brand note" tone="info">
        Primary is <strong className="text-foreground">teal</strong> (
        <code>#007e7e</code> light / <code>#0eb39e</code> dark). This site is
        the production mirror of Abhiram&apos;s live Rajini 2.0 design contract.
      </Callout>

      <DocsSection
        title="What lives here"
        description="This documentation site is the living reference for the system already installed in this repository."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Foundations",
              body: "Color, typography, radius, spacing, elevation, icons — the tokens everything else is built from.",
              href: "/foundations/colors",
            },
            {
              title: "Accessibility",
              body: "WCAG 2.1 AA, WAI-ARIA 1.2, 40×40 touch targets, focus, contrast, labels, timeouts, and Indic script support.",
              href: "/foundations/accessibility",
            },
            {
              title: "Components",
              body: "shadcn/ui primitives themed with Pucar tokens. Reuse before inventing.",
              href: "/components/button",
            },
            {
              title: "Principles",
              body: "Rules that keep the system coherent across product work and agent-generated UI.",
              href: "/principles",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/40"
            >
              <p className="text-sm font-semibold text-foreground">
                {card.title}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </Link>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Stack">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            <span className="text-foreground">Next.js App Router</span> +
            TypeScript
          </li>
          <li>
            <span className="text-foreground">Tailwind CSS v4</span> — tokens as
            CSS variables in <code>globals.css</code>, mapped via{" "}
            <code>@theme inline</code>
          </li>
          <li>
            <span className="text-foreground">shadcn/ui</span> (Radix) —
            maintained primitives with Rajini-aligned adaptations in{" "}
            <code>src/components/ui/</code>
          </li>
          <li>
            <span className="text-foreground">Helvetica Neue system stack</span>{" "}
            — body and UI typeface
          </li>
        </ul>
      </DocsSection>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/getting-started">Get started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/foundations/colors">Browse foundations</Link>
        </Button>
      </div>
    </div>
  );
}
