package middleware

import "net/http"

// AuthToken validates authentication tokens from incoming requests.
func (m *Middleware) AuthToken(next http.Handler) http.Handler {

	// Authenticate token; respond with 401 on failure.
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		_, err := m.Models.Tokens.AuthenticateToken(r)

		if err != nil {
			var payload struct {
				Error   bool   `json:"error"`
				Message string `json:"message"`
			}

			payload.Error = true
			payload.Message = "invalid authentication credentials"

			_ = m.App.WriteJSON(w, http.StatusUnauthorized, payload)
		}
	})
}
