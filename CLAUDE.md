# CLAUDE.md

## Project Overview

KSZ — business card website (strona wizytówka) for a web development company. Built with Next.js 15, Sanity CMS, Tailwind CSS v4, shadcn/ui, and Three.js (FloatingLines). Dark + neon/cyber aesthetic. Prioritizes SEO, accessibility (WCAG AA), mobile-first design, and performance.

## Tech Stack

- **Next.js 15** (App Router, Turbopack) + React 19
- **TypeScript** (strict mode)
- **Sanity CMS** (headless CMS with visual editing)
- **Tailwind CSS v4** with `@theme inline` pattern + `tw-animate-css`
- **shadcn/ui** (new-york style, RSC-compatible)
- **Three.js** (FloatingLines WebGL background animation)
- **Storybook 9** (`@storybook/nextjs`)
- **pnpm** package manager
- **Vercel** deployment target

## Commands

```bash
pnpm dev              # Dev server (Turbopack)
pnpm build            # Production build (Turbopack) + sitemap
pnpm start            # Start production server
pnpm lint             # ESLint
pnpm format           # Prettier
pnpm storybook        # Storybook on :6006
pnpm build-storybook  # Static Storybook build
pnpm typegen          # Generate Sanity TypeScript types from schemas
```

## Project Structure

```
app/
  (website)/           # Main website routes
    layout.tsx         # Website layout
    page.tsx           # Homepage
    [...slug]/page.tsx # Dynamic pages from Sanity
  (sanity)/            # Sanity Studio at /studio
  layout.tsx           # Root layout
  globals.css          # Tailwind v4 config + design tokens
  robots.ts

components/
  cms/                 # CMS adapter components (data transformation only)
    page/components/   # sanity-*.tsx — map Sanity data → presentational components
    sanity-component.tsx
    sanity-components.tsx  # Component registry/mapper
    sanity-footer.tsx
    sanity-types.ts
    shared/rich-text/  # Portable Text renderer

  layout/              # Structural/wrapper components
    footer/, header/, main/, page-section/, site-layout.tsx

  sections/            # Pure presentational components (CMS-independent)
    about-section/, contact-section/, footer/, hero-section/,
    process-section/, projects-section/, services-section/
    # Each has: component.tsx + component.stories.tsx

  ui/                  # shadcn/ui + custom base components
    accordion, button, carousel, checkbox, floating-lines/, icon, image/

sanity/
  schemas/             # Content schemas
    pages/             # Page schema + GROQ queries
    sections/          # Section schemas (hero, about, services, projects, process, image, contact, subheading, block-content)
    objects/           # Shared objects (responsive-image)
    settings.ts        # Site settings (singleton)
  plugins/             # singleton-plugin
  sanity.client.ts, sanity.config.ts, sanity.api.ts

lib/                   # Utilities (utils.ts, result.ts, assert-unreachable.ts)
device-sizes.ts        # Responsive breakpoint definitions
```

## Architecture

**Data flow:** Sanity CMS → GROQ queries → Next.js Server Components → React Components

**Component hierarchy (4 layers):**

1. **Route** (`app/(website)/`) — fetches data from Sanity
2. **Page** (`components/cms/page/sanity-page.tsx`) — maps sections to components
3. **CMS Adapter** (`components/cms/page/components/sanity-*.tsx`) — transforms Sanity data to props
4. **Presentation** (`components/sections/*/`) — pure UI, no CMS dependency

## Coding Conventions

### Naming (strictly enforced by ESLint)

- **Files & folders:** `kebab-case` only — enforced via `eslint-plugin-check-file`
- **Components:** PascalCase (`ImageSection`)
- **Variables/functions:** camelCase
- **Types/interfaces:** PascalCase
- **CMS components:** `sanity-[schema-name].tsx`

### Component patterns

- Use explicit props interfaces — **never** `React.FC` or `React.FunctionComponent`
- Import sort order (enforced): side effects → node: → packages → aliases (`@/`) → relative
- Use `cn()` from `@/lib/utils` — direct `tailwind-merge` import is forbidden
- Icons: `<Icon name='Instagram' className='size-8 text-primary' />`

### Folder structure for new components

```
component-name/
  component-name.tsx          # Main component
  component-name.stories.tsx  # Storybook story (required for sections)
  types.ts                    # Optional
  utils.ts                    # Optional
```

### Tailwind / Styling

- **Tailwind v4** with `@theme inline` in `globals.css` — no `tailwind.config.ts` theme overrides
- Design tokens via CSS variables: `--background`, `--foreground`, `--primary`, `--muted`, etc.
- Colors use RGB channel format: `rgb(var(--primary))` — mapped to Tailwind via `--color-*`
- Dark theme: dark-by-default (background `#0a0a0f`, neon primary `#00ffaa`, accent `#8a2be2`)
- Custom fonts: `--font-dm-sans` (body), `--font-syne` (heading)
- Custom utility classes: `.neon-glow`, `.neon-glow-accent`, `.neon-text-glow`
- Always use existing Tailwind classes first; add new ones in `globals.css` if missing
- Mobile-first: write mobile styles first, use responsive breakpoints from `device-sizes.ts`

### Accessibility (WCAG AA)

- Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Keyboard navigation for interactive elements
- ARIA labels where appropriate
- Color contrast ratios (4.5:1 minimum for text)

### SEO

- Use Next.js `Metadata` API for dynamic meta tags
- Include Open Graph + Twitter Card metadata
- Structured data (JSON-LD) where applicable
- Sitemap via `next-sitemap`

## Adding a New Section

1. Create Sanity schema in `sanity/schemas/sections/[name].ts`
2. Register in `sanity/schemas/index.ts`
3. Add GROQ query in `sanity/schemas/pages/page.queries.ts`
4. Create CMS adapter in `components/cms/page/components/sanity-[name].tsx`
5. Create presentational component in `components/sections/[name]/[name].tsx`
6. Create Storybook story in `components/sections/[name]/[name].stories.tsx`
7. Register in component mapper `components/cms/page/sanity-page.tsx`
8. Run `pnpm typegen` to regenerate types

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add [component-name]
```

## Path Aliases

- `@/*` → project root
- `@sanity/*` → `./sanity/*`

## Key Files

- `components/cms/sanity-components.tsx` — section component registry
- `app/globals.css` — all design tokens and Tailwind config
- `sanity/schemas/pages/page.queries.ts` — main GROQ queries
- `device-sizes.ts` — responsive breakpoints
- `lib/utils.ts` — `cn()` and shared utilities
- `lib/result.ts` — Result type pattern for error handling
- `lib/assert-unreachable.ts` — TypeScript exhaustiveness checking
