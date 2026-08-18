# --- Add Repository Resources Using For_Each ----------------------------------

# Add new repository resources using for_each to main.tf:

# Repositories created with for_each
resource "github_repository" "repo_foreach" {
  for_each    = var.repositories
  name        = "repo-${each.key}"
  description = each.value
  visibility  = "public"
  auto_init   = true

  topics = ["terraform", "foreach", "example"]
}

# --- Add Branch Protection Rules Using For_Each -------------------------------

# Create a cross-product of repositories and branch patterns with nested for_each:

# Branch protection rules created with for_each
resource "github_branch_protection" "protection_api" {
  for_each      = var.branch_patterns
  repository_id = github_repository.repo_foreach["api"].node_id
  pattern       = each.key

  allows_deletions                = false
  allows_force_pushes             = false
  require_conversation_resolution = true
}

resource "github_branch_protection" "protection_web" {
  for_each      = var.branch_patterns
  repository_id = github_repository.repo_foreach["web"].node_id
  pattern       = each.key

  allows_deletions                = false
  allows_force_pushes             = false
  require_conversation_resolution = true
}

# --- Add Issue Label Resources Using For_Each ---------------------------------

# Add labels to the "api" and "web" repositories:

# Issue labels for API repository
resource "github_issue_label" "label_api" {
  for_each    = var.label_config
  repository  = github_repository.repo_foreach["api"].name
  name        = each.key
  color       = each.value
  description = "${each.key} label for API repository"
}

# Issue labels for Web repository
resource "github_issue_label" "label_web" {
  for_each    = var.label_config
  repository  = github_repository.repo_foreach["web"].name
  name        = each.key
  color       = each.value
  description = "${each.key} label for Web repository"
}

