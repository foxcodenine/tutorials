package render

import (
	"net/http"
	"testing"

	"foxcode.io/models"
)

func TestAddDefaultData(t *testing.T) {
	var td models.TemplateData

	r, err := getSession()
	if err != nil {
		t.Error(err)
	}

	session.Put(r.Context(), "flash", "123456")

	result := AddDefaultData(&td, r)

	if result.Flash != "123456" {
		t.Error("flash value of 123456 not found in session")
	}

}

// ---------------------------------------------------------------------

// getSession creates a GET request with URL "/some-url" and includes the "X-Session" header's session, if available.
func getSession() (*http.Request, error) {

	// Create a new GET request with the specified URL ("/some-url")
	r, err := http.NewRequest("GET", "/some-url", nil)

	// Check for errors during request creation
	if err != nil {
		return nil, err
	}

	// Retrieve the current context of the request
	context := r.Context()

	// Load the session from the "X-Session" header and update the request context
	// Ignore the second return value (ok) since we're not using it here
	context, _ = session.Load(context, r.Header.Get("X-Session"))

	// Update the request with the modified context
	r = r.WithContext(context)

	// Return the modified request and nil error (if successful)
	return r, nil
}

func TestTemplate(t *testing.T) {
	tc, err := CreateTemplateCache()
	if err != nil {
		t.Error(err)
	}

	app.TemplateCache = tc

	r, err := getSession()
	if err != nil {
		t.Error(err)
	}

	var ww myWriter

	err = Template(&ww, r, "home-page.tmpl", &models.TemplateData{})
	if err != nil {
		t.Error("error writing template to browser")
	}

	err = Template(&ww, r, "non-existent.tmpl", &models.TemplateData{})
	if err == nil {
		t.Error("render template that did not exist")
	}
}

func TestSetAppConfig(t *testing.T) {
	SetAppConfig(app)
}

func TestCreateTemplateCache(t *testing.T) {
	_, err := CreateTemplateCache()

	if err != nil {
		t.Error("error creating template cache")
	}
}
