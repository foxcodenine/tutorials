package main

import (
	"fmt"
	"net/http"

	"github.com/justinas/nosurf"
)

func WriteToConsole(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Hit th page")
		next.ServeHTTP(w, r)
	})

}

// ---------------------------------------------------------------------

// NoSruvf is a middleware function that adds CSRF protection to the handler.
// It wraps the provided handler with nosurf middleware.
func NoSruvf(next http.Handler) http.Handler {
	// Create a new nosurf handler using the provided next handler
	csrfHandler := nosurf.New(next)

	// Set the base cookie configuration for CSRF protection
	csrfHandler.SetBaseCookie(http.Cookie{
		HttpOnly: true,                 // Prevents client-side scripts from accessing the cookie
		Path:     "/",                  // Restricts the path for which the cookie is valid
		Secure:   app.InProduction,     // Specifies whether the cookie should only be sent over HTTPS
		SameSite: http.SameSiteLaxMode, // Sets the SameSite attribute for the cookie to Lax mode
	})

	return csrfHandler // Return the CSRF-protected handler
}

// ---------------------------------------------------------------------

// SessionLoad is a middleware function for managing sessions.
func SessionLoad(next http.Handler) http.Handler {
	// LoadAndSave loads session data from the request and saves it to the response.
	return session.LoadAndSave(next)
}

// ---------------------------------------------------------------------
