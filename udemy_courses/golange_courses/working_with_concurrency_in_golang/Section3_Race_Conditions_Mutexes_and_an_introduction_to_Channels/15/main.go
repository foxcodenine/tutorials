package main

import (
	"fmt"
	"sync"
)

var msg string

func updateMessage(s string, mutext *sync.Mutex, wg *sync.WaitGroup) {
	defer wg.Done()
	mutext.Lock()
	msg = s
	mutext.Unlock()
}

func main() {

	msg = "A"

	var mutext sync.Mutex
	var wg sync.WaitGroup

	wg.Add(3)

	go updateMessage("B", &mutext, &wg)
	go updateMessage("C", &mutext, &wg)
	go updateMessage("D", &mutext, &wg)

	wg.Wait()

	fmt.Println(msg)
}
