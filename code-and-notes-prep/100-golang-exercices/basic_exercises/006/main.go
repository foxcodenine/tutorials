package main

import "fmt"

func main() {
	var my_arr = [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	fmt.Println(my_arr)

	var init_arr = [10]int{1: 9, 2: 8}
	fmt.Println(init_arr)
}
