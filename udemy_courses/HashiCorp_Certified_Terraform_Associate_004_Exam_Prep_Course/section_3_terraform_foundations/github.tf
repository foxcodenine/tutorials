provider "github" {
  token = var.github_token
}

resource "github_repository" "production-repo" {
  name        = "prod-repo"
  description = "Repo for our production app"
  private     = true
}

resource "github_repository" "testing-repo" {
  name        = "test-repo"
  description = "Repo for our testong app"
  private     = true
}