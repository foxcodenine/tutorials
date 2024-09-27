package main

import "fmt"

func outputThat(a int, b float64, c string) (string, bool) {
	fmt.Printf("Integer = %d, FloatingPoint = %f, String = %s\n", a, b, c)
	return "Okey", true
}
