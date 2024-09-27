package middleware

import (
	"fmt"
	"myapp/data"
	"net/http"
	"strconv"
	"strings"
	"time"
)

// CheckRemember is middleware that checks if a "remember me" cookie is present
// and automatically logs in the user if the cookie is valid.
func (m *Middleware) CheckRemember(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// Check if the user is already logged in by checking the session
		if !m.App.Session.Exists(r.Context(), "userID") {

			// User is not logged in, check for a "remember me" cookie
			cookie, err := r.Cookie(fmt.Sprintf("_%s_remember", m.App.AppName))
			if err != nil {
				// No cookie found, proceed to the next middleware or handler
				next.ServeHTTP(w, r)
			} else {
				// Cookie found, proceed to validate it
				key := cookie.Value
				var u data.User
				if len(key) > 0 {
					// Cookie contains data, validate the remember token

					// Split the cookie value into user ID and hash
					split := strings.Split(key, "|")
					uid, hash := split[0], split[1]

					// Convert user ID to integer
					id, _ := strconv.Atoi(uid)

					// Check if the hash is valid for the given user ID
					validHash := u.CheckForRememberToken(id, hash)

					if !validHash {
						// Invalid hash, delete the cookie and notify the user
						m.deleteRememberCookie(w, r)
						m.App.Session.Put(r.Context(), "error", "You've been logged out from another device")
						next.ServeHTTP(w, r)
					} else {
						// Valid hash, log the user in by setting the session
						user, _ := u.Get(id)

						m.App.Session.Put(r.Context(), "userID", user.ID)
						m.App.Session.Put(r.Context(), "remember_token", hash)
						next.ServeHTTP(w, r)
					}
				} else {
					// Cookie is empty, possibly a leftover, delete it
					m.deleteRememberCookie(w, r)
				}
			}
		} else {
			// User is already logged in, proceed to the next middleware or handler
			next.ServeHTTP(w, r)
		}
	})
}

// deleteRememberCookie removes the "remember me" cookie and logs out the user.
func (m *Middleware) deleteRememberCookie(w http.ResponseWriter, r *http.Request) {
	// Renew the session token to ensure a fresh session
	_ = m.App.Session.RenewToken(r.Context())

	// Create a cookie with an expired date to delete it from the client
	newCookie := http.Cookie{
		Name:     fmt.Sprintf("_%s_remember", m.App.AppName),
		Value:    "",
		Path:     "/",
		Expires:  time.Now().Add(-100 * time.Hour),
		HttpOnly: true,
		Domain:   m.App.Session.Cookie.Domain,
		MaxAge:   -1,
		Secure:   m.App.Session.Cookie.Secure,
		SameSite: http.SameSiteStrictMode,
	}

	// Set the expired cookie to delete it from the client
	http.SetCookie(w, &newCookie)

	// Remove user session data and log out the user
	m.App.Session.Remove(r.Context(), "userID")
	m.App.Session.Destroy(r.Context())

	// Renew the session token again after logging out
	_ = m.App.Session.RenewToken(r.Context())
}
