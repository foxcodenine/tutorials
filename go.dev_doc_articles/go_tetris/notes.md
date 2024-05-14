#### Ubuntu installation

sudo apt update
sudo apt install libx11-dev libxrandr-dev libxinerama-dev libxcursor-dev libxi-dev
sudo apt install libgl1-mesa-dev
sudo apt install libxxf86vm-dev
sudo apt-get install libasound2-dev

#### External Packages
go get github.com/hajimehoshi/ebiten/v2
go get golang.org/x/image/font/basicfont
go get github.com/hajimehoshi/ebiten/v2/audio@v2.7.3
go get github.com/hajimehoshi/ebiten/v2/audio/mp3@v2.7.3
go get golang.org/x/image/font/sfnt@v0.16.0

#### Commands

    $ go mod init github.com/foxcodenine
    $ go mod tidy
    $ go run main.go
    $ go build -o go-tetris

Building a Windows Executable from Linux    

    # Set target OS to Windows
    $ export GOOS=windows

    # Set architecture to 64-bit
    $ export GOARCH=386              // <- target 32-bit Windows systems
    $ export GOARCH=amd64            // <- target 64-bit Windows systems

    # Build your project
    $ go build -o Tetris.exe


#### ToDo List

1. Pause and Resume Feature: Implement a pause/resume functionality to improve user experience 
3. Game Over Acknowledgment: Include a 'Thank You' message at the game over screen's bottom.
5. Line Clearance Sound: Add a sound effect for clearing lines.
6. Sound Volume Control: Integrate settings to adjust sound effects and music volume levels. + and - with btn
7. High Score Tracking: Maintain a high score list to record players' achievements.

2. Placement Points: Award 5 extra points for each piece placed.
4. Start Screen Display: Show a 180-degree rotated 'T' piece at the start screen top.
