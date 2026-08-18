# Keep the list variables to compare to the new variables you will add below
variable "repo_name" {
  description = "Names for repositories"
  type        = list(string)
  default     = ["repo-1", "repo-2", "repo-3"]
}

# New map variables for for_each
variable "repositories" {
  description = "Map of repository configurations"
  type        = map(string)
  default = {
    "api"      = "API service repository"
    "web"      = "Web frontend repository"
    "database" = "Database schema repository"
  }
}

variable "branch_patterns" {
  description = "Map of branch patterns to protect"
  type        = map(string)
  default = {
    "main"    = "Main branch"
    "release" = "Release branch"
  }
}

variable "label_config" {
  description = "Map of label configurations"
  type        = map(string)
  default = {
    "bug"      = "FF0000"
    "feature"  = "00FF00"
    "docs"     = "0000FF"
    "test"     = "FFFF00"
    "security" = "FF00FF"
  }
}

# --- Create Repository Files Using For_Each -----------------------------------

# Add a new map variable for repository files:

variable "repo_files" {
  description = "Map of repository files"
  type        = map(string)
  default = {
    "README.md"       = "# Repository README\nThis is a sample repository."
    "CONTRIBUTING.md" = "# Contributing Guidelines\nHow to contribute to this project."
    "LICENSE"         = "MIT License\nCopyright (c) 2023"
  }
}

# ------------------------------------------------------------------------------

# Add repository files for the API repository:

# Repository files created with for_each
resource "github_repository_file" "api_files" {
  for_each            = var.repo_files
  repository          = github_repository.repo_foreach["api"].name
  branch              = "main"
  file                = each.key
  content             = each.value
  commit_message      = "Add ${each.key}"
  commit_author       = "Terraform"
  commit_email        = "terraform@example.com"
  overwrite_on_create = true
}