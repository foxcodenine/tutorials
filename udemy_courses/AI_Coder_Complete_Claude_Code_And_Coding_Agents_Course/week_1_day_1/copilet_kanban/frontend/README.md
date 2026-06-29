# Kanban Frontend (Demo)

Simple Next.js client-rendered demo for the Kanban MVP.

Quick start:

```bash
cd frontend
npm install
npm run dev
```

Notes:
- This scaffold uses plain React and a minimal CSS baseline.
- Tailwind CSS and `dnd-kit` have been added to `package.json`. Run `npm install` to fetch new dependencies.

Next steps:
- Replace the HTML5 drag/drop with a `dnd-kit` implementation for better UX.
E2E tests
-----

Run Playwright E2E tests (will start the dev server if not running):

```bash
cd frontend
npm install
npx playwright install
npm run test:e2e
```

