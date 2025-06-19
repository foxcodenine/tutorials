package main

import (
	"fmt"
	"strings"
	"sync"
	"time"
)

// ---------------------------------------------------------------------

// The Dining Philosophers problem is well known in computer science circles.
// Five philosophers, numbered from 0 through 4, live in a house where the
// table is laid for them; each philosopher has their own place at the table.
// Their only difficulty – besides those of philosophy – is that the dish
// served is a very difficult kind of spaghetti which has to be eaten with
// two forks. There are two forks next to each plate, so that presents no
// difficulty. As a consequence, however, this means that no two neighbours
// may be eating simultaneously, since there are five philosophers and five forks.
//
// This is a simple implementation of Dijkstra's solution to the "Dining
// Philosophers" dilemma.

// ---------------------------------------------------------------------

// Philosopher is a struct which stores information about a philosopher,
// including their name and the indices of their left and right forks.
type Philosopher struct {
	name      string
	rightFork int
	leftFork  int
}

// philosophers is a slice containing all philosopher structs, each with their
// name and the indices of their left and right forks.
var philosophers = []Philosopher{
	{name: "Plato", leftFork: 4, rightFork: 0},
	{name: "Socrates", leftFork: 0, rightFork: 1},
	{name: "Aristotle", leftFork: 1, rightFork: 2},
	{name: "Pascal", leftFork: 2, rightFork: 3},
	{name: "Locke", leftFork: 3, rightFork: 4},
}

// hunger defines how many times each philosopher will eat during the simulation.
var hunger = 3                       // Number of times a philosopher eats
var eatTime = 1 * time.Microsecond   // Duration spent eating each time
var thinkTime = 3 * time.Millisecond // Duration spent thinking between meals

var orderMutex sync.Mutex
var orderFinished []string

func main() {
	// Print out a welcome message
	fmt.Println("Dining Philosophers Problem")
	fmt.Println("---------------------------")
	fmt.Println("The table is empty.")

	// Begin the dining simulation
	dine()

	// Print out a finished message
	fmt.Println("The table is empty.")

	fmt.Println("Order finished:", strings.Join(orderFinished, ", "))
}

func dine() {

	// WaitGroup to synchronize when all philosophers have taken their seats
	wgSeated := &sync.WaitGroup{}
	wgSeated.Add(len(philosophers))

	// WaitGroup to synchronize when all philosophers are done eating
	wgDone := &sync.WaitGroup{}
	wgDone.Add(len(philosophers))

	// forks is a map where each fork (keyed by its index) has its own mutex to avoid simultaneous use
	var forks = make(map[int]*sync.Mutex)

	// Initialize each fork with a new mutex
	for i := 0; i < len(philosophers); i++ {
		forks[i] = &sync.Mutex{}
	}

	// Start a goroutine for each philosopher, passing references to forks and WaitGroups
	for i := 0; i < len(philosophers); i++ {
		go diningProblem(philosophers[i], forks, wgSeated, wgDone)
	}

	wgDone.Wait()

}

func diningProblem(philosopher Philosopher, forks map[int]*sync.Mutex, wgSeated *sync.WaitGroup, wgDone *sync.WaitGroup) {
	defer wgDone.Done()

	fmt.Printf("%s is seated at the table. \n", philosopher.name)
	wgSeated.Done()

	wgSeated.Wait()

	for i := hunger; i > 0; i-- {

		// Explaind in 'dining_philosophers_deadlock_prevention.md'
		if philosopher.leftFork > philosopher.rightFork {
			forks[philosopher.rightFork].Lock()
			fmt.Printf("\t%s takes the right fork.\n", philosopher.name)
			forks[philosopher.leftFork].Lock()
			fmt.Printf("\t%s takes the left fork.\n", philosopher.name)
		} else {
			forks[philosopher.leftFork].Lock()
			fmt.Printf("\t%s takes the left fork.\n", philosopher.name)
			forks[philosopher.rightFork].Lock()
			fmt.Printf("\t%s takes the right fork.\n", philosopher.name)
		}

		fmt.Printf("\t%s has both fork and is eating.\n", philosopher.name)
		time.Sleep(eatTime)

		fmt.Printf("\t%s is thinking.\n", philosopher.name)
		time.Sleep(thinkTime)

		forks[philosopher.leftFork].Unlock()
		forks[philosopher.rightFork].Unlock()

		fmt.Printf("\t%s put down the forks.\n", philosopher.name)

	}

	fmt.Println(philosopher.name, "is satisified and left the table.")

	orderMutex.Lock()
	orderFinished = append(orderFinished, philosopher.name)
	orderMutex.Unlock()

}
