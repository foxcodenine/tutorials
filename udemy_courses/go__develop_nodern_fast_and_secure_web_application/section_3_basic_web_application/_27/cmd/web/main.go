package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"foxcode.io/pkg/handlers"
	"github.com/joho/godotenv"
)

// ---------------------------------------------------------------------

func main() {

	err := godotenv.Load("../../.env")
	if err != nil {
		log.Fatalf("unable to load .env file: %e", err)
	}

	portNumber := os.Getenv("PORT_NUMBER")

	// Set up handlers for the home and about pages
	http.HandleFunc("/", handlers.HomeHandler)
	http.HandleFunc("/about", handlers.AboutHandler)

	// Start the HTTP server on port 8080
	fmt.Printf("\nStarting application http://localhost%s", portNumber)
	http.ListenAndServe(portNumber, nil)
}
