package main

import (
	"errors"
	"log"
)

func main() {
	// -- Perform division and handle errors
	result, err := divide(15.0, 0.0)

	if err != nil {
		log.Println(err)
	}

	log.Println("result of division is", result)
}

// -- divide performs division and returns the result or an error
func divide(x, y float32) (float32, error) {
	var result float32

	// Check for division by zero
	if y == 0 {
		return result, errors.New("cannot divide by 0")
	}

	result = x / y
	return result, nil
}
