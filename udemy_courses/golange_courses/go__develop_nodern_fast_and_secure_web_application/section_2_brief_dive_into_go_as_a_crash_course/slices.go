package main

import (
	"fmt"
	"sort"
)

func createSlice() {

	// -- Method 1 -----------------------------------------------------

	var meeseeks []string

	// Appending "cola" to the slice
	meeseeks = append(meeseeks, "cola")

	// Appending "tea" to the slice
	meeseeks = append(meeseeks, "tea")

	// Printing the slice, its length, and its capacity
	fmt.Println(meeseeks, "length:", len(meeseeks), "capacity:", cap(meeseeks))

	// Printing the type of the slice
	fmt.Printf("meeseeks type %T\n", meeseeks)

	// -- Method 2 -----------------------------------------------------

	// Creating an integer slice
	comeInteger := []int{42, 23, 1000, -1}

	// Printing the type of the integer slice
	fmt.Printf("%T\n", comeInteger)

	// -- Method 3 -----------------------------------------------------

	// Creating a float64 slice with make

	// Length: 3
	// This is the initial length of the slice, indicating the number of elements the slice initially contains. In this
	// case, the slice starts with three elements, all initialized to their zero value for float64, which is 0.0.

	// Capacity: 6
	// This is the capacity of the slice, indicating the maximum number of elements the slice can hold without
	// reallocating its underlying array. The capacity is greater than or equal to the length. In this case, the slice
	// has a capacity of six.

	someFloats := make([]float64, 3, 6)
	fmt.Println("someFloats", someFloats, "length:", len(someFloats), "capacity:", cap(someFloats))

	// Modifying values in the float64 slice
	someFloats[2] = 33
	someFloats[0] = 101
	someFloats = append(someFloats, 7)
	someFloats = append(someFloats, 9)

	// Printing the updated float64 slice
	fmt.Println("someFloats", someFloats, "length:", len(someFloats), "capacity:", cap(someFloats))

	// Deleting the 3rd element in the slice
	someFloats = append(someFloats[:2], someFloats[3:]...)
	fmt.Println("someFloats", someFloats, "length:", len(someFloats), "capacity:", cap(someFloats))

	// Sorting the float64 slice
	sort.Float64s(someFloats)
	fmt.Println("someFloats (sorted)", someFloats)

}
