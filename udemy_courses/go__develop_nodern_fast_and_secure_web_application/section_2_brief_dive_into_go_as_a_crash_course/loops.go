package main

import "fmt"

func createLoop() {
	for i := 1; i <= 10; i++ {
		fmt.Printf("%d ", i)
	}

	fmt.Println()

	aSlice := []string{"Fry", "Leela", "Bender", "Amy", "Hubert", "Zoidberg", "Hermes", "Scruffy", "Nibbler"}
	fmt.Println(aSlice)

	for i, val := range aSlice {
		fmt.Printf("%d %s\n", i, val)
	}

	aString := "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
	fmt.Println(aString)

	for _, val := range aString {
		fmt.Printf("%q ", val)
	}

	fmt.Println()

	aMap := map[string]string{"dog": "Scooby Doo", "cat": "Garfield", "mouse": "Jerry", "platybus": "Perry", "bird": "Tweety", "rabbit": "Bugs", "elephant": "Dumbo"}
	fmt.Println(aMap)

	for k, val := range aMap {
		fmt.Printf("%s: %s\n", k, val)
	}

}
