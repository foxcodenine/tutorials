package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {

	// Create a channel to communicate between goroutines
	msgChan := make(chan string)

	// Start a new goroutine (a lightweight thread)
	go func() {
		// Sleep for a random duration between 0 and 1000 milliseconds
		time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)

		// Send the string "hello" to the channel
		msgChan <- "hello"

		// Send the string "world" to the channel
		msgChan <- "world"
	}()

	// Read the first message from the channel (blocks until a message is received)
	msg1 := <-msgChan

	// Read the second message from the channel (blocks until another message is received)
	msg2 := <-msgChan

	// Print both messages
	fmt.Println(msg1, msg2)
}
