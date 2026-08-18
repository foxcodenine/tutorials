# - Provider Requirements ----------------------------------------------
# A child module does NOT inherit the root module's `required_providers`.
# Without this block Terraform sees the `github_` prefix and guesses the
# provider is `hashicorp/github`, which is not the provider the root module
# (and the state) uses. Declaring the source here makes the module use the
# same `integrations/github` provider that is passed down from the root.

terraform {
  required_providers {
    github = {
      source = "integrations/github"
    }
  }
}

# - Variable -----------------------------------------------------------

variable "repository" {
  description = "Name of the repository where the file will be managed"
  type        = string
}

variable "config_file_path" {
  description = "Path of the managed file within the repository"
  type        = string
}

variable "config_file_content" {
  description = "Contents of the managed file"
  type        = string
}

# - Repository File ----------------------------------------------------

resource "github_repository_file" "config" {
  repository          = var.repository
  branch              = "main"
  file                = var.config_file_path
  content             = var.config_file_content
  commit_message      = "Add app config"
  commit_author       = "Terraform User"
  commit_email        = "terraform@example.com"
  overwrite_on_create = true
}