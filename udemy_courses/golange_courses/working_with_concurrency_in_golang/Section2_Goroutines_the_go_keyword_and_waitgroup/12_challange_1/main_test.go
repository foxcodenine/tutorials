package main

import (
	"io"
	"os"
	"strings"
	"sync"
	"testing"
)

func Test_updateMessage(t *testing.T) {
	msg = "Something"

	var wg sync.WaitGroup

	wg.Add(1)
	go updateMessage("Hello, universe!", &wg)
	wg.Wait()

	if msg != "Hello, universe!" {
		t.Errorf("updateMessage failed: expected `msg` to be \"Hello, universe!\", got %q", msg)
	}
}

func Test_printMessage(t *testing.T) {
	msg = "Something"

	stdOut := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	printMessage()

	_ = w.Close()
	result, _ := io.ReadAll(r)
	output := string(result)
	os.Stdout = stdOut

	if !strings.Contains(output, "Something") {
		t.Errorf("printMessage failed: output does not contain \"Something\", got %q", output)
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
		t.Errorf("main failed: expected output to contain \"Hello, universe!\", got %q", output)
	}
	if !strings.Contains(output, "Hello, cosmos!") {
		t.Errorf("main failed: expected output to contain \"Hello, cosmos!\", got %q", output)
	}
	if !strings.Contains(output, "Hello, world!") {
		t.Errorf("main failed: expected output to contain \"Hello, world!\", got %q", output)
	}
	// Each message is printed right after it's set, so all three appear in the output.
}
