package main

import (
	"fmt"
	"myapp/game"
)

func main() {
	playAgian := true

	for playAgian {
		game.Play()
		playAgian = game.GetYesOrNo("Would you like to play again (y/n)?")
	}

	fmt.Println("\nGoodbye.")
}
