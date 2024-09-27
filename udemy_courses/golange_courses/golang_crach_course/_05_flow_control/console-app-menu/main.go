package main

import (
	// "bufio"
	"fmt"
	"log"
	"strconv"
	// "os"
	// "strings"

	"github.com/eiannone/keyboard"
)

func main() {

	err := keyboard.Open()

	if err != nil {
		log.Fatal(err)
	}

	defer func() {
		_ = keyboard.Close()
	}()

	// -----------------------------------------------------------------

	coffees := make(map[int]string)
	coffees[1] = "Cappucion"
	coffees[2] = "Latte"
	coffees[3] = "Americano"
	coffees[4] = "Mocha"
	coffees[5] = "Macchiato"
	coffees[6] = "Esqresso"

	fmt.Println("MENU")
	fmt.Println("____")
	fmt.Println("1 - Cappucino")
	fmt.Println("2 - Latte")
	fmt.Println("3 - Americano")
	fmt.Println("4 - Mocha")
	fmt.Println("5 - Macchiato")
	fmt.Println("6 - Esqresso")
	fmt.Println("Q - Quit the program")

	// -----------------------------------------------------------------

	char := ' '
	key := keyboard.KeyBackspace

	for char != 'q' && char != 'Q' && key != keyboard.KeyEsc {

		char, key, err = keyboard.GetSingleKey()

		if err != nil {
			log.Fatal(err)
		}

		i, _ := strconv.Atoi(string(char))

		// %q is for rune, %d is for int, %s is for string

		/*
			el, ok := coffees[i]

			if ok {
				t := fmt.Sprintf("You chose %s", el)
				fmt.Println(t)
			}
		*/

		if el, ok := coffees[i]; ok {
			fmt.Println(fmt.Sprintf("You chose %s", el))
		}
	}

	fmt.Println("Program exiting")
}
