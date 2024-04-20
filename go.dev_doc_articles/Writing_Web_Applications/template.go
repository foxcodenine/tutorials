package main

import (
	"log"
	"net/http"
	"path/filepath"
	"text/template"
)

// ---------------------------------------------------------------------

var templates *template.Template

// ---------------------------------------------------------------------

// isEmptyTemplates checks if the given template pointer is effectively empty
func isEmptyTemplates(t *template.Template) bool {
	return t == nil || t.DefinedTemplates() == ""
}

// ---------------------------------------------------------------------

func loadTemplates(path string) (*template.Template, error) {

	if isEmptyTemplates(templates) {
		tmpl, err := template.ParseGlob(filepath.Join(path, "*.html"))

		if err != nil {
			log.Println("! loadTemplates ! 1")
			return nil, err
		}
		templates = tmpl
	}

	return templates, nil
}

// ---------------------------------------------------------------------

func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	templates, err := loadTemplates("templates")

	if err != nil {
		log.Println("! renderTemplate ! 1")
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = templates.ExecuteTemplate(w, tmpl+".html", p)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

// ---------------------------------------------------------------------
