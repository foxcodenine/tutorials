package main

import (
	"bytes"
	"embed"
	"fmt"
	"image"
	"image/color"
	"log"
	"math/rand"
	"time"

	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/audio"
	"github.com/hajimehoshi/ebiten/v2/audio/mp3"
	"github.com/hajimehoshi/ebiten/v2/ebitenutil"
	"github.com/hajimehoshi/ebiten/v2/text"
	"golang.org/x/image/font/basicfont"
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

var rotatedT = [][]int{
	{0, 0, 0, 0},
	{0, 1, 0, 0},
	{1, 1, 1, 0},
	{0, 0, 0, 0},
}
var gameOverBottom = [][]int{
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
	{0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
	{0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0},
	{0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0},
	{1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1},
	{1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},
}

//go:embed sounds/Tetris-Theme-Reworked-128.mp3 sounds/Opportunities-Lets-Make-Lots-of-Money-128.mp3  sounds/Collide.mp3
var soundFS embed.FS

var (
	audioContext  *audio.Context
	placeSound    *audio.Player
	startSound    *audio.Player
	gameOverSound *audio.Player
)

const (
	width      = 10 // Width of the game board (number of cells).
	height     = 20 // Height of the game board (number of cells).
	scale      = 20 // Each cell will be 20x20 pixels
	StateStart = iota
	StatePlaying
	StateGameOver
	sampleRate = 44100 // Common sample rate for audio
)

// init initializes the audio context and loads sound effects for gameplay.
func init() {
	audioContext = audio.NewContext(44100)
	placeSound = loadSound("sounds/Collide.mp3")
	startSound = loadSound("sounds/Tetris-Theme-Reworked-128.mp3")
	gameOverSound = loadSound("sounds/Opportunities-Lets-Make-Lots-of-Money-128.mp3")
}

// loadSound loads an MP3 file from embedded file system and creates an audio player for it.
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

// Helper function to draw a piece on the screen
func drawPiece(screen *ebiten.Image, piece [][]int, startX, startY int) {
	for y, row := range piece {
		for x, cell := range row {
			if cell != 0 {
				// Assume each block is 20x20 pixels
				ebitenutil.DrawRect(screen, float64(startX+x*10), float64(startY+y*10), 10, 10, color.White)
			}
		}
	}
}

// Game represents the state of the Tetris game.
type Game struct {
	board               [height][width]int
	currentX            int // X position of the current piece
	currentY            int // Y position of the current piece
	currentPiece        [][]int
	moveDownTimer       int  // Timer to move pieces down
	score               int  // Add score field
	spacePressed        bool // Tracks if the space key was pressed in the last frame
	leftPressed         bool // Tracks if the left arrow key was pressed in the last frame
	rightPressed        bool // Tracks if the right arrow key was pressed in the last frame
	state               int
	nextPiece           [][]int // Stores the next piece
	currentPieceColor   color.RGBA
	nextPieceColor      color.RGBA
	messageChangeTimer  time.Duration
	currentMessageIndex int
	messages            []string
	gameOverTime        time.Time
}

func (g *Game) InitGameOver() {
	g.messages = []string{
		" Thanks for Playing Tetris!",
		"    And a Shoutout to...",
		" ChatGPT My Coding Sidekick",
		"   Inspired by Tetris TV+",
		" Built with Go Made to Last",
		" Cardano 2D Moon Buckle Up!",
		" And who in the World Is...",
		"    Robert F Kennedy Jr? ",
	}
	g.currentMessageIndex = 0 // Start with the first message
	g.gameOverTime = time.Now()
}

// Update handles game state transitions, user inputs, and sound management.
// It processes movements, rotations, and state-based actions like starting or ending the game.
// This function updates the game each frame to respond to user interactions and manage game flow.
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
			g.SpawnPiece()
		}

		// Handle rotation input
		if ebiten.IsKeyPressed(ebiten.KeySpace) && !g.spacePressed && g.CanRotate() {
			g.RotatePiece()
			g.spacePressed = true
		} else if !ebiten.IsKeyPressed(ebiten.KeySpace) {
			g.spacePressed = false
		}

		// Handle left movement input
		if ebiten.IsKeyPressed(ebiten.KeyArrowLeft) && !g.leftPressed && g.CanMove(g.currentX-1, g.currentY) {
			g.currentX--
			g.leftPressed = true
		} else if !ebiten.IsKeyPressed(ebiten.KeyArrowLeft) {
			g.leftPressed = false
		}

		// Handle right movement input
		if ebiten.IsKeyPressed(ebiten.KeyArrowRight) && !g.rightPressed && g.CanMove(g.currentX+1, g.currentY) {
			g.currentX++
			g.rightPressed = true
		} else if !ebiten.IsKeyPressed(ebiten.KeyArrowRight) {
			g.rightPressed = false
		}

		if ebiten.IsKeyPressed(ebiten.KeyArrowDown) && g.CanMove(g.currentX, g.currentY+1) {
			g.currentY++
		}

		// Adjust speed based on score
		speedThreshold := 33 - (g.score / 333)
		if speedThreshold < 10 {
			speedThreshold = 10
		}

		g.moveDownTimer++
		if g.moveDownTimer > speedThreshold {
			g.moveDownTimer = 0
			if g.CanMove(g.currentX, g.currentY+1) {
				g.currentY++
			} else {
				g.PlacePiece()
				g.ClearFullLines()
				g.SpawnPiece()
				if !g.CanMove(g.currentX, g.currentY) {
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
			g.ResetGame()
		}

		if g.gameOverTime.IsZero() { // Check if this is the first time entering the game over state
			g.InitGameOver() // Initialize game over state
		}

		// Update message every 2 seconds
		if time.Since(g.gameOverTime) >= g.messageChangeTimer+3*time.Second {
			g.messageChangeTimer += 3 * time.Second
			g.currentMessageIndex = (g.currentMessageIndex + 1) % len(g.messages)
		}
	}

	return nil
}

// Rotates the current piece 90 degrees clockwise
func (g *Game) RotatePiece() {
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
func (g *Game) CanRotate() bool {
	tempPiece := g.currentPiece
	g.RotatePiece()
	CanRotate := g.CanMove(g.currentX, g.currentY)
	g.currentPiece = tempPiece // Restore original piece after check
	return CanRotate
}

// Draw draws the game screen. Draw is called every frame (1/60 [s]).
func (g *Game) Draw(screen *ebiten.Image) {
	screen.Fill(color.RGBA{R: 50, G: 50, B: 50, A: 255}) // Dark grey background

	switch g.state {
	case StateStart:
		drawPiece(screen, rotatedT, 85, 10)
		text.Draw(screen, "GO TETRIS", basicfont.Face7x13, 69, 60, color.White)
		text.Draw(screen, "Press [Enter] to Start", basicfont.Face7x13, 24, 100, color.White)

		text.Draw(screen, "Move Left:  [<]", basicfont.Face7x13, 49, 240, color.RGBA{R: 255, G: 255, B: 255, A: 255})
		text.Draw(screen, "Move Right: [>]", basicfont.Face7x13, 49, 260, color.RGBA{R: 255, G: 255, B: 255, A: 255})
		text.Draw(screen, "Speed: [Down Arrow]", basicfont.Face7x13, 35, 280, color.RGBA{R: 255, G: 255, B: 255, A: 255})
		text.Draw(screen, "Rotate: [Space Bar]", basicfont.Face7x13, 35, 300, color.RGBA{R: 255, G: 255, B: 255, A: 255})

		text.Draw(screen, "by foxcode.io", basicfont.Face7x13, 55, 380, color.RGBA{R: 255, G: 255, B: 255, A: 255})
	case StatePlaying:
		// Draw the Tetris boards
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
		moveLeftScore := 73
		if g.score >= 10 {
			moveLeftScore = 69
		}
		if g.score >= 100 {
			moveLeftScore = 66
		}
		if g.score >= 1000 {
			moveLeftScore = 63
		}
		if g.score >= 10000 {
			moveLeftScore = 60
		}
		text.Draw(screen, fmt.Sprintf("Score: %d", g.score), basicfont.Face7x13, moveLeftScore, 30, color.White)

		text.Draw(screen, "Game Over!", basicfont.Face7x13, 66, 130, color.White)
		text.Draw(screen, "Press [R] to Restart", basicfont.Face7x13, 30, 150, color.White)
		// Check if the message slice is not empty and index is within bounds
		if len(g.messages) > 0 && g.currentMessageIndex >= 0 && g.currentMessageIndex < len(g.messages) {
			col := color.RGBA{R: 255, G: 255, B: 255, A: 255}
			if g.currentMessageIndex == 1 || g.currentMessageIndex == 2 {
				col = color.RGBA{R: 255, G: 102, B: 102, A: 255}
			}
			if g.currentMessageIndex == 3 {
				col = color.RGBA{R: 255, G: 102, B: 255, A: 255}
			}
			if g.currentMessageIndex == 4 {
				col = color.RGBA{R: 255, G: 255, B: 102, A: 255}
			}
			if g.currentMessageIndex == 5 {
				col = color.RGBA{R: 102, G: 255, B: 102, A: 255}
			}
			if g.currentMessageIndex == 6 || g.currentMessageIndex == 7 {
				col = color.RGBA{R: 102, G: 178, B: 255, A: 255}
			}

			text.Draw(screen, g.messages[g.currentMessageIndex], basicfont.Face7x13, 3, 260, col)
			if g.currentMessageIndex == 7 {
				text.Draw(screen, "www.kennedy24.com", basicfont.Face7x13, 41, 275, col)
			}
		}
		drawPiece(screen, gameOverBottom, 0, 300)
	}
}

// ResetGame resets the game to its initial state.
// It clears the game board, sets the current piece to nil, resets the score, and sets the game state to playing.
func (g *Game) ResetGame() {
	g.board = [height][width]int{}
	g.currentPiece = nil
	g.score = 0
	g.state = StatePlaying
}

// CreateNewPiece generates a new Tetris piece with its associated color.
// It randomly selects one of the predefined piece shapes and their corresponding colors, returning both.
func (g *Game) CreateNewPiece() ([][]int, color.RGBA) {

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

// SpawnPiece manages the current and next pieces on the game board.
// If no pieces are present, it initializes both current and next pieces.
// Otherwise, it shifts the next piece to current and generates a new next piece.
// The new current piece is positioned at the top center of the game board.
func (g *Game) SpawnPiece() {
	if g.currentPiece == nil && g.nextPiece == nil {
		// Initially spawn two pieces
		g.currentPiece, g.currentPieceColor = g.CreateNewPiece()
		g.nextPiece, g.nextPieceColor = g.CreateNewPiece()
	} else {
		// Move nextPiece to current and spawn a new nextPiece
		g.currentPiece, g.currentPieceColor = g.nextPiece, g.nextPieceColor
		g.nextPiece, g.nextPieceColor = g.CreateNewPiece()
	}

	g.currentX = width/2 - 2 // Center the new current piece horizontally
	g.currentY = 0           // Start the new piece at the top of the board
}

// Check if the current piece can move to a specified location
func (g *Game) CanMove(x, y int) bool {
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
func (g *Game) PlacePiece() {
	for py := 0; py < 4; py++ {
		for px := 0; px < 4; px++ {
			if g.currentPiece[py][px] != 0 {
				g.board[g.currentY+py][g.currentX+px] = 1 // Adjust the value based on the type of piece
			}
		}
	}
	g.currentPiece = nil // Clear the current piece after placing it
	g.score += 5         // Add 5 points for placing the piece
	placeSound.Rewind()  // Rewind to the start of the sound
	placeSound.Play()    // Play the sound
}

// ClearFullLines removes all filled rows from the game board, moves all above rows down, and updates the score.
// It checks rows from the bottom to the top, ensuring that multiple lines cleared in one move are handled correctly.
func (g *Game) ClearFullLines() {
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
