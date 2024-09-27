package handlers

import (
	"net/http"

	"github.com/foxcodenine/celeritas"
)

// Handlers struct holds the application instance.
type Handlers struct {
	App *celeritas.Celeritas
}

// Home handles the HTTP request for the home page.
func (h *Handlers) Home(w http.ResponseWriter, r *http.Request) {
	// Render the home page using the application's render engine
	err := h.App.Render.Page(w, r, "home", nil, nil)
	if err != nil {
		// Log any errors that occur during rendering
		h.App.ErrorLog.Println("error rendering:", err)
	}
}
