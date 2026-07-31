#!/usr/bin/env node
/**
 * Keeps the agent-facing hand-off honest.
 *
 *   1. Every nav entry has a registry entry, and vice versa — a registry entry with no
 *      nav entry has no route at all, and a nav entry with no registry entry renders empty.
 *   2. Every registry entry has a real component file.
 *   3. New components land in the registry. Existing gaps are listed in BACKLOG so the
 *      count can shrink but never grow.
 */
import { readComponents, readNav, readUiFiles } from "./ds-data.mjs";

/**
 * Components that exist but are not documented. These are a known debt, not a
 * standard — do not add to this list. Document the component instead.
 */
const BACKLOG = new Set([
  "aspect-ratio",
  "attachment",
  "bubble",
  "direction",
  "item",
  "marker",
  "message",
  "message-scroller",
  "native-select",
  "resizable",
]);

const problems = [];
const components = readComponents();
const documented = new Set(components.map((c) => c.slug));
const uiFiles = new Set(readUiFiles());
const navSlugs = new Set(
  readNav()
    .flatMap((section) => section.items)
    .filter((item) => item.href.startsWith("/components/"))
    .map((item) => item.href.replace("/components/", ""))
);

for (const slug of documented) {
  if (!navSlugs.has(slug)) {
    problems.push(
      `${slug}: in componentRegistry but not in docsNav — the page has no route`
    );
  }
  if (!uiFiles.has(slug)) {
    problems.push(`${slug}: in componentRegistry but src/components/ui/${slug}.tsx is missing`);
  }
}

for (const slug of navSlugs) {
  if (!documented.has(slug)) {
    problems.push(
      `${slug}: in docsNav but not in componentRegistry — the page renders empty`
    );
  }
}

for (const slug of uiFiles) {
  if (!documented.has(slug) && !BACKLOG.has(slug)) {
    problems.push(
      `${slug}: component exists but has no componentRegistry entry — an undocumented component is not part of the system`
    );
  }
}

for (const slug of BACKLOG) {
  if (documented.has(slug)) {
    problems.push(`${slug}: now documented — remove it from BACKLOG in scripts/check-ds.mjs`);
  } else if (!uiFiles.has(slug)) {
    problems.push(`${slug}: listed in BACKLOG but no longer exists — remove it`);
  }
}

for (const problem of problems) console.error(problem);

const unratified = components.filter((c) => !c.ratified).length;
console.log(
  `${components.length - unratified} of ${components.length} components ratified · ` +
    `${unratified} awaiting guidance · ${BACKLOG.size} undocumented`
);

if (problems.length) {
  console.error("\nDesign system check failed.");
  process.exit(1);
}
console.log("Design system check passed.");
