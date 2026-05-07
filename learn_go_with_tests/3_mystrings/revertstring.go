package main

import "fmt"

// RevertString returns the same string with its characters in reverse order.
func RevertString(word string) string {
	newWord := ""

	for _, w := range word {
		newWord = fmt.Sprintf("%c%s", w, newWord)
	}

	return newWord
}
