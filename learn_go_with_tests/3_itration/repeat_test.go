package main

import (
	"fmt"

	"testing"
)

func BenchmarkRepeat(b *testing.B) {
	for b.Loop() {
		Repeat("a", 10)
	}
}

func TestRepeat(t *testing.T) {
	got := Repeat("Prily", 2)
	want := "PrilyPrily"

	if got != want {
		t.Errorf("got %s, want %s", got, want)
	}
}

func ExampleRepeat() {
	repeated := Repeat("a", 6)
	fmt.Println(repeated)
	// Output: aaaaaa
}
