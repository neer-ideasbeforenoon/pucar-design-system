import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";

export const metadata: Metadata = {
  title: "Elevation",
};

const levels = [
  {
    name: "Raised",
    className: "shadow-raised",
    token: "shadow-raised",
    used: "Genuinely lifted small boxes (not Card)",
    values: "0 1 2 + 0 1 3 · theme-bound ink",
  },
  {
    name: "Overlay",
    className: "shadow-overlay",
    token: "shadow-overlay",
    used: "Popovers, menus, tooltips",
    values: "0 4 8 −2 + 0 2 4 −2 · theme-bound ink",
  },
  {
    name: "Modal",
    className: "shadow-modal",
    token: "shadow-modal",
    used: "Dialogs, sheets",
    values: "0 16 32 −8 + 0 6 12 −6 · theme-bound ink",
  },
];

export default function ElevationPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Elevation"
        description="Four levels: flat (page and Card) → raised (select lifted boxes) → overlay (popovers) → modal (dialogs). Level is semantic depth, never decoration."
      />

      <Callout>
        Shadow colors are variable-bound, so the same effect deepens
        automatically in dark mode — never hardcode a{" "}
        <code>box-shadow</code> value in a component.
      </Callout>

      <DocsSection
        title="Levels"
        description="Each level is a dual box-shadow — an ambient layer plus a tighter key-light layer."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {levels.map((level) => (
            <div key={level.name} className="flex flex-col gap-3">
              <div
                className={`h-24 rounded-xl border border-border bg-card ${level.className}`}
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-foreground">
                  {level.name}
                </p>
                <p className="text-xs text-muted-foreground">{level.used}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {level.token} · {level.values}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Rules">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            <span className="text-foreground">Grouped panels use Card.</span>{" "}
            When content is a distinct, bounded unit (FAQ, form section, case
            facts), compose{" "}
            <code className="text-foreground">Card</code>. The page is white and{" "}
            <code className="text-foreground">card</code> shares that white on
            purpose — a panel reads by its hairline edge and raised shadow, not
            by a fill difference. Separation is a whisper stroke, never a block
            of colour.{" "}
            <code className="text-foreground">muted</code> and{" "}
            <code className="text-foreground">surface-raised</code> sit on
            neutral-2 — they do not replace an edge. Nested wells inside a card
            use <code className="text-foreground">surface-sunken</code>, with a
            hairline when the well holds interactive content.
          </li>
          <li>
            <span className="text-foreground">Depth is fill, not borders.</span>{" "}
            Nested wells use <code className="text-foreground">surface-sunken</code>{" "}
            with no border — the box-in-box ban. Chips and thumbnails are the
            border exception. Apply{" "}
            <code className="text-foreground">shadow-raised</code> only when a
            pattern explicitly calls for physical lift.
          </li>
          <li>
            <span className="text-foreground">Per-theme ink.</span> Light
            shadows are invisible on dark surfaces, collapsing the hierarchy
            at night. Dark mode deepens the same levels — raised .30/.40 ·
            overlay .45/.35 · modal .60/.45 — via the same tokens, one
            declaration per level.
          </li>
        </ul>
      </DocsSection>
    </div>
  );
}
