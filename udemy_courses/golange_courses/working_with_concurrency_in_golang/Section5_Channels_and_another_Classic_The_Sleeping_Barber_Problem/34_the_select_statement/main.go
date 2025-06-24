package main

import (
	"fmt"
	"time"
)

func server1(ch chan string) {
	for {
		time.Sleep(6 * time.Second)
		ch <- "This is from server 1"
	}
}
func server2(ch chan string) {
	for {
		time.Sleep(3 * time.Second)
		ch <- "This is from server 2"
	}
}

func main() {
	fmt.Println("Select with channels")
	fmt.Println("--------------------")

	channel1 := make(chan string)
	channel2 := make(chan string)

	go server1(channel1)
	go server2(channel2)

	// ----------------------------------------------------------
	// LESSON: Multiple cases in select can listen to the SAME channel.
	// If data is available on that channel, select picks ONE matching case at random.
	// This can be used for load balancing or demonstrating non-deterministic select behavior.
	// ----------------------------------------------------------

	for {
		select {

		case s1 := <-channel1:
			fmt.Println("Case one:", s1)
		case s2 := <-channel1:
			fmt.Println("Case two:", s2)

		case s3 := <-channel2:
			fmt.Println("Case three:", s3)
		case s4 := <-channel2:
			fmt.Println("Case four:", s4)

		default:
			// The `default` case makes select non-blocking.
			// If none of the other channels are ready or listing, the default case is executed immediately.
			// This avoids blocking or deadlocking the program if there is no data available.
		}
	}
}
