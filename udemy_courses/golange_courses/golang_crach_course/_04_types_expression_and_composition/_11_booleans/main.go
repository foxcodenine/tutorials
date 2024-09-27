package main

import "fmt"

func main() {
	apples := 18
	oranges := 9

	// boolean expressions are often called conditions
	// we use == to test equality, since = is used to assign value to an existing variable
	// != means "not equal to"
	fmt.Println(apples == oranges)
	fmt.Println(apples != oranges)

	// values being compared must match type, so this does not work (int and string):
	// if apples == "10" {
	// 	// do something
	// }

	// four additional condition tests
	// >
	// <
	// >=
	// <=
	fmt.Printf("%d > %d: %t", apples, oranges, apples > oranges)
	fmt.Println()
	fmt.Printf("%d < %d: %t", apples, oranges, apples < oranges)
	fmt.Println()
	fmt.Printf("%d >= %d: %t", apples, oranges, apples >= oranges)
	fmt.Println()
	fmt.Printf("%d <= %d: %t", apples, oranges, apples <= oranges)
	fmt.Println()
}
