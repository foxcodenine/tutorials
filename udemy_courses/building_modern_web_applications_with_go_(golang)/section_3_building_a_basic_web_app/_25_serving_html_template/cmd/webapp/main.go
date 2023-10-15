package main

import (
	"fmt"
	"foxcodenine/building_modern_web_applications_with_go/pkg/handlers"
	"net/http"
)

const portNumber = ":8080"

// ---------------------------------------------------------------------

func main() {
	// Register handlers for the home and about routes.
	http.HandleFunc("/", handlers.Home)
	http.HandleFunc("/about", handlers.About)

	// Start the HTTP server and listen on port 'portNumber'.
	fmt.Println(fmt.Sprintf("Starting application: http://localhost%s", portNumber))
	_ = http.ListenAndServe(portNumber, nil)
}

// ---------------------------------------------------------------------
//lint:file-ignore SA1006 Ignore SA1006 warning for this file
//lint:file-ignore S1038 Ignore S1038 warning for this file
