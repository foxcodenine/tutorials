package forms

import "testing"

func TestErrors_Get(t *testing.T) {

	err := errors{}

	if err.Get("name") != nil {
		t.Error("Expected no error for 'name', got one")
	}

	err.Add("email", "email is invalid")

	if err.Get("email") == nil {
		t.Error("Expected an error for 'email', got none")
	}
}
