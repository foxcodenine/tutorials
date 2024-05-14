# Tetris Game

This Tetris game is built using the Ebiten 2D game library in Go. It features classic Tetris gameplay with modern sound effects and vibrant graphics.

## Features

- Classic Tetris gameplay with smooth controls and drop mechanics.
- Colorful representation of Tetris pieces.
- Sound effects for game start, game over, and line clears.
- Score tracking and level progression based on speed and efficiency.
- Responsive game design that adapts to different window sizes.

## Installation

To run this game, you'll need to install Go and configure your environment:

```bash
go get github.com/hajimehoshi/ebiten/v2
go get golang.org/x/image/font/basicfont
go get github.com/hajimehoshi/ebiten/v2/audio@v2.7.3
go get github.com/hajimehoshi/ebiten/v2/audio/mp3@v2.7.3
go get golang.org/x/image/font/sfnt@v0.16.0
```

## Running the Game

Clone the repository to your local machine and navigate to the project directory:

    git clone [your-repository-link]
    cd [project-directory]

To start the game, run:

    go run main.go


## Controls

* Arrow Left: Move piece left
* Arrow Right: Move piece right
* Arrow Down: Speed up piece descent
* Space Bar: Rotate piece clockwise

## Game States

* Start Screen: Press Enter to start the game. Instructions and credits are displayed.
* Gameplay: Control the pieces to fit them together and clear lines.
* Game Over: Displays your score and instructions to restart the game.

## Acknowledgments
* Ebiten for the awesome 2D game library.
* [Your Name] for game development and design.

## License
* This project is licensed under the MIT License - see the LICENSE.md file for details.
