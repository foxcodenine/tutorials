package handlers

import (
	"myapp/data"
	"net/http"
	"time"
 
	"github.com/foxcodenine/celeritas"
)

// Handlers struct holds the application instance.
type Handlers struct {
	App    *celeritas.Celeritas // Application instance
	Models data.Models
}

// Home handles the HTTP request for the home page.
func (h *Handlers) Home(w http.ResponseWriter, r *http.Request) {
	defer h.App.LoadTime(time.Now())

	// Render the home page using the application's render engine
	err := h.render(w, r, "home", nil, nil)
	if err != nil {
		// Log any errors that occur during rendering
		h.App.ErrorLog.Println("error rendering:", err)
	}
}
