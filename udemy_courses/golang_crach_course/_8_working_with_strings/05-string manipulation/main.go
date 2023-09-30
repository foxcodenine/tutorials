package main

import (
	"fmt"
	"strings"
)

func main() {
	// 						1         2         3         4
	// 			  0123456789012345678901234567890123456789012345
	newString := "Go is a great programming language. Go for it!"

	if strings.Contains(newString, "Go") {
		newString = strings.ReplaceAll(newString, "Go", "Golang")
		// newString = strings.Replace(newString, "Go", "Golang", 1)
	}

	fmt.Println(newString)

	// string comparison
	if "Alpha" > "Absolute" {
		fmt.Println("A is greater than B")
	} else {
		fmt.Println("A is not greater than B")
	}
	
	badEmail := " me@here.com  "
	badEmail = strings.TrimSpace(badEmail)
	fmt.Printf("=%s=", badEmail)
	fmt.Println()
}