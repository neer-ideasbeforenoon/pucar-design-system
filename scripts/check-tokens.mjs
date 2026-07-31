#!/usr/bin/env node
/**
 * Enforces the token rules in AGENTS.md that would otherwise decay into prose.
 *
 *   1. No literal colour inside an arbitrary Tailwind value (`bg-[#007e7e]`).
 *      Arbitrary values that reference a token (`shadow-[…var(--border)]`) are fine.
 *   2. No raw grey ladder utilities (`bg-neutral-3`) — go through a semantic token.
 *   3. Every `--color-*` token resolves in both `:root` and `.dark`.
 *   4. The generated token block in AGENTS.md is in sync with globals.css.
 *
 * Escape hatch: put `ds-tokens-ignore` in a comment on the offending line or the
 * line above it — used for documentation that deliberately shows an anti-example.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import {
  currentDoc,
  findModeGaps,
  readTokens,
  renderBlock,
  withBlock,
} from "./sync-tokens.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");
const TOKEN_SOURCE = join(ROOT, "src/app/globals.css");
const IGNORE = "ds-tokens-ignore";

const COLOR_UTILITIES =
  "bg|text|border|ring|outline|fill|stroke|shadow|from|via|to|decoration|accent|caret|divide|placeholder";
const LITERAL_COLOR = new RegExp(
  `\\b(?:${COLOR_UTILITIES})-\\[[^\\]]*(?:#[0-9a-fA-F]{3,8}|oklch\\(|rgba?\\(|hsla?\\()`,
  "g"
);
const RAW_GREY = /\b(?:bg|text|border|ring|fill|stroke|from|via|to|divide|outline)-neutral-\d/g;

function sourceFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(tsx?|css)$/.test(entry) && full !== TOKEN_SOURCE ? [full] : [];
  });
}

function scan(file, findings) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    if (line.includes(IGNORE) || lines[index - 1]?.includes(IGNORE)) return;
    for (const [rule, pattern] of [
      ["literal colour in an arbitrary value", LITERAL_COLOR],
      ["raw grey ladder utility", RAW_GREY],
    ]) {
      for (const match of line.matchAll(pattern)) {
        findings.push({
          file: relative(ROOT, file),
          line: index + 1,
          rule,
          match: match[0],
        });
      }
    }
  });
}

const findings = [];
for (const file of sourceFiles(SRC)) scan(file, findings);

for (const { file, line, rule, match } of findings) {
  console.error(`${file}:${line}  ${rule} — ${match}`);
}

const tokens = readTokens();
let failed = findings.length > 0;

for (const { token, alias, missing } of findModeGaps(tokens)) {
  console.error(
    `src/app/globals.css  ${token} → ${alias} is missing from ${missing.join(" and ")}`
  );
  failed = true;
}

const doc = currentDoc();
if (withBlock(doc, renderBlock(tokens)) !== doc) {
  console.error("AGENTS.md  token block is stale — run `npm run sync:tokens`");
  failed = true;
}

if (failed) {
  console.error("\nToken check failed. See AGENTS.md for the rules.");
  process.exit(1);
}
console.log("Token check passed.");
