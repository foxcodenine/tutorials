package main

import (
	"fmt"
	"time"
)

// listenToChan continuously receives data from the channel and processes it
func listenToChan(ch chan int) {
	for {
		// Wait for data from the channel
		i := <-ch
		fmt.Println("\tGot", i, "from channel")

		// Simulate slow processing (e.g., 1 second per item)
		time.Sleep(1 * time.Second)
	}
}

func main() {
	// Create a buffered channel with a capacity of 10
	ch := make(chan int, 10)

	// Start the listener in a separate goroutine
	go listenToChan(ch)

	// Send 100 integers into the channel, one at a time
	for i := 0; i < 100; i++ {
		fmt.Println("Sending", i, "to channel...")
		ch <- i // This may block if the buffer is full

		fmt.Println("Sent", i, "to channel...")
		fmt.Println("________________________")
	}

	fmt.Println("Done!")

	// Close the channel (not strictly needed here since listenToChan runs forever)
	close(ch)
}
