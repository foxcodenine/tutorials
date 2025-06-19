package main

import (
	"fmt"
	"sync"
)

// printSomething prints a string and signals that the goroutine is done
func printSomething(s string, wg *sync.WaitGroup) {
	defer wg.Done() // Ensure wg.Done() is called when this goroutine finishes
	fmt.Println(s)
}

func main() {
	// Define a slice containing the Greek alphabet with numbers
	greekAlphabet := []string{
		"alpha",
		"beta",
		"gamma",
		"delta",
		"epsilon",
		"zeta",
		"eta",
		"theta",
		"iota",
		"kappa",
		"lambda",
		"mu",
		"nu",
		"xi",
		"omicron",
		"pi",
		"rho",
		"sigma",
		"tau",
		"upsilon",
		"phi",
		"chi",
		"psi",
		"omega",
	}

	var wg sync.WaitGroup      // Create a WaitGroup to wait for all goroutines to finish
	wg.Add(len(greekAlphabet)) // Set the counter to the number of goroutines we're starting

	for i, w := range greekAlphabet {
		// Start a goroutine for each element in the slice
		go printSomething(fmt.Sprintf("%d: %s", i+1, w), &wg)
	}

	wg.Wait() // Wait for all goroutines to call Done()
}
