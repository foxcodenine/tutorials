package handlers

import (
	"fmt"
	"net/http"

	"foxcode.io/common"
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

	remoteIP := r.RemoteAddr

	// Get the User-Agent from the request headers
	userAgent := r.Header.Get("User-Agent")

	// Put the remoteIP and userAgent into the session
	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)
	m.App.Session.Put(r.Context(), "user_agent", userAgent)

	// Render the home page template with the provided data
	render.RenderTemplate(w, "home-page.tmpl", &common.TemplateData{})
}

// AboutHandler handles requests to the about page
func (m *Repository) AboutHandler(w http.ResponseWriter, r *http.Request) {

	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	userAgent := m.App.Session.GetString(r.Context(), "user_agent")

	fmt.Println("Remote IP:", remoteIP)
	fmt.Println("User Agent:", userAgent)

	sidekickMap := map[string]string{
		"morty":     "Ooh, wee!",
		"remote_ip": remoteIP,
	}

	render.RenderTemplate(w, "about-page.tmpl", &common.TemplateData{
		StringMap: sidekickMap,
	})
}
