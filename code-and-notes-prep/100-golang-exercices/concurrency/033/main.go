package main

import (
	"fmt"
	"sync"
)

func main() {

	var wg sync.WaitGroup

	wg.Add(1)

	ch := make(chan string)

	go f1(ch)
	go f2(ch, &wg)

	wg.Wait()
}

func f1(c chan string) {
	c <- "Hello from f1"
}

func f2(c chan string, wg *sync.WaitGroup) {

	f1Msg := <-c
	fmt.Printf("I am f2 and %s\n", f1Msg)

	wg.Done()
}
