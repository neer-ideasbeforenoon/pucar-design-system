# Pucar DS — Complete Sync Plan

**Design source:** [Pucar Design System — Abhiram](https://www.figma.com/design/Rurr88TxMfN9TZ9rqogKNV/Pucar-Design-System---Abhiram)  
**Goal:** Bring this repo to parity with Abhiram so product UI and agents can build on-brand without inventing tokens or components.

---

## Status snapshot (after foundations sync commit)

### Done
- [x] Primitive ramps (brand / success / info / warning / destructive 1–12 + neutrals)
- [x] Semantic surfaces (surface, raised, sunken, track, prefilled)
- [x] Status muted + ink pairs; brand-muted; accent-strong
- [x] Elevation tokens (raised / overlay / modal) + `/foundations/elevation`
- [x] Radius knob **10px** and Figma-aligned scale
- [x] Named typography scale + system Helvetica stack
- [x] Laws in `AGENTS.md` + Principles docs
- [x] Button: 11 variants, 40px default height, icon size ladder
- [x] Badge: success / warning / info muted variants
- [x] Responsive composition rules (`RESPONSIVE.md`)
- [x] Docs site shell + core component registry

### Not done (remaining work)

| ID | Workstream | Priority |
|---|---|---|
| A1 | Replace alpha status fills (`bg-destructive/10`) with opaque `*-muted` tokens | P0 |
| A2 | Align Input / Select / Textarea / Field to 40px + **Prefilled** state | P0 |
| A3 | Toast docs (Sonner): success / info / warning / error / loading | P1 |
| B1 | **Banner** component + docs | P0 |
| B2 | **Description list** component + docs | P0 |
| B3 | **Stepper** component + docs | P1 |
| B4 | **Timeline** component + docs | P1 |
| B5 | **Document slot** component + docs | P1 |
| B6 | **Session timeout** component + docs | P1 |
| C1 | Icons foundation page + ~146 allowlisted Lucide names | P1 |
| C2 | Blocks: Sign-in composition docs | P2 |
| C3 | Proving · Case documents as acceptance compositions | P2 |
| D1 | Table row/header/cell state docs (+ sort/hover/selected) | P2 |
| D2 | Sidebar menu-button matrix docs | P2 |
| D3 | Deepen remaining shadcn component docs to Figma depth | P2 |
| E1 | Docs IA mirror (Laws, Icons, Pucar section in nav) | P1 |
| E2 | `CHANGELOG.md` + redeploy Vercel after each milestone | P1 |
| E3 | Optional: contrast/token gate / law-lint | P3 |

---

## Plan of action (execute in order)

### Milestone 1 — Law compliance & form metrics (P0)
**Outcome:** Code no longer violates Abhiram Laws; forms match control metrics.

1. **A1 — Kill alpha status fills**
   - Button `destructive` → opaque `bg-destructive-muted text-destructive-muted-foreground`
   - Badge `destructive` → same pattern
   - Grep for `/10`, `/20` on status/brand fills; replace with muted tokens
   - Keep alpha only for focus rings / shadows / scrims (allowed)

2. **A2 — Forms**
   - Default control height **h-10** on Input, Select trigger, Textarea min metrics, Native select
   - Add **prefilled** visual state (`bg-prefilled`, border stays `input`)
   - Document Field vertical/horizontal + invalid/disabled on docs pages

3. Verify light + dark on Button/Badge/Input; update component registry demos

**Exit criteria:** No status fill uses opacity utilities; default fields are 40px; prefilled documented.

---

### Milestone 2 — Missing feedback + Pucar quick wins (P0)
**Outcome:** Banner + Description list ship; Toast guidance clear.

1. **B1 — Banner** (`info | warning | success | neutral`)
   - Full-width standing notice (page-load, not dismiss-as-toast)
   - Opaque status treatments; optional action slot
   - Docs page + nav under Status

2. **B2 — Description list**
   - Label/value rows for scrutiny / case detail
   - Docs + registry

3. **A3 — Toast**
   - Document Sonner variants matching Figma Toast page
   - When-to-use: Toast vs Alert vs Banner

**Exit criteria:** `/components/banner`, `/components/description-list` live; Toast page updated.

---

### Milestone 3 — Pucar domain flows (P1)
**Outcome:** Court/case building blocks exist in code.

1. **B3 Stepper** — item statuses: complete / current / upcoming  
2. **B4 Timeline** — past / current / future  
3. **B5 Document slot** — filled / processing / empty / empty-optional / filled-poor × thumbnail|icon  
4. **B6 Session timeout** — Alert-dialog composition with countdown well  

Build against Figma pages; add docs + demos; add **Pucar** section to `docs-nav.ts`.

**Exit criteria:** All four components imported from `@/components/ui/*` with docs.

---

### Milestone 4 — Icons & composition (P1–P2)
**Outcome:** Icon system is intentional; one proven block.

1. **C1 Icons**
   - Extract allowlist from Figma Icons page (~146)
   - Docs: `/foundations/icons` — sizes, color rules (foreground / muted / ink), no decorative teal
   - Optional thin wrapper only if needed; prefer Lucide with allowlist guidance

2. **C2 Sign-in block** — docs composition (not necessarily one mega-component)

3. **C3** Use Proving · Case documents as QA checklist for Document slot + Table + Badge + Timeline

**Exit criteria:** Icons foundation published; Sign-in block documented.

---

### Milestone 5 — Docs parity & release hygiene (P1–P2)
**Outcome:** Docs IA matches Abhiram; site redeployed.

1. **E1** Nav: Foundations (Primitives/Semantic/Type/Radius/Spacing/Elevation/Icons/Laws), Status, Pucar  
2. **D1–D3** Deepen Table, Sidebar, remaining overlays/forms pages  
3. **E2** `CHANGELOG.md`; commit tags per milestone; `vercel --prod`  
4. **E3** Optional lint for alpha status fills / raw hex in `src/`

**Exit criteria:** Team can navigate docs like Figma; production URL shows latest.

---

## Definition of “DS complete”

Complete means:

1. Every Abhiram **foundation** token/law is in `globals.css` + docs  
2. Every Abhiram **component page** has a code counterpart **or** an explicit “won’t ship” note  
3. All **Pucar** components exist and are documented  
4. Icons are allowlisted and documented  
5. No known Law violations in core components  
6. Live Vercel docs reflect `main`

It does **not** require pixel-identical Hover frames for every shadcn primitive if CSS states encode the tokens.

---

## Suggested ownership rhythm

| Week | Focus |
|---|---|
| 1 | Milestone 1 + 2 (laws, forms, Banner, Description list) |
| 2 | Milestone 3 (Stepper → Session timeout) |
| 3 | Milestone 4 + 5 (icons, blocks, docs IA, deploy) |

---

## Tracking

Check boxes above as PRs merge. Keep this file updated when scope changes. Do not expand into a publishable npm package until Milestones 1–3 are done.
