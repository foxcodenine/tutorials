package session

import (
	"os"
	"testing"
)

// TestMain is the entry point for testing in this package.
// It allows setup code to run before any tests are executed and teardown code to run after all tests are complete.
func TestMain(m *testing.M) {
	// Run the tests and capture the exit code
	exitCode := m.Run()

	// Exit with the captured exit code
	os.Exit(exitCode)
}

// This setup ensures that your tests run in a controlled environment with any necessary resources
// initialized and cleaned up properly.
