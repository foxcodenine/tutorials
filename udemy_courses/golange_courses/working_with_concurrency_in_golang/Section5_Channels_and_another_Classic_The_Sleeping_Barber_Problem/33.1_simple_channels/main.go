package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func shout(ping <-chan string, pong chan<- string) {
	p, ok := <-ping
	if !ok {
		fmt.Println("We can do somthing here!")
	}
	pong <- fmt.Sprintf("%s!\n", strings.ToUpper(p))
}

func main() {
	ping := make(chan string)
	pong := make(chan string)

	go shout(ping, pong)

	fmt.Println("Type something and press Enter (enter Q to quit)")

	// --- UPDATE: Using bufio.Scanner for input ---
	// More robust and idiomatic for reading full lines of input (handles spaces, no partial reads)
	scanner := bufio.NewScanner(os.Stdin)

	for {
		fmt.Print("-> ")

		// --- UPDATE: Handling end-of-file or scan errors gracefully ---
		// When Scan() returns false, exit loop (user pressed Ctrl+D or input is closed)
		if !scanner.Scan() {
			break
		}

		userInput := scanner.Text()

		if strings.ToLower(userInput) == "q" {
			break
		}

		ping <- userInput
		r := <-pong
		fmt.Println(r)
	}

	fmt.Println("All done. Closing channels.")
	close(ping)
	close(pong)
}
