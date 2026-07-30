# Pucar Design System

Documentation website for Pucar's design tokens, foundations, and UI components.
Built so product teams and AI coding agents share one visual language.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css`)
- shadcn/ui components in `src/components/ui/`
- Noto Sans for UI typography

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use the header theme toggle to switch light and dark mode.

## Site map

| Section | What you'll find |
|---|---|
| Introduction | Purpose, brand note (teal), stack |
| Getting started | How to run and consume the system |
| Principles | Token-first rules, reuse, light+dark |
| Foundations | Colors, typography, radius, spacing |
| Components | Live previews, when-to-use, token coupling |

## Rules

1. Never hardcode colors, spacing, or radius — use token utilities (`bg-primary`, `rounded-md`, …).
2. Never hand-write new shadcn components — install with `npx shadcn@latest add <name>`.
3. Reuse `src/components/ui/` before creating anything new.
4. Every new color must exist in both `:root` and `.dark`.

Primary brand color is **teal** (`#007e7e` light / `#0eb39e` dark).

## Scripts

```bash
npm run dev      # docs site
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```
