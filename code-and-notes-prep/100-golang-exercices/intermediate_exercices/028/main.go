package main

import "fmt"

func sum(x, y int) int {

	return x + y
}

func secondsum(x, y, z int) int {

	return sum(x, y) + z
}

func main() {

	result := secondsum(10, 12, 24)
	fmt.Println(result)

}
