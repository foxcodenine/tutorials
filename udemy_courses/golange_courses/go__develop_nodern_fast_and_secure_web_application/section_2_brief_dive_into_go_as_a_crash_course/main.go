package main

import (
	"fmt"

	"foxcode.io/helpers"
	importandexportdatainjson "foxcode.io/import_and_export_data_in_json"
)

var x = 23

func main() {

	// -- lesson 9 n 10 ------------------------------------
	fmt.Println("\n-- lesson 9-10 ---------------------\n ")

	fmt.Println("Hallo, Welt!")
	fmt.Println(x)
	fmt.Printf("x is of Type %T\n", x)
	y := 42.0
	fmt.Println(y)
	fmt.Printf("y is of Type %T\n", y)
	z := "Doh"
	fmt.Println(z)
	fmt.Printf("z is of Type %T\n", z)

	done, trueOrFalse := outputThat(x, y, z)

	// -- lesson 11 -----------------------------------------
	fmt.Println("\n-- lesson 11 ------------------------\n ")

	fmt.Println(done, trueOrFalse)

	// -- lesson 12 -----------------------------------------
	fmt.Println("\n-- lesson 12 ------------------------\n ")

	aColor := "red"
	fmt.Printf("Roger is wearing %s.\n", aColor)
	changeColorToBlue(&aColor)
	fmt.Printf("Roger is wearing %s.\n", aColor)

	// -- lesson 13 -----------------------------------------
	fmt.Println("\n-- lesson 13 ------------------------\n ")

	tellMeWhoYouAre("Batman")

	francine := FamilyMember{
		FamilyName: "Smith",
		FirstName:  "Francine",
		Species:    "Human",
	}

	fmt.Println(francine)
	fmt.Println(francine.FirstName)

	roger := FamilyMember{
		FamilyName: "Smith",
		FirstName:  "Roger",
		Age:        1600,
		Species:    "Alian",
	}

	fmt.Println("Roger is", roger.Age, "earth year old.")

	// -- lesson 14 -----------------------------------------
	fmt.Println("\n-- lesson 14 ------------------------\n ")

	fmt.Println("My name is", roger.sayYourName())

	// -- lesson 15 -----------------------------------------
	fmt.Println("\n-- lesson 15 ------------------------\n ")

	createMaps()
	createArray()
	createSlice()

	// -- lesson 16 -----------------------------------------
	fmt.Println("\n-- lesson 16 ------------------------\n ")

	createConditionals()

	// -- lesson 17 -----------------------------------------
	fmt.Println("\n-- lesson 17 ------------------------\n ")

	createLoop()

	// -- lesson 18 -----------------------------------------
	fmt.Println("\n-- lesson 18 ------------------------\n ")

	createInterface()

	// -- lesson 19 -----------------------------------------
	fmt.Println("\n-- lesson 19 ------------------------\n ")

	var myVar helpers.SomeType

	myVar.Name = "Stan Smith"

	fmt.Println(myVar)

	// -- lesson 20 -----------------------------------------
	fmt.Println("\n-- lesson 20 ------------------------\n ")

	createChannels()

	// -- lesson 21 -----------------------------------------
	fmt.Println("\n-- lesson 21 ------------------------\n ")
	importandexportdatainjson.RunExport()
	importandexportdatainjson.RunImport()
}
