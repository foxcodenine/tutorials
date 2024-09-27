package main

import "fmt"

func main() {

	anInt := 23
	anotherInt := 42
	fmt.Println("Result:", Add(anInt, anotherInt))
}
func Add(a, b int) int {
	return a + b
}
