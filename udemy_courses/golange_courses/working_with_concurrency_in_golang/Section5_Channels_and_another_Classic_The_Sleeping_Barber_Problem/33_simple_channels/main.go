package main

import (
	"fmt"
	"strings"
)

// shout listens for messages on the ping channel,
// converts each message and sends the result to the pong channel.
func shout(ping <-chan string, pong chan<- string) {
	for {
		s := <-ping
		pong <- fmt.Sprintf("%s!!!", strings.ToUpper(s))
	}
}

func main() {
	// Create two unbuffered string channels for communication
	ping := make(chan string)
	pong := make(chan string)

	// Start the shout goroutine (runs concurrently)
	go shout(ping, pong)

	fmt.Println("Type something and press Enter (enter Q to quit)")

	for {
		// Print input prompt
		fmt.Print("-> ")

		// Read user input from the terminal
		var userInput string
		_, _ = fmt.Scanln(&userInput)

		// Exit loop if user types "q" or "Q"
		if strings.ToLower(userInput) == "q" {
			break
		}

		// Send user input to the shout goroutine through the ping channel
		ping <- userInput

		// Receive shouted response from pong channel and print it
		r := <-pong
		fmt.Printf("%s\n", r)
	}

	fmt.Println("All done. Close channels.")
	close(ping) // Close ping channel
	close(pong) // Close pong channel
}
