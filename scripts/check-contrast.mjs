#!/usr/bin/env node
/**
 * Measures the contrast pairs that ACCESSIBILITY.md promises and never proved.
 *
 * The August 2026 audit found chart-4 at 2.15:1 and warning at 1.54:1 while
 * `npm run lint` was green, because nothing in the gate had ever computed a
 * ratio. Prose asked humans to "prove with a contrast checker, do not eyeball";
 * this file is that checker.
 *
 * It also closes the loophole that let those values in: check-tokens.mjs skips
 * globals.css when it scans for hardcoded colour, so the one file where every
 * colour lives was exempt from rule 1. Here a literal is an error whenever an
 * equivalent ramp step already exists.
 *
 *   node scripts/check-contrast.mjs
 *
 * Deliberately NOT enforced at 3:1: `border`, `track`, `accent`, `muted` and
 * the other structural neutrals. Radix builds ramp steps 2-8 below 3:1 on
 * purpose and WCAG 1.4.11 exempts a decorative boundary. Any control whose
 * border is the only thing identifying it must use `input`, which is checked.
 */
import { readTokens } from "./sync-tokens.mjs";

/** [foreground, background, minimum ratio, what breaks if this regresses] */
const TEXT_PAIRS = [
  ["foreground", "background", "body copy"],
  ["muted-foreground", "background", "secondary copy"],
  ["card-foreground", "card", "text on a card"],
  ["popover-foreground", "popover", "text in a popover"],
  ["primary-foreground", "primary", "label on a primary button"],
  ["secondary-foreground", "secondary", "label on a secondary button"],
  ["accent-foreground", "accent", "label on a hovered control"],
  ["destructive-foreground", "destructive", "label on a destructive solid"],
  ["success-foreground", "success", "label on a success solid"],
  ["warning-foreground", "warning", "label on a warning solid"],
  ["info-foreground", "info", "label on an info solid"],
  ["brand-muted-foreground", "brand-muted", "text in a brand chip"],
  ["destructive-muted-foreground", "destructive-muted", "text in an error chip"],
  ["success-muted-foreground", "success-muted", "text in a success chip"],
  ["warning-muted-foreground", "warning-muted", "text in a warning chip"],
  ["info-muted-foreground", "info-muted", "text in an info chip"],
  ["destructive-ink", "background", "error text on the page"],
  ["success-ink", "background", "success text on the page"],
  ["warning-ink", "background", "warning text on the page"],
  ["info-ink", "background", "info text on the page"],
];

/** Non-text: chart series carry meaning and form fields need a real boundary. */
const NON_TEXT_PAIRS = [
  ["chart-1", "background", "chart series 1"],
  ["chart-2", "background", "chart series 2"],
  ["chart-3", "background", "chart series 3"],
  ["chart-4", "background", "chart series 4"],
  ["chart-5", "background", "chart series 5"],
  ["input", "background", "form field boundary"],
  ["ring", "background", "focus indicator"],
];

const TEXT_MIN = 4.5;
const NON_TEXT_MIN = 3;

const RAMPS = ["neutral", "brand", "success", "info", "warning", "destructive"];
const isRampStep = (name) =>
  RAMPS.some((r) => new RegExp(`^--${r}-\\d{1,2}$`).test(name));

function resolve(name, mode, base, seen = new Set()) {
  if (seen.has(name)) return null;
  seen.add(name);
  const raw = mode.get(name) ?? base.get(name);
  if (!raw) return null;
  const alias = raw.match(/^var\((--[\w-]+)\)$/)?.[1];
  if (alias) return resolve(alias, mode, base, seen);
  const hex = raw.match(/^#[0-9a-fA-F]{6}$/)?.[0];
  return hex ? hex.toLowerCase() : null;
}

const channel = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function ratio(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

const problems = [];
const { light, dark } = readTokens();

for (const [label, mode] of [
  ["light", light],
  ["dark", dark],
]) {
  for (const [pairs, min] of [
    [TEXT_PAIRS, TEXT_MIN],
    [NON_TEXT_PAIRS, NON_TEXT_MIN],
  ]) {
    for (const [fg, bg, why] of pairs) {
      const a = resolve(`--${fg}`, mode, light);
      const b = resolve(`--${bg}`, mode, light);
      if (!a || !b) {
        problems.push(`${label}: ${fg} on ${bg} — could not resolve to a hex`);
        continue;
      }
      const value = ratio(a, b);
      if (value < min) {
        problems.push(
          `${label}: ${fg} on ${bg} is ${value.toFixed(2)}:1, needs ${min}:1 — ${why}`
        );
      }
    }
  }
}

/* Rule 1, applied to the file rule 1 was never applied to. */
for (const [label, mode] of [
  [":root", light],
  [".dark", dark],
]) {
  const steps = new Map();
  for (const [name, value] of mode) {
    if (isRampStep(name) && /^#[0-9a-fA-F]{6}$/.test(value)) {
      steps.set(value.toLowerCase(), name);
    }
  }
  for (const [name, value] of mode) {
    if (isRampStep(name)) continue;
    const hex = value.match(/^#[0-9a-fA-F]{6}$/)?.[0]?.toLowerCase();
    const step = hex && steps.get(hex);
    if (step) {
      problems.push(
        `${label}: ${name} is the literal ${hex}, which is already ${step} — alias var(${step}) instead`
      );
    }
  }
}

for (const problem of problems) console.error(problem);

if (problems.length) {
  console.error("\nContrast check failed. See ACCESSIBILITY.md for the floor.");
  process.exit(1);
}
console.log(
  `Contrast check passed — ${(TEXT_PAIRS.length + NON_TEXT_PAIRS.length) * 2} pairs measured in both modes.`
);
