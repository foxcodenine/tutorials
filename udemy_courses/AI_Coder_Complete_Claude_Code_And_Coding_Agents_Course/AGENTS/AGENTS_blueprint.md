# AGENTS.md — Guide

A template guide for writing your own `AGENTS.md` (or `CLAUDE.md`) at the root
of any project. Fill in each section for your specific project.

---

## Project Purpose
One short paragraph: what the project does, who uses it, and the primary stack.
Gives the agent a decision-making anchor for every task.

---

## Architecture
Directory tree + bullet list of key technologies and how the layers connect
(e.g. API → service → DB). Include Docker/container setup here if relevant.
Helps the agent navigate without exploring from scratch each session.

---

## Setup Commands
Exact shell commands to go from a fresh clone to a running local environment:
install deps, copy `.env`, run migrations, start services.

---

## Test Commands
How to run all tests, a single file, and coverage.
State any rule like "always run tests before marking a task done."

---

## Code Style
Formatter/linter standard, max line length, naming conventions.
List forbidden patterns: print statements, commented-out code, wildcard imports, etc.

---

## Database Rules
ORM vs raw SQL policy, migration tool rules, transaction guidelines.
Explicitly state anything the agent must never do without approval (e.g. ALTER TABLE by hand, run destructive downgrade commands).

---

## Branch & PR Rules
Branch naming convention, commit message format, when to open a PR vs push
directly. Essential if using `feature-dev` or similar plugins.

---

## Do Not Modify
Flat list of files/dirs the agent must not touch without explicit approval.
Add a short reason next to each (CI pipelines, security modules, prod config, generated files, etc.).

---

## Security Rules
Hard rules: never commit secrets, never log PII, always validate at the API
boundary, flag vulnerable dependencies rather than silently upgrading.
Add any domain-specific requirements (HIPAA, PCI, GDPR) here.

---

## AI Behaviour
Global rules for how the agent should act:
- Always ask before destructive or irreversible actions.
- Prefer editing existing files over creating new ones.
- No unsolicited refactors — only change what the task requires.
- Flag uncertainty rather than guessing.
