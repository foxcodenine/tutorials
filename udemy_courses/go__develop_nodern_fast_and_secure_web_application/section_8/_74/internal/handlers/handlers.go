package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"foxcode.io/internal/config"
	"foxcode.io/internal/forms"
	"foxcode.io/internal/render"
	"foxcode.io/models"
)

// ---------------------------------------------------------------------

// Repository is a struct holding the application configuration.
type Repository struct {
	App *config.AppConfig
}

// InitializeRepository creates a new instance of Repository with the provided
// config.AppConfig and returns a pointer to the created Repository instance.
func InitializeRepository(appConfig *config.AppConfig) *Repository {
	return &Repository{
		App: appConfig,
	}
}

// Repo is the repository used in the handlers.
var Repo *Repository

// SetHandlersRepository sets the global repository variable 'Repo' to the
// provided Repository instance.
func SetHandlersRepository(repository *Repository) {
	Repo = repository
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
	render.RenderTemplate(w, r, "home-page.tmpl", &models.TemplateData{})
}

// AboutHandler handles requests to the about page
func (m *Repository) AboutHandler(w http.ResponseWriter, r *http.Request) {

	// remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	// userAgent := m.App.Session.GetString(r.Context(), "user_agent")

	// fmt.Println("Remote IP:", remoteIP)
	// fmt.Println("User Agent:", userAgent)

	render.RenderTemplate(w, r, "about-page.tmpl", &models.TemplateData{})
}

func (m *Repository) ContactHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "contact-page.tmpl", &models.TemplateData{})
}

func (m *Repository) EremiteHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "eremite-page.tmpl", &models.TemplateData{})
}

func (m *Repository) CoupleHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "couple-page.tmpl", &models.TemplateData{})
}

func (m *Repository) FamilyHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "family-page.tmpl", &models.TemplateData{})
}

func (m *Repository) ReservationHandler(w http.ResponseWriter, r *http.Request) {

	render.RenderTemplate(w, r, "check-availability-page.tmpl", &models.TemplateData{})
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

	emptyReservation := models.Reservation{}

	render.RenderTemplate(w, r, "make-reservation-page.tmpl", &models.TemplateData{
		Form: forms.New(nil),
		DataMap: map[string]interface{}{
			"reservation": emptyReservation,
		},
	})
}

func (m *Repository) PostMakeReservation(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		log.Println(err)
		return
	}

	// firstname := r.FormValue("firstname")
	// phone := r.FormValue("phone")
	// email := r.FormValue("email")

	reservation := models.Reservation{
		Name:  r.Form.Get("full_name"),
		Phone: r.Form.Get("phone"),
		Email: r.Form.Get("email"),
	}

	fmt.Println(reservation)
	// fmt.Println(r.PostForm)

	form := forms.New(r.PostForm)

	// form.Has("full_name", r)
	// form.Has("email", r)
	// form.Has("phone", r)

	form.Required("email", "phone", "full_name")
	form.MinLength("full_name", 2)
	form.IsEmail("email")

	if !form.Valid() {
		data := map[string]interface{}{
			"reservation": reservation,
		}

		fmt.Println(data)

		render.RenderTemplate(w, r, "make-reservation-page.tmpl", &models.TemplateData{
			Form:    form,
			DataMap: data,
		})
		m.App.Session.Put(r.Context(), "reservation", reservation)
		http.Redirect(w, r, "/reservation-overview", http.StatusSeeOther)
		return
	}
}

// ReservationOverview display the reservation summery page

func (m *Repository) ReservationOverview(w http.ResponseWriter, r *http.Request) {

	reservation, ok := m.App.Session.Get(r.Context(), "reservation").(models.Reservation)

	if !ok {
		log.Println("Cound not get item from session")
		m.App.Session.Put(r.Context(), "error", "No reservation data in this session available.")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	data := map[string]interface{}{
		"reservation": reservation,
	}

	// Remove the "reservation" key from the session.
	m.App.Session.Remove(r.Context(), "reservation")

	render.RenderTemplate(w, r, "reservation-overview-page.tmpl", &models.TemplateData{
		DataMap: data,
	})
}
