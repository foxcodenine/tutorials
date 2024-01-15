package forms

import (
	"net/http"
	"net/url"
)

type Form struct {
	url.Values
	Errors errors
}

// New is a function to initialize a form struct
func New(data url.Values) *Form {
	return &Form{
		data,
		errors(map[string][]string{}),
	}
}

// Has check for the existence of a form field in the post and ensure it is not empty
func (f *Form) Has(field string, r *http.Request) bool {
	formFild := r.Form.Get(field)
	if formFild == "" {
		return false
	}
	return true
}
