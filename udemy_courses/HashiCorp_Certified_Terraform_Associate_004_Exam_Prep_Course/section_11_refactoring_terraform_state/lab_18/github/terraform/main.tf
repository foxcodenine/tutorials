
# - GitHub Repository --------------------------------------------------

# resource "github_repository" "main" {
#   name        = var.repository_name
#   description = var.repository_description
#   visibility  = var.repository_visibility
#   auto_init   = true
# }

# - Repository File ----------------------------------------------------

# resource "github_repository_file" "config" {
#   repository          = github_repository.main.name
#   branch              = "main"
#   file                = var.config_file_path
#   content             = var.config_file_content
#   commit_message      = "Add app config"
#   commit_author       = "foxcodenine"
#   commit_email        = "foxcode9@gmail.com"
#   overwrite_on_create = true
# }

# module "repofiles" {
#   source = "./modules/repofiles"

#   repository          = github_repository.main.name
#   config_file_path    = var.config_file_path
#   config_file_content = var.config_file_content
# }

# moved {
#   from = github_repository_file.config
#   to   = module.repofiles.github_repository_file.config
# }

# moved {
#   from = module.repofiles.github_repository_file.config
#   to   = github_repository_file.config
# }

# - Legacy Issue Label -------------------------------------------------

# resource "github_issue_label" "legacy" {
#   repository = github_repository.main.name
#   name       = var.legacy_label_name
#   color      = var.legacy_label_color
# }


removed {
  from = github_issue_label.legacy

  lifecycle {
    destroy = true
  }
}

# - Application Issue Label --------------------------------------------

# resource "github_issue_label" "web" {
#   repository = github_repository.main.name
#   name       = var.app_label_name
#   color      = var.app_label_color
# }

# resource "github_issue_label" "app" {
#   repository = github_repository.main.name
#   name       = var.app_label_name
#   color      = var.app_label_color
# }

# moved {
#   from = github_issue_label.web
#   to   = github_issue_label.app
# }

removed {
  from = github_repository.main

  lifecycle {
    destroy = false
  }
}

removed {
  from = github_repository_file.config

  lifecycle {
    destroy = false
  }
}

removed {
  from = github_issue_label.app

  lifecycle {
    destroy = false
  }
}