package main

import "fmt"

// -- Animal defines the interface for type Animal
type Animal interface {
	Says() string      // Says should return the sound the animal makes
	NumberOfLegs() int // NumberOfLegs should return the number of legs the animal has
}

// -- Dog defines the Dog type
type Dog struct {
	Name  string
	Breed string
}

// -- Gorilla defines the Gorilla type
type Gorilla struct {
	Name          string
	Color         string
	NumberOfTeeth int
}

// ---------------------------------------------------------------------

// -- PrintInfo prints information about an animal, including the sound it makes and the number of legs it has.
func PrintInfo(a Animal) {
	fmt.Println("This animal says", a.Says(), "and has", a.NumberOfLegs(), "legs")
}

// -- Says returns the sound a Dog makes (part of the Animal interface requirements for Dog)
func (d *Dog) Says() string {
	return "Woof"
}

// -- NumberOfLegs returns the number of legs a Dog has (part of the Animal interface requirements for Dog)
func (d *Dog) NumberOfLegs() int {
	return 4
}

// -- Says returns the sound a Gorilla makes (part of the Animal interface requirements for Gorilla)
func (g *Gorilla) Says() string {
	return "Ugh"
}

// -- NumberOfLegs returns the number of legs a Gorilla has (part of the Animal interface requirements for Gorilla)
func (g *Gorilla) NumberOfLegs() int {
	return 2
}

// ---------------------------------------------------------------------

func main() {
	// -- Create a Dog instance
	dog := Dog{
		Name:  "Samson",
		Breed: "German Shepherd",
	}

	// -- We can pass the dog to PrintInfo(), since Dog implements the Animal interface.
	//    The parameter is passed as a pointer because the functions for the type have pointer receivers.
	PrintInfo(&dog)

	// -- Create a Gorilla instance
	gorilla := Gorilla{
		Name:          "Jock",
		Color:         "grey",
		NumberOfTeeth: 38,
	}

	// -- We can also pass the gorilla to PrintInfo() since Gorilla implements the Animal interface.
	//    The parameter is passed as a pointer because the functions for the type have pointer receivers.
	PrintInfo(&gorilla)
}

// See https://tour.golang.org/methods/4 and https://tour.golang.org/methods/8 for more details
