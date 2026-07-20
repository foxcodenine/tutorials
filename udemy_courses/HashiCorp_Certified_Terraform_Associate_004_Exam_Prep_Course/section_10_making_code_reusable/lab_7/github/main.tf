# Get information about the current user
# ----------------------------------------------------------------------
# Data Sources
data "github_user" "current" {
  username = ""
}

# ----------------------------------------------------------------------
# Locals Block
locals {
  # Common repository features
  repo_features = {
    has_issues      = true
    has_wiki        = true
    has_discussions = true
    has_projects    = true
    auto_init       = true
  }

  # Common repository merge settings
  merge_settings = {
    allow_merge_commit     = true
    allow_rebase_merge     = true
    allow_squash_merge     = true
    delete_branch_on_merge = true
  }

  # Common topics
  common_topics = [
    var.environment,
    "terraform-demo",
    "infrastructure-team"
  ]

  # Common name prefix for resources
  name_prefix = "${var.environment}-"

  # Managed by information
  managed_by = "Managed by Terraform (${data.github_user.current.login})"
}

# ----------------------------------------------------------------------
# Resources

resource "github_repository" "app" {
  name        = "${local.name_prefix}application"
  description = "${title(var.environment)} application repository. ${local.managed_by}"
  visibility  = "public"

  has_issues      = local.repo_features.has_issues
  has_wiki        = local.repo_features.has_wiki
  has_discussions = local.repo_features.has_discussions

  allow_merge_commit = local.merge_settings.allow_merge_commit
  allow_rebase_merge = local.merge_settings.allow_rebase_merge
  allow_squash_merge = local.merge_settings.allow_squash_merge

  delete_branch_on_merge = local.merge_settings.delete_branch_on_merge
  auto_init              = local.repo_features.auto_init

  # `concat` takes two or more lists and combines them into a single list.
  topics = concat(local.common_topics, ["application"])
}


resource "github_repository" "docs" {
  name        = "${local.name_prefix}documentation"
  description = "${title(var.environment)} documentation repository. ${local.managed_by}"
  visibility  = "public"

  has_issues      = local.repo_features.has_issues
  has_wiki        = local.repo_features.has_wiki
  has_discussions = local.repo_features.has_discussions

  allow_merge_commit = local.merge_settings.allow_merge_commit
  allow_rebase_merge = local.merge_settings.allow_rebase_merge
  allow_squash_merge = local.merge_settings.allow_squash_merge

  delete_branch_on_merge = local.merge_settings.delete_branch_on_merge

  auto_init = local.repo_features.auto_init

  topics = concat(local.common_topics, ["documentation"])
}

# ----------------------------------------------------------------------
# Outputs File

output "app_repo_url" {
  description = "URL of the application repository"
  value       = github_repository.app.html_url
}

output "docs_repo_url" {
  description = "URL of the documentation repository"
  value       = github_repository.docs.html_url
}

output "current_user" {
  description = "Username of the authenticated user"
  value       = data.github_user.current.login
}