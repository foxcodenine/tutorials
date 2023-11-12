package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
)

const portNumber = ":8080"

// ---------------------------------------------------------------------

// -- Home is the handler for the home page.
func Home(w http.ResponseWriter, r *http.Request) {
	n, err := fmt.Fprintf(w, "Hello, go world! This is the home page")

	if err != nil {
		log.Println(err)
	}

	fmt.Printf("\nBytes written: %d", n)
}

// -- About is the handler for the about page.
func About(w http.ResponseWriter, r *http.Request) {
	sum := addValues(2, 2)

	fmt.Fprintf(w, fmt.Sprintf("This is the about page and 2 + 2 = %d", sum))
}

func Divide(w http.ResponseWriter, r *http.Request) {

	x, y := 100.0, 0.0
	f, err := divideValues(x, y)

	if err != nil {
		fmt.Fprintf(w, "Cannot divide by 0")
		return
	}

	fmt.Fprintf(w, fmt.Sprintf("%f divide by %f is %f", x, y, f))
}

// ---------------------------------------------------------------------

// -- addValues adds two integers and returns the result.
func addValues(x, y int) int {
	return x + y
}

func divideValues(x, y float64) (float64, error) {
	if y == 0 {
		err := errors.New("cannot divide by zero")
		return 0, err
	}
	result := x / y

	return result, nil
}

// ---------------------------------------------------------------------

func main() {
	// Register handlers for the home and about routes.
	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)
	http.HandleFunc("/divide", Divide)

	// Start the HTTP server and listen on port 'portNumber'.
	fmt.Println(fmt.Sprintf("Starting application: http://localhost%s", portNumber))
	_ = http.ListenAndServe(portNumber, nil)
}

// ---------------------------------------------------------------------
//lint:file-ignore SA1006 Ignore SA1006 warning for this file
//lint:file-ignore S1038 Ignore S1038 warning for this file
