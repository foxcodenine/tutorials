package main

import (
	"bufio"
	"fmt"
	"myapp/doctor"
	"os"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	// var whatToSay string = doctor.Intro()
	whatToSay := doctor.Intro()

	fmt.Println(whatToSay)

	for {
		// Print out a propt
		fmt.Print("-> ")

		// Wait for the user to type something and press enter
		userInput, _ := reader.ReadString('\n')

		// Strip the carriage return off of whatever they typed
		userInput = strings.Replace(userInput, "\r\n", "", -1)
		userInput = strings.Replace(userInput, "\n", "", -1)

		fmt.Println(doctor.Response(userInput))

		if userInput == "quit" {
			break
		}
	}
}
