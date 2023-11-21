package main

import "fmt"

var role1 = "Billionaire"
var role2 = "Inventor"

// Function declaration. In Go, the entry point for execution is the main function in the main package.
func tellMeWhoYouAre(role1 string) {
	// Printing the value of the local parameter role1 passed to the function.
	fmt.Println(role1)

	// Printing the value of the global variable role2.
	fmt.Println(role2)

	// The local parameter role1 shadows the global variable role1,
	// but it is never used in this function.
	// Note: role1 in this function refers to the parameter, not the global variable.
	// This is known as shadowing.
	// If you want to access the global variable role1, you can do so using the package-level variable.
}
