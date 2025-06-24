// This program demonstrates the Sleeping Barber problem, a classic concurrency challenge.
// The scenario: a barbershop with a limited number of barbers, waiting room seats, and shop hours.
// Clients arrive at random intervals. If all seats are full, they leave. If no clients are present,
// barbers sleep until a new client wakes them.
//
// Rules:
//   - If no customers, the barber sleeps.
//   - A new client wakes the sleeping barber.
//   - If all seats are full, the client leaves; otherwise, waits.
//   - After each haircut, the barber checks for waiting clients or sleeps again.
//   - The shop stops accepting new clients at closing, but barbers finish all waiting clients before leaving.
//   - Once closed and no clients remain, barbers go home.
//
// Proposed by Edsger Dijkstra in 1965, this problem shows that many synchronization tasks
// can be solved without semaphores (mutexes).

// ---------------------------------------------------------------------
package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/fatih/color"
)

// ---------------------------------------------------------------------

// --- Shop configuration ---
var seatingCapacity = 10                  // Max clients in waiting room
var averageArrivalRate = 100              // Avg. ms between new clients (used in random delay)
var cutDuration = 1000 * time.Millisecond // How long each haircut takes
var timeOpen = 10 * time.Second           // Shop open duration

// ---------------------------------------------------------------------

func main() {
	color.Yellow("The sleeping Barber Problem")
	color.Yellow("---------------------------")

	// Channels for barber completion and client waiting room
	doneChan := make(chan bool) // Signals when each barber is finished
	clientChan := make(chan string, seatingCapacity)

	// Create the barbershop struct with channels and settings
	shop := Barbershop{
		ShopCapacity:    seatingCapacity,
		HairCutDuration: cutDuration,
		NumberOfBarbers: 0,
		BarberDoneChan:  doneChan,
		ClientsChan:     clientChan,
		Open:            true,
	}

	color.Green("The shop is open for the day!")

	// Start a goroutine for each barber
	barbers := []string{"Frank", "Joe", "Chris", "Jazz", "Ray"}
	for _, b := range barbers {
		shop.addBarber(b)
	}

	/*
	   --- EXPLANATION OF GOROUTINES HERE ---

	   Each call to addBarber creates a new goroutine for a barber.
	   There is NO single goroutine for "the whole shop"; the main activity
	   is managed by the barbers (each in their own goroutine), clients (to be added),
	   and the shop closing routine (below).

	   The closure goroutine below simply waits for the timeOpen duration,
	   then initiates the shop closing procedure.

	*/

	// Channels to coordinate shop closing
	shopClosingChan := make(chan bool)
	closeChan := make(chan bool)

	// Goroutine: waits for shop close time, then shuts down the shop
	go func() {
		<-time.After(timeOpen) // Wait until closing time

		shopClosingChan <- true // Notify client generator to stop

		shop.closeShopForTheDay() // Close the shop and wait for barbers

		closeChan <- true // Notify main() that cleanup is done
	}()

	// Goroutine: generates clients at random intervals
	i := 1
	go func() {
		for {
			randomMillisecond := rand.Int() % (2 * averageArrivalRate)
			select {
			case <-shopClosingChan:
				return // Shop closing: stop adding clients
			case <-time.After(time.Millisecond * time.Duration(randomMillisecond)):
				shop.addClient(fmt.Sprintf("Client #%d", i))
				i++
			}
		}
	}()

	// Block main goroutine until shop is fully closed
	<-closeChan
}

// ---------------------------------------------------------------------
