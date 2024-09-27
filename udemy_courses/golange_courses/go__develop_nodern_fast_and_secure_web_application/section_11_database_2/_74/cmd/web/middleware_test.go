package main

import (
	"fmt"
	"strings"

	"bytes"
	"log"
	"net/http"
	"net/http/httptest"
	"reflect"

	// "reflect"
	"testing"
)

func TestNoSurf(t *testing.T) {

	var myH myHandler

	h := noSurf(&myH)

	switch v := h.(type) {
	case http.Handler:
		// all fine nothing to do

	default:
		t.Error(fmt.Sprintf("Type mismatch: Expected http.Handler, got %T", v))
	}
}

// ---------------------------------------------------------------------

func TestSessionLoad(t *testing.T) {
	var myH myHandler
	s := sessionLoad(&myH)
	v := reflect.TypeOf(s)

	expectedType := reflect.TypeOf(http.HandlerFunc(nil))

	if v != expectedType {
		t.Errorf("Type mismatch: Expected %v, got %v\n", expectedType, v)
	}
}

// ---------------------------------------------------------------------

// TestHitLogger checks the behavior of the hitLogger middleware by simulating an HTTP request and capturing the log
// output. This complex test has been written by ChatCPT to ensure that the log output contains the expected message
// "HIT ... the road, Jack ...", allowing flexibility for timestamp variations.
func TestHitLogger(t *testing.T) {
	var myH myHandler
	handler := hitLogger(&myH)

	// Create a new Request to simulate an incoming request
	req := httptest.NewRequest("GET", "/test", nil)

	// Capture the log output during the test
	logOutput := captureLogOutput(func() {
		// Create a ResponseRecorder to capture the response
		rr := httptest.NewRecorder()

		// Call the handler's ServeHTTP method to simulate a request
		handler.ServeHTTP(rr, req)
	})

	// Check if the log contains the expected message
	expectedLogMessage := "HIT ... the road, Jack ..."
	if !strings.Contains(logOutput, expectedLogMessage) {
		t.Errorf("Expected log message: %s, got: %s", expectedLogMessage, logOutput)
	}
}

// captureLogOutput captures the log output during the provided function
func captureLogOutput(fn func()) string {
	// Create a buffer to capture the log output
	var buf bytes.Buffer

	// Replace the default logger's output with the buffer
	oldLogger := log.Default()
	log.SetOutput(&buf)

	// Execute the provided function
	fn()

	// Restore the original logger
	log.SetOutput(oldLogger.Writer())

	return buf.String()
}
