package main

import "fmt"

func main() {
	fmt.Println("Hello go world!")

	var whatToSay string
	whatToSay = "Goodbye, cruel world!"

	var i int = 16

	fmt.Println(whatToSay)
	fmt.Println("i is set to", i)

	whatWasSaid, theOtherThing := saySomthing()
	fmt.Println(whatWasSaid, theOtherThing)
}

func saySomthing() (string, string) {
	return `The king was in the counting-house Counting out his money.`,
		`The queen was in the parlor Eating bread and honey,`
}
