package main

import (
	"log"
	"os"
)

func main() {

	filePath := "/home/foxcodenine/read.txt"
	data, err := os.ReadFile(filePath)

	if err != nil {
		log.Fatal(err)
	}

	t := string(data)

	log.Println(t)

}
