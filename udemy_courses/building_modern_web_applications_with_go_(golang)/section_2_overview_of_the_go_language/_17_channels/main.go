package main

import (
	"github.com/foxcodenine/building_modern_web_applications_with_go/helpers"
	"log"
)

// -- numPool defines the upper limit for generating random numbers.
const numPool = 1000

// -- calculateValue generates a random number and sends it to the given channel.
func calculateValue(someChan chan int) {

	// -- Generate a random number using the RandomNumber function from the helpers package.
	randomNumber := helpers.RandomNumber(numPool)

	// -- Send the random number to the channel.
	someChan <- randomNumber
}

func main() {
	// -- Create an integer channel.
	intChan := make(chan int)

	// -- Ensure the channel is closed when the main function exits.
	defer close(intChan)

	// -- Start a goroutine to calculate a random value and send it to the channel.
	go calculateValue(intChan)

	// -- Receive the random number from the channel.
	num := <-intChan

	// -- Print the received number.
	log.Println("Received random number:", num)
}

/*
* Channels:
* Channels are a way to enable communication and synchronization between goroutines in Go.
* They provide a safe and structured way for goroutines to send and receive data.
* Channels have two main operations: sending data into a channel using the <- operator, and receiving data from a channel using the <- operator.
* Channels can be used to prevent race conditions and coordinate the execution of goroutines.
* They are an integral part of Go's concurrency model and are used extensively for building concurrent programs.q
 */
