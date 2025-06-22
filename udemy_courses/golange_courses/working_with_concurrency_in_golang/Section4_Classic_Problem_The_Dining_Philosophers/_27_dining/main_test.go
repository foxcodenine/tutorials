package main

import (
	"testing"
	"time"
)

func Test_dine(t *testing.T) {
	eatTime = 1 * time.Millisecond
	thinkTime = 1 * time.Millisecond

	for i := 0; i < 10; i++ {
		orderFinished = []string{}

		dine()

		if len(orderFinished) != 5 {
			t.Errorf("incorrect length of slice; expected 5 but got %d", len(orderFinished))
		}
	}
}

func Test_dineWithVaryingDelay(t *testing.T) {
	var theTests = []struct {
		name  string
		delay time.Duration
	}{
		{name: "zero delay", delay: time.Second * 0},                  // No delay
		{name: "quarter second delay", delay: time.Microsecond * 250}, // Quarter-second delay
		{name: "half second delay", delay: time.Microsecond * 500},    // Half-second delay
	}

	// Iterate over each test case and run the dine function with the specified delays.
	for _, e := range theTests {
		// Reset the orderFinished slice before each test.
		orderFinished = []string{}

		// Set the eatTime, and thinkTime to the delay defined in the current test case.
		eatTime = e.delay
		thinkTime = e.delay

		// Call the dine function to simulate the dining philosophers with the current delay.
		dine()

		// Check if the length of the 'orderFinished' slice is 5 (since there are 5 philosophers).
		// Report an error if the length is not as expected.
		if len(orderFinished) != 5 {
			t.Errorf("%s: incorrect length of slice; expected 5 but got %d", e.name, len(orderFinished))
		}
	}
}
