# AGENTS.md — personal-website-v2

Guide for AI agents (Claude Code, Codex, etc.) picking up work on this project.

## What this is

Portfolio website for Christopher Farrugia. Vue 3 / TypeScript / SCSS / Vite.
Two-panel sticky layout inspired by Brittany Chiang's portfolio.
Live at chrisfarrugia.dev. This is v2 (built from scratch in Vue).

## Dev server

```bash
npm install && npm run dev   # http://localhost:5173
```

## Architecture

### Layout
- `App.vue` — root. Renders `<LeftPanel>` + `<main class="right-panel">` side by side.
- Left panel: `position: sticky; height: 100vh; overflow-y: auto` — stays fixed while right scrolls.
- Right panel: sections separated by `<hr class="section-divider">`, each wrapped in `<div class="fade-in">`.

### Sections (in order)
1. `AboutSection.vue` — `#about`
2. `ExperienceSection.vue` — `#experience`
3. `CertificationsSection.vue` — `#certifications`
4. `ProjectsSection.vue` — `#projects`
5. `ContactSection.vue` — `#contact`

### Navigation
- Desktop: `LeftPanel.vue` renders nav links; active state driven by `useActiveSection.ts`
- Mobile (≤lg breakpoint): `MobileNav.vue` — frosted glass pill fixed to bottom, 5 items

### Active section logic (`useActiveSection.ts`)
- `IntersectionObserver` with `rootMargin: '-20% 0px -50% 0px', threshold: 0`
- Scroll-to-bottom listener sets active to last section when `window.scrollY >= document.body.scrollHeight - 80`

### Fade-in (`useFadeIn.ts`)
- Observes all `.fade-in` elements, adds `.is-visible` when intersecting (threshold 0.08)
- `.fade-in` CSS: `opacity: 0; transform: translateY(16px)` → `.is-visible`: `opacity: 1; transform: none`

## Styles

SCSS with `@use` module system. Never use `@import`.

```
src/styles/
  main.scss          # global styles, .fade-in, .section-divider
  _variables.scss    # --accent (#7effa6), fonts, colours
  _mixins.scss       # respond-to(sm|md|lg|xl) breakpoint mixin
```

Import in components:
```scss
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
```

## Key colour tokens (`_variables.scss`)
- `$accent` — `#7effa6` (green)
- `$bg-1`, `$bg-2` — dark backgrounds
- `$text-1`, `$text-2` — primary and secondary text
- `$border`, `$border-hover` — card borders
- `$bg-card-hover` — card hover background
- `$accent-dim` — tag background

## TechIcons tooltip (TechIcons.vue)
Single shared `<span>` tooltip at top of `.tech` container.
On `mouseenter`, JS calculates icon center X relative to container using `getBoundingClientRect()`,
waits for `nextTick` to measure tooltip width, then clamps with `Math.max/Math.min` to prevent edge overflow.

## ProjectsSection patterns
- Cards use `<component :is="proj.href ? 'a' : 'div'">` — no href = non-navigable div
- `portrait: true` flag on project data applies `.card__img--portrait` CSS modifier
- `placeholder: 'terminal'` renders `>_` terminal-style box instead of initials
- `links[]` array renders inline link list below description

## CertificationsSection
- Uses `<component :is="cert.href ? 'a' : 'div'">` — certs with Credly links are clickable cards
- AWS SAA-C03: https://www.credly.com/badges/7d46d91e-157c-4f87-9332-d763a7e7da39
- LPIC-1: https://www.credly.com/badges/d1a932e2-effc-4df9-842c-dda349770ccd

## ContactSection
- Compact link list: View CV, email, LinkedIn, GitHub (foxcodenine), ChrisFarrugiaDev
- Grid: `8rem 1fr` (label + description)

## OG / meta tags
Set in `index.html` — title, description, og:title, og:description, og:image, twitter:card.

## What NOT to do
- Do not use `@import` in SCSS — use `@use`
- Do not add `SiteFooter` — it exists but is intentionally not rendered
- Do not use per-icon tooltips in TechIcons — the shared JS-positioned tooltip is the final solution
- Do not add `href` back to ExperienceSection cards — they were intentionally changed to `<div>`
