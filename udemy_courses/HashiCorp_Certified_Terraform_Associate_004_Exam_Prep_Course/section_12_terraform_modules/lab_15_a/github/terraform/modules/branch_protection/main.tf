# Create a protection rule for a branch in an existing GitHub repository.
# This manages GitHub's remote branch settings; it does not change a local Git branch.
resource "github_branch_protection" "this" {

  # Select the repository and the branch name or pattern to protect.
  # repository_id accepts the repository name passed into this module.
  repository_id = var.repository_name
  pattern       = var.branch

  # When true, repository administrators must follow the protection rule too.
  enforce_admins = var.enforce_admins

  # Control commit and branch safety. Signed commits are optional, while false for
  # deletions and force pushes prevents those destructive actions on this branch.
  require_signed_commits = var.require_signed_commits
  allows_deletions       = var.allows_deletions
  allows_force_pushes    = var.allows_force_pushes

  # Add required CI/status checks only when the caller supplies their settings.
  # The one-item list creates this block once; an empty list omits it completely.
  dynamic "required_status_checks" {
    for_each = var.required_status_checks != null ? [var.required_status_checks] : []
    content {
      # strict requires the pull-request branch to be up to date before merging.
      # Every named context must match a real GitHub check and pass successfully.
      strict   = required_status_checks.value.strict
      contexts = required_status_checks.value.contexts
    }
  }

  # Add pull-request review rules only when the caller supplies their settings.
  # Terraform exposes the current object as required_pull_request_reviews.value.
  dynamic "required_pull_request_reviews" {
    for_each = var.required_pull_request_reviews != null ? [var.required_pull_request_reviews] : []
    content {
      # Remove old approvals after new commits, optionally restrict who may dismiss
      # reviews, require CODEOWNERS approval, and set the minimum approval count.
      dismiss_stale_reviews           = required_pull_request_reviews.value.dismiss_stale_reviews
      restrict_dismissals             = required_pull_request_reviews.value.restrict_dismissals
      require_code_owner_reviews      = required_pull_request_reviews.value.require_code_owner_reviews
      required_approving_review_count = required_pull_request_reviews.value.required_approving_review_count

      # When dismissal restrictions are enabled, this identifies the users or teams
      # allowed to dismiss a pull-request review.
      dismissal_restrictions = required_pull_request_reviews.value.dismissal_restrictions
    }
  }
}
