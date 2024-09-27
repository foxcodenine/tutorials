package handlers

import (
	"encoding/json"
	// "errors"
	"reflect"

	"fmt"
	"net/http"
	"strconv"
	"time"

	"foxcode.io/internal/config"
	"foxcode.io/internal/driver"
	"foxcode.io/internal/forms"
	"foxcode.io/internal/helpers"
	"foxcode.io/internal/render"
	"foxcode.io/internal/repository"
	"foxcode.io/internal/repository/dbrepo"
	"foxcode.io/models"
	"github.com/go-chi/chi/v5"
)

// ---------------------------------------------------------------------

// Repository is a struct holding the application configuration.
type Repository struct {
	App *config.AppConfig
	DB  repository.DatabaseRepo
}

// InitializeRepository creates a new instance of Repository with the provided
// config.AppConfig and returns a pointer to the created Repository instance.
func InitializeRepository(appConfig *config.AppConfig, dbConn *driver.DB) *Repository {
	return &Repository{
		App: appConfig,
		DB:  dbrepo.NewPostgersRepo(dbConn.SQL, appConfig),
	}
}
func InitializeTestRepository(appConfig *config.AppConfig) *Repository {
	return &Repository{
		App: appConfig,
		DB:  dbrepo.NewTestingRepo(appConfig),
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
	// allUsers := m.DB.AllUsers()
	// fmt.Println(allUsers, 123)

	remoteIP := r.RemoteAddr

	// Get the User-Agent from the request headers
	userAgent := r.Header.Get("User-Agent")

	// Put the remoteIP and userAgent into the session
	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)
	m.App.Session.Put(r.Context(), "user_agent", userAgent)

	// Test ----------
	// const layout = "2006-01-02"
	// sd, err := time.Parse(layout, "2024-02-03")
	// if err != nil {
	// 	log.Fatal("Error parsing date:", err)
	// 	return
	// }
	// ed, err := time.Parse(layout, "2024-02-03")
	// if err != nil {
	// 	log.Fatal("Error parsing date:", err)
	// 	return
	// }
	// rooms, err := m.DB.SearchAvailabilityByDatesForAllRooms(sd, ed)
	// if err != nil {
	// 	log.Fatal("Error parsing date:", err)
	// 	return
	// }

	// fmt.Println(rooms)
	// ---------------

	// Render the home page template with the provided data
	render.Template(w, r, "home-page.tmpl", &models.TemplateData{})
}

// AboutHandler handles requests to the about page
func (m *Repository) AboutHandler(w http.ResponseWriter, r *http.Request) {

	// remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	// userAgent := m.App.Session.GetString(r.Context(), "user_agent")

	// fmt.Println("Remote IP:", remoteIP)
	// fmt.Println("User Agent:", userAgent)

	render.Template(w, r, "about-page.tmpl", &models.TemplateData{})
}

func (m *Repository) ContactHandler(w http.ResponseWriter, r *http.Request) {

	render.Template(w, r, "contact-page.tmpl", &models.TemplateData{})
}

func (m *Repository) EremiteHandler(w http.ResponseWriter, r *http.Request) {

	render.Template(w, r, "eremite-page.tmpl", &models.TemplateData{})
}

func (m *Repository) CoupleHandler(w http.ResponseWriter, r *http.Request) {

	render.Template(w, r, "couple-page.tmpl", &models.TemplateData{})
}

func (m *Repository) FamilyHandler(w http.ResponseWriter, r *http.Request) {

	render.Template(w, r, "family-page.tmpl", &models.TemplateData{})
}

func (m *Repository) ReservationHandler(w http.ResponseWriter, r *http.Request) {

	render.Template(w, r, "check-availability-page.tmpl", &models.TemplateData{})
}

func (m *Repository) PostReservationHandler(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		// helpers.ServerError(w, err)
		m.App.Session.Put(r.Context(), "error", "can't parse form")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	start := r.Form.Get("startingDate")
	end := r.Form.Get("endingDate")

	// -----------------------------
	const layout = "2006-01-02"
	sd, err := time.Parse(layout, start)
	if err != nil {
		fmt.Println("> 1")
		// helpers.ServerError(w, err)
		m.App.Session.Put(r.Context(), "error", "can't get start date")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	ed, err := time.Parse(layout, end)
	if err != nil {
		fmt.Println("> 2")
		// helpers.ServerError(w, err)
		m.App.Session.Put(r.Context(), "error", "can't get end date")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	rooms, err := m.DB.SearchAvailabilityByDatesForAllRooms(sd, ed)
	if err != nil {
		fmt.Println("> 3")
		// helpers.ServerError(w, err)
		m.App.Session.Put(r.Context(), "error", "fail to search availability by dates for all rooms")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	if len(rooms) == 0 {
		m.App.Session.Put(r.Context(), "error", "No availabillity")
		http.Redirect(w, r, "/reservation", http.StatusSeeOther)
		return
	}

	data := make(map[string]interface{})
	data["rooms"] = rooms

	res := models.Reservation{
		StartDate: sd,
		EndDate:   ed,
	}

	m.App.Session.Put(r.Context(), "reservation", res)

	render.Template(w, r, "choose-room-page.tmpl", &models.TemplateData{
		DataMap: data,
	})

	// -----------------------------

	// returnString := fmt.Sprintf("Arrival date: %s, Departure date: %s", start, end)
	// w.Write([]byte(returnString))
}

type jsonResponse struct {
	Ok        bool   `json:"ok"`
	Message   string `json:"message"`
	RoomID    string `json:"room_id"`
	StartDate string `json:"start_date"`
	EndDate   string `json:"end_date"`
}

// ReservationHandlerJSON handles request for availablity and send Json response
func (m *Repository) ReservationHandlerJSON(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()

	if err != nil {
		resp := jsonResponse{
			Ok:      false,
			Message: "internal server error",
		}

		out, _ := json.MarshalIndent(resp, "", "    ")
		w.Header().Set("Content-Type", "application/json")
		w.Write(out)
		return
	}

	// Retrieve the form values
	sd := r.FormValue("start")
	ed := r.FormValue("end")
	csrfToken := r.FormValue("csrf_token")
	roomId, _ := strconv.Atoi(r.FormValue("room_id"))

	layout := "2006-01-02"
	startDate, _ := time.Parse(layout, sd)
	endDate, _ := time.Parse(layout, ed)

	// Print the form values
	fmt.Printf("CSRF Token: %s\n", csrfToken)

	available, err := m.DB.SearchAvailabilityByDate(startDate, endDate, roomId)

	if err != nil {
		resp := jsonResponse{
			Ok:      false,
			Message: "error connecting to database",
		}

		out, _ := json.MarshalIndent(resp, "", "    ")
		w.Header().Set("Content-Type", "application/json")
		w.Write(out)
		return
	}

	resp := jsonResponse{
		Ok:        available,
		Message:   "",
		StartDate: sd,
		EndDate:   ed,
		RoomID:    strconv.Itoa(roomId),
	}

	output, _ := json.MarshalIndent(resp, "", "    ")

	w.Header().Set("Content-Type", "application/json")
	w.Write(output)
}

func (m *Repository) MakeReservationHandler(w http.ResponseWriter, r *http.Request) {

	res, ok := m.App.Session.Get(r.Context(), "reservation").(models.Reservation)

	if !ok {
		// helpers.ServerError(w, errors.New("cannnot get reservation from session"))
		m.App.Session.Put(r.Context(), "error", "can't get reservation from session")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	room, err := m.DB.GetRoomById(res.RoomID)

	if err != nil {
		// helpers.ServerError(w, err)
		m.App.Session.Put(r.Context(), "error", "can't find room")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	res.Room.RoomName = room.RoomName

	m.App.Session.Put(r.Context(), "reservation", res)

	sd := res.StartDate.Format("2006-01-02")
	ed := res.EndDate.Format("2006-01-02")

	render.Template(w, r, "make-reservation-page.tmpl", &models.TemplateData{
		Form: forms.New(nil),
		DataMap: map[string]interface{}{
			"reservation": res,
		},
		StringMap: map[string]string{
			"StartDate": sd,
			"EndDate":   ed,
		},
	})
}

func (m *Repository) PostMakeReservation(w http.ResponseWriter, r *http.Request) {

	reservation, _ := m.App.Session.Get(r.Context(), "reservation").(models.Reservation)

	err := r.ParseForm()

	if err != nil {
		// helpers.ServerError(w, err)
		m.App.Session.Put(r.Context(), "error", "can't parse form")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	// - form validation ----------

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

		http.Error(w, "form validation failed", http.StatusSeeOther)

		render.Template(w, r, "make-reservation-page.tmpl", &models.TemplateData{
			Form:    form,
			DataMap: data,
		})
		return
	}

	// ----------------------------

	printStructPropsAndValues(reservation)

	full_name := r.FormValue("full_name")
	phone := r.FormValue("phone")
	email := r.FormValue("email")
	room_id := r.FormValue("room_id")

	reservation.FullName = full_name
	reservation.Phone = phone
	reservation.Email = email

	reservation.RoomID, _ = strconv.Atoi(room_id)

	// ----------------------------

	// sd := r.Form.Get("start_date")
	// ed := r.Form.Get("end_date")

	// layout := "2006-01-02"

	// startDate, err := time.Parse(layout, sd)
	// if err != nil {
	// 	helpers.ServerError(w, err)
	// 	return
	// }

	// endDate, err := time.Parse(layout, ed)
	// if err != nil {
	// 	helpers.ServerError(w, err)
	// 	return
	// }

	// ----------------------------

	newReservationId, err := m.DB.InsertReservation(reservation)
	if err != nil {
		// helpers.ServerError(w, err)
		// return
		m.App.Session.Put(r.Context(), "error", "can't insert reservation into db!")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	restriction := models.RoomRestrintion{
		StartDate:     reservation.StartDate,
		EndDate:       reservation.EndDate,
		RoomID:        reservation.RoomID,
		ReservationID: newReservationId,
		RestrictionID: 1,
		CreatedAt:     time.Now(),
		UpdatedAt:     time.Now(),
	}

	err = m.DB.InsertRoomRestrictions(restriction)

	if err != nil {
		// helpers.ServerError(w, err)
		// return
		m.App.Session.Put(r.Context(), "error", "can't insert room restriction")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	m.App.Session.Put(r.Context(), "reservation", reservation)
	http.Redirect(w, r, "/reservation-overview", http.StatusSeeOther)

}

// ReservationOverview display the reservation summery page
func (m *Repository) ReservationOverview(w http.ResponseWriter, r *http.Request) {

	res, ok := m.App.Session.Get(r.Context(), "reservation").(models.Reservation)

	if !ok {
		// log.Println("Cound not get item from session")
		// helpers.ServerError(w, errors.New("cound not get item from session"))
		m.App.ErrorLog.Println("cound not get item from session")

		m.App.Session.Put(r.Context(), "error", "No reservation data in this session available.")
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	sd := res.StartDate.Format("2006-01-02")
	ed := res.EndDate.Format("2006-01-02")

	dataMap := map[string]interface{}{
		"reservation": res,
	}

	stringMap := map[string]string{
		"StartDate": sd,
		"EndDate":   ed,
	}

	// Remove the "reservation" key from the session.
	m.App.Session.Remove(r.Context(), "reservation")

	render.Template(w, r, "reservation-overview-page.tmpl", &models.TemplateData{
		DataMap:   dataMap,
		StringMap: stringMap,
	})
}

// ChooseRoom display list of available rooms
func (m *Repository) ChooseRoom(w http.ResponseWriter, r *http.Request) {

	roomId, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		helpers.ServerError(w, err)
	}

	res, ok := m.App.Session.Get(r.Context(), "reservation").(models.Reservation)

	if !ok {

		m.App.Session.Put(r.Context(), "error", "Cannot get reservation back from session")
		http.Redirect(w, r, "/", http.StatusSeeOther)
		return
	}

	res.RoomID = roomId

	m.App.Session.Put(r.Context(), "reservation", res)
	fmt.Println(">>", 456)
	http.Redirect(w, r, "/make-reservation", http.StatusSeeOther)
}

func printStructPropsAndValues(v interface{}) {
	val := reflect.ValueOf(v)
	if val.Kind() == reflect.Ptr {
		val = val.Elem()
	}

	t := val.Type()
	for i := 0; i < val.NumField(); i++ {
		field := t.Field(i)
		value := val.Field(i)
		fmt.Printf("%s: %v\n", field.Name, value.Interface())
	}
}

// BookRoom takes URL parameters, build a session variable, and takes user to make reservation page
func (m *Repository) BookRoom(w http.ResponseWriter, r *http.Request) {
	ID, _ := strconv.Atoi(r.URL.Query().Get("id"))
	startDate := r.URL.Query().Get("s")
	endDate := r.URL.Query().Get("e")

	fmt.Println(ID, startDate, endDate)

	sd, _ := time.Parse("2006-01-02", startDate)
	ed, _ := time.Parse("2006-01-02", endDate)

	res := models.Reservation{
		RoomID:    ID,
		StartDate: sd,
		EndDate:   ed,
	}

	room, _ := m.DB.GetRoomById(res.RoomID)

	res.Room.RoomName = room.RoomName

	m.App.Session.Put(r.Context(), "reservation", res)

	fmt.Println(">>", 123)

	http.Redirect(w, r, "make-reservation", http.StatusSeeOther)
}
