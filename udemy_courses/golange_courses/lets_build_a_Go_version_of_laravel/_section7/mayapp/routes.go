package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func (a *application) routes() *chi.Mux {
	// Middleware must come before any routes

	// Add routes here
	a.App.Routes.Get("/", a.Handlers.Home) // Home route
	a.App.Routes.Get("/go-page", a.Handlers.GoPage)
	a.App.Routes.Get("/jet-page", a.Handlers.JetPage)
	a.App.Routes.Get("/sessions", a.Handlers.SessionTest)

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

	// Static routes for serving files from the ./public directory
	fileServer := http.FileServer(http.Dir("./public"))
	a.App.Routes.Handle("/public/*", http.StripPrefix("/public", fileServer))

	return a.App.Routes // Return the configured router
}
