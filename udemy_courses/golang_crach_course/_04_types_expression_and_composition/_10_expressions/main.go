package main

import "fmt"

func main() {
	age := 10           // age is an integer literal
	name := "Jack"      // name is an integer literal
	rightHanded := true // rightHanded is a boolean literal

	// in the next line, name, age, and righthanded are expressions, evaulated at run time
	fmt.Printf("%s is %d years old. Right handed: %t", name, age, rightHanded)
	fmt.Println()

	// age + 10 is an expression, because it can be evaluated to a single value
	ageInTenYears := age + 10

	fmt.Printf("In ten years, %s will be %d years old", name, ageInTenYears)
	fmt.Println()

	// age >= 13 is an expression, because it can be evaluated to a signle value
	isATeenager := age >= 13 && age < 20
	fmt.Println(name, "is a teenager:", isATeenager)

}
