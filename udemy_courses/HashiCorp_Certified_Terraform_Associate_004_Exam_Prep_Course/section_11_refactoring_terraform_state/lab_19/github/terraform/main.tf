# This file starts intentionally empty.
#
# The repository, repository file, and issue label created in Lab 18
# still exist in GitHub, but they are no longer tracked in Terraform
# state. During this lab you will add resource and import blocks here
# to bring each one back under Terraform management.

# ------------------------------------------------------------------------------

resource "github_repository" "main" {
  name        = var.repository_name
  description = var.repository_description
  visibility  = var.repository_visibility
}

# Import the Repository with the terraform import Command
# terraform import github_repository.main lab-refactor-repo

# ------------------------------------------------------------------------------


resource "github_repository_file" "config" {
  repository     = github_repository.main.name
  branch         = "main"
  file           = var.config_file_path
  content        = var.config_file_content
  commit_message = "Add app config"
  commit_author  = "foxcodenine"
  commit_email   = "foxcode9@gmail.com"
}

# import {
#   to = github_repository_file.config
#   id = "lab-refactor-repo:config/app.txt:main"
# }

# ------------------------------------------------------------------------------

import {
  to = github_issue_label.main
  id = "lab-refactor-repo:lab-label"
}

# Generate configuration for any import target that has no matching resource block:
# terraform plan -generate-config-out=generated.tf