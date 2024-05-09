package main

import (
	"github.com/hajimehoshi/ebiten/v2"
	"log"
)

// Game represents the state of the Tetris game.
type Game struct{}

// Update proceeds the game state. Update is called every frame (1/60 [s]).
func (g *Game) Update() error {
	// Here we will later handle game logic like moving and rotating Tetris pieces.
	return nil
}

// Draw draws the game screen. Draw is called every frame (1/60 [s]).
func (g *Game) Draw(screen *ebiten.Image) {
	// This is where we will draw the game pieces and game board.
}

// Layout decides the size of the screen given the outside size (width, height).
func (g *Game) Layout(outsideWidth, outsideHeight int) (int, int) {
	// This sets our window size.
	return 320, 240
}

func main() {
	game := &Game{}
	ebiten.SetWindowSize(320, 240)
	ebiten.SetWindowTitle("Tetris")

	if err := ebiten.RunGame(game); err != nil {
		log.Fatal(err)
	}
}
