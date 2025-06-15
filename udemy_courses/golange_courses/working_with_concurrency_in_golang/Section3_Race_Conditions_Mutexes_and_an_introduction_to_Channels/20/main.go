package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/fatih/color"
)

// --- Constants & Counters ---

// NumberOfPizzas is the total number of pizzas to attempt to make.
const NumberOfPizzas = 10

// Global counters to track stats
var pizzasMade, pizzasFailed, total int

// --- Types ---

// PizzaOrder represents the status/result of a single pizza order.
type PizzaOrder struct {
	pizzaNumber int
	message     string
	success     bool
}

// Producer represents the pizza maker with communication channels.
type Producer struct {
	data chan PizzaOrder // Channel for sending PizzaOrder objects.
	quit chan chan error // Channel to signal quitting and receive error.
}

// --- Producer Methods ---

// Close gracefully shuts down the Producer by signaling through the quit channel.
func (p *Producer) Close() error {
	ch := make(chan error)
	p.quit <- ch
	return <-ch
}

// --- Pizza-Making Logic ---

// makePizza simulates the process of making a pizza: delays, randomizes outcome, and returns a PizzaOrder.
func makePizza(pizzaNumber int) *PizzaOrder {

	pizzaNumber++

	if pizzaNumber <= NumberOfPizzas {
		delay := rand.Intn(5) + 1 // Random time (1–5s) to "make" pizza.
		fmt.Printf("Received order #%d!\n", pizzaNumber)

		rnd := rand.Intn(12) + 1 // Random outcome for success/failure.
		msg := ""
		success := false

		// Update counters
		if rnd < 5 {
			pizzasFailed++
		} else {
			pizzasMade++
		}
		total++

		fmt.Printf("Making pizza #%d. It will take %d seconds...\n", pizzaNumber, delay)
		time.Sleep(time.Duration(delay) * time.Second)

		// Decide message and success based on random value.
		if rnd <= 2 {
			msg = fmt.Sprintf("*** We ran out of ingredients for pizza #%d!", pizzaNumber)

		} else if rnd <= 4 {
			msg = fmt.Sprintf("*** The cook quit while making pizza #%d!", pizzaNumber)

		} else {
			success = true
			msg = fmt.Sprintf("Pizza order #%d is ready!", pizzaNumber)
		}

		return &PizzaOrder{
			pizzaNumber: pizzaNumber,
			message:     msg,
			success:     success,
		}

	} else {

		// Return empty order if limit reached.
		return &PizzaOrder{
			pizzaNumber: pizzaNumber,
		}
	}
}

// pizzeria is the main goroutine function: repeatedly tries to make pizzas until signaled to stop.
func pizzeria(pizzaMaker *Producer) {
	var i = 0 // Keeps track of which pizza we're working on.

	// Main loop: runs forever (or until quit).
	for {
		currentPizza := makePizza(i)
		// Here you'd add logic to send currentPizza to the data channel,
		// and listen for a quit signal via the quit channel.
		// (This part is not implemented in the provided code.)
	}
}

// --- Main Entry Point ---

func main() {
	color.Cyan("The pizzeria is open for business!")
	color.Cyan("----------------------------------")

	// Create a Producer with channels.
	pizzaJob := &Producer{
		data: make(chan PizzaOrder),
		quit: make(chan chan error),
	}

	// Start the pizza-making goroutine.
	go pizzeria(pizzaJob)

	// Placeholder: Consumer logic would go here.

	// End message would go here.
}
