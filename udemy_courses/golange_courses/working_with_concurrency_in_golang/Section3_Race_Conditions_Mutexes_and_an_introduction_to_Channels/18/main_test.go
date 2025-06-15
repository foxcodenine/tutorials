package main

import (
	"io"
	"os"
	"strings"
	"testing"
)

func Test_main(t *testing.T) {
	// Save the original os.Stdout.
	stdout := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	main() // Run main, which writes to our pipe.

	// Restore os.Stdout.
	w.Close()
	os.Stdout = stdout

	// Read captured output.
	result, _ := io.ReadAll(r)
	content := string(result)

	// Check that the final balance is correct.
	if !strings.Contains(content, "$34320.00") {
		t.Errorf("expected final balance to contain $34320.00, got: %s", content)
	}
}
