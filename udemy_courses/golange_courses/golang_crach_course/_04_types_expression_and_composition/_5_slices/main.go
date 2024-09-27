package main

import (
	"fmt"
	"github.com/kim89098/slice"
	"sort"
)

// -- reference types (pointers, slices, map, functions, channels)

// -- interface type

func main() {

	var animals []string
	animals = append(animals, "dog")
	animals = append(animals, "cat")
	animals = append(animals, "fish")
	animals = append(animals, "horse")
	animals = append(animals, "bird")
	animals = append(animals, "fly")
	animals = append(animals, "bee")

	fmt.Println("\n1. -------------------")

	fmt.Println(animals)

	for key, value := range animals {
		fmt.Println(key, value)
	}

	fmt.Println("\n2. -------------------")

	fmt.Println(animals[0])
	fmt.Println(animals[1:3])
	fmt.Println(len(animals))

	fmt.Println("\n3. -------------------")

	fmt.Println(sort.StringsAreSorted(animals))

	sort.Strings(animals)

	fmt.Println(sort.StringsAreSorted(animals))

	fmt.Println("\n4. -------------------")

	fmt.Println(animals)
	// animals = DeleteFromSlice(animals, 3)
	animals = RemoveFromSlice(animals, 3)
	fmt.Println(animals)

	fmt.Println("\n5. -------------------")
	// -- using a 3rd part package

	fmt.Println(slice.Pop(animals))

}

func DeleteFromSlice(slice []string, index int) []string {

	// - copy the last index value to index 'index'
	slice[index] = slice[len(slice)-1]

	// - remove last element
	return slice[:len(slice)-1]

}

func RemoveFromSlice(slice []string, index int) []string {
	return append(slice[:index], slice[index+1:]...)
}
