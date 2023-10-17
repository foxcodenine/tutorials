package render

import (
	"bytes"
	"foxcodenine/building_modern_web_applications_with_go/pkg/config"
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

// ---------------------------------------------------------------------

var app *config.AppConfig

// NewTemplates initializes the app's templates.
func NewTemplates(a *config.AppConfig) {
	app = a
}

// ---------------------------------------------------------------------

// RenderTemplate renders the specified template to the http.ResponseWriter.
func RenderTemplate(w http.ResponseWriter, tmpl string) {
	// -- get the template cache from app config
	tc := app.TemplateCache

	// -- Retrieving the template from the cache
	t, ok := tc[tmpl]
	if !ok {
		log.Fatal("template not found in cache")
	}

	// -- Creating a buffer
	buf := new(bytes.Buffer)

	// -- Executing the template by writing the output to the buffer.
	err := t.Execute(buf, nil)
	if err != nil {
		log.Println(err)
	}

	// -- Writing the buffer to the http.ResponseWriter
	_, err = buf.WriteTo(w)
	if err != nil {
		log.Println(err)
	}
}

// createTemplateCache creates a map of template names to parsed templates.
func CreateTemplateCache() (map[string]*template.Template, error) {
	myCache := map[string]*template.Template{}

	// -- Retrieving all the page templates
	pages, err := filepath.Glob("./resources/templates/*.page.html")
	if err != nil {
		return myCache, err
	}

	// -- Parsing each page template and associated layout templates
	for _, page := range pages {
		name := filepath.Base(page)

		// Creating a new template set
		ts, err := template.New(name).ParseFiles(page)
		if err != nil {
			return myCache, err
		}

		// -- Retrieving all layout templates
		matches, err := filepath.Glob("./resources/templates/layouts/*.layout.html")
		if err != nil {
			return myCache, err
		}

		// -- Parsing and associating layout templates with the template set
		if len(matches) > 0 {
			ts, err = ts.ParseGlob("./resources/templates/layouts/*.layout.html")
			if err != nil {
				return myCache, err
			}
		}

		// Storing the template set in the cache
		myCache[name] = ts
	}
	return myCache, nil
}

// ---------------------------------------------------------------------

// Deprecated: RenderTemplateTest is deprecated and is retained only for explanatory purposes.
// renderTemplateTest renders an HTML template to the provided http.ResponseWriter.
func RenderTemplateTest(w http.ResponseWriter, tmpl string) {

	// -- Parse the HTML template file located in the "templates" directory.
	parsedTemplate, _ := template.ParseFiles("./resources/templates/"+tmpl, "./resources/templates/layouts/base.layout.html")

	// -- Execute the parsed template, writing the output to the http.ResponseWriter.
	err := parsedTemplate.Execute(w, nil)

	if err != nil {
		log.Println("error parsing template", err)
		return
	}
}
