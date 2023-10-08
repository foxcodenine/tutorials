package main

import (
	"fmt"
	"log"
)

func main() {

	// -----------------------------------------------------------------

	type User struct {
		FirstName string
		LastName  string
		Email     string
		Age       int
	}

	var users []User
	users = append(users, User{"John", "Smith", "john@smith.com", 30})
	users = append(users, User{"Mary", "Jones", "mary@jones.com", 20})
	users = append(users, User{"Sally", "Brown", "sally@smith.com", 45})
	users = append(users, User{"Alex", "Anderson", "alex@smith.com", 17})

	for _, l := range users {
		log.Println(l.FirstName, l.LastName, l.Email, l.Age)
	}

	// -----------------------------------------------------------------

	// -- Basic for Loop:
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	// -----------------------------------------------------------------

	// -- for Loop as a While Loop:
	i := 0
	for i < 5 {
		fmt.Println(i)
		i++
	}

	// -----------------------------------------------------------------

	//-- for Loop with Range:
	numbers := []int{1, 2, 3, 4, 5}
	for index, value := range numbers {
		fmt.Printf("Index: %d, Value: %d\n", index, value)
	}

	// -----------------------------------------------------------------
	// -- for Loop with break and continue:
	for i := 0; i < 5; i++ {
		if i == 2 {
			continue // Skip the current iteration and continue with the next
		}
		fmt.Println(i)
		if i == 3 {
			break // Exit the loop prematurely
		}
	}

	// -----------------------------------------------------------------

	// -- Infinite for Loop:
	for {
		// This creates an infinite loop
	}
	// -----------------------------------------------------------------

}
