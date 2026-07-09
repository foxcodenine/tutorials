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