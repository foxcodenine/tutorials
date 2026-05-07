package main

import "strings"

// Repeat returns the given character repeated repeatedCount times.
func Repeat(character string, repeatedCount int) string {
	var repeated strings.Builder

	for range repeatedCount {
		repeated.WriteString(character)
	}
	return repeated.String()
}
