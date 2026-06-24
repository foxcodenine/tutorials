# Repository Guidelines

## General Instructions

- Before making any repository change, ask for confirmation and wait for approval. Explain what will change and why before editing.
- After making approved changes, summarize the outcome and show the affected files or relevant diff.
- Keep responses direct, practical, and specific to this repository.
- Prioritize readability in code and documentation. Add comments where they clarify non-obvious logic or operational behavior.

## Project Context

This is a Node.js watchdog service. Read `SPEC.md` before changing runtime behavior, alerting, PM2 restart logic, cron schedules, or environment handling.

Key paths:

- `src/server.js`: runtime entry point.
- `src/App.js`: singleton app and cron orchestration.
- `src/services/`: UDP/TCP probes, Twilio alerts, SendGrid email, and PM2 restart helpers.
- `tests/unit/` and `tests/integration/`: reserved test locations.

## Build, Test, and Development Commands

- `npm install`: install Node dependencies from `package-lock.json`.
- `npm run start`: run `nodemon src/server.js`.
- `npm run dev`: run the development watcher command currently defined in `package.json`.
- `make encrypt pw=<password>`: encrypt `.env` and notes files using `scripts/encrypt.sh`.
- `make decrypt pw=<password>`: decrypt protected local configuration and notes.
- `make docker-up pw=<password>` / `make docker-down pw=<password>`: manage the configured Docker Compose stack.

There is no build step and no `npm test` script at present.

## Coding Style & Naming Conventions

Use CommonJS modules (`require`, `module.exports`) and keep service files focused on one responsibility. Follow the existing style: 4-space indentation, semicolons, single quotes in most files, and PascalCase for classes such as `UdpCanary` and `EmailService`. Use camelCase for functions, variables, and service helpers.

## Testing Guidelines

No test framework is currently configured. Add unit tests under `tests/unit/` for isolated services and integration tests under `tests/integration/` for network, Twilio, SendGrid, or PM2 behavior. Prefer test names that mirror the module under test, for example `udpCanaryService.test.js`.

## Commit & Pull Request Guidelines

Git history only shows short messages such as `Initial commit` and `update repo`; use concise imperative commits going forward, for example `Add TCP timeout handling`. Pull requests should describe runtime impact, list required environment variables, mention any cron or PM2 changes, and include manual verification steps.

## Agent-Specific Instructions

- Do not commit decrypted `.env` files or operational secrets.
- Do not change alert recipients, credentials, restart targets, or cron schedules without explicit task scope.
- Preserve the current CommonJS style unless a broader migration is requested.
- Keep documentation concise and update `SPEC.md` when behavior changes.

## Instruction Queue Workflow

- Use `INSTRUCTIONS.md` to track step-based work.
- `Step 0` is the current instruction to work on.
- `Step 1`, `Step 2`, and higher are future instructions. Do not start them until the user gives the command.
- `Step -1`, `Step -2`, and lower are completed instructions.
- The command to advance queued work is `next instruction`.
- When the user says `next instruction`, read `INSTRUCTIONS.md`, explain what `Step 0` requires, and ask for confirmation before making repository changes.
- After completing `Step 0`, update `INSTRUCTIONS.md` by shifting every step down by one: `Step 1` becomes `Step 0`, `Step 0` becomes `Step -1`, and `Step -1` becomes `Step -2`.
- When advancing `INSTRUCTIONS.md`, preserve each instruction's original text exactly. Only update the step heading numbers; do not replace completed instructions with summaries.
