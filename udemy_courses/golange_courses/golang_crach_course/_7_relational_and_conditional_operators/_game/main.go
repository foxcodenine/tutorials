package main

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

const (
	ROCK     = 0 // beats scissors. (scissors + 1) % 3 = 0
	PAPER    = 1 // beats ROCK. (ROCK + 1) % 3 = 1
	SCISSORS = 2 // beats PAPER. (PAPER + 1) % 3 = 2
)

func main() {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	playerChoice := ""
	playerValue := -1
	// -- added two variables to keep track of score
	playerScore := 0
	computerScore := 0

	reader := bufio.NewReader(os.Stdin)
	clearScreen()

	// -- print out some instractions
	fmt.Println("Pock, Paper & Scissors")
	fmt.Println("______________________")
	fmt.Println("Game is played for three rounds, and best of three wins the game.Good luck!\n")

	// -- added the for loop
	for i := 1; i <= 3; i++ {
		// -- print out round information
		fmt.Println("Round", i)
		fmt.Println("________")

		fmt.Print("Please enter rock, paper, or scissors -> ")
		playerChoice, _ = reader.ReadString('\n')
		playerChoice = strings.Replace(playerChoice, "\n", "", -1)

		// -- move computer choice in 'for' loop, to reset computerValue each loop
		computerValue := r.Intn(2)

		if playerChoice == "rock" {
			playerValue = ROCK

		} else if playerChoice == "paper" {
			playerValue = PAPER

		} else if playerChoice == "scissors" {
			playerValue = SCISSORS

		} else {
			playerValue = -1
		}

		// -- print out player chaice
		fmt.Println("\nPlayer chose", strings.ToUpper(playerChoice))

		switch computerValue {
		case ROCK:
			fmt.Println("Computer chose ROCK")

		case PAPER:
			fmt.Println("Computer chose PAPER")

		case SCISSORS:
			fmt.Println("Computer chose SCISSORS")

		default:
		}

		fmt.Println()

		if playerValue == computerValue {
			fmt.Println("It's a draw")
			// -- decrement 1 by 1, since we're repeating the round
			i--
		} else if playerValue == -1 {
			fmt.Println("Invalid choice!")
			// -- decrement 1 by 1, since we're repeating the round
			i--
		} else if playerValue == (computerValue+1)%3 {
			playerScore = playerWins(playerScore)

		} else {
			computerScore = computerWins(computerScore)
		}
	}

	fmt.Println("Final score\n ")
	fmt.Printf("Player: %d/3, Computer: %d/3 \n ", playerScore, computerScore)
	if playerScore > computerScore {
		fmt.Println("Player wins game!")
	} else {
		fmt.Println("Computer wins game!")
	}

}

// clearScreen clears the screen
func clearScreen() {
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

func computerWins(score int) int {
	fmt.Println("Computer wins!")
	return score + 1
}

func playerWins(score int) int {
	fmt.Println("Player wins!")
	return score + 1
}
