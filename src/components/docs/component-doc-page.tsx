"use client";

import { PageHeader } from "@/components/docs/page-header";
import { Preview } from "@/components/docs/preview";
import { DocsSection } from "@/components/docs/section";
import { DoDont } from "@/components/docs/do-dont";
import { getComponentDoc } from "@/components/docs/component-registry";

export function ComponentDocPage({ slug }: { slug: string }) {
  const doc = getComponentDoc(slug);

  if (!doc) {
    return (
      <div className="flex flex-col gap-4">
        <PageHeader
          title="Component not found"
          description="This component is not in the documentation registry yet."
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <PageHeader title={doc.title} description={doc.description} />

      <code className="w-fit rounded-md bg-muted px-2 py-1 font-mono text-xs text-foreground">
        {doc.importPath}
      </code>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {doc.whenToUse.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title="Preview">
        <Preview>{doc.preview}</Preview>
      </DocsSection>

      {doc.variants ? (
        <DocsSection title="Variants & sizes">
          <Preview label="Variants">{doc.variants}</Preview>
        </DocsSection>
      ) : null}

      {doc.doItems && doc.dontItems ? (
        <DocsSection title="Do and don’t">
          <DoDont do={doc.doItems} dont={doc.dontItems} />
        </DocsSection>
      ) : null}

      <DocsSection title="Token coupling">
        <div className="flex flex-wrap gap-2">
          {doc.tokens.map((token) => (
            <code
              key={token}
              className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-foreground"
            >
              {token}
            </code>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Usage notes">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {doc.usageNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DocsSection>
    </div>
  );
}
