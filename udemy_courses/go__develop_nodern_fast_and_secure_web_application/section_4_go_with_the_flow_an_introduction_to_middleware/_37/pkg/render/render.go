package render

import (
	"bytes"
	"html/template"
	"log"
	"net/http"
	"path/filepath"

	"foxcode.io/common"
	"foxcode.io/pkg/config"
)

// ---------------------------------------------------------------------

// AddDefaultData adds default values to the provided TemplateData and returns the modified instance.
func AddDefaultData(td *common.TemplateData) *common.TemplateData {
	// Add default values here if needed.
	return td
}

// ---------------------------------------------------------------------

var app *config.AppConfig

// SetAppConfig sets the global application configuration.
func SetAppConfig(a *config.AppConfig) {
	app = a
}

// ---------------------------------------------------------------------

// RenderTemplate renders the specified template to the provided http.ResponseWriter.
func RenderTemplate(w http.ResponseWriter, tmpl string, td *common.TemplateData) {

	var templateCache map[string]*template.Template
	var err error

	// Step 1: Use the existing template cache if caching is enabled; otherwise, create a new cache.
	if app.UseCache {
		templateCache = app.TemplateCache
	} else {
		// Create a new template cache if caching is disabled.
		templateCache, err = CreateTemplateCache()
		if err != nil {
			log.Fatalln("Error creating template cache: ", err)
		}
	}

	// Step 2: Get the right template from the cache based on the specified tmpl string
	template, ok := templateCache[tmpl]
	if !ok {
		log.Fatalln("Template not found in cache: ", tmpl)
	}

	// Step 3: Append default data to the TemplateData
	td = AddDefaultData(td)

	// Step 4: Store the result in a buffer and double-check if it is a valid value
	buf := new(bytes.Buffer)
	err = template.Execute(buf, td)
	if err != nil {
		log.Fatalln("Error executing template: ", err)
	}

	// Step 5: Render the template by writing the buffer content to the http.ResponseWriter
	_, err = buf.WriteTo(w)
	if err != nil {
		log.Fatalln("Error writing template to response: ", err)
	}
}

// ---------------------------------------------------------------------

// CreateTemplateCache creates a map of template names to template sets.
// Each template set includes the main page template and any associated layout templates.
func CreateTemplateCache() (map[string]*template.Template, error) {

	templateCache := map[string]*template.Template{}

	// Step 1: Get all available page templates
	pages, err := filepath.Glob("../../templates/*-page.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Step 2: Get all available layout templates
	layouts, err := filepath.Glob("../../templates/layouts/*-layout.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Step 3: Range through the slice of *.page.tmpl files
	for _, page := range pages {
		name := filepath.Base(page)

		// Step 4: Create a template set for the current page
		templateSet, err := template.New(name).ParseFiles(page)
		if err != nil {
			return templateCache, err
		}

		// Step 5: If layout templates exist, parse and add them to the template set
		if len(layouts) > 0 {
			templateSet, err = templateSet.ParseGlob("../../templates/layouts/*-layout.tmpl")
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
