---
name: code-review
description: Comprehensive, read-only code review skill for analyzing entire codebases or explicitly mentioned files. Use when asked to carefully review code, perform an in-depth review, or analyze for bugs, logic errors, type errors, security issues, performance problems, regressions, maintainability risks, or any user-specified focus areas. Inspect all files in scope, follow user focus instructions exactly, produce an evidence-based report with file references, and never modify code while reviewing.
---

# Code Review

## Overview

Perform deep, read-only code reviews. Understand the codebase before judging it, inspect every file in scope, prioritize real defects and risks over style preferences, and produce a structured report with clear evidence and impact.

## Non-Negotiable Rules

- Never modify code during review.
- Never create, delete, format, rewrite, or auto-fix project files as part of review work.
- Never run commands that intentionally write changes, such as formatters, fixers, migrations, generators, or update commands.
- Treat user focus areas as mandatory priorities.
- If user asks for a full-codebase or entire-codebase review, inspect every repository file that can affect behavior, configuration, build output, runtime behavior, tests, schemas, scripts, or deployment.
- If user names specific files, inspect every named file completely.
- If named files depend on nearby code, inspect directly related files as needed to verify behavior.
- Do not claim a file was reviewed unless it was actually opened and analyzed.
- If full coverage is impossible in the available turn, say exactly what was and was not reviewed.

## Review Workflow

### 1. Define Scope

- Determine whether scope is entire codebase or specific files.
- Expand scope to directly related files when needed to validate behavior.
- Honor any user-specified review focus, including security, performance, accessibility, architecture, tests, or framework-specific concerns.
- Record scope boundaries in the final report.

### 2. Build File Inventory

- Enumerate files in scope before analysis.
- Group files by area (runtime code, config, infra, tests, schemas, migrations, scripts).
- Do not sample when full coverage is requested.
- Exclude only files that clearly cannot affect code behavior, such as dependency folders, generated build output, binary assets, lockfile internals unless dependency risk is relevant, and large vendored files.
- Mention meaningful exclusions in the final report.

### 3. Analyze Every In-Scope File

For each file, check at minimum:

- Logic correctness, edge cases, and broken user flows
- Type errors, type safety gaps, and type drift risks
- Security vulnerabilities, unsafe trust boundaries, injection risks, leaked secrets, authentication/authorization mistakes, unsafe file/network access, and dependency/config exposure
- Performance bottlenecks, avoidable repeated work, unbounded loops or queries, memory growth, and expensive rendering or I/O paths
- Reliability issues, including error handling, retries, race conditions, resource leaks, partial failure handling, and data consistency
- Regression risk from implicit assumptions, fragile coupling, incomplete migrations, or incompatible config changes
- Test gaps when they hide a plausible bug or regression risk

If user requests extra focus (for example accessibility, API consistency, architecture), include it as a first-class review axis.

### 4. Use Read-Only Verification

- Prefer read-only commands when they help verify findings, such as listing files, reading files, type checks, lint checks without fix flags, tests, build checks, or static analysis.
- Avoid verification commands that mutate files, databases, snapshots, caches outside safe temp locations, or external systems.
- If a command may write files, do not run it unless the user explicitly asks for that command and understands the effect.

### 5. Validate Findings Quality

- Report only issues with concrete evidence from the reviewed code or verification output.
- Prefer high-signal findings over speculative comments.
- If uncertain, explicitly mark uncertainty and what would confirm it.
- Distinguish bugs from improvements.
- Do not include style-only feedback unless the user requested style review or the style issue creates real risk.

### 6. Produce Final Report

Order findings by severity:

1. Critical
2. High
3. Medium
4. Low

For each finding include:

- Severity
- File and line reference
- What is wrong
- Why it matters (impact)
- Minimal recommended fix direction

Then include:

- Scope summary (what was reviewed)
- Commands run, if any
- Areas with no issues found, if useful
- Open questions or assumptions
- Residual risk or testing gaps

## Reporting Standards

- Lead with findings. Keep summary secondary.
- Be precise and concise.
- Use direct file references for every non-trivial claim.
- Avoid generic advice without evidence.
- Prefer actionable remediation guidance.
- If no issues are found, state that explicitly and list residual risks.
- If the user requested specific focus areas, explicitly account for each one in the report.

## Reviewer Mindset

- Think like an attacker for security paths.
- Think like production traffic for performance paths.
- Think like future maintainers for reliability and clarity.
- Focus on behavior and risk, not personal style preferences.
