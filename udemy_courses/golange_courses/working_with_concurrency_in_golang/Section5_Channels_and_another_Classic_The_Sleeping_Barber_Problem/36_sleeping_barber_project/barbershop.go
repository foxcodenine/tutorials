package main

import (
	"time"

	"github.com/fatih/color"
)

// ---------------------------------------------------------------------

type Barbershop struct {
	ShopCapacity    int
	HairCutDuration time.Duration
	NumberOfBarbers int
	BarberDoneChan  chan bool
	ClientsChan     chan string
	Open            bool
}

// ---------------------------------------------------------------------

// Starts a goroutine for each barber
func (shop *Barbershop) addBarber(barber string) {
	shop.NumberOfBarbers++

	go func() {
		isSleeping := false
		color.Yellow("%s goes to the waiting room to check for clients.", barber)

		for {
			// Nap if no clients waiting
			if len(shop.ClientsChan) == 0 {
				color.Yellow("There is nothing to do, so %s takes a nap.", barber)
				isSleeping = true
			}

			// Wait for a client (this blocks until a client arrives or channel is closed).
			client, okShopOpen := <-shop.ClientsChan

			/*
				Note:
				'okShopOpen' is a boolean value that tells us whether the channel is still open.
				- true, we successfully received a client (shop is open).
				- false, the channel has been closed, which means the shop is closed and no more clients will arrive.
				Important:
				We use the closing of ClientsChan to notify barbers to stop working, NOT the 'Open' field.
				This avoids race conditions between multiple barbers.
			*/

			if okShopOpen {
				// Wake up if needed, then cut hair
				if isSleeping {
					color.Yellow("%s wakes %s up.", client, barber)
					isSleeping = false
				}

				// Perform the haircut (takes time)
				shop.cutHair(barber, client)

			} else {
				// Channel closed: shop is closed and no more clients will come.
				// Notify the shop this barber is done and exit the goroutine.
				shop.sendBarberHome(barber)
				return
			}
		}
	}()
}

// ---------------------------------------------------------------------

// Simulates cutting a client's hair
func (shop *Barbershop) cutHair(barber, client string) {
	color.Green("%s is cutting %s's hair", barber, client)
	time.Sleep(shop.HairCutDuration)
	color.Green("%s has finnished cutting %s's hair", barber, client)
}

// ---------------------------------------------------------------------

// Signal that the barber is done for the day
func (shop *Barbershop) sendBarberHome(barber string) {
	color.Cyan("%s is going home.", barber)
	shop.BarberDoneChan <- true
}

// ---------------------------------------------------------------------

// Closes the shop, signals barbers, and waits for all to finish
func (shop *Barbershop) closeShopForTheDay() {
	color.Cyan("Closing shop for the day.")

	close(shop.ClientsChan) // Tells all barbers: "No more clients!"
	shop.Open = false

	// Wait for all barbers to finish by receiving from BarberDoneChan.
	// Each barber sends a value to this channel before exiting.
	for a := 1; a <= shop.NumberOfBarbers; a++ {
		<-shop.BarberDoneChan // Block until a barber signals they're done
	}

	// Clean up the channel
	close(shop.BarberDoneChan)

	color.Green("---------------------------------------------------------------------")
	color.Green("The Barbershop is now closed for the day, and everyone has gone home.")
}

// ---------------------------------------------------------------------

// Try to add a client to the shop; client leaves if full or closed
func (shop *Barbershop) addClient(client string) {
	// print out a message
	color.Green("*** %s arrives!", client)
	if shop.Open {
		select {
		case shop.ClientsChan <- client:
			color.Yellow("%s takes a seat in the waiting room.", client)
		default:
			color.Red("The waiting room is full, so %s leaves.", client)
		}
	} else {
		color.Red("The shop is already closed, so %s leaves!", client)
	}
}

// ---------------------------------------------------------------------
