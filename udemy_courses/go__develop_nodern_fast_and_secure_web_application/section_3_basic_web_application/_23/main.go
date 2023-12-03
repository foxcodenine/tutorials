package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

// HomeHandler handles requests to the home page
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	n, err := fmt.Fprintf(w, "This is the home page!")

	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("\nBytes written: %d", n)
}

// AboutHandler handles requests to the about page
func AboutHandler(w http.ResponseWriter, r *http.Request) {
	owner, saying := getData()
	sum := addValues(2, 2)

	n, err := fmt.Fprintf(w, fmt.Sprintf("This is the about page of %s, \nI like to say %s, \nand as a side note, 2 + 2 is %d", owner, saying, sum))
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("\nBytes written: %d", n)
}

// DivideHandler divides one value into another and returns message with result
func DivideHandler(w http.ResponseWriter, r *http.Request) {
	x := 100.0
	y := 2.0
	f, err := divideValues(x, y)
	if err != nil {
		_, _ = fmt.Fprintf(w, "Error: Division by zero is not a valid operation. Error returned: %s", err)
		return
	}
	_, _ = fmt.Fprintf(w, fmt.Sprintf("%f divided by %f is %f", x, y, f))
}

// ---------------------------------------------------------------------

// addValues adds two ints x and y, and returns the sum
func addValues(x, y int) int {
	return x + y
}

// divideValues divides two float64 numbers x and y, and returns the result and an error if y is zero
func divideValues(x, y float64) (float64, error) {
	if y == 0 {
		err := errors.New("divisor is zero")
		return 0, err
	}
	result := x / y

	return result, nil
}

// getData returns a name and a saying
func getData() (string, string) {
	o := "Rick Sanchez"
	s := "Wubba Lubba Dub Dub!"
	return o, s
}

// ---------------------------------------------------------------------

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatalf("unable to load .env file: %e", err)
	}

	portNumber := os.Getenv("PORT_NUMBER")

	// Set up handlers for the home and about pages
	http.HandleFunc("/", HomeHandler)
	http.HandleFunc("/about", AboutHandler)
	http.HandleFunc("/divide", DivideHandler)

	// Start the HTTP server on port 8080
	fmt.Printf("\nStarting application on port %s", portNumber)
	http.ListenAndServe(portNumber, nil)
}
