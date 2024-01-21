package forms

import (
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/asaskevich/govalidator"
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

// Valid return false in case of errors, otherwise true
func (f *Form) Valid() bool {
	return len(f.Errors) == 0
}

// Has check for the existence of a form field in the post and ensure it is not empty
func (f *Form) Has(field string, r *http.Request) bool {
	formFild := r.Form.Get(field)
	if formFild == "" {
		return false
	}
	return true
}

// Required check for thr existence of form fields in the post and ensures they are not empty
func (f *Form) Required(fields ...string) {
	for _, field := range fields {
		value := f.Get(field)

		if len(strings.TrimSpace(value)) == 0 {
			f.Errors.Add(field, "This field is required.")
		}
	}
}

// MinLength return false if the field value is shorter than a given length
func (f *Form) MinLength(field string, length int) bool {
	value := f.Get(field)

	if len(strings.TrimSpace(value)) < length {
		f.Errors.Add(field, fmt.Sprintf("This field musthave at least %d characters.", length))
		return false
	}
	return true
}

// IsEmail check it the value of a feld is a valid email address
func (f *Form) IsEmail(field string) bool {
	email := strings.TrimSpace((f.Get(field)))

	if !govalidator.IsEmail(email) {
		fmt.Println(email)
		f.Errors.Add(field, "Please enter a valid email address.")
		return false
	}
	return true
}
