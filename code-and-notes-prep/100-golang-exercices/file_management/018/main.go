package main

import (
	"log"
	"os"
)

func main() {

	newFile, err := os.Create("newFile")

	if err != nil {
		log.Fatal(err)
	}

	country := []string{
		"Malta",
		"UK",
		"Italy",
		"Philippines",
		"China",
	}

	for _, c := range country {
		i, err := newFile.WriteString(c + "\n")

		if err != nil {
			log.Fatal(err)
		}

		log.Println(i, c)
	}
}
