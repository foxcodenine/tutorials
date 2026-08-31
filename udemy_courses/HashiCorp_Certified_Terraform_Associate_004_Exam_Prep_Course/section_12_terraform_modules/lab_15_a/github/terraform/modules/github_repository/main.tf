resource "github_repository" "this" {
  name        = var.name
  description = var.description
  visibility  = var.visibility

  has_issues   = var.has_issues
  has_projects = var.has_projects
  has_wiki     = var.has_wiki

  auto_init          = var.auto_init
  gitignore_template = var.gitignore_template
  license_template   = var.license_template
  topics             = var.topics

  # Optionally create the repository from a GitHub template.
  # Generate this block once when var.template is provided, or omit it when it is null.
  dynamic "template" {
    for_each = var.template != null ? [var.template] : []
    content {
      owner      = template.value.owner
      repository = template.value.repository
    }
  }
}
