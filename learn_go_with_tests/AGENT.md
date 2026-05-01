# Agent Instructions

This project is a local learning workspace for the `Learn Go With Tests` exercises.

## Project Context

- This is a Go learning project, not a production application.
- Each folder is usually a small, focused exercise from the course.
- Keep changes small, readable, and aligned with the exercise being worked on.
- Prefer simple Go code that is easy to understand over clever abstractions.
- Do not add extra frameworks, dependencies, or tooling unless the user asks.

## Working Rules

- Before making any file changes, explain what you plan to change and why.
- Always show the relevant files or code areas you plan to touch before editing.
- Wait for the user's approval before creating, editing, deleting, formatting, or moving files.
- If the user says `go`, treat that as approval for the specific next step only.
- Do not rewrite working code just for style unless the user asks for cleanup or refactoring.
- If the user asks for an explanation, teach step by step and keep the language beginner-friendly.
- If adding comments, use short `//` comments only where they help learning or readability.

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
