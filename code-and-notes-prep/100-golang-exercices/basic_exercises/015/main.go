package main

import "fmt"

func main() {
	var number int32

	fmt.Println("Enter a number:")
	fmt.Scanln(&number)

	isEven(number)
}

func isEven(n int32) (result bool) {

	result = (n % 2) == 0

	if result {
		fmt.Println("even")
	} else {
		fmt.Println("odd")
	}

	return
}
