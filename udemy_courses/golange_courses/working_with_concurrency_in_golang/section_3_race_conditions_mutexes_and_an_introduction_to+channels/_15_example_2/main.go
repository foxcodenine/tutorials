package main

import (
	"fmt"
	"sync"
)

var msg string

// WaitGroup to ensure that the main goroutine waits for the spawned goroutines to complete
var wg sync.WaitGroup

func updateMessage(s string, m *sync.Mutex) {
	defer wg.Done()

	// Lock the mutex to prevent other goroutines from accessing `msg`
	m.Lock()

	msg = s

	// Unlock the mutex to allow other goroutines to access `msg`
	m.Unlock()
}

func main() {

	msg = "Hello, world!"

	// Create a Mutex to ensure exclusive access to the critical section
	var mutex sync.Mutex

	// Add two to the WaitGroup counter, because we will launch two goroutines
	wg.Add(2)

	// Launch two goroutines that will try to update `msg`
	go updateMessage("abc!", &mutex) // First goroutine
	go updateMessage("xyz!", &mutex) // Second goroutine

	// Wait for both goroutines to finish before continuing
	wg.Wait()

	// Print the final value of `msg` (which will be either "abc!" or "xyz!")
	fmt.Println(msg)
}
