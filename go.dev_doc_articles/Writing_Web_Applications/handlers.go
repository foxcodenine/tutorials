package main

import (
	"errors"
	"log"
	"net/http"
	"regexp"
)

// ---------------------------------------------------------------------

// Regex to validate paths that start with /edit, /save, or /view followed by an alphanumeric identifier.
var validPath = regexp.MustCompile("^/(edit|save|view)/([a-zA-Z0-9]+)$")

// ---------------------------------------------------------------------

// If the title is valid, it will be returned along with a nil error value.
// If the title is invalid, the function will write a "404 Not
// Found" error to the HTTP connection, and return an error to the handler.
func getTitle(w http.ResponseWriter, r *http.Request) (string, error) {
	m := validPath.FindStringSubmatch(r.URL.Path)

	log.Println(m)

	if m == nil {
		http.NotFound(w, r)
		return "", errors.New("invalid Page Title")

	}
	return m[2], nil // The title is the second subexpression
}

// ---------------------------------------------------------------------

// viewHandler handles web requests to display the content of a page.
func viewHandler(w http.ResponseWriter, r *http.Request) {

	// Extract the page title from the URL by removing the leading "/view/" from the path.
	// This assumes the URL is structured as "/view/[pageTitle]"

	// title := r.URL.Path[len("/view/"):]

	title, err := getTitle(w, r)
	if err != nil {
		return
	}

	p, err := loadPage(title)

	if err != nil {
		// if the requested Page doesn't exist, redirect the client to the edit Page
		// so the content may be created
		http.Redirect(w, r, "/edit/"+title, http.StatusFound)
		return
	}

	renderTemplate(w, "view", p)
}

// ---------------------------------------------------------------------

func editHandler(w http.ResponseWriter, r *http.Request) {

	// title := r.URL.Path[len("/edit/"):]
	title, err := getTitle(w, r)
	if err != nil {
		return
	}

	p, err := loadPage(title)

	if err != nil {
		p = &Page{Title: title}
	}

	renderTemplate(w, "edit", p)
}

// ---------------------------------------------------------------------

func saveHandler(w http.ResponseWriter, r *http.Request) {

	// title := r.URL.Path[len("/save/"):]
	title, err := getTitle(w, r)
	if err != nil {
		return
	}

	body := r.FormValue("body")

	p := &Page{Title: title, Body: []byte(body)}

	err = p.save()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, "/view/"+title, http.StatusFound)
}

// ---------------------------------------------------------------------
