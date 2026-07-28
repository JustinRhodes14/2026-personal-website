# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check then build to dist/
npm run preview  # serve the built dist/ locally
```

Node 17 is installed via Homebrew. The latest Vite requires Node 20+, so stay on Vite 4 (`create-vite@4`) for any scaffolding.

## Stack

- **Vite 4** + **React 18** + **TypeScript**
- **Tailwind CSS 3** — dark mode via the `class` strategy (add `dark` to `<html>`)
- **Framer Motion** — all animations and scroll effects
- **React Icons** — icon sets (`react-icons/hi`, `react-icons/fa`)

## Architecture

Single-page app with smooth-scroll sections. No routing library — navigation is handled by `scrollIntoView`.

**Theme system** (`src/context/ThemeContext.tsx`): `ThemeProvider` wraps the entire app and stores the `dark`/`light` preference in `localStorage`. Toggling adds/removes the `dark` class from `<html>` (used by Tailwind's `darkMode: 'class'` config) and toggles a `light` class on `<body>` for custom CSS rules.

**Scroll spy** (`src/hooks/useScrollSpy.ts`): tracks which section id is currently in view, used by `Navbar` to highlight the active nav link.

**Section animations** (`src/components/ui/SectionWrapper.tsx`): wraps any content in a Framer Motion div that fades/slides up once the element enters the viewport (`useInView`). Use the `delay` prop to stagger sibling elements.

**Content data** (`src/data/index.ts`): all copy lives here — `SKILLS`, `EXPERIENCE`, `PROJECTS`, `NAV_LINKS`, and `SOCIAL_LINKS`. This is the primary file to edit when adding personal content.

## Sections (in render order)

| Component | Section ID | Data source |
|---|---|---|
| `Hero` | `#hero` | hardcoded + `SOCIAL_LINKS` |
| `About` | `#about` | hardcoded placeholder text |
| `Skills` | `#skills` | `SKILLS` array |
| `Experience` | `#experience` | `EXPERIENCE` array |
| `Projects` | `#projects` | `PROJECTS` array |
| `Contact` | `#contact` | `SOCIAL_LINKS` |

## Conventions

- All section headings follow the pattern `01. Label` / `h2` for the title.
- Purple accent color is `purple-400` (text/borders) and `purple-600` (buttons/fills). Keep these consistent; avoid introducing other accent hues.
- Tailwind utility `section-padding` and `text-gradient` are defined in `src/index.css` under `@layer utilities`.
- The `bg-gray-950` base color is not in Tailwind's default palette — it's defined in `tailwind.config.js` via the extended colors.
- Light mode support is partially wired (toggle exists, class is applied) but Tailwind `dark:` variants are not yet added to components. When implementing light mode, prefix overrides with `dark:` rather than conditionally swapping class names.
