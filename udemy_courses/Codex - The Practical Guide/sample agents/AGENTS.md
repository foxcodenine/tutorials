# Repository Guidelines

## General Instructions

- ALWAYS run `bun run format` AFTER you're done with your task and you edited all files that needed editing
- ALWAYS run `bun run lint` after making any changes => fix any linting errors you get
- ALWAYS check for type errors via `bun tsc --noEmit`
- ALWAYS run unit tests via `bun run test`
- ALWAYS run e2e tests via `bun run test:e2e`

## Project Structure & Module Organization

- `src/app/` contains the Next.js App Router pages, layouts, loading states, and `not-found.tsx`.
- `src/components/` holds reusable UI and layout components.
- `public/` stores static assets such as fonts and icons.
- Keep future server-side logic in `src/lib/` or `src/server/` if added later.

## Build, Test, and Development Commands

- `bun run dev` starts the local Next.js development server.
- `bun run build` creates a production build and validates routing/types.
- `bun run start` runs the production build locally.
- `bun run lint` runs `oxlint` across the repo.
- `bun run format` runs `oxfmt` for formatting.

## Coding Style & Naming Conventions

- Use TypeScript with `strict` mode enabled.
- Prefer small, focused components and server-rendered pages.
- Follow the existing naming pattern: `PascalCase` for components, `page.tsx` and `layout.tsx` for routes, `loading.tsx` for route loading states.
- Use the `@/*` import alias for files under `src/`.
- Keep class names and styling Tailwind-based, matching the current neutral visual style.

<!-- ## Testing Guidelines
- No automated test framework is configured yet.
- Before opening a PR, run at least `bun run lint` and `bun run build`.
- If you add tests, place them near the feature or under a dedicated `tests/` directory and document the runner in `package.json`. -->

## Commit & Pull Request Guidelines

- Recent commits use short, imperative messages such as `feat: scaffold TinyNotes app` or `update repo`.
- Prefer concise commit titles with an optional scope, for example `feat: add notes layout`.
- Pull requests should summarize the change, list commands run, and include screenshots for UI changes.
- Call out any routing, layout, or asset-path changes explicitly because they affect the Next.js file-based router.

## Architecture Notes

- Route groups like `(app)` and `(public)` are for organization only; they do not appear in URLs.
- The app currently uses `src/app/` rather than a root-level `app/` directory.
