package main

import "fmt"

func main() {
	myMap := map[int]string{
		1: "A",
		2: "B",
		3: "C",
	}

	for i, v := range myMap {
		fmt.Printf("%d %s\n", i, v)
	}
}
