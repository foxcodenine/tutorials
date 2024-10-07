package main

import (
	"io"
	"os"
	"strings"
	"sync"
	"testing"
)

func Test_printSomething(t *testing.T) {
	// Save the current stdout to restore later
	stdOut := os.Stdout

	// Create a pipe to capture the output from os.Stdout
	r, w, _ := os.Pipe()

	// Redirect os.Stdout to the pipe's writer
	os.Stdout = w

	var wg sync.WaitGroup
	wg.Add(1) // Add 1 to the wait group, since we will run one goroutine

	// Call printSomething in a goroutine with the wait group
	go printSomthing("E Epsilon", &wg)

	wg.Wait() // Wait for the goroutine to finish

	_ = w.Close() // Close the writer end of the pipe

	// Read the captured output from the pipe
	result, _ := io.ReadAll(r)
	output := string(result)

	// Restore the original stdout
	os.Stdout = stdOut

	// Check if the output contains the expected string
	if !strings.Contains(output, "E Epsilon") {
		// If the string is not found, fail the test
		t.Error("Expected to find 'E Epsilon', but it is not there!")
	}
}
