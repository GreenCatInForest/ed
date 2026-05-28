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

**Styling**: complex components use a co-located CSS Module (`ComponentName.module.css`) with `@reference "../../app/globals.css"` at the top so Tailwind utilities resolve correctly inside the module. Simple components use inline Tailwind classes directly.

## Guide page pattern

Used by `/awaabs-law` and any future guide pages:

1. **Content** lives in `content/<guide-name>.ts` as a typed TypeScript object — no JSX. Every factual claim has a `refs` field with `ReferenceId[]` values pointing to entries in `content/references.ts`.
2. **`GuideBlocks`** (`components/GuideBlocks/GuideBlocks.tsx`) renders the typed content: `para`, `quote`, `list`, and `definition` block types. Inline `<Refs>` components render superscript citation links to `/references#ref-N`.
3. **`GuideContents`** (`components/GuideContents/GuideContents.tsx`) is the tabbed shell — left TOC, right content panel.
4. The page file just wires metadata, JSON-LD, and the two components together.

**Quotation rule** (from `content/awaabs-law-guide.ts`): only use `type: "quote"` for verbatim text from the cited source. Never paraphrase inside a quote block.

## Forms and email

Order and contact forms POST to Next.js API routes — there is no Django backend involved:
- `/api/order` → `app/api/order/route.ts`
- `/api/contact` → `app/api/contact/route.ts`

Both use nodemailer with SMTP env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`.
