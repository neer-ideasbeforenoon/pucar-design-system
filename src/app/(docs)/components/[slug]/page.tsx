import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComponentDocPage } from "@/components/docs/component-doc-page";
import { getAllComponentSlugs, getComponentNavItem } from "@/lib/docs-nav";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllComponentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getComponentNavItem(slug);
  return {
    title: item?.title ?? "Component",
  };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const known = getAllComponentSlugs().includes(slug);

  if (!known) {
    notFound();
  }

  return <ComponentDocPage slug={slug} />;
}
