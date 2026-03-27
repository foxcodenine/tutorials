package main

import "fmt"

func main() {

	var arr = [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

	for i := 0; i < len(arr); i++ {
		fmt.Println(arr[i] + 2)
	}

	fmt.Printf("%v", arr)
}
