package render

import (
	"bytes"
	"errors"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
	"time"

	"foxcode.io/internal/config"
	"foxcode.io/models"
	"github.com/justinas/nosurf"
)

// ---------------------------------------------------------------------
var functions = template.FuncMap{
	"humanDate": HumanDay,
}

// HumanDay return time in YYYY-MM-DD format
func HumanDay(t time.Time) string {
	return t.Format("2006-01-02")
}

// ---------------------------------------------------------------------

var app *config.AppConfig

// SetAppConfig sets the config for the render package
func SetAppConfig(a *config.AppConfig) {
	app = a
}

// ---------------------------------------------------------------------

// AddDefaultData adds default values to the provided TemplateData and returns the modified instance.
func AddDefaultData(td *models.TemplateData, r *http.Request) *models.TemplateData {
	// Add default values here if needed.
	td.Flash = app.Session.PopString(r.Context(), "flash")
	td.Error = app.Session.PopString(r.Context(), "error")
	td.Warning = app.Session.PopString(r.Context(), "warning")

	if app.Session.Exists(r.Context(), "user_id") {
		td.IsAuthenticated = 1
	}

	td.CSRFToken = nosurf.Token(r)
	return td
}

// ---------------------------------------------------------------------

// CreateTemplateCache creates a map of template names to template sets.
// Each template set includes the main page template and any associated layout templates.
func CreateTemplateCache() (map[string]*template.Template, error) {

	templateCache := map[string]*template.Template{}

	// Step 1: Get all available page templates
	pages, err := filepath.Glob(app.RootPath + "templates/*-page.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Step 2: Get all available layout templates
	layouts, err := filepath.Glob(app.RootPath + "templates/layouts/*-layout.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Step 3: Range through the slice of *.page.tmpl files
	for _, page := range pages {
		name := filepath.Base(page)

		// Step 4: Create a template set for the current page
		templateSet, err := template.New(name).Funcs(functions).ParseFiles(page)
		if err != nil {
			return templateCache, err
		}

		// Step 5: If layout templates exist, parse and add them to the template set
		if len(layouts) > 0 {
			templateSet, err = templateSet.ParseGlob(app.RootPath + "templates/layouts/*-layout.tmpl")
			if err != nil {
				return templateCache, err
			}
		}

		// Step 6: Add the template set to the cache with the template name as the key
		templateCache[name] = templateSet
	}

	// Step 7: Return the populated template cache
	return templateCache, nil
}

// ---------------------------------------------------------------------

// Template renders the specified template to the provided http.ResponseWriter.
func Template(w http.ResponseWriter, r *http.Request, tmpl string, td *models.TemplateData) error {

	var templateCache map[string]*template.Template
	var err error

	// Step 1: Use the existing template cache if caching is enabled; otherwise, create a new cache.
	if app.UseCache {
		templateCache = app.TemplateCache
	} else {
		// Create a new template cache if caching is disabled.
		templateCache, err = CreateTemplateCache()
		if err != nil {
			log.Println("Error creating template cache: ", err)
			return err
		}
	}

	// Step 2: Get the right template from the cache based on the specified tmpl string
	template, ok := templateCache[tmpl]
	if !ok {
		log.Println("Template not found in cache: ", tmpl)
		return errors.New("can't get template from catch")
	}

	// Step 3: Append default data to the TemplateData
	td = AddDefaultData(td, r)

	// Step 4: Store the result in a buffer and double-check if it is a valid value
	buf := new(bytes.Buffer)
	err = template.Execute(buf, td)
	if err != nil {
		log.Println("Error executing template: ", err)
		return err
	}

	// Step 5: Render the template by writing the buffer content to the http.ResponseWriter
	_, err = buf.WriteTo(w)
	if err != nil {
		log.Println("Error writing template to response: ", err)
		return err
	}
	return nil
}
