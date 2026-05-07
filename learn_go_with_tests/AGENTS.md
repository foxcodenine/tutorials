# Agent Instructions

Follow `SPEC.md` for project purpose, structure, coding style, dependencies, and testing guidance.

## Working Rules

- ALWAYS - Before making any file changes, explain what you plan to change and why.
- ALWAYS - Show the relevant files or code areas you plan to touch before editing.
- ALWAYS - Wait for the user's approval before creating, editing, deleting, formatting, or moving files.
- ALWAYS - If the user says `go`, treat that as approval for the specific next step only.
- ALWAYS - Do not rewrite working code just for style unless the user asks for cleanup or refactoring.
- ALWAYS - If the user asks for an explanation, teach step by step and keep the language beginner-friendly.
- ALWAYS - If adding comments, use short `//` comments only where they help learning or readability.

## Testing

- Prefer running tests for the current exercise folder first when the change is local.
- Use `go test ./...` when a change could affect more than one exercise.
- If the Go cache causes permission problems, use:

```bash
GOCACHE=/tmp/gocache go test ./...
```

## Git

- Do not stage, commit, reset, or discard changes unless the user explicitly asks.
- If asked to use git, show `git status` first.
- Confirm each git step before taking it: review, stage, commit, push, or cleanup.
