package main

import "fmt"

func main() {

	// - 1. Basic for loop:

	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	// - 2. For loop as a while loop:
	num := 0
	for num < 5 {
		fmt.Println(num)
		num++
	}

	// - 3. Infinite loop :
	x := 10
	for {
		x--
		if x < 0 {
			break
		}
		fmt.Println(x)
	}

	// - 4. Infinite loop as do while loop :
	y := 10
	for {
		fmt.Println(x)
		y--
		if x < 0 {
			break
		}
	}

	// - 5. Range loop (Slice & Map):

	fruits := []string{"apple", "banana", "cherry"}
	for index, fruit := range fruits {
		fmt.Printf("Index: %d, Fruit: %s\n", index, fruit)
	}

	myMap := make(map[string]int)
	myMap["apple"] = 10
	myMap["banana"] = 5
	myMap["cherry"] = 15

	for key, value := range myMap {
		fmt.Printf("%s: %d\n", key, value)
	}
}
