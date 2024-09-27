package middleware

import "net/http"

// Auth enforces user authentication using session checks.
func (m *Middleware) Auth(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		if !m.App.Session.Exists(r.Context(), "userID") {
            // Check session for userID and respond with 401 if not found.
			http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
            return // Stop processing if unauthorized.
		}
	})
}
