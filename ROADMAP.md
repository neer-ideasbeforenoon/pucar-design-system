# Pucar DS — Complete Sync Plan

**Design source:** [Pucar Design System — Abhiram](https://www.figma.com/design/Rurr88TxMfN9TZ9rqogKNV/Pucar-Design-System---Abhiram)  
**Goal:** Bring this repo to parity with Abhiram so product UI and agents can build on-brand without inventing tokens or components.

---

## Status snapshot

### Done
- [x] Primitive ramps (brand / success / info / warning / destructive 1–12 + neutrals)
- [x] Semantic surfaces (surface, raised, sunken, track, prefilled)
- [x] Status muted + ink pairs; brand-muted; accent-strong
- [x] Elevation tokens + `/foundations/elevation`
- [x] Radius knob **10px** and Figma-aligned scale
- [x] Named typography scale + system Helvetica stack
- [x] Laws in `AGENTS.md` + Principles + `/foundations/laws`
- [x] Button: 11 variants, 40px default height, icon size ladder
- [x] Badge: success / warning / info / destructive muted variants
- [x] **A1** Opaque status fills (no alpha status washes)
- [x] **A2** Forms 40px + Input/Textarea `prefilled`
- [x] **A3** Toast docs (Sonner variants + Banner/Alert guidance)
- [x] **B1** Banner + docs
- [x] **B2** Description list + docs
- [x] **B3–B6** Stepper, Timeline, Document slot, Session timeout
- [x] **C1** Icons foundation + 146 allowlist (`@/lib/icons`)
- [x] **C2** Sign-in block docs
- [x] **E1** Docs IA (Status, Pucar, Icons, Laws)
- [x] **E2** `CHANGELOG.md`
- [x] Responsive composition rules (`RESPONSIVE.md`)
- [x] Docs site shell + component registry

### Still optional / deepen later
| ID | Workstream | Priority |
|---|---|---|
| C3 | Proving · Case documents as live acceptance canvas | P2 |
| D2 | Sidebar menu-button matrix docs | P2 |
| D3 | Deepen remaining shadcn pages to Figma Hover depth | P2 |
| E3 | Contrast/token gate / law-lint in CI | P3 |

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
