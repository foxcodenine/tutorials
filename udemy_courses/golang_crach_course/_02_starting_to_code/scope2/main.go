package main

import (
	"mayapp/packageone"
)

var myVar string = "Hello "

func main() {
	var blockVar string = "World "

	packageone.PrintMe(myVar, blockVar)
}
