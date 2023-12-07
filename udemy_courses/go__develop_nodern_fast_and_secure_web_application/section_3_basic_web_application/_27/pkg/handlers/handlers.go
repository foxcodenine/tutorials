package handlers

import (
	"net/http"

	"foxcode.io/pkg/config"
	"foxcode.io/pkg/render"
)

// ---------------------------------------------------------------------

// Repository is a struct holding the application configuration.
type Repository struct {
	App *config.AppConfig
}

// Repo the reposetory used in the handles
var Repo *Repository

// CreateRepository takes an config.AppConfig , creates a new instance of
// Repository, sets its App field to the provided config.AppConfig, and
// returns a pointer to the created Repository instance.
func CreateRepository(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// SetHandlersRepository sets the repository for the handlers.
// It takes a pointer to a Repository and assigns it to the global 'Repo' variable.
func SetHandlersRepository(r *Repository) {
	Repo = r
}

// ---------------------------------------------------------------------

// HomeHandler handles requests to the home page
func (m *Repository) HomeHandler(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "home-page.tmpl")
}

// AboutHandler handles requests to the about page
func (m *Repository) AboutHandler(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "about-page.tmpl")
}
