package main

import "net/http"

// SessionLoad is middleware that loads and saves session data for each request.
// It makes session data available to all handlers via the request context.
// Use this early in your middleware chain to enable session support across your app.
func (app *Config) SessionLoad(next http.Handler) http.Handler {
	return app.Session.LoadAndSave(next)
}
