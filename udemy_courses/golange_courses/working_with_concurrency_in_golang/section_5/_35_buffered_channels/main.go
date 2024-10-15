package main

import (
	"fmt"
	"time"
)

// listenToChan receives data from the channel and simulates processing each value with a 1-second delay.
func listenToChan(ch chan int) {
	for {
		// Receive data from the channel
		i := <-ch
		fmt.Println("Got", i, "from channel")

		// Simulate doing some work for 1 second
		time.Sleep(1 * time.Second)
	}
}

func main() {
	// Create a buffered channel that can hold up to 10 integers.
	ch := make(chan int, 10)

	// Start listening to the channel in a separate goroutine
	go listenToChan(ch)

	// Send 10 integers to the channel
	for i := 0; i < 10; i++ {
		fmt.Println("sending", i, "to channel")
		ch <- i // Since the channel is buffered, it won't block until the buffer is full.
		fmt.Println("sent", i, "to channel")
	}

	fmt.Println("Done")
	close(ch) // Close the channel to indicate no more values will be sent.
}
