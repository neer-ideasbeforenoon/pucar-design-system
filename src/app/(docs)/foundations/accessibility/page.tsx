import type { Metadata } from "next";
import Link from "next/link";

import { Callout } from "@/components/docs/callout";
import { DoDont } from "@/components/docs/do-dont";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";

export const metadata: Metadata = {
  title: "Accessibility",
};

const standards: {
  title: string;
  description: string;
}[] = [
  {
    title: "WCAG 2.1 Level AA",
    description:
      "Conformance floor for all citizen- and staff-facing product UI. AA success criteria are requirements, not optional polish.",
  },
  {
    title: "WAI-ARIA 1.2",
    description:
      "Correct roles, states, and properties on custom widgets. Prefer native HTML and Radix/shadcn wiring — never strip aria-* or focus traps.",
  },
  {
    title: "Screen reader compatibility",
    description:
      "Usable with NVDA, JAWS, and VoiceOver. Announce async updates with live regions where needed; never rely on colour alone.",
  },
  {
    title: "Keyboard-only navigability",
    description:
      "Every interactive control reachable and operable without a pointer. No traps outside intentional modal focus containment.",
  },
  {
    title: "Focus management and visible focus indicator",
    description:
      "Teal ring token on focus-visible. Move focus into overlays on open; restore to the trigger on close. Never remove focus styles for aesthetics.",
  },
  {
    title: "Colour contrast ratios",
    description:
      "Normal text ≥ 4.5:1 against its background in light and dark. UI boundaries ≥ 3:1 where WCAG requires. Prove with a checker — do not eyeball.",
  },
  {
    title: "No reliance on hover for critical information",
    description:
      "Critical actions and information must work without hover. Touch and keyboard users have none.",
  },
  {
    title: "Touch target sizing",
    description:
      "Minimum interactive target 40×40px — aligned with the DS control metric (h-10 / size-10). Expand hit areas on small visual controls.",
  },
  {
    title: "Voice control compatibility",
    description:
      "Works with Dragon NaturallySpeaking and iOS Voice Control: visible labels that match accessible names; no unlabeled icon-only primary actions.",
  },
  {
    title: "200% text zoom",
    description:
      "Layouts remain usable at 200% browser text zoom without loss of content or functionality, and without whole-page horizontal scroll as the only path.",
  },
  {
    title: "Timeout warnings before session expiry",
    description:
      "Warn before expiry so users can stay signed in or save work. Use Session timeout — never expire silently on draft-risking flows.",
  },
  {
    title: "Visible labels on all interactive elements",
    description:
      "Every field has a visible label (Label / FieldLabel). Placeholders are hints, never the only accessible name.",
  },
  {
    title: "Multilingual and script support",
    description:
      "Court locales may need Devanagari, Tamil, and other Indic scripts. Layout must tolerate longer strings and taller glyphs; product apps extend the font stack for those scripts.",
  },
];

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Accessibility"
        description="Authoritative accessibility standards for the Pucar design system. Product UI must meet these; agents must not invent weaker rules."
      />

      <Callout title="Also for agents">
        Full checklist lives in <code>ACCESSIBILITY.md</code> at the repo root.
        Coding agents must follow it alongside{" "}
        <Link href="/foundations/laws" className="underline underline-offset-3">
          Laws
        </Link>{" "}
        and{" "}
        <Link href="/principles" className="underline underline-offset-3">
          Principles
        </Link>
        .
      </Callout>

      <DocsSection
        title="Conformance target"
        description="WCAG 2.1 Level AA is the floor. WAI-ARIA 1.2 governs custom widget semantics."
      >
        <DoDont
          do={[
            "Target WCAG 2.1 AA on every citizen- and staff-facing surface.",
            "Keep Radix ARIA, focus traps, and focus-visible rings intact.",
            "Use Session timeout for WCAG 2.1 SC 2.2.1 timing warnings.",
          ]}
          dont={[
            "Treat accessibility as docs-only or 'later'.",
            "Remove focus rings or aria attributes to simplify visuals.",
            "Expire sessions silently when the user may lose a draft.",
          ]}
        />
      </DocsSection>

      <DocsSection
        title="Standards"
        description="All thirteen apply. The short core subset (WCAG, ARIA, focus, contrast, 40×40 touch, 200% zoom, scripts) never drops."
      >
        <ol className="flex flex-col gap-4">
          {standards.map((item, index) => (
            <li
              key={item.title}
              className="rounded-xl border border-border bg-card px-4 py-3"
            >
              <p className="text-sm font-medium text-foreground">
                <span className="mr-2 text-muted-foreground">{index + 1}.</span>
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </DocsSection>

      <DocsSection
        title="Labels and forms"
        description="Placeholder-only fields fail voice control, screen readers, and WCAG labeling criteria."
      >
        <DoDont
          do={[
            "Pair every Input / Select / Textarea with Label or FieldLabel.",
            "Give icon-only buttons an aria-label (or visible text).",
          ]}
          dont={[
            "Use placeholder as the only field label.",
            "Ship unlabeled icon buttons as primary actions.",
          ]}
        />
      </DocsSection>

      <DocsSection
        title="Touch, zoom, and scripts"
        description="Mobile and multilingual court deployments share the same system — layout must flex."
      >
        <DoDont
          do={[
            "Keep interactive targets ≥ 40×40px (h-10 / expanded hit areas).",
            "Allow wrap and fluid widths so 200% zoom still works.",
            "Extend product font stacks for Devanagari, Tamil, and other court scripts.",
          ]}
          dont={[
            "Rely on Helvetica alone for Indic scripts.",
            "Use fixed widths that break at 200% zoom.",
            "Pack only xs icon buttons as the sole mobile actions.",
          ]}
        />
      </DocsSection>

      <DocsSection title="Related">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            <Link
              href="/components/session-timeout"
              className="text-foreground underline underline-offset-3"
            >
              Session timeout
            </Link>{" "}
            — timing warning pattern
          </li>
          <li>
            <Link
              href="/components/field"
              className="text-foreground underline underline-offset-3"
            >
              Field
            </Link>{" "}
            — labeled form composition
          </li>
          <li>
            <Link
              href="/foundations/colors"
              className="text-foreground underline underline-offset-3"
            >
              Colors
            </Link>{" "}
            — contrast-bearing semantic tokens
          </li>
        </ul>
      </DocsSection>
    </div>
  );
}
