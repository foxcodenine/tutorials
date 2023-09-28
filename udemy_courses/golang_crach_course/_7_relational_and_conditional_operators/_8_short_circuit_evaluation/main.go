package main

import (
	"errors"
	"fmt"
)

func main() {

	a := 12
	b := 6

	if b != 0 && divideTwoNumbers(a, b) == 2 {
		fmt.Println("Found 2")
	}

	z, err := divideTwoNumbers2(4, 2)

	if err != nil {
		fmt.Println(err)
	} else {
		if z == 2 {
			fmt.Println("Found 2")
		}
	}

}

func divideTwoNumbers(a, b int) int {
	return a / b
}

func divideTwoNumbers2(x, y int) (int, error) {
	if y == 0 {
		return 0, errors.New("cannot devide by 0")
	}
	return x / y, nil
}
