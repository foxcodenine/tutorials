package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/foxcodenine/small-projects/bookings/internal/config"
	"github.com/foxcodenine/small-projects/bookings/internal/models"
	"github.com/foxcodenine/small-projects/bookings/internal/render"
)

// ---------------------------------------------------------------------

// -- Repository holds the application configuration.
type Repository struct {
	App *config.AppConfig
}

// -- Repo is a global variable to hold the repository.
var Repo *Repository

// -- NewRepo creates a new instance of the Repository struct and assigns the provided AppConfig pointer to the App field.
//
//	It returns a pointer to the Repository.
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a, // Save the address of the AppConfig in the Repository
	}
}

// -- NewHandlers sets the global variable Repo to the provided repository.
//
//	This makes the Repository accessible globally within the handlers package.
func NewHandlers(r *Repository) {
	Repo = r
}

////////////////////////////////////////////////////////////////////////

// -- Home is a method associated with the Repository used in the Home page.
//
//	It renders the "home.page.html" template using the render.RenderTemplate function.
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	// Perform some logic

	remoteIP := r.RemoteAddr

	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)

	// Send the data to the template
	render.RenderTemplate(w, r, "home.page.html", &models.TemplateData{})
}

// ---------------------------------------------------------------------

// -- About is a method associated with the Repository used in the About page.
//
//	It renders the "about.page.html" template using the render.RenderTemplate function.
func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	// Perform some logic
	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")

	stringMap := map[string]string{
		"test":      "Hello, again",
		"remote_ip": remoteIP,
	}

	// Send the data to the template
	render.RenderTemplate(w, r, "about.page.html", &models.TemplateData{
		StringMap: stringMap,
	})
}

// ---------------------------------------------------------------------

// -- Generals is a method associated with the Repository used in the Generals page.
func (m *Repository) Generals(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "generals.page.html", &models.TemplateData{})
}

// ---------------------------------------------------------------------

// -- Majors is a method associated with the Repository used in the Majors page.
func (m *Repository) Majors(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "majors.page.html", &models.TemplateData{})
}

// ---------------------------------------------------------------------

// -- Reservation is a method associated with the Repository used in the Reservation page.
func (m *Repository) Reservation(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "make-reservation.page.html", &models.TemplateData{})
}

// ---------------------------------------------------------------------

// -- Availability is a method associated with the Repository used in the Availability page.
func (m *Repository) Availability(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "search-availability.page.html", &models.TemplateData{})
}

// -- PostAvailability is a method associated with the Repository used to handle posting availability.
func (m *Repository) PostAvailability(w http.ResponseWriter, r *http.Request) {
	start := r.Form.Get("start_date")
	end := r.Form.Get("end_date")

	fmt.Println(start, end)
	w.Write([]byte(fmt.Sprintf("start date is %s and end date is %s", start, end)))
}

// -- jsonResponse is a struct representing a JSON response.
type jsonResponse struct {
	OK      bool   `json:"ok"`
	Message string `json:"message"`
}

// -- AvailabilityJSON is a method associated with the Repository used to handle JSON responses for availability.
func (m *Repository) AvailabilityJSON(w http.ResponseWriter, r *http.Request) {
	resp := jsonResponse{
		OK:      false,
		Message: "Available",
	}

	out, err := json.MarshalIndent(resp, "", "    ")

	if err != nil {
		log.Println(err)
	}

	// log.Println(string(out))
	w.Header().Set("Content-Type", "application/json")
	w.Write(out)
}

// ---------------------------------------------------------------------

// -- Contact is a method associated with the Repository used in the Contact page.
func (m *Repository) Contact(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, r, "contact.page.html", &models.TemplateData{})
}
