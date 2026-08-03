import type { Metadata } from "next";
import Link from "next/link";

import { Callout } from "@/components/docs/callout";
import { DoDont } from "@/components/docs/do-dont";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";

export const metadata: Metadata = {
  title: "Radius",
};

/**
 * Derived from the single --radius knob (0.625rem = 10px) in globals.css.
 * Multipliers match the Abhiram Figma "Spacing & radius" page.
 */
const radii = [
  {
    name: "none",
    className: "rounded-none",
    value: "0px",
    multiplier: "—",
    role: "sharp corners only when required",
  },
  {
    name: "xs",
    className: "rounded-xs",
    value: "4px",
    multiplier: "×0.4",
    role: "micro insets",
  },
  {
    name: "sm",
    className: "rounded-sm",
    value: "6px",
    multiplier: "×0.6",
    role: "inset sm",
  },
  {
    name: "md",
    className: "rounded-md",
    value: "8px",
    multiplier: "×0.8",
    role: "insets",
  },
  {
    name: "lg",
    className: "rounded-lg",
    value: "10px",
    multiplier: "×1.0",
    role: "controls",
  },
  {
    name: "xl",
    className: "rounded-xl",
    value: "14px",
    multiplier: "×1.4",
    role: "containers",
  },
  {
    name: "2xl",
    className: "rounded-2xl",
    value: "18px",
    multiplier: "×1.8",
    role: "large surfaces",
  },
  {
    name: "3xl",
    className: "rounded-3xl",
    value: "22px",
    multiplier: "×2.2",
    role: "extra-large surfaces",
  },
  {
    name: "4xl",
    className: "rounded-4xl",
    value: "26px",
    multiplier: "×2.6",
    role: "hero / oversized shells",
  },
  {
    name: "full",
    className: "rounded-full",
    value: "999px",
    multiplier: "—",
    role: "chips & pills",
  },
] as const;

const roles = [
  { role: "Containers", token: "rounded-xl", note: "Cards, panels, dialogs" },
  {
    role: "Controls",
    token: "rounded-lg",
    note: "Buttons, inputs, selects — default 10px",
  },
  {
    role: "Insets",
    token: "rounded-md / rounded-sm",
    note: "Nested chrome inside a control or menu",
  },
  {
    role: "Chips & pills",
    token: "rounded-full",
    note: "Badges, tags, avatar rings",
  },
];

export default function RadiusPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Radius"
        description="One 10px knob, roles not choices. Every step below is derived from a single --radius value (0.625rem) — change the knob and the whole system rounds together."
      />

      <Callout title="Assignment is by role">
        Never invent values like{" "}
        {/* ds-tokens-ignore — anti-example in docs prose */}
        <code>rounded-[7px]</code>. Containers use{" "}
        <code>rounded-xl</code>, controls use <code>rounded-lg</code>, insets
        use <code>rounded-md</code>/<code>rounded-sm</code>, chips use{" "}
        <code>rounded-full</code>. Retune the knob in{" "}
        <code>src/app/globals.css</code> (<code>--radius: 0.625rem</code>) — not
        per component.
      </Callout>

      <DocsSection
        title="Scale"
        description="Derived: sm ×0.6 · md ×0.8 · lg ×1.0 · xl ×1.4 · 2xl ×1.8 · 3xl ×2.2 · 4xl ×2.6. xs (×0.4) is available for micro insets."
      >
        <div className="flex flex-wrap gap-4">
          {radii
            .filter((item) => item.name !== "none")
            .map((item) => (
              <div
                key={item.name}
                className="flex w-24 flex-col items-center gap-1.5"
              >
                <div
                  className={`h-16 w-full border border-border bg-surface-sunken ${item.className}`}
                  aria-hidden
                />
                <div className="text-center text-caption font-medium leading-4 text-muted-foreground">
                  <p>radius/{item.name}</p>
                  <p>
                    {item.value.replace("px", "")}
                    {item.role ? ` · ${item.role}` : ""}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </DocsSection>

      <DocsSection title="Roles">
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-2.5 font-medium">Role</th>
                <th className="px-4 py-2.5 font-medium">Utility</th>
                <th className="px-4 py-2.5 font-medium">Use for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {roles.map((row) => (
                <tr key={row.role}>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.role}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {row.token}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection
        title="Token reference"
        description="Full ladder including none and multipliers against --radius."
      >
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-2.5 font-medium">Token</th>
                <th className="px-4 py-2.5 font-medium">Class</th>
                <th className="px-4 py-2.5 font-medium">Value</th>
                <th className="px-4 py-2.5 font-medium">× knob</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {radii.map((item) => (
                <tr key={item.name}>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    radius-{item.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {item.className}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {item.value}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {item.multiplier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection title="Rules">
        <DoDont
          do={[
            "rounded-lg on buttons, inputs, and select triggers",
            "rounded-xl on Card, Dialog, and other containers",
            "Change --radius once in globals.css to retune the system",
          ]}
          dont={[
            "rounded-md as the default control corner",
            "Picking a step by taste instead of role",
            // ds-tokens-ignore — anti-example in docs prose
            "Arbitrary radii: rounded-[7px], rounded-[10px]",
          ]}
        />
        <Callout className="mt-4">
          Spacing uses Tailwind&apos;s default scale (no custom tokens). See{" "}
          <Link
            href="/foundations/spacing"
            className="underline underline-offset-3"
          >
            Spacing
          </Link>
          .
        </Callout>
      </DocsSection>
    </div>
  );
}
