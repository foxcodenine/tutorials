package main

import "fmt"

func main() {

	dog_name := "Luke"
	fmt.Printf("my string variable contains %v \n", dog_name)

	fmt.Printf("my string variable is of type %T\n", dog_name)

	var name string
	var age int64
	var legal bool
	var weight float32

	name = "Anna"
	age = 29
	legal = false
	weight = 70.12

	fmt.Printf("My name is %s, I am _%d years old and it's %t that I can drive a car, my pet weights %f kilograms", name, age, legal, weight)

}
