# Claude Code — Week 1 Guide

A quick personal reference for extending Claude Code with **MCP servers**,
**Skills**, and **Plugins**. Each section follows the same shape:
**What it is → Where to find them → How to add → Examples**.

## Contents

1. [Slash Commands & CLI Flags](#slash-commands--cli-flags)
2. [MCP (Model Context Protocol)](#mcp-model-context-protocol)
3. [Skills](#skills)
4. [Plugins](#plugins)

---

## Slash Commands & CLI Flags

| Command | Purpose |
| --- | --- |
| `/clear` | Clear the conversation |
| `/compact` | Compact the conversation history |
| `/resume` | Resume a previous session |
| `/rewind` | Rewind to an earlier point |
| `/config` | Open configuration |
| `/context` | Show context usage |
| `/status` | Show current status |
| `/init` | Initialize a `CLAUDE.md` for the project |
| `/model` | Switch the model |
| `/plan` | Plan mode |
| `/permissions` | Manage permissions |
| `/mcp` | Manage MCP servers |
| `/skill` | Use a skill |
| `/plugin` | Manage plugins |

```bash
# Skip permission prompts (use with care — only in trusted dirs)
claude --dangerously-skip-permissions
```

---

## MCP (Model Context Protocol)

**What it is** — MCP is an open standard that lets Claude Code connect to
external tools and data sources (APIs, databases, services) through a common
protocol. Each *MCP server* exposes a set of tools Claude can call — e.g. read
GitHub issues, query Jira, or fetch live docs — without baking that logic into
Claude itself.

**Where to find them**

| Source | What it is |
| --- | --- |
| https://glama.ai | Directory of MCP servers with search and ratings. |
| https://mcp.so | Community-maintained catalog of MCP servers. |
| https://smithery.ai | Registry/hub for discovering and installing MCP servers. |
| https://github.com/modelcontextprotocol | Official MCP org — spec, SDKs, and reference servers. |

**How to add / manage**

```bash
claude mcp add <name> -- <command>     # add a local (stdio) server
claude mcp add --transport http <name> <url>   # add a remote server
claude mcp list                        # list configured servers
claude mcp remove <name>               # remove a server
```

Inside a session, run `/mcp` to view servers and their connection status.

**Examples**

```bash
# Context7 — live, version-specific library docs
claude mcp add context7 -- npx -y @upstash/context7-mcp

# GitHub remote MCP server (replace YOUR_GITHUB_PAT with your token)
claude mcp add --transport http github https://api.githubcopilot.com/mcp \
  --header "Authorization: Bearer YOUR_GITHUB_PAT"

# Atlassian Jira remote MCP server
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp
```

> Tip: keep secrets (tokens) out of committed files. Prefer environment
> variables or per-user settings over hard-coding them.

---

## Skills

**What it is** — Skills are reusable, self-contained instruction packs (a folder
with a `SKILL.md` plus optional scripts) that teach Claude Code how to perform a
specific task or follow a workflow. Claude loads a skill on demand when the task
matches, so you get consistent, repeatable behaviour without re-explaining it.

**Where to find them**

| Source | What it is |
| --- | --- |
| https://www.skills.sh/ | Directory for finding and installing community skills. |
| https://github.com/anthropics/skills | Official Anthropic skills repo — browse and copy first-party skills. |

**How to add / use**

```bash
npx skills add <repo-url> --skill <skill-name>   # install one skill from a repo
/skill                                            # invoke a skill in-session
```

**Example — systematic-debugging**

A skill that walks Claude through a disciplined, step-by-step debugging method
(reproduce → isolate → hypothesize → verify) instead of guessing at fixes.

```bash
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
```

- Source: https://www.skills.sh/obra/superpowers/systematic-debugging

> Tip: use the **skill-creator** plugin (below) to scaffold your own `SKILL.md`.

---

## Plugins

**What it is** — Plugins bundle commands, agents, and behaviours into one
installable package. Manage them in-session with `/plugin` (browse, install,
enable/disable). Most are invoked as `/<plugin>` or `/<plugin>:<command>`.

**Where to find them** — the built-in `/plugin` marketplace.

**Common plugins**

| Plugin | What it does |
| --- | --- |
| **context7** | Pulls up-to-date, version-specific docs and code examples for libraries/frameworks straight into context, so answers aren't based on stale training data. |
| **skill-creator** | Helps you scaffold and write your own custom skills. |
| **code-review** | Reviews your current diff/branch for bugs and cleanup; can post inline PR comments or apply fixes. |
| **frontend-design** | Assists with UI/frontend work — layouts, components, visual design. |
| **feature-dev** | Guides end-to-end feature development: plan, implement, and wire up a feature across the codebase. |
| **code-simplifier** | Refactors changed code for readability, reuse, and simplicity (quality cleanup, not bug hunting). |
| **Ralph** | An autonomous "loop" plugin — runs a task iteratively until a goal is met. |
| **security-guidance** | Security best-practice guidance; helps spot vulnerabilities in code and design. |

**Example**

```text
/feature-dev:feature-dev please implement jira issue PL-3 with a NextJS
application in a directory called frontend, then raise a PR when done
```

---

## Extras Worth Knowing

A short list of high-value extras beyond the ones above.

**Built-in skills (no install — just run them)**

- `/fewer-permission-prompts` — auto-allows safe read-only commands so you stop getting nagged. Run once early.
- `/security-review` — security review of your current branch's changes before pushing.
- `/verify` and `/run` — actually launch the app to confirm a change works, not just trust it.
- `/update-config` — set up hooks, permissions, and env in `settings.json` (the only way to get "always do X automatically" behaviour).

**MCP servers worth adding**

- **Playwright MCP** — lets Claude drive a real browser (click, screenshot, test UI). Pairs well with frontend work.
  ```bash
  claude mcp add playwright -- npx -y @playwright/mcp@latest
  ```

---

## Keeping CLAUDE.md / AGENTS.md Up to Date

The agent file goes stale fast if you don't maintain it. Tell Claude to update
it at the end of a session or after a significant feature is done:

```text
Please add concise details to the end of AGENTS.md with an update on what has
been implemented, and change anything that's no longer accurate in AGENTS.md.
```

A few other useful variants:

```text
Please check CLAUDE.md is u to date with project status
```


```text
# After a specific task
Now that the auth module is done, update CLAUDE.md to reflect the new setup
and remove anything that's no longer accurate.

# At the start of a session to verify it's still current
Before we start, review CLAUDE.md and flag anything that looks outdated.

# Add it to a hook so it's suggested automatically after each session
/update-config  →  after session: prompt me to update CLAUDE.md
```

> Keep updates **concise** — CLAUDE.md should stay a quick reference,
> not a changelog. One bullet per feature, update or remove stale lines.

---

# Customizing & Automating Claude Code

This part covers the five building blocks for extending Claude Code, in order of
complexity:

1. [Slash Commands](#1-slash-commands) — your own reusable prompts
2. [Sub-agents](#2-sub-agents) — a separate agent for a focused job
3. [Multi-agent & Agent Teams](#3-multi-agent--agent-teams) — many agents working together
4. [Hooks](#4-hooks) — run something automatically on an event
5. [Plugins](#5-plugins) — package all of the above to share/reuse

All examples below come from the `finally/` practice project (an AI trading app
built entirely by agents). The shared layout looks like this:

```
finally/
├── .claude/
│   ├── commands/        # slash commands  (markdown files)
│   ├── agents/          # sub-agents      (markdown files)
│   ├── skills/          # skills          (folders with SKILL.md)
│   └── settings.json    # permissions + hooks
├── .claude-plugin/
│   └── marketplace.json # lists plugins you can install
├── independent-reviewer/ # a custom plugin (see Plugins below)
└── planning/            # shared docs the agents read & write
```

> **Mental model:** `.claude/` configures *this one project*. A **plugin** is the
> same kind of stuff (commands, agents, hooks) bundled into its own folder so it
> can be installed into *any* project.

---

## 1. Slash Commands

**What it is** — A slash command is just a saved prompt you can run by typing
`/name`. Instead of retyping the same instruction every time, you write it once
in a markdown file and Claude runs its contents.

**How to create one**

Drop a markdown file in `.claude/commands/`. The filename becomes the command
name:

```
.claude/commands/doc-review.md   →   /doc-review
```

**Example — `doc-review.md`** (from the practice project):

```markdown
Review the documentation file in the planning folder called $ARGUMENTS and add
questions, clarifications or feedback to a new section at the end, along with
any opportunities to simplify
```

Run it with an argument:

```text
/doc-review PLAN.md
```

- `$ARGUMENTS` is a placeholder — whatever you type after the command gets
  dropped in there. So `/doc-review PLAN.md` reviews `planning/PLAN.md`.
- The whole file is just the instructions Claude follows. No special syntax
  needed beyond optional placeholders like `$ARGUMENTS`.

> **Takeaway:** Slash command = a reusable prompt in a file. Easiest win.

---

## 2. Sub-agents

**What it is** — A sub-agent is a *separate* Claude agent you can hand a specific
job to. It runs with its own fresh context (its own conversation), does the task,
and reports back. This keeps focused work from cluttering your main chat, and
lets you give that agent a narrow, well-defined role.

**How to create one**

Add a markdown file in `.claude/agents/`. It needs a small **frontmatter** header
(`name` + `description`) followed by the agent's instructions.

**Example — `change-reviewer.md`** (from the practice project):

```markdown
---
name: change-reviewer
description: carry out a comprehensive review of all changes since the last commit
---

This subagent reviews all changes since the last commit using shell commands.
IMPORTANT: You should not review the changes yourself, but rather run the
following shell command to kick off codex — a separate AI agent that carries
out the independent review:
`codex exec "Please review all changes since the last commit and write feedback to planning/REVIEW.md"`
Do not review yourself.
```

**How to use it** — just ask in plain language and Claude picks the matching
agent (the `description` is how it decides):

```text
Use your change-reviewer subagent to review changes since the last commit
```

Notice the clever trick in this example: the sub-agent doesn't review the code
itself — it shells out to **codex** (a different AI agent entirely) to get a
truly *independent* second opinion. The reviewer and the author are different
models, so the review isn't biased by the code's own author.

> **Slash command vs sub-agent:**
> - Slash command = a prompt **your main agent** runs inline.
> - Sub-agent = a **separate agent** with its own context that runs the job and
>   reports back.

---

## 3. Multi-agent & Agent Teams

**What it is** — "Multi-agent" just means more than one agent working on the same
project, usually each with a specialty (e.g. a Backend agent, a Frontend agent, a
Reviewer agent). An **agent team** is that idea taken further: several agents
coordinating to build something bigger than one agent would tackle alone.

**How they coordinate — the key idea: shared files**

Agents can't see inside each other's heads, so they communicate through **files
on disk**. In the practice project this is the `planning/` folder:

- `planning/PLAN.md` — the shared spec/contract every agent reads
- `planning/REVIEW.md` — where the reviewer agent writes feedback
- each agent reads the plan, does its slice, and writes results back

The `finally` PLAN.md says it plainly: *"It is built entirely by Coding Agents…
Agents interact through files in `planning/`."* That's the whole pattern —
**one agent's output file is the next agent's input.**

**A simple team setup**

| Agent | Role | Reads | Writes |
| --- | --- | --- | --- |
| Architect | Designs the plan | the spec | `planning/PLAN.md` |
| Backend | Builds the API | `PLAN.md` | `backend/` code |
| Frontend | Builds the UI | `PLAN.md` | `frontend/` code |
| Reviewer | Independent review | the diff | `planning/REVIEW.md` |

You define each specialist as a **sub-agent** (Section 2) and give them clear,
non-overlapping boundaries (the PLAN.md "Key Boundaries" section does exactly
this — frontend knows nothing about Python, etc.). Clear boundaries = agents
don't step on each other.

> **Takeaway:** A team is just several sub-agents with clear roles that hand work
> to each other through shared files. Keep their responsibilities from
> overlapping and the coordination stays simple.

---

## 4. Hooks

**What it is** — A hook runs something **automatically** when an event happens —
no need to ask. The most useful event is `Stop`: it fires when Claude finishes
responding. Hooks are the *only* way to get "always do X automatically"
behaviour; a preference or memory can't do this because the harness (not Claude)
executes hooks.

**How to add one**

Hooks live in `.claude/settings.json`. You name the event (`Stop`), and give it a
`type` and a `prompt`.

**Example — auto-review after every turn** (from the practice project's
`.claude/settings.json`):

```json
{
    "permissions": {
        "allow": [
            "Write(planning/REVIEW_from_hook.md)",
            "Edit(planning/REVIEW_from_hook.md)"
        ]
    },
    "hooks": {
        "Stop": [
            {
                "hooks": [
                    {
                        "type": "agent",
                        "prompt": "Carry out a review of all changes since last commit and write results to the end of a file named planning/REVIEW_from_hook.md",
                        "timeout": 240
                    }
                ]
            }
        ]
    }
}
```

What this does: **every time Claude stops**, it automatically spins up an agent to
review changes and append the result to `planning/REVIEW_from_hook.md`.

Key fields:

- `"Stop"` — the event (fires when Claude finishes responding).
- `"type": "agent"` — run a whole agent (vs. a shell command).
- `"prompt"` — what that agent should do.
- `"timeout": 240` — give it up to 240 seconds.
- The `permissions.allow` block pre-approves writing/editing that file so the
  hook doesn't get blocked by a permission prompt.

> **Tip:** You don't have to hand-edit `settings.json` — run the `/update-config`
> skill and describe the behaviour ("after I stop, review changes and write to
> planning/REVIEW.md") and it sets up the hook for you.

---

## 5. Plugins

**What it is** — A plugin **packages** commands, agents, skills, and hooks into
one self-contained folder so you can install it into *any* project (or share it),
instead of copying files into each project's `.claude/` by hand. It's how you take
something that worked once and make it reusable everywhere.

**The two pieces you need**

A plugin folder has a manifest, plus whatever it provides (here, a hook):

```
independent-reviewer/            ← the plugin
├── .claude-plugin/
│   └── plugin.json              ← the plugin's identity (name, version)
└── hooks/
    └── hooks.json               ← what the plugin actually does
```

**`plugin.json`** — identifies the plugin:

```json
{
    "name": "independent-reviewer",
    "description": "Carry out an independent review of all changes since last commit",
    "version": "1.0.0"
}
```

**`hooks/hooks.json`** — same hook format as Section 4, just shipped inside the
plugin:

```json
{
    "hooks": {
        "Stop": [
            {
                "hooks": [
                    {
                        "type": "agent",
                        "prompt": "Carry out a review of all changes since last commit and write results to the end of a file named planning/REVIEW_from_custom_plugin.md",
                        "timeout": 240
                    }
                ]
            }
        ]
    }
}
```

**The marketplace — how a plugin gets discovered/installed**

A plugin has to live in a "marketplace" so Claude can find it. That's a
`.claude-plugin/marketplace.json` listing one or more plugins:

```json
{
  "name": "ed-tools",
  "owner": { "name": "foxcodenine", "email": "foxcode9@gmail.com" },
  "plugins": [
    {
      "name": "independent-reviewer",
      "source": "./independent-reviewer",   ← points to the plugin folder
      "description": "Carry out an independent review of all changes since last commit",
      "version": "1.0.0",
      "author": { "name": "foxcodenine" }
    }
  ]
}
```

- `source` is just the path to the plugin folder (can be local like `./...` or a
  git repo).
- One marketplace can list many plugins.

**How to install / use it**

```text
/plugin           → opens the plugin manager
                    → "Marketplaces" → add your marketplace
                    → install "independent-reviewer"
```

Once installed, its hook runs in whatever project you enabled it in — that's the
payoff: the auto-reviewer you built once now works everywhere, no copy-paste.

> **How the pieces fit together (the whole picture):**
> - **Slash command** → a reusable prompt.
> - **Sub-agent** → a separate agent for a focused job.
> - **Agent team** → several sub-agents coordinating via shared files.
> - **Hook** → run a command/agent automatically on an event.
> - **Plugin** → bundle any of the above so it's installable & shareable.

