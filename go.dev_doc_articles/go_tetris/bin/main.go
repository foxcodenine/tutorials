package main

import (
	"bytes"
	"fmt"
	"image"
	"image/color"
	"log"
	"math/rand"

	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/ebitenutil"
	"github.com/hajimehoshi/ebiten/v2/text"
	"golang.org/x/image/font/basicfont"

	"github.com/hajimehoshi/ebiten/v2/audio"
	"github.com/hajimehoshi/ebiten/v2/audio/mp3"

	// "github.com/hajimehoshi/ebiten/v2/audio/wav"
	"embed"
)

var pieceColors = []color.RGBA{
	{R: 254, G: 203, B: 0, A: 255},  // Gold for O
	{R: 0, G: 159, B: 218, A: 255},  // Sky Blue for I
	{R: 105, G: 190, B: 40, A: 255}, // Lime Green for S
	{R: 237, G: 41, B: 57, A: 255},  // Scarlet Red for Z
	{R: 255, G: 146, B: 36, A: 255}, // Bright Orange for L
	{R: 63, G: 72, B: 204, A: 255},  // Deep Blue for J
	{R: 167, G: 87, B: 168, A: 255}, // Muted Purple for T
}

const (
	width      = 10 // Width of the game board (number of cells).
	height     = 20 // Height of the game board (number of cells).
	scale      = 20 // Each cell will be 20x20 pixels
	StateStart = iota
	StatePlaying
	StateGameOver
	sampleRate = 44100 // Common sample rate for audio
)

// Game represents the state of the Tetris game.
type Game struct {
	board             [height][width]int
	currentX          int // X position of the current piece
	currentY          int // Y position of the current piece
	currentPiece      [][]int
	moveDownTimer     int  // Timer to move pieces down
	score             int  // Add score field
	spacePressed      bool // Tracks if the space key was pressed in the last frame
	leftPressed       bool // Tracks if the left arrow key was pressed in the last frame
	rightPressed      bool // Tracks if the right arrow key was pressed in the last frame
	state             int
	nextPiece         [][]int // Stores the next piece
	nextPieceType     int     // Type index for the next piece, useful for choosing colors or styles
	currentPieceColor color.RGBA
	nextPieceColor    color.RGBA
}

//go:embed sound1.mp3 sound2.mp3
var soundFS embed.FS

var (
	audioContext  *audio.Context
	placeSound    *audio.Player
	startSound    *audio.Player
	gameOverSound *audio.Player
)

func init() {
	audioContext = audio.NewContext(44100)
	placeSound = loadSound("sound2.mp3")
	startSound = loadSound("sound1.mp3")
	gameOverSound = loadSound("sound1.mp3")
}

func loadSound(filename string) *audio.Player {
	f, err := soundFS.ReadFile(filename)
	if err != nil {
		log.Fatalf("Failed to read embedded file: %v", err)
	}
	d, err := mp3.Decode(audioContext, bytes.NewReader(f))
	if err != nil {
		log.Fatalf("Failed to decode MP3: %v", err)
	}
	p, err := audio.NewPlayer(audioContext, d)
	if err != nil {
		log.Fatalf("Failed to create audio player: %v", err)
	}
	return p
}

func (g *Game) Update() error {
	switch g.state {
	case StateStart:
		if !startSound.IsPlaying() {
			startSound.Rewind()
			startSound.Play()
		}
		// Start the game when the Enter key is pressed
		if ebiten.IsKeyPressed(ebiten.KeyEnter) && !g.spacePressed {
			startSound.Pause() // Pause start sound when leaving start screen
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
		if g.state == StateGameOver && !gameOverSound.IsPlaying() {
			gameOverSound.Rewind()
			gameOverSound.Play()
		}
	case StateGameOver:
		// Optionally handle input to restart the game
		if ebiten.IsKeyPressed(ebiten.KeyR) {
			gameOverSound.Pause() // Pause game over sound when restarting
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
					clr = color.RGBA{R: 255, G: 255, B: 255, A: 255} // White for filled
				}
				ebitenutil.DrawRect(screen, float64(rect.Min.X), float64(rect.Min.Y), float64(scale), float64(scale), clr)
			}
		}
		// Draw the next piece in the top right corner

		if g.nextPiece != nil {
			nextPieceScale := scale / 2              // Adjust the scale if needed
			startX := width*scale - 5*nextPieceScale // Start from the right side
			startY := 10                             // A bit down from the top

			for y, row := range g.nextPiece {
				for x, val := range row {
					if val != 0 {
						xPosition := startX + x*nextPieceScale
						yPosition := startY + y*nextPieceScale
						rect := image.Rect(xPosition, yPosition, xPosition+nextPieceScale, yPosition+nextPieceScale)
						clr := color.RGBA{R: 255, G: 255, B: 255, A: 225} // White color for visibility
						ebitenutil.DrawRect(screen, float64(rect.Min.X), float64(rect.Min.Y), float64(nextPieceScale), float64(nextPieceScale), clr)
					}
				}
			}

		}

		// Draw the current piece, check if it is initialized
		if g.currentPiece != nil {
			for py, row := range g.currentPiece {
				for px, val := range row {
					if val != 0 {
						x := g.currentX + px
						y := g.currentY + py
						if x >= 0 && x < width && y >= 0 && y < height {
							rect := image.Rect(x*scale, y*scale, (x+1)*scale, (y+1)*scale)
							ebitenutil.DrawRect(screen, float64(rect.Min.X), float64(rect.Min.Y), float64(scale), float64(scale), g.currentPieceColor)
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
		if g.score < 100 {
			moveLeftScore = 75
		}
		if g.score >= 1000 {
			moveLeftScore = 65
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

func (g *Game) createNewPiece() ([][]int, color.RGBA) {

	pieces := [][][]int{
		{ // O Shape
			{0, 0, 0, 0},
			{0, 1, 1, 0},
			{0, 1, 1, 0},
			{0, 0, 0, 0},
		},
		{ // I Shape
			{0, 0, 0, 0},
			{1, 1, 1, 1},
			{0, 0, 0, 0},
			{0, 0, 0, 0},
		},
		{ // S Shape
			{0, 0, 0, 0},
			{0, 0, 1, 1},
			{0, 1, 1, 0},
			{0, 0, 0, 0},
		},
		{ // Z Shape
			{0, 0, 0, 0},
			{0, 1, 1, 0},
			{0, 0, 1, 1},
			{0, 0, 0, 0},
		},
		{ // L Shape
			{0, 0, 0, 0},
			{0, 1, 1, 1},
			{0, 1, 0, 0},
			{0, 0, 0, 0},
		},
		{ // J Shape
			{0, 0, 0, 0},
			{0, 1, 1, 1},
			{0, 0, 0, 1},
			{0, 0, 0, 0},
		},
		{ // T Shape
			{0, 0, 0, 0},
			{0, 1, 1, 1},
			{0, 0, 1, 0},
			{0, 0, 0, 0},
		},
	}
	index := rand.Intn(len(pieces))
	return pieces[index], pieceColors[index]
}

func (g *Game) spawnPiece() {
	if g.currentPiece == nil && g.nextPiece == nil {
		// Initially spawn two pieces
		g.currentPiece, g.currentPieceColor = g.createNewPiece()
		g.nextPiece, g.nextPieceColor = g.createNewPiece()
	} else {
		// Move nextPiece to current and spawn a new nextPiece
		g.currentPiece, g.currentPieceColor = g.nextPiece, g.nextPieceColor
		g.nextPiece, g.nextPieceColor = g.createNewPiece()
	}

	g.currentX = width/2 - 2 // Center the new current piece horizontally
	g.currentY = 0           // Start the new piece at the top of the board
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
	placeSound.Rewind() // Rewind to the start of the sound
	placeSound.Play()   // Play the sound
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
