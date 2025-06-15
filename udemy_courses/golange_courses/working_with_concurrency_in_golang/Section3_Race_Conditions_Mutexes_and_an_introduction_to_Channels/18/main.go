package main

import (
	"fmt"
	"sync"
)

// Income represents a source of income and the amount earned.
type Income struct {
	Source string
	Amount int
}

func main() {
	// Create a mutex to synchronize access to the shared bankBalance variable.
	var mutex sync.Mutex
	// Create a WaitGroup to wait for all goroutines to finish.
	var wg sync.WaitGroup

	// Variable to hold the bank account balance.
	var bankBalance int

	// Print the starting value of the bank balance.
	fmt.Printf("Initial account balance: %d\n", bankBalance)

	// Define all sources of weekly income.
	incomes := []Income{
		{Source: "Main job", Amount: 500},
		{Source: "Gifts", Amount: 10},
		{Source: "Part time job", Amount: 50},
		{Source: "Investments", Amount: 100},
	}

	// Add one to the WaitGroup for each income source (each will run as a goroutine).
	wg.Add(len(incomes))

	for _, income := range incomes {

		// Start a new goroutine for each income source.
		go func(income Income, m *sync.Mutex) {
			defer wg.Done()
			for week := 1; week <= 52; week++ {
				// Lock the mutex before updating the shared bankBalance.
				m.Lock()
				bankBalance += income.Amount
				m.Unlock()

				// Print earnings for this income source and week.
				fmt.Printf("On week %d, you earned $%d.00 from %s\n", week, income.Amount, income.Source)
			}
		}(income, &mutex)
	}
	// Wait for all goroutines to finish.
	wg.Wait()

	// Print the final bank balance after 52 weeks.
	fmt.Printf("Final Balance: %d.00\n", bankBalance)
}
