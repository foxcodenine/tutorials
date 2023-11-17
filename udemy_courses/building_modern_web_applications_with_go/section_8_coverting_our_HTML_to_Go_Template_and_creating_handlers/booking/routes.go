package main

import (
	"github.com/foxcodenine/small-projects/bookings/internal/config"
	"github.com/foxcodenine/small-projects/bookings/internal/handlers"
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
	router := chi.NewRouter()

	// Middleware
	router.Use(
		middleware.Recoverer,
		WriteToConsole,
		NoSruvf,
		SessionLoad,
	)

	// Routes
	router.Get("/", handlers.Repo.Home)
	router.Get("/about", handlers.Repo.About)
	router.Get("/generals-quarters", handlers.Repo.Generals)
	router.Get("/majors-suite", handlers.Repo.Majors)
	router.Get("/make-reservation", handlers.Repo.Reservation)
	router.Get("/contact", handlers.Repo.Contact)

	router.Get("/search-availability", handlers.Repo.Availability)
	router.Post("/search-availability", handlers.Repo.PostAvailability)
	router.Post("/search-availability-json", handlers.Repo.AvailabilityJSON)

	// Static files
	fileServer := http.FileServer(http.Dir("./resources/static/"))
	router.Handle("/static/*", http.StripPrefix("/static", fileServer))

	return router // Returning the configured router
}
