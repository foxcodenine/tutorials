package render

import (
	"bytes"
	"html/template"
	"log"
	"net/http"
	"path/filepath"

	"github.com/foxcodenine/small-projects/bookings/pkg/config"
	"github.com/foxcodenine/small-projects/bookings/pkg/models"
	"github.com/justinas/nosurf"
)

// ---------------------------------------------------------------------

var app *config.AppConfig

// NewTemplates initializes the app's templates.
func NewTemplates(a *config.AppConfig) {
	app = a
}

// ---------------------------------------------------------------------

func AddDefaultData(td *models.TemplateData, r *http.Request) *models.TemplateData {
	td.CSRFToken = nosurf.Token(r)
	return td
}

// ---------------------------------------------------------------------

// RenderTemplate renders the specified template to the http.ResponseWriter.
func RenderTemplate(w http.ResponseWriter, r *http.Request, tmpl string, td *models.TemplateData) {

	// -- Declaring the variable to hold the template cache
	var tc map[string]*template.Template

	if app.UseCach {
		// -- Reading the template cache information if the cache is enabled
		tc = app.TemplateCache

	} else {
		// -- Rebuilding the template cache if the cache is not enabled
		tc, _ = CreateTemplateCache()
	}

	// -- Retrieving the template from the cache
	t, ok := tc[tmpl]
	if !ok {
		log.Fatal("template not found in cache")
	}

	td = AddDefaultData(td, r)

	// -- Creating a buffer
	buf := new(bytes.Buffer)

	// -- Executing the template by writing the output to the buffer.
	err := t.Execute(buf, td)
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
