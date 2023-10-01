package main

import (
	"fmt"
	"log"
	"net/http"
)

// ---------------------------------------------------------------------

func homePage(w http.ResponseWriter, r *http.Request) {
	html := `<strong>Hello, world!</strong>`
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprint(w, html)
}

// ---------------------------------------------------------------------

func main() {

	http.HandleFunc("/", homePage)

	port := ":8080"

	log.Printf("start web server at http://localhost%s", port)
	http.ListenAndServe(port, nil)
}
