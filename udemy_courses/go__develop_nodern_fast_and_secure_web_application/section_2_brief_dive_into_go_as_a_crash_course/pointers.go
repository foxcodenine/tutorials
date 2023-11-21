package main

import "fmt"

func changeColorToBlue(c *string) {
	// Dereferencing the pointer (*c) and assigning the value "blue" to the variable it points to.
	*c = "blue"

	fmt.Printf("Roger change to %s.\n", *c)
}
