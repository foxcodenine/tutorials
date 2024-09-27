package main

import (
	"fmt"
	"sync"
)

// printSomthing prints a string and signals completion by calling wg.Done()
func printSomthing(s string, wg *sync.WaitGroup) {
	defer wg.Done() // Mark this goroutine as done when the function completes
	fmt.Println(s)  // Print the passed string
}

func main() {
	var wg sync.WaitGroup // WaitGroup to synchronize goroutines

	// List of words including Greek letters with their names
	words := []string{
		"A Alpha",
		"B Beta",
		"Γ Gamma",
		"Δ Delta",
		"E Epsilon",
		"Z Zeta",
		"H Eta",
		"Θ Theta",
		"I Iota",
		"K Kappa",
		"Λ Lambda",
		"M Mu",
		"N Nu",
		"Ξ Xi",
		"O Omicron",
		"Π Pi",
		"P Rho",
		"Σ Sigma",
		"T Tau",
		"Y Upsilon",
		"Φ Phi",
		"X Chi",
		"Ψ Psi",
		"Ω Omega",
	}

	wg.Add(len(words)) // Add the number of goroutines for each word in the slice

	// Loop through the words and start a goroutine for each
	for i, x := range words {
		// Using a goroutine to print each word concurrently
		go printSomthing(fmt.Sprintf("%d: %s", i, x), &wg)
	}

	wg.Wait() // Wait for all goroutines in the previous loop to finish

	// Add one more task to the WaitGroup for the next print statement
	wg.Add(1)

	// Printing another message after the list of words
	printSomthing("This is the 2nd thing to be printed!", &wg)

	// Wait for the final printSomthing call to finish
	wg.Wait()

}
