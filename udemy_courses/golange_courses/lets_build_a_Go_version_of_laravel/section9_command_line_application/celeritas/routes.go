package celeritas

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

// routes sets up the HTTP request multiplexer with necessary middlewares and routes.
func (c *Celeritas) routes() http.Handler {
	mux := chi.NewRouter() // Create a new router

	// Middleware to get the real IP address of the client
	mux.Use(middleware.RealIP)

	// If debug mode is enabled, use the logger middleware
	if c.Debug {
		mux.Use(middleware.Logger)
	}

	// Middleware to recover from panics and return a 500 internal server error
	mux.Use(middleware.Recoverer)

	// Middleware to load and save session data for each request
	mux.Use(c.SessionLoad)

	// Add your application routes here
	// Example: mux.Get("/", homeHandler)

	return mux // Return the configured router
}
