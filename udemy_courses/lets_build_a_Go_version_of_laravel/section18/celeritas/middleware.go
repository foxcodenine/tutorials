package celeritas

import (
	"net/http"
	"strconv"

	"github.com/justinas/nosurf"
)

// SessionLoad is a middleware that loads and saves the session data for each request.
func (c *Celeritas) SessionLoad(next http.Handler) http.Handler {
	// Use the LoadAndSave method from the scs.SessionManager to wrap the provided handler
	c.InfoLog.Println("SessionLoad called")
	return c.Session.LoadAndSave(next)
}

// NoSurf sets up CSRF protection using a customizable cookie configuration.
// It exempts specific API endpoints and configures CSRF cookie attributes based on app settings.
func (c *Celeritas) NoSurf(next http.Handler) http.Handler {
	csrfHandler := nosurf.New(next)                        // Initialize CSRF protection.
	secure, _ := strconv.ParseBool(c.config.cookie.secure) // Parse 'secure' flag from config.

	csrfHandler.ExemptGlob("/api/*")

	// Configure CSRF cookie with security settings.
	csrfHandler.SetBaseCookie(http.Cookie{
		HttpOnly: true,
		Path:     "/",
		Secure:   secure,
		SameSite: http.SameSiteStrictMode,
		Domain:   c.config.cookie.domain,
	})

	return csrfHandler
}
