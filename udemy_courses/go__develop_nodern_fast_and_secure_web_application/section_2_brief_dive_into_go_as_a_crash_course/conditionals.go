package main

import (
	"fmt"
	"log"
	"time"
)

func createConditionals() {

	number := 50

	if number < 0 {
		log.Println(number, "is negative")
	} else if number < 10 {
		log.Println(number, "has 1 digit")
	} else {
		log.Println(number, "has multiple digits")
	}

	// -------------------------------------------

	i := 1
	fmt.Print("Write ", i, " as ")
	switch i {
	case 1:
		fmt.Print("one")
		fallthrough
	case 2:
		fmt.Print("two")
	case 3:
		fmt.Print("three")
	}

	// -------------------------------------------

	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("\nIt's the weekend!")
	default:
		fmt.Println("\nIt's a weekday")
	}

	// -------------------------------------------

	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("It's before noon")
	default:
		fmt.Println("It's after noon")
	}

	// -------------------------------------------

	whatAmI := func(i interface{}) {
		switch t := i.(type) {
		case bool:
			fmt.Println("I'm a bool")
		case int:
			fmt.Println("I'm an int")
		default:
			fmt.Printf("Don't know type %T\n", t)
		}
	}
	whatAmI("meow")

}
