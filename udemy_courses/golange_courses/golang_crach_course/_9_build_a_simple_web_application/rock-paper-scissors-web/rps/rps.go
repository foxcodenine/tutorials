package rps

import (
	"math/rand"
	"time"
)

const (
	ROCK     = 0 // beats scissors. (scissors + 1) % 3 = 0
	PAPER    = 1 // beats ROCK. (ROCK + 1) % 3 = 1
	SCISSORS = 2 // beats PAPER. (PAPER + 1) % 3 = 2
)

// ---------------------------------------------------------------------

type Round struct {
	Message        string `json:"round_message"`
	ComputerChoice string `json:"computer_choice"`
	RoundResult    string `json:"round_result"`
}

var winMessage = []string{
	"Good job!",
	"Nice work!",
	"You should buy a lottert ticket",
}
var loseMessage = []string{
	"Too bad!",
	"Try again!",
	"Tis is just not you day.",
}

var drawMessage = []string{
	"Great minds think alike.",
	"Uh oh. Try again.",
	"Nobody wins, but yoou can try again.",
}

// ---------------------------------------------------------------------

func PlayRound(playerValue int) Round {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))

	// -- move computer choice in 'for' loop, to reset computerValue each loop
	computerValue := r.Intn(3)
	computerChoice := ""
	roundResult := ""

	switch computerValue {
	case ROCK:
		computerChoice = "Computer chose ROCK"
	case PAPER:
		computerChoice = "Computer chose PAPER"
	case SCISSORS:
		computerChoice = "Computer chose SCISSORS"
	default:
	}

	messageInt := rand.Intn(3)
	message := ""

	if playerValue == computerValue {
		roundResult = "It's a draw"
		message = drawMessage[messageInt]
	} else if playerValue == (computerValue+1)%3 {
		roundResult = "Player wins!"
		message = winMessage[messageInt]
	} else {
		roundResult = "Computer wins!"
		message = loseMessage[messageInt]
	}

	result := Round{
		Message:        message,
		ComputerChoice: computerChoice,
		RoundResult:    roundResult,
	}

	return result
}
