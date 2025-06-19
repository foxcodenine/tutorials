package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/fatih/color"
)

// --- Constants & Counters ---

// NumberOfPizzas is the total number of pizzas the shop will attempt to make.
const NumberOfPizzas = 10

// Global counters for stats.
var pizzasMade, pizzasFailed, totalAttempts int

// --- Types ---

// PizzaOrder holds the result of an attempt to make a pizza.
type PizzaOrder struct {
	orderNumber int
	message     string
	success     bool
}

// Producer represents the pizza maker and its communication channels.
type Producer struct {
	data chan PizzaOrder // Channel to send pizza orders/results to the consumer.
	quit chan chan error // Channel to signal quit and receive error acknowledgment.
}

// --- Producer Methods ---

// Close gracefully shuts down the Producer by sending a quit signal and waiting for acknowledgment.
func (p *Producer) Close() error {
	ack := make(chan error)
	p.quit <- ack
	return <-ack
}

// --- Pizza-Making Logic ---

// makePizza simulates creating a pizza order, randomizes result, and returns a PizzaOrder.
func makePizza(orderNumber int) *PizzaOrder {
	orderNumber++ // Start from 1 instead of 0.

	if orderNumber <= NumberOfPizzas {
		fmt.Printf("Received order #%d!\n", orderNumber)

		delay := rand.Intn(10) + 1 // Random delay between 1–10 seconds.

		fmt.Printf("Making pizza #%d. It will take %d seconds...\n", orderNumber, delay)
		time.Sleep(time.Duration(delay) * time.Second)

		rnd := rand.Intn(12) + 1 // Randomize success or type of failure.
		msg := ""
		success := false

		// Update counters depending on success/failure.
		if rnd < 5 {
			pizzasFailed++
		} else {
			pizzasMade++
		}
		totalAttempts++

		// Assign appropriate message and status.
		if rnd <= 2 {
			msg = fmt.Sprintf("*** We ran out of ingredients for pizza #%d!", orderNumber)
		} else if rnd <= 4 {
			msg = fmt.Sprintf("*** The cook quit while making pizza #%d!", orderNumber)
		} else {
			success = true
			msg = fmt.Sprintf("Pizza order #%d is ready!", orderNumber)
		}

		return &PizzaOrder{
			orderNumber: orderNumber,
			message:     msg,
			success:     success,
		}

	} else {
		// If limit reached, return an empty order to signal completion.
		return &PizzaOrder{
			orderNumber: orderNumber,
		}
	}
}

// pizzeria is the producer goroutine: keeps making pizzas and sending results until asked to quit.
func pizzeria(producer *Producer) {
	var orderIndex = 0 // Tracks which pizza order to attempt next.

	for {
		pizza := makePizza(orderIndex)

		if pizza != nil {
			orderIndex = pizza.orderNumber

			select {
			// Send pizza result to the consumer.
			case producer.data <- *pizza:

			// Listen for quit signal, then clean up.
			case quitAck := <-producer.quit:
				close(producer.data) // No more pizza orders will be sent.
				close(quitAck)       // Signal the shutdown is complete.
				return
			}
		}
	}
}

// --- Main Entry Point ---

func main() {
	color.Cyan("The pizzeria is open for business!")
	color.Cyan("----------------------------------")

	// Create Producer (pizza maker) with its channels.
	pizzaProducer := &Producer{
		data: make(chan PizzaOrder),
		quit: make(chan chan error),
	}

	// Start pizza-making goroutine.
	go pizzeria(pizzaProducer)

	// This is the consumer: it receives pizza orders/results from the data channel.
	// 'range' will keep reading from the channel until it's closed by the producer.
	for order := range pizzaProducer.data {
		// If within expected order range, process result.
		if order.orderNumber <= NumberOfPizzas {
			if order.success {
				color.Green(order.message)
				color.Green("Order #%d is out for delivery!", order.orderNumber)
			} else {
				color.Red(order.message)
				color.Red("The customer is really mad!")
			}
		} else {
			// When we get an "empty" order, tell producer to shut down.
			color.Cyan("Done making pizzas...")
			err := pizzaProducer.Close()
			if err != nil {
				color.Red("*** Error closing channel: %v", err)
			}
		}
	}

	// Final day summary.
	color.Cyan("-----------------")
	color.Cyan("Done for the day.")

	color.Cyan(
		"We made %d pizzas, but failed to make %d, with %d attempts in total.",
		pizzasMade, pizzasFailed, totalAttempts,
	)

	switch {
	case pizzasFailed > 9:
		color.Red("It was an awful day...")
	case pizzasFailed >= 6:
		color.Red("It was not a very good day...")
	case pizzasFailed >= 4:
		color.Yellow("It was an okay day....")
	case pizzasFailed >= 2:
		color.Yellow("It was a pretty good day!")
	default:
		color.Green("It was a great day!")
	}
}
