package main

import "testing"

// -- TestDivide tests division with valid input
func TestDivide(t *testing.T) {
	_, err := divide(10.0, 1.0)

	if err != nil {
		t.Error("Got an error when we should not have", err.Error())
	}
}

// -- TestBadDivide tests division with invalid input
func TestBadDivide(t *testing.T) {
	_, err := divide(10.0, 0)

	if err == nil {
		t.Error("Did not get an error when we should have")
	}
}

// ---------------------------------------------------------------------

// -- Define test cases
var tests = []struct {
	name     string
	dividend float32
	divisor  float32
	expected float32
	isErr    bool
}{
	{"!valid-data!", 100.0, 10.0, 10.0, false},
	{"!invalid-data!", 100.0, 0.0, 0.0, true},
	{"!expect-5!", 50.0, 10.0, 5.0, false},
	{"!invalid-data!", -1.0, -777.0, 0.0012870013, false},
}

// -- TestDivision runs a series of division tests
func TestDivision(t *testing.T) {
	for _, tt := range tests {
		got, err := divide(tt.dividend, tt.divisor)

		if tt.isErr {
			if err == nil {
				t.Error("Expected an error but did not get one", tt.name)
			}
		} else {
			if err != nil {
				t.Error("Did not expect an error but got one", tt.name, err.Error())
			}
		}

		if got != tt.expected {
			t.Errorf("Expected %f but got %f, %s", tt.expected, got, tt.name)
		}
	}
}
