package main

import (
	"fmt"
	"io"
	"time"
)

func main() {
	Countdown()
}

func Countdown() {

	for i := 3; i > 0; i-- {

		fmt.Println(i)
		time.Sleep(1 * time.Second)
	}

	fmt.Println("Go!")
}

func MyPrint(w io.Writer, txt string, a ...any) {
	fmt.Fprintf(w, txt, a...)
}
