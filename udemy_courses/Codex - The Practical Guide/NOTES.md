## Codex CLI Slash Commands

Quick reference from the official Codex CLI slash-commands docs.

### Session

- `/status` - show the current session state
- `/model` - show or change the model
- `/fast` - use a faster response mode
- `/personality` - change Codex's response style
- `/permissions` - open the permissions browser
- `/approve` - open the approvals browser
- `/review` - review the working tree
- `/diff` - show the Git diff
- `/ps` - show running processes for the session
- `/stop` - stop background terminals
- `/clean` - alias for `/stop`
- `/compact` - compress the conversation to save context

### Conversations

- `/new` - start a new conversation
- `/resume` - resume a saved conversation
- `/fork` - fork the current conversation
- `/side` - start a side conversation
- `/mention` - attach a file to the conversation

### Project Setup

- `/init` - generate an `AGENTS.md` scaffold
- `/goal` - manage a task goal
- `/mcp` - list MCP tools
- `/apps` - browse available apps
- `/plugins` - browse plugins
- `/hooks` - review hook settings

### UI and Settings

- `/debug-config` - inspect config settings
- `/statusline` - configure the status line
- `/title` - set the conversation title
- `/theme` - change the UI theme
- `/keymap` - view or change key bindings

### Exit

- `/exit` - leave Codex
- `/quit` - alias for `/exit`

If a command is not listed here, check the current official docs page before adding it to your notes.

## AGENTS.md and SPEC.md

- `AGENTS.md` is the repo guide for Codex and other contributors.
- It usually includes:
  - general instructions
  - project context
  - build and test commands
  - coding style and naming rules
  - commit and pull request notes
- A simple `AGENTS.md` format can look like this:

```md
# Repository Guidelines

## General Instructions
- Keep changes small and focused.

## Project Context
- Explain what the project is and where the main files live.

## Build, Test, and Development Commands
- List the main commands to run the project and tests.

## Coding Style & Naming Conventions
- Describe formatting, file naming, and language style.

## Commit & Pull Request Guidelines
- Mention the preferred commit style and review notes.
```

- `SPEC.md` describes what the app should do, including features, routes, data, and behavior.
- Use `AGENTS.md` for how to work in the repo.
- Use `SPEC.md` for what the app should do.

## SPEC.md

- `SPEC.md` is the project plan or product requirements file.
- It tells Codex what the finished app, feature, or script should do.
- It is useful when you want Codex to follow a clear target instead of guessing.
- A good `SPEC.md` usually includes:
  - the goal of the project
  - required features
  - pages, routes, or commands
  - data model or file structure
  - constraints and non-goals
  - expected behavior and edge cases
- A simple `SPEC.md` format can look like this:

```md
# Project SPEC

## Goal
- Explain what this project should achieve.

## Features
- List the main features that must work.

## Routes / Commands
- List pages, API routes, CLI commands, or workflows.

## Data / Files
- Describe important data, tables, files, or folders.

## Constraints
- List rules Codex should not break.

## Non-Goals
- List things that should not be built yet.
```

## MCP Server

- MCP means Model Context Protocol.
- An MCP server gives Codex extra tools or data sources it can use.
- Examples include docs, databases, GitHub, files, or internal company systems.
- In Codex, `/mcp` can show available MCP tools.
- Use an MCP server when Codex needs live or external context instead of only the files in the repo.

## Agent Skills

- Agent skills are reusable instructions for a specific type of task.
- A skill can tell Codex what steps to follow, what files to check, and what style to use.
- Skills are useful for repeated workflows, like writing tests, creating docs, or reviewing code.
- A skill usually has a `SKILL.md` file with the instructions.
- Use a skill when you want Codex to follow the same process every time.
