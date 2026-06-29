# personal-website-v2

Personal portfolio website for Christopher Farrugia — a backend-focused full-stack engineer based in Malta / United Kingdom.

Live at **[chrisfarrugia.dev](https://chrisfarrugia.dev)**.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Language | TypeScript |
| Styles | SCSS (with `@use` module system) |
| Build | Vite |
| Icons | SVG sprite (`public/svg/sprite.svg`) |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output to dist/
npm run preview   # preview production build
```

## Structure

```
src/
  App.vue                     # root layout, section order, dividers, fade-in
  components/
    LeftPanel.vue             # sticky left panel — name, nav, tagline, TechIcons
    TechIcons.vue             # icon grid with JS-positioned tooltip
    MobileNav.vue             # frosted glass pill nav (fixed bottom, ≤lg)
    AboutSection.vue          # #about
    ExperienceSection.vue     # #experience
    CertificationsSection.vue # #certifications
    ProjectsSection.vue       # #projects
    ContactSection.vue        # #contact
    SiteFooter.vue            # exists but intentionally not rendered
  composables/
    useActiveSection.ts       # IntersectionObserver + scroll-to-bottom nav highlight
    useFadeIn.ts              # fade-in on scroll for .fade-in elements
  styles/
    main.scss                 # global reset, fade-in animation, section-divider
    _variables.scss           # colour tokens, fonts
    _mixins.scss              # respond-to() breakpoint mixin
public/
  favicon.svg                 # dark square + green corner brackets + CF monogram
  profile.jpeg                # profile photo
  svg/sprite.svg              # tech icon SVG sprite
  images/                     # project thumbnails
```

## Key design decisions

- **Two-panel sticky layout** — left panel `position: sticky; height: 100vh`, right panel scrolls
- **No router** — single page, section IDs used for nav
- **Active nav** — `IntersectionObserver` with `rootMargin: '-20% 0px -50% 0px'` + scroll-to-bottom fallback
- **Fade-in** — `.fade-in` / `.is-visible` class toggle via `useFadeIn` composable
- **Mobile nav** — `MobileNav.vue` shown at `lg` breakpoint and below, hidden on desktop
- **Spotlight glow** — CSS `radial-gradient` tracks mouse via `--mouse-x` / `--mouse-y` CSS vars (set in `App.vue`)

## Agent / AI session handoff

See `AGENTS.md` for architecture details and `SPEC.md` for current content state.
