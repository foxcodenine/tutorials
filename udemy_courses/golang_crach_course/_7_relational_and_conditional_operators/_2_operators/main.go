package main

import (
	"fmt"
	"math"
)

func main() {
	answer := 7 + 3*4
	fmt.Println("Answer:", answer)

	// -- multiplication
	// -- area πr2
	var radius = 12.0
	area := math.Pi * radius * radius
	fmt.Println("Area is", area)

	// -- integer division
	half := 1 / 2
	fmt.Println("Half with integer division", half)

	// -- integer division
	halfFloat := 1.0 / 2.0
	fmt.Println("Half float", halfFloat)

	// -- squaring (raising to the power)
	badThreeSquared := 3 ^ 2
	fmt.Println("badThreeSquared:", badThreeSquared)

	base := 2.0
	exponent := 3.0
	goodThreeSquared := math.Pow(base, exponent)
	fmt.Println("goodThreeSquared:", goodThreeSquared)

	// -- modulus
	remainder := 50 % 3
	fmt.Println("remainder:", remainder)

	// -- unary operators
	x := 3
	x++
	fmt.Println("x is now", x)

	// -- Go supports the += , -= ,  *= and /=

	y := 5
	y += 3                     // Equivalent to x = x + 3
	fmt.Println("y is now", y) // Prints 8

}
