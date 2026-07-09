# Create Data Sources for GitHub Information

# Get information about the current GitHub user
data "github_user" "current" {
  username = ""
}

# Get information about the example repository
data "github_repository" "existing_name" {
  full_name  = "terraform_user/${github_repository.example.name}"
  depends_on = [github_repository.example]
}

