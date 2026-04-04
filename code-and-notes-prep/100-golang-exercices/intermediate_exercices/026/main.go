package main

import "fmt"

func main() {
	var myset = []int32{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

	var slice1 []int32 = make([]int32, 5)

	copy(slice1, myset)

	fmt.Println(slice1)

	slice2 := myset[:5]

	fmt.Println(slice2)

}
