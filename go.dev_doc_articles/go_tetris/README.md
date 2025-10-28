# Tetris (Built with Go and Ebiten)

A minimalist, retro-style remake of the classic Tetris game built entirely in **Go**, using **Ebiten** for graphics and audio.  

---

## Features

- Classic Tetris gameplay with smooth and responsive controls
    
- Colorful, pixel-perfect pieces
    
- Sound effects for start, placement, line clears, and game over
    
- Scoring system with progressive speed increase
    
- Dynamic start and game over screens
    

---

## Tech Stack

Golang · Ebiten · Go Audio · Embed FS

---

## Run Locally

### Build and Run

```bash
go run main.go go build -o go-tetris
```

### Build a Windows Executable from Linux

```bash
# Set target OS to Windows
export GOOS=windows

# Set architecture
export GOARCH=386      # Target 32-bit Windows
export GOARCH=amd64    # Target 64-bit Windows

# Build the executable
go build -o Tetris.exe

```

---

## Controls

|Action|Key|
|---|---|
|Move Left|←|
|Move Right|→|
|Speed Down|↓|
|Rotate Piece|Space Bar|
|Start Game|Enter|
|Restart Game|R|

---

## Game States

- **Start Screen** – Displays title, controls, and credits
    
- **Gameplay** – Arrange pieces to clear lines and score points
    
- **Game Over** – Shows final score and alternating messages
    

---

## To Do / Ideas

- Pause and resume functionality
    
- Line-clear sound effect
    
- Volume control with `+` and `-` keys
    
- High-score tracking system
    

---

## Acknowledgments

- Ebiten for the excellent 2D game library
    
- Built with Go by **Chris Farrugia** (chrisfarrugia.dev)
    

---
