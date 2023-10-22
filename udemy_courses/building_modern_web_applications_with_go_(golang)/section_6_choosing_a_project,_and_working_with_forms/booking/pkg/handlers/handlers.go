package handlers

import (
	"github.com/foxcodenine/small-projects/bookings/pkg/config"
	"github.com/foxcodenine/small-projects/bookings/pkg/models"
	"github.com/foxcodenine/small-projects/bookings/pkg/render"
	"net/http"
)

// ---------------------------------------------------------------------

// -- Repo a Global variable to hold the repository
var Repo *Repository

// -- Repository struct to hold the application configuration
type Repository struct {
	App *config.AppConfig
}

// -- NewRepo creating a new instance of Repository struct and assigning the provided AppConfig pointer to the App field
//
//	Than it return a pointer to the Repository
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a, // Save the address of the AppConfig in the Repository
	}
}

// -- NewHandlers set the global variable Repo to the provided repository
//
//	This makes the Repository accessible globally within the handlers package
func NewHandlers(r *Repository) {
	Repo = r
}

////////////////////////////////////////////////////////////////////////

// -- Home is a method associated with the Repository usedin the Home page
//
//	It renders the "home.page.html" template using the render.RenderTemplate function.
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	// perform some logic

	remoteIP := r.RemoteAddr

	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)

	// send the data to template
	render.RenderTemplate(w, "home.page.html", &models.TemplateData{})
}

// ---------------------------------------------------------------------

// -- About is a method associated with the Repository usedin the About page
//
//	It renders the "about.page.html" template using the render.RenderTemplate function.
func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	// perform some logic
	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")

	stringMap := map[string]string{
		"test":      "Hello, again",
		"remote_ip": remoteIP,
	}

	// send the data to template
	render.RenderTemplate(w, "about.page.html", &models.TemplateData{
		StringMap: stringMap,
	})
}

// ---------------------------------------------------------------------
