package main

import "fmt"

func operation(x, y int) (int, int) {

	return x + y, x - y
}

func main() {

	a, b := operation(1, 10)

	fmt.Println(a, b)

}
