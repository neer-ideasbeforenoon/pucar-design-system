# Changelog

All notable changes to the Pucar Design System docs and components.

## 2026-08-01 — Colors mapping table role honesty

The foundations/colors semantic → primitive table was teaching the wrong mental
model even after the Aug 1 value corrections.

- Split `surface-raised` from `card / popover / surface` — raised is
  `neutral-2`, not flat with the page.
- Split `secondary` and `accent` into separate rows (same step, different
  roles) and stopped labeling secondary as a hover fill.
- Split status `*-ink` from `*-muted-foreground` so the three treatments stay
  visible; documented coinciding values explicitly.
- Alias vs literal consistency: `ring` → `brand-solid`, charts list real hex,
  hover composites documented as `color-mix`.
- Added hairline, focus rings, scrim, disabled-fill, halo, sidebar aliases,
  and surface / surface-raised swatches.
- Section copy now states that identical light/dark step names are intentional.

Generating this table from `globals.css` remains an open follow-up.

## 2026-08-01 — Accessibility, gate honesty, and agent endpoints

Closes the remaining high-severity findings from the Aug 1 audit after the
contrast/token pass earlier the same day.

### Accessibility

- **FieldError is programmatically bound.** `Field` provides context; `FieldError`
  and `FieldDescription` mount with stable ids; `Input` / `Textarea` inside a
  Field receive `aria-describedby` and `aria-invalid` automatically. Docs preview
  no longer hand-wires a disconnected error.
- **`prefilled` is no longer colour-alone.** Dashed `warning-ink` border plus a
  visually hidden “Machine filled, not yet verified” description.
- **Touch targets ≥ 40×40.** Switch, Checkbox, Radio, and Slider thumb expand
  hit areas via `after:` insets; Switch geometry moved to token scale (`h-5` /
  `w-9`).
- **Progress docs model the required pattern** — visible percent +
  `aria-labelledby`. Checkbox gains an indeterminate indicator.
- **Overlay focus.** Dialog and Alert Dialog keep `outline-none` but add a
  visible `focus-visible` ring. `DirectionProvider` is mounted at the root with
  `dir="ltr"`.
- **Alert** gains `success` / `warning` / `info` variants; **Banner** gains
  `error`; **Toaster** enables `richColors` so typed toasts use their tokens.
- **Read-only fields** get a muted fill distinct from disabled.

### Governance / agent-readability

- `check-tokens.mjs` now fails on `bg-white` / `text-black` and on raw-unit
  arbitrary spacing/radius (`rounded-[7px]`, `p-[13px]`), matching what rule 1
  claimed. Slider thumb uses `bg-background`.
- GitHub Actions CI runs `npm run lint` and `npm run build` on every PR.
- `extendTailwindMerge` registers the custom `text-*` and `shadow-*` tokens.
- `public/llms.txt`, `public/robots.txt`, `src/app/sitemap.ts`, and
  `public/r/registry.json` (via `npm run build:registry`) make the docs
  discoverable to agents.
- `surface-raised` steps to `neutral-2` so the elevation ladder is not five
  names for one value; `card` / `popover` stay flat with the Figma master.

## 2026-08-01 — Contrast and token-derivation reconciliation

Triggered by the "Aug 1st Iteration" review and its Claude-assisted audit section.
Every claim in that document was re-measured against the repo; all three of its
contrast figures reproduced exactly, and five more failures were found alongside
them.

### Divergences from the Rajini 2.0 master

These change values the live Figma file specifies, so they need Abhiram's
ratification. The Figma MCP could not be read during this pass (it requires a
layer selected in the desktop app), so nothing here was cross-checked against the
master.

- **Neutral role assignments shifted one step.** `accent` and `secondary`
  neutral-3 → neutral-4, `accent-strong` neutral-4 → neutral-5, `track`
  neutral-5 → neutral-6, `border` neutral-7 → neutral-8, `sidebar-border`
  neutral-5 → neutral-6. Radix Slate assumes step 1 is the app background; we set
  `--background` to neutral-1 *and* pointed hovers at neutral-2/3, so every
  interaction state sat 1.03–1.19:1 against the page. The ramp itself is
  unchanged — only which step each role points at.
- **`chart-4` darkened** from `#e2a336` (2.15:1) to `#bd7b00` (3.42:1) in light.
  A chart series conveys meaning, so WCAG 1.4.11 applies. Dark is unchanged.
- **Warning solid button gains a `warning-ink` border.** The Rajini yellow is
  1.54:1 on the page, so the fill alone cannot delimit the control. Bordering it
  preserves the exact brand yellow, which the alternatives did not.

### Token architecture

- `border-hairline`, `disabled-fill`, `halo` and both `focus-ring` tokens were
  flattened hex carrying baked alpha — transcribed from Figma, which drops paint
  opacity on a bound variable. They now derive via `color-mix` from their source
  token. `scrim` stays literal: its pre-`color-mix` fallback would turn a 50%
  backdrop opaque.
- Twelve tokens that were literal hex duplicating an existing ramp step now alias
  it (`brand-accent`, `warning`, the four status inks, the dark solids, `chart-1`,
  `chart-2`). Genuinely off-ramp values — the brand teal, the light status solids
  and inks tuned for 4.5:1, `surface-sunken` — stay literal and say why.
- **The radius ladder now actually derives from `--radius`.** Two comments claimed
  it did while all ten steps were hardcoded pixels; only `sonner` and
  `input-group` ever read the knob. Steps are now `calc(var(--radius) * N)`.

### Components

Re-pointed to the token whose documented role they were already claiming:
Button, Badge, Toggle, Table, Menubar, Navigation menu, Item, Attachment,
Message scroller, Calendar, Bubble and Command now use `accent` for hover and
`accent-strong` for pressed, engaged and selected. Progress, Skeleton, Tabs list,
Slider and the Attachment thumbnail well now use `track`. `hover:bg-accent` had
zero occurrences before this change and `bg-track` had zero anywhere. Alpha fills
(`bg-muted/50`) on Card footer, Table footer and Item are now opaque per rule 6.

### Governance

- New `scripts/check-contrast.mjs`, wired into `npm run lint`. Measures 54 pairs
  in both modes — text at 4.5:1, chart series, field borders and the focus ring at
  3:1 — and fails the build below the floor. `ACCESSIBILITY.md` had asked humans to
  "prove with a contrast checker, do not eyeball" since July; nothing enforced it.
- The same script applies rule 1 to `globals.css`, which `check-tokens.mjs`
  explicitly exempts from its own no-hardcoded-colour scan. That exemption is why
  the baked-alpha primitives and duplicated literals were never caught.
- AGENTS.md gains rule 9 (measure, never assert) and rule 10 (use the token the
  role names), and now states plainly that a green gate is not a good design.

### Known open items

- The `foundations/colors` semantic mapping table is still hand-maintained.
  Role conflations and the `surface-raised` mis-map were corrected on Aug 1,
  but the table should eventually be generated from `globals.css` like the
  AGENTS.md token inventory so drift cannot return.
- Card remains flat with the Figma master (`card` == `background`); use
  `surface-raised` or a border when a product surface needs an edge.
- Full Playwright / axe suite and a versioned Figma↔token mapping artifact are
  still follow-ups — CI now gates lint + build, not visual regression.

## 2026-07-31 — Rajini 2.0 live-contract reconciliation

### Foundations
- Reconciled the repo against all 208 live variables in Abhiram’s Rajini 2.0
  file.
- Added engineered state, focus, scrim, hairline, disabled, halo, and
  theme-specific elevation primitives.
- Corrected Input and Sidebar aliases, status inks, full radius, and opaque
  hover composites.
- Made Abhiram’s live Rajini 2.0 file the explicit design contract throughout
  governance and site copy.

### Components
- Corrected Card density/elevation, Badge height, Banner anatomy, Document slot
  surfaces, modal geometry, Session timeout width, and all modal scrims.
- Added Date Picker and Date Range Picker compositions from installed Calendar,
  Popover, and Button primitives.
- Bound Timeline’s current-state halo and interactive Bubble states to Rajini
  tokens.

### Documentation and release quality
- Added 12 missing component pages and navigation entries, bringing the site to
  57 statically generated component routes.
- Replaced stale typography, spacing, color, elevation, and provenance guidance.
- Fixed React 19 effect patterns in Docs Shell, Carousel, and `useIsMobile`.
- ESLint, TypeScript, and the Next.js production build pass.

## 2026-07-31 — Accessibility standards

- Authoritative checklist: `ACCESSIBILITY.md` + `/foundations/accessibility`
- Conformance: **WCAG 2.1 Level AA** + **WAI-ARIA 1.2**
- Full list: screen readers, keyboard, focus, 4.5:1 contrast, no hover-only critical UI, **40×40px** touch targets, voice control, 200% zoom, session timeouts, visible labels, Indic scripts
- Core subset always enforced: WCAG 2.1 AA, WAI-ARIA 1.2, focus, contrast, 40×40 touch, 200% zoom, multilingual scripts

## 2026-07-31 — Abhiram parity (Milestones 1–5)

### Law compliance & forms
- Replaced alpha status fills (`bg-destructive/10`, etc.) with opaque `*-muted` tokens across Button, Badge, Bubble, Attachment, menus, Callout, and Do/Don't.
- Input and Textarea support `prefilled` (amber `bg-prefilled`, border stays `input`).
- Field docs: vertical / horizontal / invalid / prefilled compositions.

### New components
- **Banner** — standing page-load notice (`info` | `warning` | `success` | `neutral`)
- **Description list** — key/value scrutiny rows
- **Stepper** — complete / current / upcoming
- **Timeline** — past / current / future
- **Document slot** — e-filing upload states
- **Session timeout** — Alert Dialog + countdown well

### Foundations & docs IA
- `/foundations/icons` — 146 Lucide allowlist from Figma
- `/foundations/laws` — hard constraints mirrored from Abhiram
- `/blocks/sign-in` — auth composition pattern
- Nav: Status & feedback, Pucar, Icons, Laws
- Toast (Sonner) docs: success / info / warning / error / loading + when-to-use vs Alert / Banner

### Other
- Table docs: selected row + Badge status patterns
- `ROADMAP.md` remaining items closed for Milestones 1–5 core scope
