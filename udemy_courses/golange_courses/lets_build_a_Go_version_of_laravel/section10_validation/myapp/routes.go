package main

import (
	"fmt"
	"myapp/data"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func (a *application) routes() *chi.Mux {
	// Middleware must come before any routes

	// Add routes here
	a.App.Routes.Get("/", a.Handlers.Home) // Home route
	a.App.Routes.Get("/go-page", a.Handlers.GoPage)
	a.App.Routes.Get("/jet-page", a.Handlers.JetPage)
	a.App.Routes.Get("/sessions", a.Handlers.SessionTest)

	a.App.Routes.Get("/users/login", a.Handlers.UserLogin)
	a.App.Routes.Post("/users/login", a.Handlers.PostUserLogin)
	a.App.Routes.Get("/users/logout", a.Handlers.Logout)

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

		user.FirstName = ""
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
