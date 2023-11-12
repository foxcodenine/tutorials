package main

import (
	"github.com/foxcodenine/tutorials/udemy_courses/building_modern_web_applications_with_go/helpers"
	"log"
)

func main() {
	var myVar helpers.SomeType
	myVar.TypeName = "Some name"

	log.Println(myVar.TypeName)
}
