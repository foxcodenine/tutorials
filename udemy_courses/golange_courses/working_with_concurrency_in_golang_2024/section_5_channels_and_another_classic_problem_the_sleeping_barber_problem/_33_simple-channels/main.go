package main

import (
	"fmt"
	"strings"
)

// shout listens for a string on the 'ping' channel, converts it to uppercase, adds "!!!",
// and sends it to the 'pong' channel.
func shout(ping <-chan string, pong chan<- string) {
	for {
		s, ok := <-ping // Receive input from the 'ping' channel
		if !ok {
			// do something
		}
		pong <- fmt.Sprintf("%s!!!", strings.ToUpper(s)) // Send modified string to 'pong' channel
	}
}

func main() {
	ping := make(chan string) // Create a 'ping' channel for sending input
	pong := make(chan string) // Create a 'pong' channel for receiving modified output

	defer close(ping) // Ensure 'ping' channel is closed after the program ends
	defer close(pong) // Ensure 'pong' channel is closed after the program ends

	go shout(ping, pong) // Start the 'shout' goroutine to process input

	fmt.Printf("Type something and press Enter (enter Q to quit)\n")

	for {
		// Print a prompt
		fmt.Print("-> ")

		// Get user input
		var userInput string
		_, _ = fmt.Scanln(&userInput) // Read input from the user

		// If the user inputs "q" (case insensitive), exit the loop and program
		if strings.ToLower(userInput) == "q" {
			break
		}

		// Send the user input to the 'ping' channel
		ping <- userInput

		// Wait for the response from the 'pong' channel
		response := <-pong

		// Print the modified response
		fmt.Println("Response:", response)
	}

	fmt.Println("All done. Closing the channels.")
}
