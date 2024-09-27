package main

import (
	"fmt"
	"strings"
)

func main() {
	myString := "This is a clear EXAMPLE of why we search in one case only."

	if strings.Contains(strings.ToLower(myString), "this") {
		fmt.Println("Found it!")
	} else {
		fmt.Println("Did not find it!")
	}

	// other case functions
	fmt.Println(strings.ToLower(myString))
	fmt.Println(strings.ToUpper(myString))
	fmt.Println(strings.Title(strings.ToLower(myString)))
}


