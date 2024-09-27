package main

import (
	"fmt"
	"time"
)

func main() {
	// Initialize variables to track seconds and minutes.
	second := 31
	minute := 1

	// Create a ticker that ticks every 1 second.
	ticker := time.NewTicker(1 * time.Second)

	// Ensure that the ticker is stopped when the program exits.
	defer ticker.Stop()

	// Infinite loop to handle ticker ticks.
	for {
		select {
		// Wait for a tick from the ticker channel.
		case <-ticker.C:
			// Increment the second count.
			second++

			// Check if we need to increment the minute count and reset seconds.
			if (minute < 59) && ((second + 1) > 59) {
				minute++
				second = 0
			}

			// Print the current minute and second counts.
			fmt.Println("minute:", minute, "second:", second)
		}
	}
}
