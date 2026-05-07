# Project Spec

This project is a local learning workspace for the `Learn Go With Tests` exercises.

## Purpose

- This is a Go learning project, not a production application.
- The goal is to practice Go by following small, test-driven exercises.
- Code should be easy to read, easy to test, and beginner-friendly.

## Project Structure

- Each folder is usually one focused exercise from the course.
- Changes should stay aligned with the exercise currently being worked on.
- Avoid broad refactors across unrelated exercise folders unless specifically requested.

## Code Style

- Prefer simple Go code over clever abstractions.
- Keep functions small and readable when possible.
- Do not rewrite working code only for style unless cleanup or refactoring is requested.
- Use short `//` comments only where they help learning or readability.

## Dependencies

- Do not add extra frameworks, dependencies, or tooling unless requested.
- Prefer Go standard library solutions when they fit the exercise.

## Testing

- Prefer running tests for the current exercise folder first when a change is local.
- Use `go test ./...` when a change could affect more than one exercise.
- If the Go cache causes permission problems, use:

```bash
GOCACHE=/tmp/gocache go test ./...
```
