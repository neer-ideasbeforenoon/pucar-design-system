import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { PrimitiveRamp } from "@/components/docs/primitive-ramp";
import { DocsSection } from "@/components/docs/section";
import { TokenSwatch } from "@/components/docs/token-swatch";

export const metadata: Metadata = {
  title: "Colors",
};

const primitiveFamilies = [
  { family: "neutral", label: "Neutral" },
  { family: "brand", label: "Brand (teal)" },
  { family: "success", label: "Success" },
  { family: "info", label: "Info" },
  { family: "warning", label: "Warning" },
  { family: "destructive", label: "Destructive" },
] as const;

type MappingRow = {
  semantic: string;
  light: string;
  dark: string;
  note?: string;
};

/** Exact aliases from globals.css — literals are called out when not a var(--step). */
const semanticMapping: MappingRow[] = [
  {
    semantic: "background",
    light: "neutral-1",
    dark: "neutral-1",
  },
  {
    semantic: "foreground",
    light: "neutral-12",
    dark: "neutral-12",
  },
  {
    semantic: "card / popover / surface / surface-raised",
    light: "neutral-1",
    dark: "neutral-1",
  },
  {
    semantic: "card-foreground / popover-foreground",
    light: "neutral-12",
    dark: "neutral-12",
  },
  {
    semantic: "surface-sunken",
    light: "#f4f4f7",
    dark: "#1d1e21",
    note: "Tuned 2½-step well — not a raw ramp step",
  },
  {
    semantic: "track",
    light: "neutral-6",
    dark: "neutral-6",
    note: "Recessed tracks and placeholder wells",
  },
  {
    semantic: "prefilled",
    light: "warning-2",
    dark: "warning-2",
  },
  {
    semantic: "primary",
    light: "#007e7e",
    dark: "brand-10",
    note: "Brand solid — the light value is off-ramp by design",
  },
  {
    semantic: "primary-foreground",
    light: "#ffffff",
    dark: "#0a0a0a",
  },
  {
    semantic: "brand-accent",
    light: "brand-9",
    dark: "brand-9",
    note: "Marks only, never text",
  },
  {
    semantic: "brand-muted",
    light: "brand-3",
    dark: "brand-3",
  },
  {
    semantic: "brand-muted-foreground",
    light: "#0a6969",
    dark: "brand-11",
  },
  {
    semantic: "secondary / accent",
    light: "neutral-4",
    dark: "neutral-4",
    note: "Hover fill — one step darker than the page can be read against",
  },
  {
    semantic: "secondary-foreground / accent-foreground",
    light: "neutral-12",
    dark: "neutral-12",
  },
  {
    semantic: "muted",
    light: "neutral-2",
    dark: "neutral-2",
  },
  {
    semantic: "muted-foreground",
    light: "neutral-11",
    dark: "neutral-11",
  },
  {
    semantic: "accent-strong",
    light: "neutral-5",
    dark: "neutral-5",
    note: "Pressed, engaged and selected states",
  },
  {
    semantic: "border",
    light: "neutral-8",
    dark: "neutral-8",
    note: "Structural only — a control that needs a 3:1 edge uses input",
  },
  {
    semantic: "input",
    light: "neutral-9",
    dark: "neutral-9",
    note: "Stronger field edge than the default border",
  },
  {
    semantic: "ring",
    light: "#007e7e",
    dark: "#0eb39e",
    note: "Matches primary",
  },
  {
    semantic: "success",
    light: "#217a3a",
    dark: "success-9",
    note: "The light value is tuned off-ramp for 4.5:1",
  },
  {
    semantic: "success-muted",
    light: "success-3",
    dark: "success-3",
  },
  {
    semantic: "success-muted-foreground / success-ink",
    light: "success-11",
    dark: "success-11",
  },
  {
    semantic: "warning",
    light: "warning-9",
    dark: "warning-9",
    note: "1.54:1 on the page, so the solid button carries a warning-ink border",
  },
  {
    semantic: "warning-muted",
    light: "warning-3",
    dark: "warning-3",
  },
  {
    semantic: "warning-muted-foreground / warning-ink",
    light: "#9d5c00",
    dark: "warning-11",
    note: "Light ink is tuned off-ramp for 4.5:1",
  },
  {
    semantic: "warning-foreground",
    light: "#3d2000",
    dark: "#3d2000",
    note: "Ink on solid amber — same in both themes",
  },
  {
    semantic: "info",
    light: "info-11",
    dark: "info-10",
  },
  {
    semantic: "info-muted",
    light: "info-3",
    dark: "info-3",
  },
  {
    semantic: "info-muted-foreground / info-ink",
    light: "#0c6ec3",
    dark: "info-11",
    note: "Light ink is tuned off-ramp for 4.5:1",
  },
  {
    semantic: "destructive",
    light: "#c1232a",
    dark: "destructive-10",
    note: "The light value is tuned off-ramp for 4.5:1",
  },
  {
    semantic: "destructive-muted",
    light: "destructive-3",
    dark: "destructive-3",
  },
  {
    semantic: "destructive-muted-foreground / destructive-ink",
    light: "destructive-11",
    dark: "destructive-11",
  },
  {
    semantic: "chart-1 / chart-2",
    light: "primary · info-11",
    dark: "primary · info-10",
  },
  {
    semantic: "chart-3 … chart-5",
    light: "literal categorical hex",
    dark: "literal categorical hex",
    note: "Series identity only, never status — each clears 3:1 on the page",
  },
];

const semantic = [
  {
    name: "Background",
    token: "background / foreground",
    className: "bg-background",
    foregroundClassName: "text-foreground",
  },
  {
    name: "Primary",
    token: "primary / primary-foreground",
    className: "bg-primary",
    foregroundClassName: "text-primary-foreground",
  },
  {
    name: "Secondary",
    token: "secondary / secondary-foreground",
    className: "bg-secondary",
    foregroundClassName: "text-secondary-foreground",
  },
  {
    name: "Muted",
    token: "muted / muted-foreground",
    className: "bg-muted",
    foregroundClassName: "text-muted-foreground",
  },
  {
    name: "Accent",
    token: "accent / accent-foreground",
    className: "bg-accent",
    foregroundClassName: "text-accent-foreground",
  },
  {
    name: "Destructive",
    token: "destructive / destructive-foreground",
    className: "bg-destructive",
    foregroundClassName: "text-destructive-foreground",
  },
  {
    name: "Success",
    token: "success / success-foreground",
    className: "bg-success",
    foregroundClassName: "text-success-foreground",
  },
  {
    name: "Warning",
    token: "warning / warning-foreground",
    className: "bg-warning",
    foregroundClassName: "text-warning-foreground",
  },
  {
    name: "Info",
    token: "info / info-foreground",
    className: "bg-info",
    foregroundClassName: "text-info-foreground",
  },
  {
    name: "Card",
    token: "card / card-foreground",
    className: "bg-card",
    foregroundClassName: "text-card-foreground",
  },
  {
    name: "Popover",
    token: "popover / popover-foreground",
    className: "bg-popover",
    foregroundClassName: "text-popover-foreground",
  },
  {
    name: "Border",
    token: "border",
    className: "bg-border",
    foregroundClassName: "text-foreground",
  },
  {
    name: "Input",
    token: "input",
    className: "bg-input",
    foregroundClassName: "text-foreground",
  },
];

const surfaces = [
  {
    name: "Surface sunken",
    token: "surface-sunken",
    className: "bg-surface-sunken",
    foregroundClassName: "text-foreground",
  },
  {
    name: "Track",
    token: "track",
    className: "bg-track",
    foregroundClassName: "text-foreground",
  },
  {
    name: "Prefilled",
    token: "prefilled",
    className: "bg-prefilled",
    foregroundClassName: "text-foreground",
  },
  {
    name: "Accent strong",
    token: "accent-strong",
    className: "bg-accent-strong",
    foregroundClassName: "text-foreground",
  },
];

const muted = [
  {
    name: "Brand muted",
    token: "brand-muted / brand-muted-foreground",
    className: "bg-brand-muted",
    foregroundClassName: "text-brand-muted-foreground",
  },
  {
    name: "Success muted",
    token: "success-muted / success-muted-foreground",
    className: "bg-success-muted",
    foregroundClassName: "text-success-muted-foreground",
  },
  {
    name: "Warning muted",
    token: "warning-muted / warning-muted-foreground",
    className: "bg-warning-muted",
    foregroundClassName: "text-warning-muted-foreground",
  },
  {
    name: "Info muted",
    token: "info-muted / info-muted-foreground",
    className: "bg-info-muted",
    foregroundClassName: "text-info-muted-foreground",
  },
  {
    name: "Destructive muted",
    token: "destructive-muted / destructive-muted-foreground",
    className: "bg-destructive-muted",
    foregroundClassName: "text-destructive-muted-foreground",
  },
];

const inks = [
  { name: "Success ink", token: "success-ink", className: "text-success-ink" },
  { name: "Warning ink", token: "warning-ink", className: "text-warning-ink" },
  { name: "Info ink", token: "info-ink", className: "text-info-ink" },
  {
    name: "Destructive ink",
    token: "destructive-ink",
    className: "text-destructive-ink",
  },
];

const charts = [
  { name: "Chart 1", token: "chart-1", className: "bg-chart-1" },
  { name: "Chart 2", token: "chart-2", className: "bg-chart-2" },
  { name: "Chart 3", token: "chart-3", className: "bg-chart-3" },
  { name: "Chart 4", token: "chart-4", className: "bg-chart-4" },
  { name: "Chart 5", token: "chart-5", className: "bg-chart-5" },
];

function MappingCell({ value }: { value: string }) {
  const isHex = value.startsWith("#");
  const isLiteral = value.includes(" ") || isHex;
  return (
    <td className="px-3 py-2.5 font-mono text-xs text-foreground">
      {isLiteral ? value : `--${value}`}
    </td>
  );
}

export default function ColorsPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Colors"
        description="Rajini 2.0 primitives aliased by semantics. Toggle the theme in the header to inspect both modes."
      />

      <Callout title="Usage">
        Prefer role utilities — <code>bg-primary</code>,{" "}
        <code>text-muted-foreground</code>, <code>border-border</code> — never
        raw hex, and never a raw primitive step like{" "}
        <code>brand-9</code> (there is no such utility — semantic tokens are
        the only door in). Neutrals underpin surfaces; brand teal drives
        highest-emphasis actions.
      </Callout>

      <Callout title="Three treatments per status" tone="warning">
        Every status color ships exactly three treatments, never a fourth:{" "}
        <b>solid</b> (<code>bg-success</code> — the action is the status),{" "}
        <b>muted</b> (<code>bg-success-muted</code> — chips, callouts, rows),
        and <b>ink</b> (<code>text-success-ink</code> — text/icons on
        neutral). Status fills are opaque tokens, never alpha — contrast
        depends on the backdrop.
      </Callout>

      <DocsSection
        title="Primitive ramps"
        description="Radix-style 12-step scales defined in globals.css. Reference only — product UI must go through a semantic token, never a raw step."
      >
        <div className="flex flex-col gap-5">
          {primitiveFamilies.map((ramp) => (
            <PrimitiveRamp key={ramp.family} {...ramp} />
          ))}
        </div>
      </DocsSection>

      <DocsSection
        title="Semantic → primitive mapping"
        description="How each role resolves in light and dark. A step name (neutral-3) is the matching ramp token — usually via var(--neutral-3). Hex is a literal that does not equal a named step."
      >
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-3 py-2.5 font-medium">Semantic</th>
                <th className="px-3 py-2.5 font-medium">Light</th>
                <th className="px-3 py-2.5 font-medium">Dark</th>
                <th className="px-3 py-2.5 font-medium">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {semanticMapping.map((row) => (
                <tr key={row.semantic}>
                  <td className="px-3 py-2.5 font-mono text-xs text-foreground">
                    {row.semantic}
                  </td>
                  <MappingCell value={row.light} />
                  <MappingCell value={row.dark} />
                  <td className="px-3 py-2.5 text-xs">
                    {row.note ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection
        title="Semantic palette"
        description="Roles for product UI. Pair background tokens with their -foreground counterparts for text and icons."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {semantic.map((swatch) => (
            <TokenSwatch key={swatch.token} {...swatch} />
          ))}
        </div>
      </DocsSection>

      <DocsSection
        title="Muted &amp; ink pairs"
        description="The tint half and text half of the three-treatments system, for brand and every status color."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {muted.map((swatch) => (
            <TokenSwatch key={swatch.token} {...swatch} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          {inks.map((ink) => (
            <span
              key={ink.token}
              className={`font-mono text-sm ${ink.className}`}
            >
              {ink.name}
            </span>
          ))}
        </div>
      </DocsSection>

      <DocsSection
        title="Structural surfaces"
        description="Named roles so components never reach for a raw neutral-N step directly."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {surfaces.map((swatch) => (
            <TokenSwatch key={swatch.token} {...swatch} />
          ))}
        </div>
      </DocsSection>

      <DocsSection
        title="Chart palette"
        description="Categorical series for data visualization. Chart 1 aligns with brand primary."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {charts.map((swatch) => (
            <TokenSwatch
              key={swatch.token}
              {...swatch}
              foregroundClassName="text-primary-foreground"
            />
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Roles at a glance">
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-2.5 font-medium">Token</th>
                <th className="px-4 py-2.5 font-medium">Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {[
                ["primary", "Highest-emphasis actions (teal brand)"],
                ["secondary", "Supporting actions, light fills"],
                ["muted", "De-emphasized backgrounds / secondary text"],
                ["accent", "Hover and highlight fills"],
                ["destructive", "Irreversible or dangerous actions"],
                ["success / warning / info", "Status communication"],
                ["border / input / ring", "Edges, fields, and focus"],
              ].map(([token, use]) => (
                <tr key={token}>
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                    {token}
                  </td>
                  <td className="px-4 py-2.5">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>
    </div>
  );
}
