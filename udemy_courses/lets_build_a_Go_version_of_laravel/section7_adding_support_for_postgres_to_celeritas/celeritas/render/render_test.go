package render

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

// Table-driven tests for the Page method
var pageData = []struct {
	name          string // Name of the test case
	renderer      string // Renderer type (e.g., "go", "jet")
	template      string // Template to render
	errorExpected bool   // Indicates if an error is expected
	errorMessage  string // Error message to display if the test fails
}{
	{"go_page", "go", "home", false, "Error rendering go template"},
	{"go_page_no_template", "go", "no-file", true, "Expected error when rendering non-existent go template, but got none"},
	{"jet_page", "jet", "home", false, "Error rendering jet template"},
	{"jet_page_no_template", "jet", "no-file", true, "Expected error when rendering non-existent jet template, but got none"},
	{"invalid_render_engine", "foo", "home", true, "Expected error when rendering with invalid template engine, but got none"},
}

func TestRender_Page(t *testing.T) {
	for _, e := range pageData {
		// Create a new HTTP GET request
		r, err := http.NewRequest("GET", "/some-url", nil)
		if err != nil {
			t.Error(err)
		}

		// Create a ResponseRecorder to record the response
		w := httptest.NewRecorder()

		// Set the renderer type and the RootPath
		testRenderer.Renderer = e.renderer
		testRenderer.RootPath = "./testdata"

		// Attempt to render the specified template using the specified renderer
		err = testRenderer.Page(w, r, e.template, nil, nil)

		if e.errorExpected {
			// Check if an error was expected but not received
			if err == nil {
				t.Errorf("%s: %s", e.name, e.errorMessage)
			}
		} else {
			// Check if an error was not expected but received
			if err != nil {
				t.Errorf("%s: %s: %s", e.name, e.errorMessage, err.Error())
			}
		}
	}
}
