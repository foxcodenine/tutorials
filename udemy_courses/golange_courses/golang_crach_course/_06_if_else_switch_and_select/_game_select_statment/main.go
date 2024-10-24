package main

import (
	"myapp/game"
)

func main() {
	displayChan := make(chan string)
	roundChan := make(chan int)

	game := game.Game{
		DisplayChan: displayChan,
		RoundChan:   roundChan,
		Round: game.Round{
			RoundNumber:   0,
			PlayerScore:   0,
			ComputerScore: 0,
		},
	}

	go game.Rounds()
	game.ClearScreen()
	game.PrintIntro()

	// playerChoice := ""

	// -- added the for loop
	for {
		game.RoundChan <- 1
		<-game.RoundChan // <~~ wait for game.RoundChan return

		if game.Round.RoundNumber > 3 {
			break
		}

		if !game.PlayRound() {
			game.RoundChan <- -1
			<-game.RoundChan
		}

	}

	game.PrintSummery()
}
