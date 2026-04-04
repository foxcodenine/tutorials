package main

import "fmt"

// Complete the function signature
func fibonacci(x int) int {
	if x <= 1 { // base case
		return x
	}
	return fibonacci(x-1) + fibonacci(x-2) // recursive function
}

func main() {
	// Your code goes here

	fmt.Println(fibonacci(1))

}
