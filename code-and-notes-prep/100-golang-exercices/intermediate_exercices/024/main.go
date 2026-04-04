package main

import "fmt"

func main() {

	x := 5
	p := &x

	fmt.Println(x)
	fmt.Println(p)
	fmt.Println(*p)
}
