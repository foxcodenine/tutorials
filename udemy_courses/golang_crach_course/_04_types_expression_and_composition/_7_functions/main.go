package main

import "fmt"

func main() {
	z := addTwoNUmbers(2, 4)
	fmt.Println(z)

	fmt.Println("\n1. ___________________________________")

	myTotal := sumMany(1, 2, 3, 4, 5, 6)
	fmt.Println(myTotal)

	fmt.Println("\n2. ___________________________________")

	dog := Animal{
		Name:  "dog",
		Sound: "woof",
	}
	dog.Says()

	cat := Animal{
		Name:         "cat",
		Sound:        "meow",
		NumberOfLegs: 4,
	}
	cat.Says()
}

// -------------------------------------------------------

func addTwoNUmbers(x, y int) (sum int) {
	sum = x + y
	return
}

// -------------------------------------------------------

func sumMany(nums ...int) int {

	total := 0

	for _, i := range nums {
		total = total + i
	}

	return total
}

// -------------------------------------------------------

type Animal struct {
	Name         string
	Sound        string
	NumberOfLegs int
}

func (a *Animal) Says() {
	fmt.Printf("A %s says %s\n", a.Name, a.Sound)
}

// -------------------------------------------------------
