package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func (a *application) routes() *chi.Mux {
	// Middleware must come before any routes

	// Add routes here
	a.App.Routes.Get("/", a.Handlers.Home) // Home route

	// Static routes for serving files from the ./public directory
	fileServer := http.FileServer(http.Dir("./public"))
	a.App.Routes.Handle("/public/*", http.StripPrefix("/public", fileServer))

	return a.App.Routes // Return the configured router
}
