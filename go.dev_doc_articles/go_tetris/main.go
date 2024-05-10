package main

import (
	"fmt"
	"image"
	"image/color"
	"log"
	"math/rand"
	"time"

	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/ebitenutil"
	"github.com/hajimehoshi/ebiten/v2/text"
	"golang.org/x/image/font/basicfont"
)

const (
	width      = 10 // Width of the game board (number of cells).
	height     = 20 // Height of the game board (number of cells).
	scale      = 20 // Each cell will be 20x20 pixels
	StateStart = iota
	StatePlaying
	StateGameOver
)

// Game represents the state of the Tetris game.
type Game struct {
	board         [height][width]int
	currentX      int // X position of the current piece
	currentY      int // Y position of the current piece
	currentPiece  [][]int
	moveDownTimer int  // Timer to move pieces down
	score         int  // Add score field
	spacePressed  bool // Tracks if the space key was pressed in the last frame
	leftPressed   bool // Tracks if the left arrow key was pressed in the last frame
	rightPressed  bool // Tracks if the right arrow key was pressed in the last frame
	state         int
	nextPiece     [][]int // Stores the next piece
	nextPieceType int     // Type index for the next piece, useful for choosing colors or styles
}

func (g *Game) Update() error {
	switch g.state {
	case StateStart:
		// Start the game when the Enter key is pressed
		if ebiten.IsKeyPressed(ebiten.KeyEnter) && !g.spacePressed {
			g.state = StatePlaying
			g.spacePressed = true // Avoids immediate repeat
		} else if !ebiten.IsKeyPressed(ebiten.KeyEnter) {
			g.spacePressed = false
		}
	case StatePlaying:
		// All the existing game logic is processed only when the game is in the playing state
		if g.currentPiece == nil {
			g.spawnPiece()
		}

		// Handle rotation input
		if ebiten.IsKeyPressed(ebiten.KeySpace) && !g.spacePressed && g.canRotate() {
			g.rotatePiece()
			g.spacePressed = true
		} else if !ebiten.IsKeyPressed(ebiten.KeySpace) {
			g.spacePressed = false
		}

		// Handle left movement input
		if ebiten.IsKeyPressed(ebiten.KeyArrowLeft) && !g.leftPressed && g.canMove(g.currentX-1, g.currentY) {
			g.currentX--
			g.leftPressed = true
		} else if !ebiten.IsKeyPressed(ebiten.KeyArrowLeft) {
			g.leftPressed = false
		}

		// Handle right movement input
		if ebiten.IsKeyPressed(ebiten.KeyArrowRight) && !g.rightPressed && g.canMove(g.currentX+1, g.currentY) {
			g.currentX++
			g.rightPressed = true
		} else if !ebiten.IsKeyPressed(ebiten.KeyArrowRight) {
			g.rightPressed = false
		}

		if ebiten.IsKeyPressed(ebiten.KeyArrowDown) && g.canMove(g.currentX, g.currentY+1) {
			g.currentY++
		}

		// Adjust speed based on score
		speedThreshold := 30 - (g.score / 1000)
		if speedThreshold < 10 {
			speedThreshold = 10
		}

		g.moveDownTimer++
		if g.moveDownTimer > speedThreshold {
			g.moveDownTimer = 0
			if g.canMove(g.currentX, g.currentY+1) {
				g.currentY++
			} else {
				g.placePiece()
				g.clearFullLines()
				g.spawnPiece()
				if !g.canMove(g.currentX, g.currentY) {
					g.state = StateGameOver
				}
			}
		}
	case StateGameOver:
		// Optionally handle input to restart the game
		if ebiten.IsKeyPressed(ebiten.KeyR) {
			g.resetGame()
		}
	}

	return nil
}

// Rotates the current piece 90 degrees clockwise
func (g *Game) rotatePiece() {
	var rotatedPiece [][]int = make([][]int, 4)
	for i := range rotatedPiece {
		rotatedPiece[i] = make([]int, 4)
	}

	for y := 0; y < 4; y++ {
		for x := 0; x < 4; x++ {
			rotatedPiece[x][3-y] = g.currentPiece[y][x]
		}
	}

	g.currentPiece = rotatedPiece
}

// Checks if the piece can rotate
func (g *Game) canRotate() bool {
	tempPiece := g.currentPiece
	g.rotatePiece()
	canRotate := g.canMove(g.currentX, g.currentY)
	g.currentPiece = tempPiece // Restore original piece after check
	return canRotate
}

// Draw draws the game screen. Draw is called every frame (1/60 [s]).
func (g *Game) Draw(screen *ebiten.Image) {
	screen.Fill(color.RGBA{R: 50, G: 50, B: 50, A: 255}) // Dark grey background

	switch g.state {
	case StateStart:
		text.Draw(screen, "Press Enter to Start", basicfont.Face7x13, 30, 100, color.White)
	case StatePlaying:
		// Draw the Tetris board
		// Draw the next piece
		for y := 0; y < height; y++ {
			for x := 0; x < width; x++ {
				rect := image.Rect(x*scale, y*scale, (x+1)*scale, (y+1)*scale)
				clr := color.RGBA{R: 50, G: 50, B: 50, A: 255} // gray for empty
				if g.board[y][x] != 0 {
					clr = color.RGBA{R: 0, G: 0, B: 255, A: 255} // Blue for filled
				}
				ebitenutil.DrawRect(screen, float64(rect.Min.X), float64(rect.Min.Y), float64(scale), float64(scale), clr)
			}
		}
		// Draw the next piece in the top right corner

		if g.nextPiece != nil {
			nextPieceScale := scale / 2              // Half the size
			startX := width*scale - 4*nextPieceScale // Start from the right side
			startY := 20                             // A bit down from the top

			for y, row := range g.nextPiece {
				for x, val := range row {
					if val != 0 {
						rect := image.Rect(startX+x*nextPieceScale, startY+y*nextPieceScale, startX+(x+1)*nextPieceScale, startY+(y+1)*nextPieceScale)
						clr := color.RGBA{R: 200, G: 200, B: 0, A: 255} // Yellow color for visibility
						ebitenutil.DrawRect(screen, 100, float64(rect.Min.Y), float64(nextPieceScale), float64(nextPieceScale), clr)
					}
				}
			}
			fmt.Println("Next piece will be drawn at:", startX, startY)
			fmt.Println("Next piece scale:", nextPieceScale)
		}

		// Draw the current piece, check if it is initialized
		if g.currentPiece != nil {
			for py := 0; py < 4; py++ {
				for px := 0; px < 4; px++ {
					if g.currentPiece[py][px] != 0 {
						x := g.currentX + px
						y := g.currentY + py
						if x >= 0 && x < width && y >= 0 && y < height {
							rect := image.Rect(x*scale, y*scale, (x+1)*scale, (y+1)*scale)
							ebitenutil.DrawRect(screen, float64(rect.Min.X), float64(rect.Min.Y), float64(scale), float64(scale), color.RGBA{R: 0, G: 255, B: 0, A: 255})
						}
					}
				}
			}
		}

		// Draw the score
		scoreText := fmt.Sprintf("Score: %d", g.score)
		text.Draw(screen, scoreText, basicfont.Face7x13, 10, 30, color.White)
	case StateGameOver:
		moveLeftScore := 70
		if moveLeftScore < 100 {
			moveLeftScore = 75
		}
		text.Draw(screen, fmt.Sprintf("Score: %d", g.score), basicfont.Face7x13, moveLeftScore, 30, color.White)
		text.Draw(screen, "Game Over!", basicfont.Face7x13, 70, 120, color.White)
		text.Draw(screen, "Press R to Restart", basicfont.Face7x13, 40, 140, color.White)
	}
}

func (g *Game) resetGame() {
	g.board = [height][width]int{}
	g.currentPiece = nil
	g.score = 0
	g.state = StatePlaying
}

func (g *Game) createNewPiece() [][]int {
	pieces := [][][]int{
		{
			{0, 0, 0, 0},
			{0, 1, 1, 0},
			{0, 1, 1, 0},
			{0, 0, 0, 0},
		},
		{
			{0, 0, 0, 0},
			{1, 1, 1, 1},
			{0, 0, 0, 0},
			{0, 0, 0, 0},
		},
		// Add more pieces here
	}
	rand.Seed(time.Now().UnixNano())
	index := rand.Intn(len(pieces))
	return pieces[index]
}

func (g *Game) spawnPiece() {
	pieces := [][][]int{
		// O shape
		{
			{0, 0, 0, 0},
			{0, 1, 1, 0},
			{0, 1, 1, 0},
			{0, 0, 0, 0},
		},
		// I shape
		{
			{0, 0, 0, 0},
			{1, 1, 1, 1},
			{0, 0, 0, 0},
			{0, 0, 0, 0},
		},
		// Add other pieces here
	}

	rand.Seed(time.Now().UnixNano())
	index := rand.Intn(len(pieces))
	g.currentPiece = pieces[index]
	g.currentX = width/2 - 2 // Positioning piece in the middle of the board
	g.currentY = 0           // Starting at the top of the board
}

// Check if the current piece can move to a specified location
func (g *Game) canMove(x, y int) bool {
	for py := 0; py < 4; py++ {
		for px := 0; px < 4; px++ {
			if g.currentPiece[py][px] != 0 {
				// Check if the piece is inside the board bounds
				nx, ny := x+px, y+py
				if nx < 0 || nx >= width || ny < 0 || ny >= height {
					return false
				}
				// Check for collision with pieces already on the board
				if g.board[ny][nx] != 0 {
					return false
				}
			}
		}
	}
	return true
}

// Layout takes the outside size (width, height) in device-independent pixels and returns the logical screen size.
// If you return (0, 0), it means that the logical screen size equals to the outside size.
func (g *Game) Layout(outsideWidth, outsideHeight int) (screenWidth, screenHeight int) {
	return width * scale, height * scale
}

// Place the current piece on the board
func (g *Game) placePiece() {
	for py := 0; py < 4; py++ {
		for px := 0; px < 4; px++ {
			if g.currentPiece[py][px] != 0 {
				g.board[g.currentY+py][g.currentX+px] = 1 // Adjust the value based on the type of piece
			}
		}
	}
	g.currentPiece = nil
}

func (g *Game) clearFullLines() {
	linesCleared := 0
	for y := height - 1; y >= 0; y-- {
		full := true
		for x := 0; x < width; x++ {
			if g.board[y][x] == 0 {
				full = false
				break
			}
		}

		if full {
			// Increment lines cleared on this sweep
			linesCleared++

			// Move all lines above this one down
			for moveY := y; moveY > 0; moveY-- {
				for moveX := 0; moveX < width; moveX++ {
					g.board[moveY][moveX] = g.board[moveY-1][moveX]
				}
			}
			// Clear the top line
			for x := 0; x < width; x++ {
				g.board[0][x] = 0
			}
			y++ // Re-check the current row as it has new blocks from the row above
		}
	}
	// Update the score based on the number of lines cleared
	g.score += linesCleared * 100
}

func main() {
	game := &Game{
		state: StateStart, // Start with the start screen
	}
	ebiten.SetWindowSize(width*scale, height*scale) // Set window size based on the scaled dimensions
	ebiten.SetWindowTitle("Tetris")

	// Call ebiten.RunGame to start your game loop.
	err := ebiten.RunGame(game)
	if err != nil {
		log.Fatal(err)
	}
}
