package main

import (
	"fmt"
	"os"
)

func main() {

	fmt.Println("Enter a file path:")

	var filePath string

	fmt.Scanln(&filePath)

	_, err := os.Stat(filePath)

	if err != nil {
		fmt.Println("file does not exists")
	} else {
		fmt.Printf("file %s does exist\n", filePath)
	}
}
