package main

import "fmt"

func createChannels() {

	// Create a channel to send and receive an integer
	c := make(chan int)

	// Launch a goroutine to send 42 through the channel
	go func() {
		c <- 42
		close(c) // Close the channel after sending the value
	}()

	// Receive the number sent through the channel and print it
	// You can also use a range loop to receive values until the channel is closed
	for value := range c {
		fmt.Println(value)
	}
}
