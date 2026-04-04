package main

import (
	"fmt"
	"math/rand"
	"time"
)

func myRandFunc(min, max int) (i int) {

	r := max - min

	i = rand.Intn(r + 1)

	return
}

func main() {

	rand.Seed(time.Now().UnixNano())

	fmt.Println(myRandFunc(-50, 50))
}
