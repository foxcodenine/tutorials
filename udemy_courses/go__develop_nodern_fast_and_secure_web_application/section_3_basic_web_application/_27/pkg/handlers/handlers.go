package handlers

import (
	"net/http"

	"foxcode.io/pkg/render"
)

// HomeHandler handles requests to the home page
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplateTemp(w, "home-page.tmpl")
}

// AboutHandler handles requests to the about page
func AboutHandler(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplateTemp(w, "about-page.tmpl")
}
