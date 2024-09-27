package main

import (
	"fmt"
	"strings"
)

func main() {
	myString := "This is a clear EXAMPLE of why we search in one case only."

	searchString := strings.ToLower(myString)

	if strings.Contains(searchString, "this") {
		fmt.Println("Found it!")
	} else {
		fmt.Println("Did not find it!")
	}

	// other case functions
	fmt.Println()
	fmt.Println(strings.ToLower(myString))
	fmt.Println(strings.ToUpper(myString))
	fmt.Println(strings.Title(myString))
}
