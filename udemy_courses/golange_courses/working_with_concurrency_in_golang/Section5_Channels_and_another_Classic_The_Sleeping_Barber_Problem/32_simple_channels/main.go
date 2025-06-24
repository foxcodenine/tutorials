package main

import (
	"fmt"
	"strings"
	"time"
)

func shout(ping, pong chan string) {
	for {
		s := <-ping

		pong <- fmt.Sprintf("%s!!!", strings.ToUpper(s))
	}
}

func main() {
	// create two channels
	ping := make(chan string)
	pong := make(chan string)

	go shout(ping, pong)

	commands := []string{
		"Go and buy milk",
		"Take out the trash",
		"Call your mother",
		"Turn off the lights",
		"Finish your homework",
		"Lock the door before you leave",
		"Clean your room",
		"Set the table for dinner",
		"Feed the cat",
		"Bring me a glass of water",
	}

	for _, c := range commands {
		ping <- c

		d := <-pong

		fmt.Println(d)

		time.Sleep(time.Millisecond * 334)
	}

	close(ping)
	close(pong)

}
