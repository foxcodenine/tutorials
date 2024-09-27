package main

import "fmt"

func main() {

	// precedence
	// multiplication and division

	a := 12.0 * 3.0 / 4.0
	b := (12.0 * 3.0) / 4.0
	c := 12.0 * (3.0 / 4.0)

	fmt.Println("a", a, "b", b, "c", c)

	// inteder division

	unclear := 12 * (3 / 4)
	fmt.Println("unclear", unclear)

	// parenthesis
	f := 12.0 / 3.0 / 4.0
	g := 12.0 / (3.0 / 4.0)

	fmt.Println("f", f, "g", g)

	// modulus

	aa := 12
	bb := 3

	if aa%bb == 0 {
		fmt.Print(aa, " divide exactly into ", bb)
	} else {
		fmt.Print(aa, " does not divide exactly into ", bb)
	}

	for m := 0; m <= 12; m++ {
		fmt.Println("The month after", m, "is", m%12+1)
	}

}
