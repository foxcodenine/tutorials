package rps

import (
	"math/rand"
	"time"
)

const (
	ROCK         = 0 // beats scissors. (scissors + 1) % 3 = 0
	PAPER        = 1 // beats ROCK. (ROCK + 1) % 3 = 1
	SCISSORS     = 2 // beats PAPER. (PAPER + 1) % 3 = 2
	PLAYER_WINS  = 1
	COMPUTER_WIN = 2
	DRAW         = 3
)

// ---------------------------------------------------------------------

type Round struct {
	Winner         int    `json:"winner"`
	ComputerChoice string `json:"computer_choice"`
	RoundResult    string `json:"round_result"`
}

// ---------------------------------------------------------------------

func PlayRound(playerValue int) Round {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))

	// -- move computer choice in 'for' loop, to reset computerValue each loop
	computerValue := r.Intn(3)
	computerChoice := ""
	roundResult := ""
	winner := 0

	switch computerValue {
	case ROCK:
		computerChoice = "Computer chose ROCK"
	case PAPER:
		computerChoice = "Computer chose PAPER"
	case SCISSORS:
		computerChoice = "Computer chose SCISSORS"
	default:
	}

	if playerValue == computerValue {
		roundResult = "It's a draw"
		winner = DRAW
	} else if playerValue == (computerValue+1)%3 {
		roundResult = "Player wins!"
		winner = PLAYER_WINS
	} else {
		roundResult = "Computer wins!"
		winner = COMPUTER_WIN
	}

	result := Round{
		Winner:         winner,
		ComputerChoice: computerChoice,
		RoundResult:    roundResult,
	}

	return result
}
