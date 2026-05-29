@AGENTS.md

# Frontend

## Design system

All tokens are defined in [app/globals.css](app/globals.css) under `@theme` (Tailwind utilities) and `:root` (RGBA values for use with `var()`). Never use arbitrary color values — always use a token.

**Hard rules from the design system:**
- Dark-only. No light mode.
- Red (`--color-accent` / `bg-accent`) is reserved for urgency and brand CTAs. Don't use it for decorative purposes.
- Two font weights in use: 400 and 500 (+ `font-bold` / `font-semibold` for headings and buttons only).
- Sentence case only. No ALL CAPS except the `.eyebrow` utility class.

**Commonly used tokens:**

| Token | Use |
|---|---|
| `text-fg` | Primary body text |
| `text-fg-muted` | Secondary / supporting text |
| `text-fg-subtle` | Labels, eyebrows, metadata |
| `text-fg-faint` | Footnotes, mono labels |
| `text-accent` | Brand red — links, highlights |
| `bg-accent` / `hover:bg-accent-hover` | Primary CTA buttons |
| `border-(--color-border)` | Standard dividers |
| `border-(--color-border-input)` | Form field borders |

RGBA tokens (surfaces, borders, glows) don't map to Tailwind utilities — use inline `var()`:
```tsx
className="bg-(--color-surface-2) border-(--color-accent-border)"
```

The `.eyebrow` class (defined in `globals.css`) renders a small red uppercase label above headings.


## Component conventions

Each component lives in its own folder: `components/ComponentName/ComponentName.tsx`.

## Component Patterns
- Build components as reusable and prop-based so callers can pass arbitrary JSX/Tailwind — do NOT hardcode grid wrappers or fixed child content inside shared components.

**Styling**: complex components use a co-located CSS Module (`ComponentName.module.css`) with `@reference "../../app/globals.css"` at the top so Tailwind utilities resolve correctly inside the module. Simple components use inline Tailwind classes directly.

## Styling Rules
- Always use design tokens / CSS color variables (defined in globals) instead of hardcoded colors.
- CSS class names and JSX className references are case-sensitive — match them exactly.
- For hover/glow border effects, use the proven wrapper-element approach, NOT `::before` + `z-index:-1`.

## Responsive layout rules

**Minimum supported width: 320px.** The `<body>` has `min-width: 320px` — below that a horizontal scrollbar appears rather than the layout collapsing. Do not remove it.

**Pill / badge components**: always add `white-space: nowrap` to the inner pill element. Without it, long badge text wraps at narrow widths, and `border-radius: 9999px` on the wrapper turns the wrapped multi-line text into a circular blob. Never add large horizontal padding (`px-10` etc.) to pill *wrapper* elements — padding belongs on the inner pill only.

**Wrapper elements used for border/glow effects**: keep them `inline-flex` or `inline-block` with only `padding: 1px` and the border-radius. Any extra padding pushes layout and compounds the wrapping problem above.

**Collapsible TOC on mobile**: `GuideContents` hides the TOC column on mobile and shows a toggle bar instead. When opened, the TOC renders as a fixed bottom sheet with a `rgba(0,0,0,0.72)` backdrop. Do not revert to always-visible stacked columns — the TOC items overlap the content text on narrow screens.

**Testing mobile**: use browser DevTools Responsive mode at 320px (floor) and 390px (standard iPhone) before marking any layout change done. The 140px "extreme narrow" case is handled by the `min-width` — no need to optimise for it specifically.

## Build & Cache Troubleshooting
- When styles/tokens don't apply unexpectedly, check for a stale `.next` cache (especially Docker-tainted paths) before deep debugging.
- This repo uses cross-platform Docker builds: prefer `npm install` over `npm ci` to avoid lockfile platform mismatches with @tabler/icons-react.
- Confirm the correct venv is activated before running local DB/Python tests.

## Guide page pattern

All guide pages follow the same data convention: content lives in `content/<guide-name>.ts` as a typed TypeScript object (no JSX). Every factual claim has a `refs` field with `ReferenceId[]` values pointing to entries in `content/references.ts`. The page file wires metadata, JSON-LD, and rendering together.

Two layout variants exist:

**Variant A — tabbed shell** (`/awaabs-law`, social housing):
- Uses `GuideBlocks` (`components/GuideBlocks/GuideBlocks.tsx`) for typed block rendering: `para`, `quote`, `list`, `definition`.
- Uses `GuideContents` (`components/GuideContents/GuideContents.tsx`) — left TOC tabs, right content panel, section switching via `useState`.

**Variant B — scrollable with sticky sidebar** (`/awaabs-law/private-landlords`):
- Layout: sticky left sidebar (TOC + DownloadCard) + right scrollable content, both in one flex row.
- Page-specific block types (`AlertBanner`, `StatuteDuty`, `ReformCard`) defined in `content/private-landlords-guide.ts`.
- Inline render components (`StatuteBox`, `LiveReformCard`, `PendingReformCard`) defined at the top of the page file — no shared component needed.
- Supports a context bar (page-specific label strip below Navbar) and alert banners above the hero.

### References rule
**When adding new refs to `content/references.ts`, also add their IDs to the appropriate group in `app/references/page.tsx`.**  
If an ID is missing from `groups`, the `id="ref-N"` anchor is never rendered and citation links silently fail to scroll to their target.

**References must be numbered sequentially in page-display order** — the key in `references.ts` is the displayed citation number, so gaps (e.g. keys 1, 3, 5…) cause the references page to show non-sequential labels ([1], [3], [5]…) instead of [1], [2], [3]….

Current number ranges (matches the group order in `app/references/page.tsx`):
- **1–16** Legislation & statutory instruments
- **17–25** MHCLG statutory guidance
- **26** Impact assessments
- **27–28** Housing Ombudsman

When adding a new reference, assign the next sequential number within the right group (shifting later groups up if needed) and update every `refs` array in all three content files (`awaabs-law-guide.ts`, `private-landlords-guide.ts`, `housing-associations-guide.ts`) that referenced any renumbered ID.

## Pre-deployment link checklist

Run these before merging any page or content change:

```bash
# 1. Type-check
npx tsc --noEmit

# 2. Lint
npm run lint

# 3. Production build (catches broken imports, missing pages, and build-time errors)
npm run build
```

Then manually verify:

| Check | How |
|---|---|
| Every TOC `anchor` value matches an `id` on a section element | Grep the page file: `anchor:` values → `id="..."` in JSX |
| Every `ReferenceId` used in content appears in the `groups` array in `app/references/page.tsx` | The anchor `#ref-N` silently doesn't exist otherwise |
| Cross-page links use `<Link>` not `<a>` | Plain `<a>` causes a hard reload, breaks client-side back/forward |
| In-page anchor links use `<a href="#anchor">` not `<Link>` | `<Link>` for same-page hashes can interfere with App Router scroll |
| New route works after `rm -rf .next && npm run dev` | Dev server sometimes doesn't pick up new `app/*/page.tsx` directories without a cache clear |

## SEO & Page Conventions
- When adding JSON-LD, define the const AND inject the JSX in the same edit to avoid transient unused-variable/import warnings.
- Use Next.js <Link> instead of <a> for internal navigation, and reset default browser link styling (color/underline) on logo/nav links.

**Quotation rule** (from `content/awaabs-law-guide.ts`): only use `type: "quote"` for verbatim text from the cited source. Never paraphrase inside a quote block.

## Forms and email

Three Next.js API routes handle form submissions:

| Route | Handler | Backend |
|---|---|---|
| `/api/contact` | Contact, guide download, social program forms | nodemailer only |
| `/api/order` | Kit order form | nodemailer only |
| `/api/download-request` | Download gate (template/PDF requests) | Proxies to Django `POST /api/leads/download-request/`; falls back to nodemailer if Django is down |

All nodemailer routes share SMTP env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`.

## Download gate pattern

Every "free download" button that should capture a lead uses `DownloadGate` instead of `DownloadCard`:

```tsx
// In a page (server component) — no "use client" needed
import DownloadGate from "@/components/DownloadGate/DownloadGate";

<DownloadGate
  title="Section 11(6) notice template"
  description="Short description for the card."
  guideName="Section 11(6) notice template"   // sent to backend as guide_name
  ctaLabel="Download template"
/>
```

`DownloadGate` (`"use client"`) holds open/close state, renders `DownloadCard` as the trigger, and mounts `DownloadModal` on click.

`DownloadModal` (`components/DownloadModal/DownloadModal.tsx`) contains the full form: name, work email, organisation, role radio grid, properties range select, marketing consent checkbox. It includes:
- **Honeypot** field (`company_website`) rendered off-screen at `left: -9999px`. Never remove or make it visible.
- **Competitor blocking** happens server-side in the Django serializer — no frontend list to maintain.
- Posts to `/api/download-request`, shows success state on `{"ok": true}`, error state otherwise.


