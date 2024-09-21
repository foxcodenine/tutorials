package main

import (
	"fmt"
	"myapp/data"
	"net/http"
	"os"
	"strconv"

	"github.com/foxcodenine/celeritas/mailer"
	"github.com/go-chi/chi/v5"
)

func (a *application) routes() *chi.Mux {
	// Middleware must come before any routes
	a.use(a.Middleware.CheckRemember)

	// Add routes here
	a.get("/", a.Handlers.Home) // Home route
	a.App.Routes.Get("/go-page", a.Handlers.GoPage)
	a.App.Routes.Get("/jet-page", a.Handlers.JetPage)
	a.App.Routes.Get("/sessions", a.Handlers.SessionTest)

	a.App.Routes.Get("/users/login", a.Handlers.UserLogin)
	a.post("/users/login", a.Handlers.PostUserLogin)
	a.App.Routes.Get("/users/logout", a.Handlers.Logout)
	a.get("/users/forgot-password", a.Handlers.Forgot)
	a.post("/users/forgot-password", a.Handlers.PostForgot)
	a.get("/users/reset-password", a.Handlers.ResetPasswordForm)
	a.post("/users/reset-password", a.Handlers.PostResetPassword)

	a.App.Routes.Get("/test-database", func(w http.ResponseWriter, r *http.Request) {
		query := "select id, first_name from users where id = 1"
		row := a.App.DB.Pool.QueryRowContext(r.Context(), query)

		var id int
		var name string

		err := row.Scan(&id, &name)

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}
		fmt.Fprintf(w, "%d %s", id, name)
	})

	a.App.Routes.Get("/form", a.Handlers.Form)
	a.App.Routes.Post("/form", a.Handlers.PostForm)

	a.get("/json", a.Handlers.JSON)
	a.get("/xml", a.Handlers.XML)
	a.get("/download-file", a.Handlers.DownloadFile)
	a.get("/crypto", a.Handlers.TestCrypto)

	a.get("/cache-test", a.Handlers.ShowCachePage)
	a.post("/api/save-in-cache", a.Handlers.SaveInCache)
	a.post("/api/get-from-cache", a.Handlers.GetFromCache)
	a.post("/api/delete-from-cache", a.Handlers.DeleteFromCache)
	a.post("/api/empty-cache", a.Handlers.EmptyCache)

	var s string

	if os.Getenv("MAILER_API") != "" {
		s = "Test Subject - sent using channel (api)"
	} else {
		s = "Test Subject - sent using channel (smtp)"
	}

	a.get("/test-mail", func(w http.ResponseWriter, r *http.Request) {
		msg := mailer.Message{
			From:        "info@foxcode.io",
			To:          "info@foxcode.io",
			Subject:     s,
			Template:    "test",
			Attachments: nil,
			Data:        nil,
		}

		a.App.Mail.Jobs <- msg
		res := <-a.App.Mail.Results
		if res.Error != nil {
			a.App.ErrorLog.Println(res.Error)
		}

		// err := a.App.Mail.SendSMTPMessage(msg)
		// if err != nil {
		// 	a.App.ErrorLog.Println(err)
		// 	return
		// }

		fmt.Fprint(w, "Send mail!")
	})

	a.App.Routes.Get("/create-user", func(w http.ResponseWriter, r *http.Request) {
		// theUser := a.Models.Users

		// theUser.FirstName = "Christopher"
		// theUser.LastName = "Farrugia"
		// theUser.Email = "me@here.com"

		// id, err := theUser.Insert(theUser)

		theUser := data.User{
			FirstName: "Christopher",
			LastName:  "Farrugia",
			Email:     "me@here.com",
			Active:    1,
			Password:  "password",
		}

		id, err := a.Models.Users.Insert(theUser)

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		fmt.Fprintf(w, "%d %s %s", id, theUser.FirstName, theUser.LastName)
	})

	a.App.Routes.Get("/get-all-users", func(w http.ResponseWriter, r *http.Request) {
		users, err := a.Models.Users.GetAll()

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		for _, x := range users {
			fmt.Fprintf(w, "%d, %s, %s", x.ID, x.FirstName, x.LastName)
		}
	})

	a.App.Routes.Get("/get-user/{id}", func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.Atoi(chi.URLParam(r, "id"))

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		user, err := a.Models.Users.Get(id)

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		fmt.Fprintf(w, "%d, %s, %s", user.ID, user.FirstName, user.LastName)
	})

	a.App.Routes.Get("/update-user/{id}", func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.Atoi(chi.URLParam(r, "id"))

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		user, err := a.Models.Users.Get(id)

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		user.FirstName = "Dorothy"
		user.LastName = "Cassar"
		user.Email = "drumond_90@yahoo.com"

		validator := a.App.Validator(nil)
		user.Validate(validator)

		// validator.Check(len(user.LastName) > 20, "last_name", "Last name should be 20 characters or more")

		if !validator.Valid() {
			fmt.Fprint(w, "failed validation")
			return
		}

		err = a.Models.Users.Update(*user)

		if err != nil {
			a.App.ErrorLog.Println(err)
			return
		}

		fmt.Fprintf(w, "%d, %s, %s", user.ID, user.FirstName, user.LastName)

	})

	// Static routes for serving files from the ./public directory
	fileServer := http.FileServer(http.Dir("./public"))
	a.App.Routes.Handle("/public/*", http.StripPrefix("/public", fileServer))

	return a.App.Routes // Return the configured router
}
