package main

import "fmt"

func main() {

	var number int
	fmt.Scanln(&number)

	checkNumber(number, 30, 50)
}

func checkNumber(num, min, max int) {

	if num < min {
		fmt.Println("too cold")
	} else if num > max {
		fmt.Println("too hot")
	} else {
		fmt.Println("perfect")
	}
}
