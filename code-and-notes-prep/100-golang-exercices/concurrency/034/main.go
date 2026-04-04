package main

import (
	"fmt"
	"sync"
	"time"
)

func pop_message(c chan string, wg *sync.WaitGroup) {

	for msg := range c {
		fmt.Println(msg)
		time.Sleep(1 * time.Second)
		wg.Done()
	}
}

func main() {
	var wg sync.WaitGroup

	ch := make(chan string, 4)

	go pop_message(ch, &wg)

	for i := 0; i < 10; i++ {
		wg.Add(1)
		fmt.Printf("Sending msg %d\n", i)
		ch <- fmt.Sprintf("Msg No %d", i)
	}

	wg.Wait()
}
