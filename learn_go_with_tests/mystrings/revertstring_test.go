package main

import (
	"fmt"
	"testing"
)

func TestRevertString(t *testing.T) {

	got := RevertString("Hello World")
	expect := "dlroW olleH"

	if got != expect {
		t.Errorf("got: %s, expected: %s", got, expect)
	}
}

func ExampleRevertString() {

	fmt.Println(RevertString("Hello World"))
	// Output: dlroW olleH
}
