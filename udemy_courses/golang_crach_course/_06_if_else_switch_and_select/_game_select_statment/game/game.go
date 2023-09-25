package game

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"os/exec"
	"runtime"
	"strings"
	"time"
)

// ---------------------------------------------------------------------

const (
	ROCK     = 0
	PAPER    = 1
	SCISSORS = 2
	FISH     = 3
)

var reader = bufio.NewReader(os.Stdin)

// ---------------------------------------------------------------------

type Round struct {
	RoundNumber   int
	PlayerScore   int
	ComputerScore int
}

type Game struct {
	DisplayChan chan string
	RoundChan   chan int
	Round       Round
}

func (g *Game) Rounds() {
	// -- Use select to process input in channles
	// -- Print to screen
	// -- Keep track of round number

	for {
		select {
		case round := <-g.RoundChan:
			g.Round.RoundNumber = g.Round.RoundNumber + round
			g.RoundChan <- 1
		case msg := <-g.DisplayChan:
			fmt.Println(msg)
		}
	}
}

// clearScreen clears the screen
func (g *Game) ClearScreen() {
	if strings.Contains(runtime.GOOS, "windows") {
		// windows
		cmd := exec.Command("cmd", "/c", "cls")
		cmd.Stdout = os.Stdout
		cmd.Run()
	} else {
		// linux or mac
		cmd := exec.Command("clear")
		cmd.Stdout = os.Stdout
		cmd.Run()
	}
}

func (g *Game) PrintIntro() {
	// -- print out some instractions
	g.DisplayChan <- "Pock, Paper & Scissors"
	g.DisplayChan <- "______________________"
	g.DisplayChan <- "Game is played for three rounds, and best of three wins the game.Good luck!\n "
}

func (g *Game) PlayRound() bool {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))

	playerValue := -1
	g.DisplayChan <- fmt.Sprintf("\nRound %d", g.Round.RoundNumber)
	g.DisplayChan <- "-------"

	g.DisplayChan <- "\nPlease enter rock, paper or scissors : "

	playerChoice, _ := reader.ReadString('\n')
	playerChoice = strings.Replace(playerChoice, "\n", "", -1)

	computerValue := r.Intn(3)

	if playerChoice == "rock" {
		playerValue = ROCK

	} else if playerChoice == "paper" {
		playerValue = PAPER

	} else if playerChoice == "scissors" {
		playerValue = SCISSORS

	} else if playerChoice == "fish" {
		playerValue = FISH
	}

	g.DisplayChan <- fmt.Sprintf("\nPlayer chose %s", strings.ToUpper(playerChoice))

	switch computerValue {
	case ROCK:
		g.DisplayChan <- "Computer chose ROCK"

	case PAPER:
		g.DisplayChan <- "Computer chose PAPER"

	case SCISSORS:
		g.DisplayChan <- "Computer chose SCISSORS"

	default:
	}

	if playerValue == computerValue {
		g.DisplayChan <- "It's a draw"
		return false

	} else {
		switch playerValue {
		case ROCK, FISH:
			if computerValue == PAPER {
				g.computerWins()
			} else {
				g.playerWins()
			}

		case PAPER:
			if computerValue == SCISSORS {
				g.computerWins()
			} else {
				g.playerWins()
			}

		case SCISSORS:
			if computerValue == ROCK {
				g.computerWins()
			} else {
				g.playerWins()
			}

		default:
			g.DisplayChan <- "Invalid choice!"
			return false
		}
	}
	return true
}

func (g *Game) computerWins() {
	g.DisplayChan <- "Computer wins!"
	g.Round.ComputerScore++
}

func (g *Game) playerWins() {
	g.DisplayChan <- "Player wins!"
	g.Round.PlayerScore++
}

func (g *Game) PrintSummery() {

	g.DisplayChan <- "Final score\n "
	g.DisplayChan <- "-----------\n "
	g.DisplayChan <- fmt.Sprintf("Player: %d/3, Computer: %d/3 \n ", g.Round.PlayerScore, g.Round.ComputerScore)

	if g.Round.PlayerScore > g.Round.ComputerScore {
		g.DisplayChan <- "Player wins game!"
	} else {
		g.DisplayChan <- "Computer wins game!"
	}
}

// ---------------------------------------------------------------------
