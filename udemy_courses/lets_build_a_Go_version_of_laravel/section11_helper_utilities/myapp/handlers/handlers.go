package handlers

import (
	"myapp/data"
	"net/http"

	"github.com/CloudyKit/jet/v6"
	"github.com/foxcodenine/celeritas"
)

// Handlers struct holds the application instance.
type Handlers struct {
	App    *celeritas.Celeritas // Application instance
	Models data.Models
}

// Home handles the HTTP request for the home page.
func (h *Handlers) Home(w http.ResponseWriter, r *http.Request) {
	// Render the home page using the application's render engine
	err := h.render(w, r, "home", nil, nil)
	if err != nil {
		// Log any errors that occur during rendering
		h.App.ErrorLog.Println("error rendering:", err)
	}
}

// GoPage handles the HTTP request for rendering a page using Go templates.
func (h *Handlers) GoPage(w http.ResponseWriter, r *http.Request) {
	// Render the page using Go templates
	err := h.App.Render.GoPage(w, r, "home", nil)
	if err != nil {
		// Log any errors that occur during rendering
		h.App.ErrorLog.Println("error rendering Go template:", err)
	}
}

// JetPage handles the HTTP request for rendering a page using Jet templates.
func (h *Handlers) JetPage(w http.ResponseWriter, r *http.Request) {
	// Render the page using Jet templates
	err := h.App.Render.JetPage(w, r, "jet-template", nil, nil)
	if err != nil {
		// Log any errors that occur during rendering
		h.App.ErrorLog.Println("error rendering Jet template:", err)
	}
}

// SessionTest handles the HTTP request for testing sessions.
func (h *Handlers) SessionTest(w http.ResponseWriter, r *http.Request) {
	// Render the session test page using Jet templates

	myData := "bar"
	h.App.Session.Put(r.Context(), "foo", myData)

	myValue := h.App.Session.GetString(r.Context(), "foo")

	vars := make(jet.VarMap)
	vars.Set("foo", myValue)

	err := h.App.Render.JetPage(w, r, "sessions", vars, nil)
	if err != nil {
		// Log any errors that occur during rendering
		h.App.ErrorLog.Println("error rendering session test page:", err)
	}
}
