package handlers

import (
	"foxcodenine/building_modern_web_applications_with_go/pkg/config"
	"foxcodenine/building_modern_web_applications_with_go/pkg/render"
	"net/http"
)

// ---------------------------------------------------------------------

// -- Repo the repository used by the handlers
var Repo *Repository

// -- Repository is the repository type
type Repository struct {
	App *config.AppConfig
}

// -- NewRepo create a new reposetory
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// -- NewHandlers sets the reposetory for the handlers
func NewHandlers(r *Repository) {
	Repo = r
}

// ---------------------------------------------------------------------

// -- Home is a method associated with the Repository usedin the Home page
//
//	It renders the "home.page.html" template using the render.RenderTemplate function.
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "home.page.html")
}

// ---------------------------------------------------------------------

// -- About is a method associated with the Repository usedin the About page
//
//	It renders the "about.page.html" template using the render.RenderTemplate function.
func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "about.page.html")
}

// ---------------------------------------------------------------------
