<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Pucar Design System

This repo is the source of truth for Pucar's design tokens and UI components. It exists so
that both humans and AI coding agents build UI that matches Pucar's actual design system,
instead of inventing new colors, spacing, or components per-project.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (tokens defined as CSS custom properties in `src/app/globals.css`, mapped
  via `@theme inline`)
- shadcn/ui (Radix primitives) — real, upstream component code in `src/components/ui/`

## Rules for building UI in this system

1. **Never hardcode a color, spacing, or radius value.** Always use the Tailwind utility that
   maps to a token (`bg-primary`, `text-muted-foreground`, `border-border`, `rounded-md`,
   `gap-4`, etc.) — never a raw hex, oklch, or arbitrary Tailwind value like `bg-[#007e7e]`.
2. **Never add a new shadcn component by hand-writing it.** Install it for real:
   `npx shadcn@latest add <component>`. This keeps components upstream-correct and easy to
   update.
3. **Reuse an existing component before creating a new one.** Check `src/components/ui/`
   first.
4. **All new colors must support both light and dark mode.** Add the token to both `:root`
   and `.dark` in `globals.css`, never just one.
5. **Components must be responsive in product UI.** Follow [`RESPONSIVE.md`](./RESPONSIVE.md)
   when composing screens — mobile-first layouts, fluid widths, correct overlays
   (Dialog / Sheet / Drawer / Sidebar). The docs site itself does not need to be responsive;
   the components do.

6. **Follow the Laws, not just the tokens.** See [Principles](/principles) and the
   [Typography](/foundations/typography) / [Colors](/foundations/colors) /
   [Elevation](/foundations/elevation) pages for the non-negotiables: sentence case
   everywhere, one rationed teal action per view, exactly three treatments per status
   (solid / muted / ink — never a fourth, never alpha), the grey ladder (never a raw
   `neutral-N`), depth via fill not borders, status never conveyed by colour alone, WCAG
   2.2 AA as the floor, and fixed control metrics (40px default control height, 24px
   container padding, 40px minimum touch target).

## Token reference

| Token | Use |
|---|---|
| `background` / `foreground` | Page background / default text |
| `surface` / `surface-raised` / `surface-sunken` | Structural base / lifted (cards) / recessed (nested wells, no border) |
| `track` | Recessed control tracks — tabs list, progress, slider |
| `prefilled` | Machine-prefilled, human-unverified field fill |
| `primary` / `primary-foreground` | Highest-emphasis actions (teal brand color) |
| `brand-accent` | Bright teal for non-text marks (chart lines, active underlines) — never for text |
| `brand-muted` / `brand-muted-foreground` | Brand-tinted chips that carry text |
| `secondary` / `secondary-foreground` | Supporting actions, light fills |
| `muted` / `muted-foreground` | De-emphasized backgrounds / secondary text |
| `accent` / `accent-foreground` | Hover/highlight fills (transient) |
| `accent-strong` | One step past accent — pressed toggles, engaged triggers |
| `destructive` / `destructive-foreground` | Irreversible/dangerous actions (solid treatment) |
| `success` / `warning` / `info` (+ `-foreground`) | Status solids — the action IS the status |
| `success-muted` / `warning-muted` / `info-muted` / `destructive-muted` (+ `-foreground`) | Status tint pairs — chips, callouts, rows |
| `success-ink` / `warning-ink` / `info-ink` / `destructive-ink` | Status text/icons on neutral — never a fill |
| `border` / `input` | Default borders / form field borders |
| `ring` | Focus ring color |
| `card` / `popover` | Raised surface backgrounds |
| `chart-1` … `chart-5` | Categorical data visualization palette — means "different series" only, never status |
| `shadow-raised` / `shadow-overlay` / `shadow-modal` | Elevation — cards / popovers-menus-tooltips / dialogs-sheets |
| `text-display` … `text-caption` | 11-style type scale (see Typography) — never an arbitrary `text-*` size for a heading |
| `radius-xs` … `radius-4xl`, `radius-full` | Corner radius scale — controls use `radius-lg`, containers use `radius-xl` |

**Brand note:** the primary color is **teal** (`#007e7e` light / `#0eb39e` dark). The
original Figma file's internal token names said "green" in places — that was stale; the
live values are teal. Treat this repo's values as authoritative.

**Typeface note:** product UI ships a zero-download system stack — `"Helvetica Neue",
Helvetica, Arial, system-ui` — not a downloaded web font. Figma's own file substitutes
Inter only because Helvetica Neue isn't installed in that rendering environment; that
substitution never applies to shipped code.

## Provenance

Token values are extracted from the live Figma file "Pucar Design System" (cover: *Pucar ·
ON Court — Design system · Rajini 2.0*), whose own cover page states it was **"Generated
from `pucar-ui/lib/tokens` — primitives aliased by semantics, exactly as the code
pipeline."** That implies an actual `pucar-ui` codebase is the upstream source of truth for
these tokens, with this Figma file mirroring it. If that repo is reachable, treat it — not
this repo, not Figma — as authoritative, and re-sync from there. Components are the
unmodified upstream shadcn/ui registry, themed via CSS variables only.
