# Create a new GitHub repository
resource "github_repository" "example" {

  # Repository name on GitHub
  name = var.repository_name

  # Short description shown on the GitHub repository page
  description = "repository created by Terraform"

  # Repository visibility:
  # "public"  = anyone can see it
  # "private" = only invited users can see it
  visibility = var.repository_visibility

  # Automatically create the first commit with a README file
  auto_init = true

  # Enable GitHub Issues for tracking bugs, tasks, and feature requests
  has_issues = var.repository_features.has_issues

  # Enable GitHub Discussions for questions and community-style conversations
  has_discussions = var.repository_features.has_discussions

  # Enable the repository Wiki
  has_wiki = var.repository_features.has_wiki

  # Allow pull requests to be merged using a merge commit
  allow_merge_commit = true

  # Allow pull requests to be merged by squashing all commits into one commit
  allow_squash_merge = true

  # Allow pull requests to be merged by rebasing commits onto the target branch
  allow_rebase_merge = true

  # Add topics/tags to the repository so it is easier to find and categorize
  topics = [
    "terraform",
    "infrastructure-as-code",
    var.environment
  ]
}

# Create a branch protection rule for the main branch
resource "github_branch_protection" "main" {

  # Link this branch protection rule to the repository created above
  repository_id = github_repository.example.node_id

  # Apply the rule to the main branch
  pattern = "main"

  # Require pull request reviews before changes can be merged into main
  required_pull_request_reviews {

    # Require at least 2 approval before merging
    required_approving_review_count = 2
  }
}

# ----------------------------------------------------------------------

# Configure Team Repository Access
resource "github_repository" "development" {
  name        = var.dev_repository_name
  description = "Primary Dev Repo for new apps"
  visibility  = "public"

  auto_init = true

  has_issues      = var.dev_reop_issues
  has_discussions = var.dev_discussions
  has_wiki        = var.dev_wiki

  allow_merge_commit = true
  allow_squash_merge = true
  allow_rebase_merge = true

  topics = ["terraform", "infrastructure-as-code"]
}

# Create Development Configuration Options

resource "github_branch_protection" "development" {
  repository_id = github_repository.development.node_id
  pattern       = "main"
}

resource "github_branch" "development" {
  repository = github_repository.development.name
  branch     = "main"
}

resource "github_branch_default" "development" {
  repository = github_repository.development.name
  branch     = github_branch.development.branch
}

# Add a Repository File (.gitignore)
resource "github_repository_file" "development" {
  repository          = github_repository.development.name
  branch              = github_branch.development.branch
  file                = ".gitignore"
  content             = "**/*.tfstate"
  commit_message      = "Managed by Terraform"
  commit_author       = "Terraform User"
  commit_email        = "terraform@course.com"
  overwrite_on_create = true
}

# Add New Outputs
output "development_repo" {
  description = "The name of the development repo"
  value       = github_repository.development.name
}

# ----------------------------------------------------------------------
# Create production repository

resource "github_repository" "production" {
  name        = var.prod_repository_name
  description = "Production repository managed by Terraform"
  visibility  = "public"

  auto_init = true

  has_issues      = true
  has_discussions = true
  has_wiki        = true

  vulnerability_alerts = true

  topics = ["terraform", "production"]
}

# Create stricter branch protection for production
resource "github_branch_protection" "production" {
  repository_id = github_repository.production.id
  pattern       = "main"

  enforce_admins = true

  required_pull_request_reviews {
    required_approving_review_count = var.prod_branch_protection
    dismiss_stale_reviews           = true
    require_code_owner_reviews      = true
  }

  require_signed_commits = true
}

# Create a production environment
resource "github_repository_environment" "production" {
  repository  = github_repository.production.name
  environment = "production"

  reviewers {
    users = [data.github_user.current.id]
  }

  deployment_branch_policy {
    protected_branches     = true
    custom_branch_policies = false
  }
}

resource "github_repository_file" "production_readme" {

  repository = github_repository.production.name

  branch = "main"

  file = "README.md"

  content = <<-EOT
    # Production Repository
    
    This repository is managed by Terraform.
    
    ## Related Repositories
    
    - Development: [${github_repository.development.name}](${github_repository.development.html_url})
    - Example: [${github_repository.example.name}](${github_repository.example.html_url})
  EOT

  commit_message = "Add README via Terraform"

  commit_author = "Terraform User"

  commit_email = "terraform@course.com"

  overwrite_on_create = true

}