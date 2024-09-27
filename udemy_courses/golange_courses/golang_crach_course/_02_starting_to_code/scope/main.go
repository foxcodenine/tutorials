package main

import (
	"fmt"
	"mayapp/packageone"
)

var one = "One"

func main() {
	var somethingElse = "this is a block level variable"
	fmt.Println(somethingElse)
	myFunc()

	newString := packageone.PublicVar

	fmt.Println(newString)

	packageone.CanBeExported()

}

func myFunc() {
	fmt.Println(one)
}
