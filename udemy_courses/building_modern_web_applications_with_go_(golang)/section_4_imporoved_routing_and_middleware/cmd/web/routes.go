package main

import (
	"foxcodenine/building_modern_web_applications_with_go/pkg/config"
	"foxcodenine/building_modern_web_applications_with_go/pkg/handlers"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

// ---------------------------------------------------------------------

// routes function sets up the routes for the application
// It takes an AppConfig instance as an argument.
// It creates a new router using the 'pat' package and defines URL patterns and corresponding handlers.
// The router is configured with the defined routes and returned as an http.Handler.
func routes(app *config.AppConfig) http.Handler {
	// Creating a new chi router
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Use(WriteToConsole)
	mux.Use(NoSruvf)

	// Handling the root route with the Home handler from the Repo
	mux.Get("/", handlers.Repo.Home)

	// Handling the "/about" route with the About handler from the Repo
	mux.Get("/about", handlers.Repo.About)

	return mux // Returning the configured router
}
