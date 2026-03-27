package main

import "fmt"

func main() {

	var string_array = [5]string{"chris", "nikki"}

	fmt.Println(string_array)

	for i, v := range string_array {

		fmt.Printf("index %d, value %s\n", i, v)
	}
}
