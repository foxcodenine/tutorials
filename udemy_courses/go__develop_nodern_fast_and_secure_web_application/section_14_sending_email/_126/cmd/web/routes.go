package main

import (
	"net/http"

	"foxcode.io/internal/config"
	"foxcode.io/internal/handlers"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func routes(app *config.AppConfig) http.Handler {

	// Create a new Chi router.
	mux := chi.NewRouter()

	// Use middleware to recover from panics, log hits, prevent CSRF attacks, and manage sessions.
	mux.Use(middleware.Recoverer)
	mux.Use(hitLogger)
	mux.Use(noSurf)
	mux.Use(sessionLoad)

	// Define routes and associate them with corresponding handlers from the repository.
	mux.Get("/", handlers.Repo.HomeHandler)
	mux.Get("/about", handlers.Repo.AboutHandler)

	mux.Get("/contact", handlers.Repo.ContactHandler)
	mux.Get("/eremite", handlers.Repo.EremiteHandler)
	mux.Get("/couple", handlers.Repo.CoupleHandler)
	mux.Get("/family", handlers.Repo.FamilyHandler)
	mux.Get("/reservation", handlers.Repo.ReservationHandler)
	mux.Post("/reservation", handlers.Repo.PostReservationHandler)
	mux.Post("/reservation-json", handlers.Repo.ReservationHandlerJSON)
	mux.Get("/make-reservation", handlers.Repo.MakeReservationHandler)
	mux.Post("/make-reservation", handlers.Repo.PostMakeReservation)
	mux.Get("/reservation-overview", handlers.Repo.ReservationOverview)
	mux.Get("/choose-room/{id}", handlers.Repo.ChooseRoom)
	mux.Get("/book-room", handlers.Repo.BookRoom)

	mux.Get("/user/login", handlers.Repo.ShowLogin)
	mux.Post("/user/login", handlers.Repo.PostShowLogin)

	mux.Get("/user/logout", handlers.Repo.Logout)

	// Serve static files from the "static" directory.
	fileServer := http.FileServer(http.Dir(app.RootPath + "static/"))
	mux.Handle("/static/*", http.StripPrefix("/static", fileServer))

	mux.Route("/admin", func(mux chi.Router) {
		// mux.Use(Auth)

		mux.Get("/dashboard", handlers.Repo.AdminDashboard)
		mux.Get("/reservations-new", handlers.Repo.AdminNewReservations)
		mux.Get("/reservations-all", handlers.Repo.AdminAllReservations)

		mux.Get("/reservation-calendar", handlers.Repo.AdminCalendarReservations)
		mux.Post("/reservation-calendar", handlers.Repo.PostAdminCalendarReservations)

		mux.Get("/delete-reservation/{src}/{id}", handlers.Repo.AdminDeleteReservation)
		mux.Get("/process-reservation/{src}/{id}", handlers.Repo.AdminProcessReservation)

		mux.Get("/reservations/{src}/{id}", handlers.Repo.AdminShowReservation)
		mux.Post("/reservations/{src}/{id}", handlers.Repo.PostAdminShowReservation)
	})

	// Return the configured Chi router as the HTTP handler.
	return mux
}
