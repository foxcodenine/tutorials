package main

import (
	"fmt"
	"reflect"
)

type Hotel struct {
	numRoom    int
	streetName string
	hasPool    bool
}

func main() {

	var hotel Hotel

	hotel.numRoom = 10
	hotel.streetName = "Orchard Road"
	hotel.hasPool = false

	typ := reflect.TypeOf(hotel)
	val := reflect.ValueOf(hotel)

	for i := 0; i < typ.NumField(); i++ {

		fmt.Printf("%s : %v\n", typ.Field(i).Name, val.Field(i))
	}
}
