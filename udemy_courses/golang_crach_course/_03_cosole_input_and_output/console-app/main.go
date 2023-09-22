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
	// reader := bufio.NewReader(os.Stdin)

	// for {
	// 	fmt.Print("-> ")

	// 	userInput, _ := reader.ReadString('\n')

	// 	userInput = strings.Replace(userInput, "\n", "", -1)

	// 	if userInput == "quit" {
	// 		break
	// 	} else {
	// 		fmt.Println(userInput)
	// 	}

	// -----------------------------------------------------------------

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

	for {
		char, key, err := keyboard.GetSingleKey()

		if err != nil {
			log.Fatal(err)
		}

		// if key != 0 {
		// 	fmt.Println("You pressed", char, key)
		// } else {
		// 	fmt.Println("You pressed", char, key)
		// }

		if key == keyboard.KeyEsc || char == 'q' || char == 'Q' {
			break
		}

		// -------------------------------------------------------------

		i, _ := strconv.Atoi(string(char))

		// %q is for rune
		// %d is for int
		// %s is for string
		
		t := fmt.Sprintf("You chose %s", coffees[i])
		fmt.Println(t)

	}

	fmt.Println("Program exiting")
}
