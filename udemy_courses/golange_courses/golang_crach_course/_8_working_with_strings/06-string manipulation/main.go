package main

import (
	"fmt"
	"regexp"
	"strings"
)

func main() {
	str := "alpha alpha alpha alpha alpha"
	str = replaceNth(str, "alpha", "beta", 3)
	fmt.Println(str)

	// -----------------------------------------------------------------

	input := "hello hello hello hello hello hello hello hello hello hello hello hello"
	searchWord := "hello"
	replacementWord := "world"
	n := 3

	output := replaceNthOccurrenceWithSpaces(input, searchWord, replacementWord, n)
	println(output)

	// -----------------------------------------------------------------

	// case
	newString := "the quick brown FOX jumped over the lazy red DOG"
	fmt.Println(strings.ToLower(newString))
	fmt.Println(strings.ToUpper(newString))
	fmt.Println(strings.Title(newString))
	fmt.Println(strings.Title(strings.ToLower(newString)))
}

// ---------------------------------------------------------------------

// replaceNth replaces the nth occurrence of a specified substring 'old' with a new substring 'new' in a given string 's'.
// It returns the modified string.
func replaceNth(s, old, new string, n int) string {
	// Initialize an index 'i' to keep track of the current position in the string.
	i := 0

	// Iterate from 1 to no more than the nth position (specified by 'n').
	for j := 1; j <= n; j++ {
		// Find the position of the 'old' substring starting from the current index 'i'.
		x := strings.Index(s[i:], old)

		// If the 'old' substring is not found, break out of the loop.
		if x < 0 {
			break
		}

		// Update the current index 'i' to the position of the 'old' substring.
		i = i + x

		// If we have reached the nth occurrence, perform the replacement.
		if j == n {
			// Create the modified string by concatenating:
			// 1. Everything from the beginning of the string to the current index 'i'.
			// 2. The 'new' substring.
			// 3. Everything from after the end of the 'old' substring to the end of 's'.
			return s[:i] + new + s[i+len(old):]
		}

		// Increment 'i' by the length of the 'old' substring to continue searching.
		i += len(old)
	}

	// If the nth occurrence is not found, return the original string 's'.
	return s
}

func replaceNthOccurrenceWithSpaces(input, searchWord, replacementWord string, n int) string {
	// Use regular expressions to find the nth occurrence of the search word
	regex := regexp.MustCompile(searchWord)
	indices := regex.FindAllStringIndex(input, -1)

	if n <= 0 || n > len(indices) {
		return input // Not enough occurrences, return the original string
	}

	// Calculate the start and end positions of the nth occurrence
	start := indices[n-1][0]
	end := indices[n-1][1]

	// Replace the nth occurrence with the replacement word and spaces
	result := input[:start] + replacementWord + strings.Repeat(" ", len(searchWord)-len(replacementWord)) + input[end:]

	return result
}
