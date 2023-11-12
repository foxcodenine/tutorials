package main

import "log"

func main() {
	var mySting string
	mySting = "Green"

	log.Println("Before:", mySting)

	changeUserPointer(&mySting)

	log.Println("After:", mySting)

	var myPointer = &mySting

	*myPointer = "Blue"

	log.Println("Finally:", mySting)

	log.Println("Pointer address:", myPointer)
}

func changeUserPointer(s *string) {
	newValue := "Red"
	*s = newValue
}
