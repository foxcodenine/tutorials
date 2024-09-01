package session

import (
	"fmt"
	"reflect"
	"testing"

	"github.com/alexedwards/scs/v2"
)

// TestSession_InitSession verifies that the InitSession method correctly initializes
// and returns a session manager of the expected type and kind.
// The aim is to ensure that the session configuration is applied correctly and that
// the returned session manager is a properly configured *scs.SessionManager.
// We achieve this by:
// 1. Creating a Session struct with specific test configuration values.
// 2. Calling the InitSession method to get a session manager instance.
// 3. Using reflection to inspect the kind and type of the returned instance.
// 4. Unwrapping pointers and interfaces to get to the actual underlying value.
// 5. Comparing the kind and type of the returned instance with the expected *scs.SessionManager.
func TestSession_InitSession(t *testing.T) {
	// Initialize a Session struct with test data
	c := &Session{
		CookieLifetime: "100",       // Cookie lifetime in minutes
		CookiePersist:  "true",      // Whether the cookie should persist after the browser closes
		CookieName:     "celeritas", // Name of the cookie
		CookieDomain:   "localhost", // Domain for the cookie
		SessionType:    "cookie",    // Type of session store to use
		CookieSecure:   "false",     // Whether the cookie should be secure (HTTPS only)
	}

	// Define a pointer to a SessionManager (expected type)
	var sm *scs.SessionManager

	// Initialize a session using the InitSession method
	ses := c.InitSession()

	// Variables to hold the kind and type of the session manager
	var sessKind reflect.Kind
	var sessType reflect.Type

	// Get the reflection value of the session manager
	rv := reflect.ValueOf(ses)

	// Loop to handle pointers and interfaces
	// This loop ensures we get to the actual underlying value, even if it's a pointer or an interface
	for rv.Kind() == reflect.Ptr || rv.Kind() == reflect.Interface {
		// Print debug information
		fmt.Println("For loop:", rv.Kind(), rv.Type(), rv)
		// Store the kind and type of the session manager
		sessKind = rv.Kind()
		sessType = rv.Type()

		// Get the underlying value
		rv = rv.Elem()
	}

	// Check if the reflection value is valid
	if !rv.IsValid() {
		t.Error("invalid type or kind; kind:", rv.Kind(), "type:", rv.Type())
	}

	// Check if the kind of the session manager matches the expected kind
	if sessKind != reflect.ValueOf(sm).Kind() {
		t.Error("wrong kind returned testing cookie session. Expected:", reflect.ValueOf(sm).Kind(), "and got:", sessKind)
	}

	// Check if the type of the session manager matches the expected type
	if sessType != reflect.ValueOf(sm).Type() {
		t.Error("wrong type returned testing cookie session. Expected:", reflect.ValueOf(sm).Type(), "and got:", sessType)
	}
}
