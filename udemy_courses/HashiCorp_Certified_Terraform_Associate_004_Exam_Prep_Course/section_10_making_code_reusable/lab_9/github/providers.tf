terraform {
  required_version = ">= 1.12.2"

  required_providers {
    # The GitHub provider has moved from hashicorp/github to integrations/github
    github = {
      source  = "integrations/github"
      version = "~> 6.5.0"
    }
  }
}

# Auth is handled via the GITHUB_TOKEN environment variable
provider "github" {}
