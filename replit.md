# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## External Audit Workflow

Before sharing the codebase with any external auditor (AI tool, consultant, or reviewer), run:

```
pnpm audit:export
```

This generates `audit-snapshot.txt` in the repo root — a single flat file containing every source file in the project. Hand that file to the external auditor. It is gitignored and disposable; regenerate it fresh each time.

**Note for this AI (Replit Agent):** Direct file access is available — no need to run this before internal audits. This workflow is only for external auditors who cannot navigate the monorepo directory structure.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### TRYPS Landing Page (`artifacts/tryps-landing`)
- **Framework**: React + Vite (TypeScript)
- **Design**: Crimson — deep red palette (#9A0514 primary, #BE123C accent, #FFF9F9 bg, #1C0808 dark text, #6B3030 muted text, #FFE4E6 tint, #FECDD3 border)
- **Styling**: Tailwind CSS v4 with inline custom values (no shadcn components — uses native HTML + Tailwind)
- **SEO**: Full JSON-LD schemas in `index.html` (Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList), OG + Twitter meta tags, canonical URL
- **Semantic HTML**: `<header>`, `<main>`, `<section aria-labelledby>`, `<ol>` for steps, `<ul>` for features/use cases, `<blockquote>` for testimonials, `<details>/<summary>` for FAQ, `<figure>/<figcaption>` for product preview
- **Sections** (in order): Hero → Features (5) → How It Works (4 steps) → Problem vs Solution → Comparison → Social Proof (3 quotes) → Use Cases (5) → Product Preview → FAQ (6) → Final CTA → Footer
- **Canonical domain**: `jointryps.com`
- **Product preview**: Code-built 4-panel flow mockup (no external image dependency)
- **Hero mockup**: Code-built app card showing date poll + expense tracker + notification

### Mockup Sandbox (`artifacts/mockup-sandbox`)
- Design variant explorer with 7 variants (Sunshine A1, NightFlight B, Editorial C, Gradient D, Coastal A2, Golden A3, Punchy A4)
- NightFlight.tsx has a known syntax error (template literal encoding issue) — does not affect the main landing page
