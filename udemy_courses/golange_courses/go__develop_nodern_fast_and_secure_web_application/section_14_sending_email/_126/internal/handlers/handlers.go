package handlers

import (
	"encoding/json"
	"log"
	"runtime"
	"strings"

	// "strings"

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

	restriction := models.RoomRestriction{
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

	// send notifications

	htmlMessage := fmt.Sprintf(`
		<p><strong>Reservation Confirmation</strong></p>
		<p>Dear %s,</p>
		<p>We are pleased to confirm your reservation with us. Below are the details of your stay:</p>
		<ul>
			<li><strong>Check-in:</strong> %s</li>
			<li><strong>Check-out:</strong> %s</li>
			<li><strong>Room:</strong> %s</li>
		</ul>
		<p>Thank you for choosing us. We look forward to hosting you and hope you have a wonderful trip. Should you have any questions or need further assistance, please feel free to contact us.</p>
		<p>Warm regards,<br>Your Bungalow Bliss Team</p>

	`, reservation.FullName, reservation.StartDate.Format("2006-01-02"), reservation.EndDate.Format("2006-01-02"), reservation.Room.RoomName)

	msg := models.MailData{
		To:       reservation.Email,
		From:     "me@here.com",
		Subject:  "Reservation Confirmation",
		Content:  htmlMessage,
		Template: "basic.html",
	}

	m.App.MailChan <- msg

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

	http.Redirect(w, r, "make-reservation", http.StatusSeeOther)
}

func (m *Repository) ShowLogin(w http.ResponseWriter, r *http.Request) {

	render.Template(w, r, "login-page.tmpl", &models.TemplateData{
		Form: forms.New(nil),
	})
}

// PostShowLogin - handles logging the user in
func (m *Repository) PostShowLogin(w http.ResponseWriter, r *http.Request) {

	_ = m.App.Session.RenewToken(r.Context())

	err := r.ParseForm()
	if err != nil {
		log.Println(err)
	}

	form := forms.New(r.PostForm)
	form.Required("email", "password")
	form.IsEmail("email")

	if !form.Valid() {
		render.Template(w, r, "login-page.tmpl", &models.TemplateData{
			Form: form,
		})
		return
	}
	email := r.Form.Get("email")
	password := r.Form.Get("password")

	// tempHash, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	// fmt.Println(password, string(tempHash))
	// $2a$10$2bLZ/R.9H.gNmADImi8s/OhID7EHLCf.Rk0iJ1fP8TlUlCb.tIpZO secret

	id, _, err := m.DB.Authenticate(email, password)
	if err != nil {
		log.Println(err)
		m.App.Session.Put(r.Context(), "error", "Invalid login credentials")
		http.Redirect(w, r, "/user/login", http.StatusSeeOther)
	}

	m.App.Session.Put(r.Context(), "user_id", id)

	m.App.Session.Put(r.Context(), "info", "Logged in successfully")
	http.Redirect(w, r, "/", http.StatusSeeOther)
}

// Logout logs a user out
func (m *Repository) Logout(w http.ResponseWriter, r *http.Request) {
	_ = m.App.Session.Destroy(r.Context())
	m.App.Session.RenewToken(r.Context())
	http.Redirect(w, r, "/user/login", http.StatusSeeOther)
}

func (m *Repository) AdminDashboard(w http.ResponseWriter, r *http.Request) {
	render.Template(w, r, "admin-dashboard-page.tmpl", &models.TemplateData{})
}

// AdminReservations shows all  reservations on admin tool
func (m *Repository) AdminAllReservations(w http.ResponseWriter, r *http.Request) {

	reservations, err := m.DB.AllReservations()
	if err != nil {
		_, file, line, ok := runtime.Caller(1)
		if ok {
			fmt.Printf("error at %s:%d", file, line)
		}
		helpers.ServerError(w, err)
		return
	}

	data := make(map[string]interface{})
	data["reservations"] = reservations

	render.Template(w, r, "admin-all-reservations-page.tmpl", &models.TemplateData{
		DataMap: data,
	})
}

// AdminNewReservations shows all new reservations on admin tool
func (m *Repository) AdminNewReservations(w http.ResponseWriter, r *http.Request) {
	reservations, err := m.DB.AllNewReservations()
	if err != nil {
		_, file, line, ok := runtime.Caller(1)
		if ok {
			fmt.Printf("error at %s:%d", file, line)
		}
		helpers.ServerError(w, err)
		return
	}

	data := make(map[string]interface{})
	data["reservations"] = reservations

	render.Template(w, r, "admin-new-reservations-page.tmpl", &models.TemplateData{
		DataMap: data,
	})
}

// AdminShowReservation show the reservation in the admin tool
func (m *Repository) AdminShowReservation(w http.ResponseWriter, r *http.Request) {
	src := chi.URLParam(r, "src")
	curYear := r.URL.Query().Get("y")
	curMonth := r.URL.Query().Get("m")

	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	resv, err := m.DB.GetReservationByID(id)
	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	stringMap := make(map[string]string)
	stringMap["src"] = src
	stringMap["cur_year"] = curYear
	stringMap["cur_month"] = curMonth

	data := make(map[string]interface{})
	data["reservation"] = resv

	render.Template(w, r, "admin-reservation-show-page.tmpl", &models.TemplateData{
		StringMap: stringMap,
		DataMap:   data,
		Form:      &forms.Form{},
	})

}

func (m *Repository) PostAdminShowReservation(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	src := chi.URLParam(r, "src")

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	resv, err := m.DB.GetReservationByID(id)

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	err = r.ParseForm()

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	// http://localhost:8081/admin/reservations/new/52

	FullName := r.Form.Get("full_name")
	Email := r.Form.Get("email")
	Phone := r.Form.Get("phone")
	fmt.Println(">", FullName)

	resv.FullName = FullName
	resv.Email = Email
	resv.Phone = Phone

	err = m.DB.UpdateReservation(resv)

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	m.App.Session.Put(r.Context(), "info", "Changes saved")
	http.Redirect(w, r, fmt.Sprintf("/admin/reservations/%s/%d", src, id), http.StatusSeeOther)

}

func (m *Repository) AdminProcessReservation(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	src := chi.URLParam(r, "src")

	yy := r.URL.Query().Get("y")
	mm := r.URL.Query().Get("m")

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	err = m.DB.UpdateProcessedForReservation(id, 1)
	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	m.App.Session.Put(r.Context(), "flash", fmt.Sprintf("Reservation %d Processed", id))

	var redirectUrl string

	if src == "cal" {
		redirectUrl = fmt.Sprintf("/admin/reservation-calendar?y=%s&m=%s", yy, mm)

	} else if src == "new" {
		redirectUrl = "/admin/reservations-new"

	} else {
		redirectUrl = "/admin/reservations-all"
	}

	http.Redirect(w, r, redirectUrl, http.StatusSeeOther)
}

func (m *Repository) AdminDeleteReservation(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	// src := chi.URLParam(r, "src")

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	err = m.DB.DeleteReservation(id)

	if err != nil {
		helpers.ServerError(w, err)
		return
	}
	m.App.Session.Put(r.Context(), "flash", fmt.Sprintf("Reservation %d Deleted", id))

	http.Redirect(w, r, "/admin/reservations-all", http.StatusSeeOther)

}

// AdminCalendarReservations display the reservation calendar
func (m *Repository) AdminCalendarReservations(w http.ResponseWriter, r *http.Request) {

	now := time.Now()

	if r.URL.Query().Get("y") != "" {
		year, _ := strconv.Atoi(r.URL.Query().Get("y"))
		month, _ := strconv.Atoi(r.URL.Query().Get("m"))
		now = time.Date(year, time.Month(month), 1, 0, 0, 0, 0, time.UTC)

	}

	dataMap := map[string]interface{}{
		"now": now,
	}

	next := now.AddDate(0, 1, 0)
	last := now.AddDate(0, -1, 0)

	nextMonth := next.Format("01")
	nextMonthYear := next.Format("2006")

	lastMonth := last.Format("01")
	lastMonthYear := last.Format("2006")

	stringMap := map[string]string{
		"next_month":      nextMonth,
		"next_month_year": nextMonthYear,
		"last_month":      lastMonth,
		"last_month_year": lastMonthYear,
	}

	stringMap["this_month"] = now.Format("01")
	stringMap["this_month_year"] = now.Format("2006")

	currentYear, currentMount, _ := now.Date()
	currentLocation := now.Location()
	firstOfMonth := time.Date(currentYear, currentMount, 1, 0, 0, 0, 0, currentLocation)
	lastOfMonth := firstOfMonth.AddDate(0, 1, -1)

	intMap := map[string]int{
		"days_in_month": lastOfMonth.Day(),
	}

	rooms, err := m.DB.AllRooms()

	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	dataMap["rooms"] = rooms

	for _, rm := range rooms {
		// create maps
		reservationMap := make(map[string]int)
		blockMap := make(map[string]int)

		// Iterate over dates starting from firstOfMonth until lastOfMonth
		for d := firstOfMonth; !d.After(lastOfMonth); d = d.AddDate(0, 0, 1) {
			// Inside the loop, populate reservationMap and blockMap with date keys formatted as "YYYY-MM-DD" and initial values of 0
			reservationMap[d.Format("2006-01-2")] = 0
			blockMap[d.Format("2006-01-2")] = 0
		}

		// get all the restriction for the current room
		restrictions, err := m.DB.GetRestrictionsForRoomByDate(rm.ID, firstOfMonth, lastOfMonth)
		if err != nil {
			helpers.ServerError(w, err)
			return
		}
		for _, y := range restrictions {
			if y.ReservationID > 0 {
				// it's a reservation - we are doing a for loop because a reservation could be a nuber of days long
				for d := y.StartDate; !d.After(y.EndDate); d = d.AddDate(0, 0, 1) {
					reservationMap[d.Format("2006-01-2")] = y.ReservationID
				}
			} else {
				// it's a block - while block is alway a 1 day long
				blockMap[y.StartDate.Format("2006-01-2")] = y.ID
			}
		}
		dataMap[fmt.Sprintf("reservation_map_%d", rm.ID)] = reservationMap
		dataMap[fmt.Sprintf("block_map_%d", rm.ID)] = blockMap

		m.App.Session.Put(r.Context(), fmt.Sprintf("block_map_%d", rm.ID), blockMap)
	}

	render.Template(w, r, "admin-calandar-reservations-page.tmpl", &models.TemplateData{
		StringMap: stringMap,
		DataMap:   dataMap,
		IntMap:    intMap,
	})
}

// PostAdminCalendarReservations handles post of reserveation calandar
func (m *Repository) PostAdminCalendarReservations(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	month, _ := strconv.Atoi(r.Form.Get("m"))
	year, _ := strconv.Atoi(r.Form.Get("y"))

	// process block
	rooms, err := m.DB.AllRooms()
	if err != nil {
		helpers.ServerError(w, err)
		return
	}

	form := forms.New(r.PostForm)

	for _, rm := range rooms {
		// Get the block map from the session. Loop through entire map, if we have an entry in the map
		// that does not exist in our posted data, and if the restriction id > 0, then it is a block we
		// need to remove

		curMap := m.App.Session.Get(r.Context(), fmt.Sprintf("block_map_%d", rm.ID)).(map[string]int)
		for name, value := range curMap {

			// ok will be false if the value is not in the map
			val, ok := curMap[name]
			if ok {
				// only pay attention to value > 0, and that are not in the form post
				// the rest are just placeholders for days without blocks
				if val > 0 {
					if !form.Has(fmt.Sprintf("remove_block_%d_%s", rm.ID, name)) {
						// delete the restriction by ID
						log.Println("would delete block", value)
						err := m.DB.DeleteBlockByID(value)
						if err != nil {
							log.Println("error block reservation", err)
						}
					}
				}
			}
		}

	}

	// now handle new blocks
	for name, _ := range r.PostForm {
		if strings.HasPrefix(name, "add_block") {
			exploded := strings.Split(name, "_")
			roomID, _ := strconv.Atoi(exploded[2])
			t, _ := time.Parse("2006-01-2", exploded[3])
			// insert new block
			err := m.DB.InsertBlockForRoom(roomID, t)
			if err != nil {
				log.Println(err)
			}
			// log.Println("would insert block for room id", roomID, "for date", exploded[3])
		}
	}

	m.App.Session.Put(r.Context(), "flash", "Change saved")
	http.Redirect(w, r, fmt.Sprintf("/admin/reservation-calendar?y=%d&m=%d", year, month), http.StatusSeeOther)
}
