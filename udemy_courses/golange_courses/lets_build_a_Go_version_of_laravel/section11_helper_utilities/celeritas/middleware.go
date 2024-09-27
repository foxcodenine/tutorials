package celeritas

import "net/http"

// SessionLoad is a middleware that loads and saves the session data for each request.
func (c *Celeritas) SessionLoad(next http.Handler) http.Handler {
	// Use the LoadAndSave method from the scs.SessionManager to wrap the provided handler
	c.InfoLog.Println("SessionLoad called")
	return c.Session.LoadAndSave(next)
}
