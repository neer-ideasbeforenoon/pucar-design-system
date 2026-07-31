/**
 * Reads the design system's structured facts out of the code that already owns them,
 * so the agent-facing briefing never has to be written (or drift) by hand.
 *
 *   componentRegistry  → what each component is for
 *   docsNav            → how components are grouped
 *   icons.ts           → the allowlisted icon set
 *
 * The registry is a .tsx file full of JSX previews, so it cannot simply be imported.
 * Rather than parse JSX, this splits on top-level keys (which prettier keeps at a
 * two-space indent) and pulls only the plain string and string-array fields.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const PATHS = {
  registry: join(ROOT, "src/components/docs/component-registry.tsx"),
  nav: join(ROOT, "src/lib/docs-nav.ts"),
  icons: join(ROOT, "src/lib/icons.ts"),
  ui: join(ROOT, "src/components/ui"),
};

function readString(text, index) {
  const quote = text[index];
  let value = "";
  let i = index + 1;
  while (i < text.length) {
    const char = text[i];
    if (char === "\\") {
      value += text[i + 1];
      i += 2;
      continue;
    }
    if (char === quote) return { value, next: i + 1 };
    value += char;
    i++;
  }
  throw new Error("Unterminated string literal");
}

function stringField(chunk, field) {
  const match = new RegExp(`\\n\\s{4}${field}:\\s*`).exec(chunk);
  if (!match) return null;
  const at = match.index + match[0].length;
  return chunk[at] === '"' || chunk[at] === "'"
    ? readString(chunk, at).value
    : null;
}

function arrayField(chunk, field) {
  const match = new RegExp(`\\n\\s{4}${field}:\\s*\\[`).exec(chunk);
  if (!match) return null;
  let i = match.index + match[0].length;
  let depth = 1;
  const values = [];
  while (i < chunk.length && depth > 0) {
    const char = chunk[i];
    if (char === '"' || char === "'") {
      const { value, next } = readString(chunk, i);
      if (depth === 1) values.push(value);
      i = next;
      continue;
    }
    if (char === "[") depth++;
    else if (char === "]") depth--;
    i++;
  }
  return values;
}

/** `available(slug, title, description, …)` — the three leading string arguments. */
function availableArgs(chunk) {
  let i = chunk.indexOf("available(");
  if (i === -1) return null;
  i += "available(".length;
  const args = [];
  while (args.length < 3 && i < chunk.length) {
    const char = chunk[i];
    if (char === '"' || char === "'") {
      const { value, next } = readString(chunk, i);
      args.push(value);
      i = next;
      continue;
    }
    i++;
  }
  return args.length === 3 ? args : null;
}

/**
 * Sibling components a file imports. Copying a component without these produces
 * unresolved imports, which is the most common way a hand-off goes wrong.
 */
function siblingImports(slug) {
  const file = join(PATHS.ui, `${slug}.tsx`);
  if (!existsSync(file)) return [];
  const source = readFileSync(file, "utf8");
  const found = new Set();
  for (const match of source.matchAll(/from "@\/components\/ui\/([a-z0-9-]+)"/g)) {
    if (match[1] !== slug) found.add(match[1]);
  }
  return [...found].sort();
}

export function readComponents() {
  const source = readFileSync(PATHS.registry, "utf8");
  const start = source.indexOf("export const componentRegistry");
  if (start === -1) throw new Error("componentRegistry not found");
  const body = source.slice(source.indexOf("{", start));

  const keyPattern = /\n {2}(?:"([a-z0-9-]+)"|([a-zA-Z][a-zA-Z0-9]*)): /g;
  const starts = [];
  for (const match of body.matchAll(keyPattern)) {
    starts.push({ slug: match[1] ?? match[2], at: match.index });
  }

  return starts.map(({ slug, at }, index) => {
    const chunk = body.slice(at, starts[index + 1]?.at ?? body.length);
    const generic = availableArgs(chunk);
    if (generic) {
      const [, title, description] = generic;
      return {
        slug,
        title,
        description,
        importPath: `@/components/ui/${slug}`,
        whenToUse: [],
        usageNotes: [],
        doItems: [],
        dontItems: [],
        tokens: [],
        dependsOn: siblingImports(slug),
        ratified: false,
      };
    }
    return {
      slug,
      title: stringField(chunk, "title") ?? slug,
      description: stringField(chunk, "description") ?? "",
      importPath:
        stringField(chunk, "importPath") ?? `@/components/ui/${slug}`,
      whenToUse: arrayField(chunk, "whenToUse") ?? [],
      usageNotes: arrayField(chunk, "usageNotes") ?? [],
      doItems: arrayField(chunk, "doItems") ?? [],
      dontItems: arrayField(chunk, "dontItems") ?? [],
      tokens: arrayField(chunk, "tokens") ?? [],
      dependsOn: siblingImports(slug),
      ratified: true,
    };
  });
}

export function readNav() {
  const source = readFileSync(PATHS.nav, "utf8");
  const body = source.slice(source.indexOf("export const docsNav"));
  const sections = [];
  const sectionPattern = /\n {4}title: "([^"]+)",\n {4}items: \[/g;
  for (const match of body.matchAll(sectionPattern)) {
    const rest = body.slice(match.index + match[0].length);
    const items = [];
    for (const item of rest
      .slice(0, rest.indexOf("\n    ],"))
      .matchAll(/\{ title: "([^"]+)", href: "([^"]+)" \}/g)) {
      items.push({ title: item[1], href: item[2] });
    }
    sections.push({ title: match[1], items });
  }
  return sections;
}

export function readIcons() {
  const source = readFileSync(PATHS.icons, "utf8");
  return [...source.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
}

export function readUiFiles() {
  return readdirSync(PATHS.ui)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(/\.tsx$/, ""));
}
