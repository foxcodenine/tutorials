package main

import (
	"io"
	"os"
	"strings"
	"testing"
)

func Test_updateMessage(t *testing.T) {

	wg.Add(1)

	updateMessage("abc")

	wg.Wait()

	if msg != "abc" {
		t.Error("msg expected to be set to 'abc'. and not!")
	}
}

func Test_printMessage(t *testing.T) {
	stdOut := os.Stdout

	r, w, _ := os.Pipe()

	os.Stdout = w

	msg = "xyz"

	printMessage()

	_ = w.Close()

	result, _ := io.ReadAll(r)

	output := string(result)

	os.Stdout = stdOut

	if !strings.Contains(output, "xyz") {
		t.Error("Expected to find 'xyz', but it is not there!")
	}

}

func Test_main(t *testing.T) {
	stdOut := os.Stdout

	r, w, _ := os.Pipe()

	os.Stdout = w

	main()

	_ = w.Close()

	result, _ := io.ReadAll(r)

	output := string(result)

	os.Stdout = stdOut

	if !strings.Contains(output, "Hello, universe!") {
		t.Error("Expected to find 'Hello, universe!', but it is not there!")
	}
	if !strings.Contains(output, "Hello, cosmos!") {
		t.Error("Expected to find 'Hello, cosmos!', but it is not there!")
	}
	if !strings.Contains(output, "Hello, world!") {
		t.Error("Expected to find 'Hello, world!', but it is not there!")
	}
}
