package main

import (
	"testing"
	"time"
)

// Test_dine runs the dine function 10 times with zero delays and checks if exactly 5 philosophers finish each time.
func Test_dine(t *testing.T) {
	// Set the eatTime, sleepTime, and thinkTime to 0 for fast execution.
	eatTime = 0 * time.Second
	sleepTime = 0 * time.Second
	thinkTime = 0 * time.Second

	// Run the dine function 10 times to test for correctness.
	for i := 10; i > 0; i-- {
		// Reset the orderFinished slice before each iteration.
		orderFinished = []string{}

		// Call the dine function to simulate the dining philosophers.
		dine()

		// Check if the length of the 'orderFinished' slice is 5 (since there are 5 philosophers).
		if len(orderFinished) != 5 {
			t.Errorf("incorrect length of slice; expected 5 but got %d", len(orderFinished))
		}
	}
}

// Test_dineWithVarryngDelays checks the dine function with different delays, ensuring 5 philosophers finish each time.
func Test_dineWithVarryngDelays(t *testing.T) {

	// Define a set of test cases with different delay durations.
	var theTests = []struct {
		name  string        // Test case name, used for reporting errors.
		delay time.Duration // Delay to be used for eatTime, sleepTime, and thinkTime in this test case.
	}{
		{name: "zero delay", delay: time.Second * 0},                  // No delay
		{name: "quarter second delay", delay: time.Microsecond * 250}, // Quarter-second delay
		{name: "half second delay", delay: time.Microsecond * 500},    // Half-second delay
	}

	// Iterate over each test case and run the dine function with the specified delays.
	for _, e := range theTests {
		// Reset the orderFinished slice before each test.
		orderFinished = []string{}

		// Set the eatTime, sleepTime, and thinkTime to the delay defined in the current test case.
		eatTime = e.delay
		sleepTime = e.delay
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
