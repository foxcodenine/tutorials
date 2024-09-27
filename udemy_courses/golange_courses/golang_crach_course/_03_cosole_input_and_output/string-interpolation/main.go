package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"

	"github.com/eiannone/keyboard"
)

// ---------------------------------------------------------------------

var reader *bufio.Reader

// ---------------------------------------------------------------------

type User struct {
	UserName        string
	Age             int
	FavouriteNumber float64
	OwnsADog        bool
}

// ---------------------------------------------------------------------

func main() {

	reader = bufio.NewReader(os.Stdin)

	var user User

	user.UserName = readSring("What is your name?")

	user.Age = readInt("How old are you?")

	user.FavouriteNumber = readFloat("What is you favourite number?")

	// fmt.Println("Your name is "+userName+", and you are", age, "years old")

	user.OwnsADog = readBool("Do you own a dog (y/n)?")

	text := fmt.Sprintf(
		"Your name is %s, and you are %d years old. Your favourite nuber is %.2f. Owna dog: %t.",
		user.UserName,
		user.Age,
		user.FavouriteNumber,
		user.OwnsADog,
	)

	fmt.Println(text)
}

// ----------------------------------

func prompt() {
	fmt.Print("-> ")
}

// ----------------------------------

func readSring(s string) string {
	for {
		fmt.Println(s)
		prompt()
		userInput, _ := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\n", "", -1)

		if userInput != "" {
			return userInput
		} else {
			fmt.Println("Please enter a value")
		}
	}
}

// ----------------------------------

func readInt(s string) int {
	for {
		fmt.Println(s)
		prompt()
		userInput, _ := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\n", "", -1)

		num, err := strconv.Atoi(userInput)

		if err != nil {
			fmt.Println("Please enter a whole number")
		} else {
			return num
		}
	}
}

// ----------------------------------

func readFloat(s string) float64 {
	for {
		fmt.Println(s)
		prompt()
		userInput, _ := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\n", "", -1)

		num, err := strconv.ParseFloat(userInput, 64)

		if err != nil {
			fmt.Println("Please enter a number")
		} else {
			return num
		}
	}
}

// ----------------------------------

func readBool(s string) bool {

	err := keyboard.Open()
	if err != nil {
		log.Fatal(err)
	}

	defer func() {
		_ = keyboard.Close()
	}()

	for {
		fmt.Println(s)
		prompt()

		char, _, err := keyboard.GetSingleKey()

		if err != nil {
			log.Fatal(err)
		}

		s := strings.ToUpper(string(char))

		if s == "Y" || s == "N" {
			fmt.Println(s)
			return s == "Y"
		}

		fmt.Print("Please press 'Y' or 'N'")
	}
}
