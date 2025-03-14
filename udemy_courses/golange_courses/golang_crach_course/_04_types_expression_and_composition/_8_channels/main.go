package main

import (
	"fmt"

	"github.com/eiannone/keyboard"
)

var keyPressChan chan rune

func main() {

	keyPressChan = make(chan rune)

	go listenForKeyPress()

	fmt.Println("Press any key, or 'q' to quit")

	_ = keyboard.Open()

	defer func() {
		keyboard.Close()
	}()

	for {
		char, _, _ := keyboard.GetSingleKey()
		if char == 'q' || char == 'Q' {
			break
		}

		keyPressChan <- char
	}
}

func listenForKeyPress() {
	for {
		key := <-keyPressChan
		fmt.Printf("You pressed %q\n", key)
	}
}
