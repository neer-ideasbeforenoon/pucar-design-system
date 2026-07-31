import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { TokenSwatch } from "@/components/docs/token-swatch";

export const metadata: Metadata = {
  title: "Colors",
};

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
    name: "Border / Input",
    token: "border · input",
    className: "bg-border",
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

export default function ColorsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Colors"
        description="Semantic color tokens extracted from the live PUCAR DS Figma variables. Toggle the theme in the header to inspect both modes."
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
        Every status colour ships exactly three treatments, never a fourth:{" "}
        <b>solid</b> (<code>bg-success</code> — the action is the status),{" "}
        <b>muted</b> (<code>bg-success-muted</code> — chips, callouts, rows),
        and <b>ink</b> (<code>text-success-ink</code> — text/icons on
        neutral). Status fills are opaque tokens, never alpha — contrast
        depends on the backdrop.
      </Callout>

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
        description="The tint half and text half of the three-treatments system, for brand and every status colour."
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
