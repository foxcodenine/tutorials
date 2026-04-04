package main

import "fmt"

func main() {
	var x int32 = 5
	var y *int32 = &x

	fmt.Printf("Value of x: %d\n", x)
	fmt.Printf("Memory address of x: %p\n", y)
	fmt.Printf("Value stored at pointer y: %d\n", *y)
}
