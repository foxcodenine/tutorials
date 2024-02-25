package forms

import (
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"
)

func TestForm_Valid(t *testing.T) {

	r := httptest.NewRequest("POST", "/", nil)
	form := New(r.PostForm)
	isValid := form.Valid()

	if !isValid {
		t.Error("got invalid when should have been valid")
	}

	form.Errors = map[string][]string{
		"key": {"error message 1", "error message 2"},
	}

	isValid = form.Valid()

	if isValid {
		t.Error("got valid when should have been NOT valid")
	}
}

func TestForm_Required(t *testing.T) {

	r := httptest.NewRequest("POST", "/whatever", nil)

	form := New(r.PostForm)

	form.Required("a", "b", "c")

	if form.Valid() {
		t.Error("form show valid when required fields missing")
	}

	postedData := url.Values{}
	postedData.Add("a", "a")
	postedData.Add("b", "b")
	postedData.Add("c", "c")

	r = httptest.NewRequest("POST", "/whatever", nil)

	r.PostForm = postedData

	form = New(r.PostForm)

	form.Required("a", "b", "c")

	if !form.Valid() {
		t.Error("shows does not have required field when it does")
	}
}

func TestForm_MinLength(t *testing.T) {

	postData := url.Values{}

	postData.Add("name", "chris")
	postData.Add("surname", "farrugia")

	r := httptest.NewRequest("POST", "/someendpoint", nil)
	r.PostForm = postData

	form := New(r.PostForm)

	if form.MinLength("name", 8) {
		t.Error("form show that field has 8 chr when it doesn't")
	}

	if !form.MinLength("surname", 8) {
		t.Error("form show that field does not have 8 chr when it dose")
	}

}

func TestForm_IsEmail(t *testing.T) {
	formData := url.Values{}
	formData.Set("name", "chris")            // This is not an email
	formData.Set("email", "chris@yahoo.com") // This is a valid email

	body := strings.NewReader(formData.Encode()) // Encode form data as request body

	// Create a new HTTP request with the form data in the body
	r := httptest.NewRequest("POST", "/blablabla", body)
	r.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	// Before parsing, r.PostForm is empty

	// Parse form data from the request body
	if err := r.ParseForm(); err != nil {
		t.Fatal("Failed to parse form:", err)
	}

	// After parsing, r.PostForm contains the submitted form data

	// Now, initialize the form with the parsed form data
	form := New(r.PostForm) // Ensure New correctly initializes the form with parsed form data

	// Test validation on a non-email field
	if form.IsEmail("name") {
		t.Errorf("expected 'name' to be invalid, but got valid for '%s'", form.Get("name"))
	}

	// Test validation on an actual email field
	if !form.IsEmail("email") {
		t.Errorf("expected 'email' to be valid, but got invalid for '%s'", form.Get("email"))
	}
}

/*

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



*/

// func (f *Form) MinLength(field string, length int) bool {
// 	value := f.Get(field)

// 	if len(strings.TrimSpace(value)) < length {
// 		f.Errors.Add(field, fmt.Sprintf("This field musthave at least %d characters.", length))
// 		return false
// 	}
// 	return true
// }
