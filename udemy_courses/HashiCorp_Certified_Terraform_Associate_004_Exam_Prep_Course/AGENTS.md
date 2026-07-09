# AGENTS.md

Guidance for AI coding agents working in this directory.

## What this is

A personal learning workspace for the Udemy course **"HashiCorp Certified Terraform Associate (004) Exam Prep Course"**. It is not a production project — the code here follows the course lessons and labs, and the owner is learning Terraform as they go.

## Layout

- `section_N_*/` — per-section demo configs and `notes.md` files with commands and takeaways from the lectures.
- `section_8_hands_on_labs-writing_your_first_terraform_configurations/lab_N/` — hands-on labs. Each lab has two parallel variants:
  - `aws/` — the lab as taught (AWS provider).
  - `github/` — the same lab adapted to the `integrations/github` provider (so it can be applied for free without an AWS account).
  - Each variant contains a lab instructions `.md` file and one or more `terraform/` config directories.
- `slides/` — course PDFs, reference only.

## Conventions

- Terraform version is pinned per config in `providers.tf` (`required_version`), currently `1.12.2`.
- Providers: `integrations/github ~> 6.5.0` for the github variants; `hashicorp/aws` for the aws variants.
- Config files follow the standard split: `main.tf`, `providers.tf`, `variables.tf`, `outputs.tf`, and `data.tf` where data sources are used.
- Code is heavily commented on purpose — comments explain what each argument does because this is study material. Keep that style when editing; do not strip comments.
- GitHub provider auth comes from the environment (`GITHUB_TOKEN`); `provider "github" {}` blocks stay empty. Never hard-code credentials.

## State — be careful

- Labs use **local state**. `terraform.tfstate`, `*.backup`, and timestamped backups sit next to the configs and may describe real resources (real GitHub repos, real AWS resources).
- Do not delete, edit, or regenerate state files by hand.
- Do not run `terraform apply` or `terraform destroy` unless explicitly asked. `terraform init`, `validate`, `fmt`, and `plan` are fine.

## Working here

- When helping with a lab, read the lab's instruction `.md` first — the goal is usually to practice a specific concept (variables, dependencies, state, data sources, CLI), not to write the "best" config.
- Prefer explaining *why* over just fixing — this is a learning repo and the owner is preparing for the Terraform Associate exam.
- Each lab/section directory is an independent Terraform root module; run commands from inside the specific config directory, not the course root.
