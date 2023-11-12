package main

import (
	"log"
	"sort"
)

// Creating User data type
type User struct {
	FirstName string
	LastName  string
}

func main() {
	// Creating and working with maps
	myMap := make(map[string]User) // Declare and initialize a map to store User objects

	me := User{
		FirstName: "Trevor",
		LastName:  "Sawler",
	}

	myMap["me"] = me // Add the 'me' User object to the map

	log.Println(myMap["me"].FirstName) // Access and print the first name of 'me' User from the map

	petMap := make(map[string]string) // Declare and initialize a map to store pet names
	petMap["dog"] = "Kean"
	petMap["cat"] = "Tina"

	// -----------------------------------------------------------------

	// Creating and working with slices
	var mySlice []int // Declare an integer slice

	mySlice = append(mySlice, 2) // Append integers to the slice
	mySlice = append(mySlice, 1)
	mySlice = append(mySlice, 3)

	sort.Ints(mySlice) // Sort the integer slice

	log.Println(mySlice) // Print the sorted integer slice

	// Shorthand for creating and working with slices
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10} // Declare and initialize an integer slice
	log.Println(numbers)                            // Print the integer slice

	// Print the first two elements of the slice, starting at the first position
	log.Println(numbers[0:2])

	// Create and print a slice of strings
	names := []string{"one", "seven", "fish", "cat"}
	log.Println(names)
}

/*
Array:
An array in Go is a fixed-size, ordered collection of elements of
the same data type. The size of an array is determined at the time of
declaration and cannot be changed during runtime. Arrays are defined
with a specific length, like [5]int for an array of 5 integers. They
provide fast and direct access to elements but are less flexible than
slices.

Slice:
A slice in Go is a dynamic, flexible, and reference to a portion
of an array. Slices are not fixed in size and can grow or shrink as
needed during runtime. They are defined without a specific length, like
[]int for a slice of integers. Slices allow you to work with
variable-sized data collections efficiently.

Map:
A map in Go is a built-in data structure that represents a
collection of key-value pairs. Maps are also known as dictionaries or
associative arrays in other languages. Each key in a map is unique, and
you can use keys to access corresponding values. Maps are unordered,
meaning there is no guaranteed order of key-value pairs. They are widely
used for data retrieval and storage, often for building data structures
like dictionaries or caches.
*/
