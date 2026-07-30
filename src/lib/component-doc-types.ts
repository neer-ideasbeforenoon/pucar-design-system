import type { ReactNode } from "react";

export type ComponentDoc = {
  slug: string;
  title: string;
  description: string;
  importPath: string;
  whenToUse: string[];
  tokens: string[];
  usageNotes: string[];
  preview: ReactNode;
  variants?: ReactNode;
  doItems?: string[];
  dontItems?: string[];
};
