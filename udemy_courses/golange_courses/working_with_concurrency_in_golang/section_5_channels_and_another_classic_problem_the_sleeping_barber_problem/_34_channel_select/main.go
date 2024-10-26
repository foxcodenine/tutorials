package main

import (
	"fmt"
	"time"
)

// server1 sends a message to channel ch every 6 seconds.
func server1(ch chan string) {
	for {
		time.Sleep(time.Second * 6)
		ch <- "This is from server 1"
	}
}

// server2 sends a message to channel ch every 3 seconds.
func server2(ch chan string) {
	for {
		time.Sleep(time.Second * 3)
		ch <- "This is from server 2"
	}
}

func main() {
	fmt.Println("Select with channels")
	fmt.Println("--------------------")

	// Create two channels for communication.
	channel1 := make(chan string)
	channel2 := make(chan string)

	// Start server1 and server2 in separate goroutines.
	go server1(channel1)
	go server2(channel2)

	// The select statement listens to the channels and processes whichever one receives data first.
	// If multiple cases are ready, one is selected randomly.

	for {
		select {
		// Listen for messages from channel1
		case s1 := <-channel1:
			fmt.Println("Case one:", s1)

		// This case also listens to channel1, so only one will be chosen when a message is available.
		case s2 := <-channel1:
			fmt.Println("Case two:", s2)

		// Listen for messages from channel2
		case s3 := <-channel2:
			fmt.Println("Case three:", s3)

		// This case also listens to channel2, so only one will be chosen when a message is available.
		case s4 := <-channel2:
			fmt.Println("Case four:", s4)

			// default:
			// Uncommenting the default case prevents blocking if no channels are ready.
		}
	}
}
