package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"
)

// TemplateData holds all dynamic data sent to your templates.
type TemplateData struct {
	StringMap     map[string]string
	IntMap        map[string]int
	FloatMap      map[string]float64
	Data          map[string]any
	Flash         string
	Warning       string
	Error         string
	Authenticated bool
	Now           time.Time
}

// pathToTemplate is the base folder for your template files
var pathToTemplate = "./cmd/web/templates"

// render loads and combines templates, then writes them to the ResponseWriter.
func (app *Config) render(w http.ResponseWriter, r *http.Request, t string, td *TemplateData) {

	// List of common partials (layouts, header, nav, footer, alerts)
	partials := []string{
		fmt.Sprintf("%s/base.layout.gohtml", pathToTemplate),
		fmt.Sprintf("%s/header.partial.gohtml", pathToTemplate),
		fmt.Sprintf("%s/navbar.partial.gohtml", pathToTemplate),
		fmt.Sprintf("%s/footer.partial.gohtml", pathToTemplate),
		fmt.Sprintf("%s/alerts.partial.gohtml", pathToTemplate),
	}

	// Start with the specific page template - the actual template that we need to render
	var templateSlice []string
	templateSlice = append(templateSlice, fmt.Sprintf("%s/%s", pathToTemplate, t))

	// Append all partials so they get parsed together
	for _, temp := range partials {
		templateSlice = append(templateSlice, temp)
	}

	// If no TemplateData was provided, create a new empty one.
	if td == nil {
		td = &TemplateData{}
	}

	// Parse all the template files together.
	tmpl, err := template.ParseFiles(templateSlice...)
	if err != nil {
		// Log the error and send a 500 error to the browser.
		app.ErrorLog.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Execute writes the rendered template to the response writer
	if err := tmpl.Execute(w, nil); err != nil {
		app.ErrorLog.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}

// AddDefaultData injects common values into your TemplateData before rendering.
func (app *Config) AddDefaultData(td *TemplateData, r *http.Request) *TemplateData {

	// Pop flash, warning, and error messages from session
	td.Flash = app.Session.PopString(r.Context(), "flash")
	td.Warning = app.Session.PopString(r.Context(), "warning")
	td.Error = app.Session.PopString(r.Context(), "error")

	if app.IsAuthenticated(r) {
		td.Authenticated = true
		//  TODO:  get more user information
	}

	// Always include the current time
	td.Now = time.Now()
	return td
}

// IsAuthenticated checks for a "userID" key in the session
func (app *Config) IsAuthenticated(r *http.Request) bool {
	return app.Session.Exists(r.Context(), "userID")
}
