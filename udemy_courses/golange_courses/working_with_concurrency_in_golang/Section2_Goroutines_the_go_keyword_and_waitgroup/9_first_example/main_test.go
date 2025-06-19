package main

import (
	"io"
	"os"
	"strings"
	"sync"
	"testing"
)

func Test_printSomething(t *testing.T) {
	// 1. Save the original os.Stdout so you can restore it later.
	stdOut := os.Stdout

	// 2. Create a pipe (r = read end, w = write end).
	//    We'll temporarily redirect output here.
	r, w, _ := os.Pipe()

	// 3. Redirect os.Stdout to the write end of the pipe.
	//    This means anything printed (fmt.Println) will go into the pipe.
	os.Stdout = w

	// 4. Create a WaitGroup for goroutine synchronization.
	var wg sync.WaitGroup

	// 5. Add 1 to the WaitGroup counter since we’ll launch one goroutine.
	wg.Add(1)

	// 6. Start the goroutine that prints to Stdout (which now goes to the pipe).
	go printSomething("epsilon", &wg)

	// 7. Wait for the goroutine to finish printing.
	wg.Wait()

	// 8. Close the write end of the pipe to finish capturing output.
	_ = w.Close()

	// 9. Read everything that was written to the pipe (i.e., what was printed).
	result, _ := io.ReadAll(r)

	// 10. Convert the byte slice to a string.
	output := string(result)

	// 11. Restore the original os.Stdout (good practice after redirecting it).
	os.Stdout = stdOut

	// 12. Check if the output contains the word "epsilon".
	//     If not, the test fails.
	if !strings.Contains(output, "epsilon") {
		t.Errorf("Expected to find epsilon but it is not there!")
	}
}
