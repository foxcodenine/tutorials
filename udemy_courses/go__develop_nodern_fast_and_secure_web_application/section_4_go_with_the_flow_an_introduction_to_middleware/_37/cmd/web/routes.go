package main

import (
	"net/http"

	"foxcode.io/pkg/config"
	"foxcode.io/pkg/handlers"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func routes(app *config.AppConfig) http.Handler {

	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Use(hitLogger)
	mux.Use(noSurf)
	mux.Use(sessionLoad)

	mux.Get("/", handlers.Repo.HomeHandler)
	mux.Get("/about", handlers.Repo.AboutHandler)

	return mux
}
