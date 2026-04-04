package main

import "fmt"

func main() {
	var slice = []int32{0, 1, 2, 3, 4}
	new_slice := slice[1:4]
	fmt.Printf("substring:%v, type: %T\n", new_slice, new_slice)
}
