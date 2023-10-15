package main

import "fmt"

func main() {

	// -- Declare a variable and its pointer

	var x int = 42
	var pointerToX *int = &x

	// -- Assign the address of x to the pointer -----------------------

	pointerToX = &x

	// -- Dereference the pointer to get the value it points to

	fmt.Println("Value of x:", x)
	fmt.Println("Address of x:", &x)
	fmt.Println("Value of pointerToX:", pointerToX)
	fmt.Println("Value that pointerToX points to:", *pointerToX)

	fmt.Println()

	// -- Change the value that the pointer points to ------------------

	*pointerToX = 12

	// -- Dereference the pointer to get the value it points to

	fmt.Println("Value of x:", x)
	fmt.Println("Address of x:", &x)
	fmt.Println("Value of pointerToX:", pointerToX)
	fmt.Println("Value that pointerToX points to:", *pointerToX)

	fmt.Println()

	// -- Change the value of x directly -------------------------------

	x = 36

	// -- Dereference the pointer to get the value it points to

	fmt.Println("Value of x:", x)
	fmt.Println("Address of x:", &x)
	fmt.Println("Value of pointerToX:", pointerToX)
	fmt.Println("Value that pointerToX points to:", *pointerToX)
}
