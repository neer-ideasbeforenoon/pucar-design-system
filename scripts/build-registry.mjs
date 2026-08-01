#!/usr/bin/env node
/**
 * Writes a minimal shadcn-style registry index to public/r/registry.json
 * so agents can discover installable components from this repo.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { readUiFiles, readNav } from "./ds-data.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public/r/registry.json");

const navSlugs = new Set(
  readNav()
    .flatMap((s) => s.items)
    .map((i) => i.href)
    .filter((h) => h.startsWith("/components/"))
    .map((h) => h.replace("/components/", ""))
);

const items = readUiFiles()
  .filter((slug) => navSlugs.has(slug))
  .sort()
  .map((name) => ({
    name,
    type: "registry:ui",
    title: name
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    files: [
      {
        path: `src/components/ui/${name}.tsx`,
        type: "registry:ui",
      },
    ],
  }));

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "pucar",
  homepage: "https://pucar-design-system-five.vercel.app",
  items,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Wrote ${items.length} registry items → public/r/registry.json`);
