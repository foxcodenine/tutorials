package forms

import (
	"net/http"
	"net/url"
)

// ---------------------------------------------------------------------

// Form is a custom type representing an HTML form with form values and validation errors.
type Form struct {
	url.Values
	Errors errors
}

// ---------------------------------------------------------------------

// New is a constructor function for creating a new Form instance.
func New(data url.Values) *Form {
	return &Form{
		data,                          // Initialize url.Values field with form data
		errors(map[string][]string{}), // Initialize Errors field with an empty errors map
	}
}

// ---------------------------------------------------------------------

// Has checks if a specific form field is present in the request and has a non-empty value.
// It returns true if the field is present and non-empty, otherwise false.
func (f *Form) Has(field string, r *http.Request) bool {
	x := r.Form.Get(field) // Get the value of the specified form field from the request
	if x == "" {
		return false
	}
	return true
}

// ---------------------------------------------------------------------
