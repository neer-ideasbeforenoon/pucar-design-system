import type { Metadata } from "next";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { Preview } from "@/components/docs/preview";

export const metadata: Metadata = {
  title: "Typography",
};

const specimens = [
  { label: "Display", className: "text-4xl font-semibold tracking-tight", sample: "Pucar Design System" },
  { label: "Heading 1", className: "text-3xl font-semibold tracking-tight", sample: "Build with teal, not guesses" },
  { label: "Heading 2", className: "text-xl font-semibold tracking-tight", sample: "Foundations before components" },
  { label: "Body", className: "text-base", sample: "Noto Sans is the body and UI typeface confirmed from the live Figma file." },
  { label: "Small", className: "text-sm", sample: "Secondary explanations, form help, and dense UI copy." },
  { label: "Muted", className: "text-sm text-muted-foreground", sample: "De-emphasized supporting text uses muted-foreground." },
  { label: "Mono", className: "font-mono text-sm", sample: "bg-primary · --radius-md · chart-1" },
];

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Typography"
        description="Noto Sans carries all product UI. Hierarchy comes from size and weight — not from introducing a second display family."
      />

      <Callout>
        Font variables: <code>--font-sans</code> (Noto Sans) and{" "}
        <code>--font-geist-mono</code> for code and token names.
      </Callout>

      <DocsSection title="Type scale">
        <div className="flex flex-col gap-3">
          {specimens.map((item) => (
            <Preview key={item.label} label={item.label} className="justify-start">
              <p className={item.className}>{item.sample}</p>
            </Preview>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Guidance">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            Page titles use{" "}
            <code className="text-foreground">text-3xl</code> /{" "}
            <code className="text-foreground">text-4xl</code> with{" "}
            <code className="text-foreground">font-semibold</code>.
          </li>
          <li>
            Section titles use{" "}
            <code className="text-foreground">text-xl font-semibold</code>.
          </li>
          <li>
            Body copy defaults to{" "}
            <code className="text-foreground">text-base</code> /{" "}
            <code className="text-foreground">text-sm</code> in{" "}
            <code className="text-foreground">text-foreground</code>.
          </li>
          <li>
            Supporting copy uses{" "}
            <code className="text-foreground">text-muted-foreground</code> —
            never a lighter gray invented ad hoc.
          </li>
        </ul>
      </DocsSection>
    </div>
  );
}
