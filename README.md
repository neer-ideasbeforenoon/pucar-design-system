# Pucar Design System

**The source of truth for how Pucar looks and behaves in product.**

This repository is the living design system for Pucar — tokens, foundations, and UI components — documented as a site so product, design, engineering, and AI coding agents all build against the same language instead of inventing one per screen.

> Live docs: [pucar-design-system-five.vercel.app](https://pucar-design-system-five.vercel.app)

---

## Why this exists

Design systems fail when they live only in Figma, only in Slack threads, or only in one team’s head. Pucar’s system is intentionally **code-backed**:

- **Tokens** are real CSS variables, not screenshots of a palette.
- **Components** are production primitives (shadcn/ui + Radix), themed — not restyled copies.
- **Documentation** is interactive: light/dark, live previews, when-to-use guidance.

The goal is consistency at speed. When the brand, density, and interaction patterns are settled here, every feature team (and every agent) ships UI that still feels like Pucar.

---

## What you’ll find

| Area | Purpose |
| --- | --- |
| **Foundations** | Color, typography, radius, spacing — the decisions everything else inherits |
| **Components** | Documented UI primitives with previews, usage notes, and token coupling |
| **Principles** | Non-negotiable rules that keep the system coherent as it grows |
| **Getting started** | How to run the docs and how to consume the system in product work |

### Brand

Primary is **teal** — `#007e7e` (light) / `#0eb39e` (dark). Older Figma variable names sometimes said “green”; treat **this repository** as authoritative.

Typography for product UI is **Noto Sans**.

---

## Principles

These are the rules that protect the system. Break them and the brand fragments.

1. **Tokens over inventing** — Never hardcode color, spacing, or radius. Use utilities that map to tokens (`bg-primary`, `text-muted-foreground`, `border-border`, `rounded-md`, `gap-4`). No hex, no oklch, no arbitrary values like `bg-[#007e7e]`.
2. **Reuse before create** — Check `src/components/ui/` first. Prefer composition over new primitives.
3. **Install, don’t hand-write** — New shadcn components come from `npx shadcn@latest add <component>`, not from rewriting upstream code by hand.
4. **Light and dark are equal** — Every color token must exist in both `:root` and `.dark`. Theme is a product requirement, not an afterthought.

Agent-facing guidance lives in [`AGENTS.md`](./AGENTS.md) — keep that file aligned with these principles.

Responsive composition rules for product UI (not the docs chrome) live in
[`RESPONSIVE.md`](./RESPONSIVE.md).

---

## Stack

| Layer | Choice |
| --- | --- |
| App / docs | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Tokens | CSS custom properties in `src/app/globals.css`, mapped via `@theme inline` |
| Components | shadcn/ui (Radix) in `src/components/ui/` |
| Icons | Lucide |
| Theming | `next-themes` (class-based `.dark`) |

Tokens were extracted from the live **PUCAR DS – Mohit** Figma variables. Components are upstream registry code, themed only through those variables.

---

## Semantic tokens (quick reference)

| Token | Role |
| --- | --- |
| `background` / `foreground` | Page surface and default text |
| `primary` / `primary-foreground` | Highest-emphasis actions (brand teal) |
| `secondary` / `secondary-foreground` | Supporting actions and light fills |
| `muted` / `muted-foreground` | De-emphasized surfaces and secondary text |
| `accent` / `accent-foreground` | Hover and highlight fills |
| `destructive` | Irreversible or dangerous actions |
| `success` / `warning` / `info` | Status communication |
| `border` / `input` / `ring` | Edges, fields, and focus |
| `card` / `popover` | Raised surfaces |
| `chart-1` … `chart-5` | Categorical data visualization |
| `radius-xs` … `radius-4xl`, `radius-full` | Corner radius scale |

Full swatches and specimens live in the Foundations section of the docs site.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the header control to switch light and dark.

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

---

## Repository layout

```text
src/
  app/
    (docs)/          # Documentation routes (foundations, components, principles)
    globals.css      # Design tokens (light + dark)
  components/
    docs/            # Docs chrome and page primitives
    ui/              # Design system components (shadcn)
  lib/
    docs-nav.ts      # Sidebar information architecture
    utils.ts         # cn() and shared helpers
```

---

## Who this is for

- **Designers** — Confirm that what ships matches the system, not a one-off mock.
- **Engineers** — Pull tokens and components instead of reinventing UI per feature.
- **Product / stakeholders** — Walk foundations and components in a shareable live site.
- **AI coding agents** — Follow `AGENTS.md` and `RESPONSIVE.md` so generated UI stays on-brand and usable on mobile.

---

## Status

This is an early but usable **v0.1**: foundations and a curated component library documented for day-to-day product work. Expect the docs and patterns to deepen (forms, accessibility, distribution) as we ship.

Questions about contribution, versioning, or consuming this from other apps should be resolved against this repo — not against stale Figma notes or side branches of “temporary” styles.
