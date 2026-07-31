import type { ReactNode } from "react";

export type ComponentDocVariantSection = {
  label: string;
  content: ReactNode;
  /** Extra classes on the Preview body (e.g. for full-width matrices). */
  className?: string;
};

export type ComponentDoc = {
  slug: string;
  title: string;
  description: string;
  importPath: string;
  whenToUse: string[];
  tokens: string[];
  usageNotes: string[];
  preview: ReactNode;
  /** Single preview block — prefer `variantSections` for multi-block matrices. */
  variants?: ReactNode;
  /** Multiple labeled previews (sizes, icon-only, disabled, …). */
  variantSections?: ComponentDocVariantSection[];
  doItems?: string[];
  dontItems?: string[];
};
