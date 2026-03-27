package main

import "fmt"

func main() {

	fmt.Println("Please enter you name:")
	var name, surname string

	fmt.Scanln(&name)

	fmt.Println("Please enter you surname:")

	fmt.Scanln(&surname)

	fmt.Printf("Your name is %s %s.\n", name, surname)

}
