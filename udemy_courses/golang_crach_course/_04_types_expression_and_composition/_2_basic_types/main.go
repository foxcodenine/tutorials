package main

import (
	"fmt"
	"log"
)

// -- basic tyes (number, strings, booleans)

var myInt int
var myUnit uint

/*
var myInt16 int16
var myInt32 int32
var myInt64 int64
*/

var myFloat32 float32
var myFloat64 float64

// -- aggregate types (array, struct)
var myArrayStings [3]string

var myArrayInt = [3]int{1, 2, 3}

type Car struct {
	NumberOfTires int
	Luxury        bool
	BucketSeats   bool
	Make          string
	Model         string
	Year          int
}



func main() {
	myInt = 10
	myUnit = 20

	myFloat32 = 10.1
	myFloat64 = 100.1

	log.Println(myInt, myUnit, myFloat32, myFloat64)

	myString := "Trevor"
	log.Println(myString)

	// -----------------------------

	var myBool = true
	log.Println(myBool)

	// -----------------------------

	myArrayStings[0] = "cat"
	myArrayStings[1] = "dog"
	myArrayStings[0] = "fish"

	// -----------------------------

	fmt.Printf("First element in array is %s\n", myArrayStings[0])
	fmt.Println(myArrayInt)

	// -----------------------------

	var myCar Car

	myCar.NumberOfTires = 4
	myCar.Luxury = false

	yourCar := Car{
		NumberOfTires: 4,
		Luxury:        true,
		BucketSeats:   true,
		Make:          "Toyota",
		Model:         "vitz",
		Year:          2001,
	}

	fmt.Println(yourCar)

}
