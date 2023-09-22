package main

import "fmt"

// -- reference types (pointers, slices, map, functions, channels)

// -- interface type

func main() {
	x := 10
	myFirstPointer := &x

	fmt.Println(x)
	fmt.Println(myFirstPointer)

	*myFirstPointer = 15

	fmt.Println(x)

	// changeValueOfPointer(myFirstPointer)
	changeValueOfPointer(&x)

	fmt.Println(x)
}

func changeValueOfPointer(num *int) {
	*num = 255
}
