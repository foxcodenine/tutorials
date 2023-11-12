package main

import "log"

func main() {

	// -- The if statement ---------------------------------------------

	var isTrue bool

	isTrue = false

	if isTrue == true {
		log.Println("isTrue is", isTrue)
	} else {
		log.Println("isTrue is", isTrue)
	}

	// ----------------------------------

	cat := "cat2"

	if cat == "cat" {
		log.Println("Cat is cat")
	} else {
		log.Println("Cat is not cat")
	}

	// ----------------------------------

	myNum := 100
	isTrue = false

	if myNum > 99 && !isTrue {
		log.Println("myNum is greater than 99 and isTrue is set to true")
	} else if myNum < 100 && isTrue {
		// This block is executed if myNum is less than 100 and isTrue is true.
		// You can add code here.
	} else if myNum == 101 || isTrue {
		// This block is executed if myNum is equal to 101 or isTrue is true.
		// You can add code here.
	} else if myNum > 1000 && isTrue {
		// This block is executed if myNum is greater than 1000 and isTrue is true.
		// You can add code here.
	}

	// -- The switch statement -----------------------------------------

	myVar := "cat"

	switch myVar {
	case "cat":
		log.Println("myVar is set to cat")
	case "dog":
		log.Println("myVar is set to dog")
	case "horse":
		log.Println("myVar is set to horse")
	case "fish":
		log.Println("myVar is set to fish")
	default:
		log.Println("myVar is something else")
	}
}
