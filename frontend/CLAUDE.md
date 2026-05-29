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

Order and contact forms POST to Next.js API routes — there is no Django backend involved:
- `/api/order` → `app/api/order/route.ts`
- `/api/contact` → `app/api/contact/route.ts`

Both use nodemailer with SMTP env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`.


