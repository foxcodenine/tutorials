package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup

	wg.Add(1)

	go start(&wg)

	fmt.Println("Started")

	fmt.Println("Finished")

	wg.Wait()
}

func start(wg *sync.WaitGroup) {
	fmt.Println("In Goroutine")
	wg.Done()
}
