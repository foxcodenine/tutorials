package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/justinas/nosurf"
)

// hitLogger is a middleware that logs a message every time a request is received.
func hitLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Println("HIT ... the road, Jack ...")
		next.ServeHTTP(w, r)
	})
}

// ---------------------------------------------------------------------

// noSurf is a middleware that adds CSRF protection using the nosurf package.
func noSurf(next http.Handler) http.Handler {
	// Create a new nosurf middleware with the provided handler as the next handler.
	csrfHandler := nosurf.New(next)

	// Set the base cookie configuration for CSRF protection.
	cookieSecure, _ := strconv.ParseBool(app.Env["COOKIE_SECURE"])

	csrfHandler.SetBaseCookie(http.Cookie{
		HttpOnly: true,                 // Ensures the cookie is only accessible through HTTP requests
		Path:     "/",                  // The path for which the cookie is valid
		Secure:   cookieSecure,         // Indicates if the cookie should only be sent over HTTPS (false for development)
		SameSite: http.SameSiteLaxMode, // Configures when the browser should send the cookie in cross-site requests
	})

	// Return the configured CSRF protection middleware.
	return csrfHandler
}

// ---------------------------------------------------------------------

// sessionLoad is a middleware that loads and saves session data using the session package.
func sessionLoad(next http.Handler) http.Handler {
	return session.LoadAndSave(next)
}
