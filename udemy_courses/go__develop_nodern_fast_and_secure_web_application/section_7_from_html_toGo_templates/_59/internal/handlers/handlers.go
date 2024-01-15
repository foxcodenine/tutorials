package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"foxcode.io/common"
	"foxcode.io/internal/config"
	"foxcode.io/internal/forms"
	"foxcode.io/internal/render"
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
	render.RenderTemplate(w, r, "home-page.tmpl", &common.TemplateData{})
}

// AboutHandler handles requests to the about page
func (m *Repository) AboutHandler(w http.ResponseWriter, r *http.Request) {

	// remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	// userAgent := m.App.Session.GetString(r.Context(), "user_agent")

	// fmt.Println("Remote IP:", remoteIP)
	// fmt.Println("User Agent:", userAgent)

	render.RenderTemplate(w, r, "about-page.tmpl", &common.TemplateData{})
}

func (m *Repository) ContactHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "contact-page.tmpl", &common.TemplateData{})
}

func (m *Repository) EremiteHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "eremite-page.tmpl", &common.TemplateData{})
}

func (m *Repository) CoupleHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "couple-page.tmpl", &common.TemplateData{})
}

func (m *Repository) FamilyHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "family-page.tmpl", &common.TemplateData{})
}

func (m *Repository) ReservationHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "check-availability-page.tmpl", &common.TemplateData{})
}

func (m *Repository) PostReservationHandler(w http.ResponseWriter, r *http.Request) {
	start := r.Form.Get("startingDate")
	end := r.Form.Get("endingDate")
	returnString := fmt.Sprintf("Arrival date: %s, Departure date: %s", start, end)
	w.Write([]byte(returnString))
}

type jsonResponse struct {
	Ok      bool   `json:"ok"`
	Message string `json:"message"`
}

func (m *Repository) ReservationHandlerJSON(w http.ResponseWriter, r *http.Request) {
	resp := jsonResponse{
		Ok:      true,
		Message: "It's available!",
	}

	// Retrieve the form values
	start := r.FormValue("start")
	end := r.FormValue("end")
	csrfToken := r.FormValue("csrf_token")

	// Print the form values
	fmt.Printf("Start: %s\n", start)
	fmt.Printf("End: %s\n", end)
	fmt.Printf("CSRF Token: %s\n", csrfToken)

	output, err := json.MarshalIndent(resp, "", "    ")
	if err != nil {
		log.Println(err)
	}

	log.Println(string(output))
	w.Header().Set("Content-Type", "application/json")
	w.Write(output)
}

func (m *Repository) MakeReservationHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "make-reservation-page.tmpl", &common.TemplateData{
		Form: forms.New(nil),
	})
}

func (m *Repository) PostMakeReservation(w http.ResponseWriter, r *http.Request) {
	fmt.Println(1333)
}
