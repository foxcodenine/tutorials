package main

import (
	"encoding/json"
	"fmt"
	"log"
)

// -- Person defines a struct to represent a person with JSON tags.
type Person struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	HairColor string `json:"hair_color"`
	HasDog    bool   `json:"has_dog"`
}

func main() {
	// -- Sample JSON data as a string.
	myJson := `
[
    {
        "first_name": "Clark",
        "last_name": "Kent",
        "hair_color": "black",
        "has_dog": true
    },
    {
        "first_name": "Bruce",
        "last_name": "Wayne",
        "hair_color": "black",
        "has_dog": false
    }
]`

	// -- Unmarshal JSON into a slice of Person objects.
	var unmarshalled []Person
	err := json.Unmarshal([]byte(myJson), &unmarshalled)
	if err != nil {
		log.Println("Error unmarshalling json", err)
	}

	log.Printf("Unmarshalled JSON: %v", unmarshalled)

	// -- Create and marshal JSON from a slice of Person objects.
	var mySlice []Person

	var m1 Person
	m1.FirstName = "Wally"
	m1.LastName = "West"
	m1.HairColor = "red"
	m1.HasDog = false

	var m2 Person
	m2.FirstName = "Diana"
	m2.LastName = "Prince"
	m2.HairColor = "black"
	m2.HasDog = false

	mySlice = append(mySlice, m1)
	mySlice = append(mySlice, m2)

	// -- Marshal the slice of Person objects into JSON with indentation.
	newJson, err := json.MarshalIndent(mySlice, "", "     ")
	if err != nil {
		log.Println("Error marshalling", err)
	}

	fmt.Println(string(newJson))
}
