package main

import "os"

// ---------------------------------------------------------------------

// Page represents a page of a document or a simple file with a title and a body.
type Page struct {
	Title string
	Body  []byte
}

// ---------------------------------------------------------------------

// save writes the Page's Body to a text file named after the Page's Title.
// It returns an error if the file cannot be written.
func (p *Page) save() error {
	filename := p.Title + ".txt"
	return os.WriteFile("data/"+filename, p.Body, 0600)
}

// ---------------------------------------------------------------------

// loadPage loads a page from a file with the given title.
// It returns a pointer to a Page instance and any error encountered.
func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := os.ReadFile("data/" + filename)
	if err != nil {
		return nil, err
	}

	// Return a new Page instance with the title and body on success.
	return &Page{Title: title, Body: body}, nil
}

// ---------------------------------------------------------------------
