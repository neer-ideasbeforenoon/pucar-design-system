import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { Preview } from "@/components/docs/preview";

export const metadata: Metadata = {
  title: "Typography",
};

const specimens = [
  { label: "Display", className: "text-display font-semibold tracking-tight", meta: "text-display · 48/56 · 600", sample: "Hearings at a glance" },
  { label: "Display S", className: "text-display-s font-semibold tracking-tight", meta: "text-display-s · 40/48 · 600", sample: "Hearings at a glance" },
  { label: "Title L", className: "text-title-l font-semibold", meta: "text-title-l · 32/40 · 600", sample: "Case CNR KLEK020012342026" },
  { label: "Title", className: "text-title font-semibold", meta: "text-title · 24/32 · 600", sample: "Section 138 — cheque dishonour" },
  { label: "Title S", className: "text-title-s font-semibold", meta: "text-title-s · 20/28 · 600", sample: "Next hearing 24 July 2026" },
  { label: "Body", className: "text-body", meta: "text-body · 16/24 · 400", sample: "The respondent is directed to appear before the Kollam magistrate court." },
  { label: "Body Medium", className: "text-body font-medium", meta: "text-body + font-medium", sample: "Field labels in horizontal rows, LG button labels." },
  { label: "Body Compact", className: "text-body-compact", meta: "text-body-compact · 14/20 · 400 — dense staff tables, opt-in only", sample: "Dense staff tables — opt-in, never citizen-facing default." },
  { label: "Body Compact Medium", className: "text-body-compact font-medium", meta: "text-body-compact + font-medium", sample: "Button and menu labels." },
  { label: "Caption", className: "text-caption", meta: "text-caption · 12/16 · 500 (weight floor)", sample: "Filed 12 June 2026 · weight floor 500" },
  { label: "Code", className: "font-mono text-body-compact", meta: "font-mono · 14/20", sample: "KLEK020012342026" },
];

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Typography"
        description="Major-third scale (1.250), base 16, line-heights on the 8px grid. Hierarchy comes from size and weight — never a second display family."
      />

      <Callout tone="warning" title="Corrected">
        The typeface is <b>not</b> Noto Sans. Code ships the zero-download
        system stack — <code>&quot;Helvetica Neue&quot;, Helvetica, Arial, system-ui</code> —
        so nothing downloads over the network. Mono is{" "}
        <code>ui-monospace, &quot;SF Mono&quot;, &quot;Roboto Mono&quot;</code>. Figma itself
        substitutes Inter because Helvetica Neue isn&apos;t installed in that
        environment — that substitution never applies to shipped product UI.
      </Callout>

      <DocsSection
        title="Type scale"
        description="11 named styles, each mapped to a real token — text-display through text-caption."
      >
        <div className="flex flex-col gap-3">
          {specimens.map((item) => (
            <Preview key={item.label} label={item.label} className="flex-col items-start gap-1">
              <p className={item.className}>{item.sample}</p>
              <p className="font-mono text-xs text-muted-foreground">{item.meta}</p>
            </Preview>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Guidance">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            Page titles use <code className="text-foreground">text-title-l</code>{" "}
            or <code className="text-foreground">text-title</code>, both
            <code className="text-foreground"> font-semibold</code>.
          </li>
          <li>
            Section titles use{" "}
            <code className="text-foreground">text-title-s font-semibold</code>.
          </li>
          <li>
            Body copy defaults to{" "}
            <code className="text-foreground">text-body</code> in{" "}
            <code className="text-foreground">text-foreground</code>; use{" "}
            <code className="text-foreground">text-body-compact</code> only for
            dense, opt-in staff tables — never as the citizen-facing default.
          </li>
          <li>
            Supporting copy uses{" "}
            <code className="text-foreground">text-muted-foreground</code> —
            never a lighter gray invented ad hoc.
          </li>
          <li>
            Sentence case everywhere — headings, buttons, nav, table headers.
            Never ALL-CAPS or Title Case. Exceptions: proper nouns (ON Court,
            Pucar) and legal abbreviations (CNR, FIR, S.138).
          </li>
          <li>
            Multilingual court UIs may need Devanagari, Tamil, and other Indic
            scripts. Line heights must tolerate taller glyphs; product apps
            extend the font stack with appropriate Unicode fonts — Helvetica
            alone does not cover those scripts. See{" "}
            <a
              href="/foundations/accessibility"
              className="text-foreground underline underline-offset-3"
            >
              Accessibility
            </a>
            .
          </li>
        </ul>
      </DocsSection>
    </div>
  );
}
