output "repo_foreach_urls" {
  description = "URLs of for_each-based repositories"
  value       = { for k, v in github_repository.repo_foreach : k => v.html_url }
}

output "branch_protection_api" {
  description = "Branch protection rules for API repository"
  value       = { for k, v in github_branch_protection.protection_api : k => v.pattern }
}

output "branch_protection_web" {
  description = "Branch protection rules for Web repository"
  value       = { for k, v in github_branch_protection.protection_web : k => v.pattern }
}

output "label_api" {
  description = "Labels for API repository"
  value       = { for k, v in github_issue_label.label_api : k => v.color }
}

output "label_web" {
  description = "Labels for Web repository"
  value       = { for k, v in github_issue_label.label_web : k => v.color }
}