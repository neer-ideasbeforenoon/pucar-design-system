# Changelog

All notable changes to the Pucar Design System docs and components.

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
