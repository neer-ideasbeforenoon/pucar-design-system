# Changelog

All notable changes to the Pucar Design System docs and components.

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
