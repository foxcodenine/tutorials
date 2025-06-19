package main

import (
	"fmt"
	"time"
)

func main() {
	dataChan := make(chan string)   // Used to send data from worker
	stopChan := make(chan struct{}) // Used to signal the worker to stop

	// Start a worker goroutine
	go func() {
		for {
			select {
			case <-stopChan:
				fmt.Println("Worker received stop signal")
				return // Exit goroutine
			case dataChan <- time.Now().Format("15:04:05"):
				// Send current time to main via dataChan
				time.Sleep(1 * time.Second) // Simulate work
			}
		}
	}()

	// Main receives a few values from the worker
	for i := 0; i < 3; i++ {
		msg := <-dataChan // Receive from channel
		fmt.Println("Received from worker:", msg)
	}

	// Signal the worker to stop
	stopChan <- struct{}{}

	// Give it a moment to finish cleanly
	time.Sleep(500 * time.Millisecond)
	fmt.Println("Main exiting")
}
