package main

import (
	"log"
	"os"
)

func main() {

	old_file := "hello_world.txt"
	new_file := "hello_michelle.txt"

	_, err := os.Stat(old_file)

	if err != nil {
		log.Fatal(err)
	}

	err = os.Rename(old_file, new_file)

	if err != nil {
		log.Fatal(err)
	}

}
