package handlers

import (
	"foxcodenine/building_modern_web_applications_with_go/pkg/render"
	"net/http"
)

// ---------------------------------------------------------------------

// -- Home is a handler function for the home page.
func Home(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "home.page.html")
}

// ---------------------------------------------------------------------

// -- About is a handler function for the about page.
func About(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "about.page.html")
}

// ---------------------------------------------------------------------
