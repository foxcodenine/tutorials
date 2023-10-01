package main

import (
	// "fmt"
	"html/template"
	"log"
	"myapp/rps"
	"net/http"
)

// ---------------------------------------------------------------------

func homePage(w http.ResponseWriter, r *http.Request) {

	// html := `<strong>Hello, world!</strong>`
	// w.Header().Set("Content-Type", "text/html")
	// fmt.Fprint(w, html)

	// ------------------------------------------

	renderTemplate(w, "./index.html")

}

// ---------------------------------------------------------------------

func playRound(w http.ResponseWriter, r *http.Request) {
	winner, computerChoice, roundResult := rps.PlayRound(1)
	log.Println(winner, computerChoice, roundResult)
}

// ---------------------------------------------------------------------

func renderTemplate(w http.ResponseWriter, page string) {
	t, err := template.ParseFiles(page)

	if err != nil {
		log.Println(err)
		return
	}

	err = t.Execute(w, nil)

	if err != nil {
		log.Println(err)
		return
	}
}

// ---------------------------------------------------------------------

func main() {

	http.HandleFunc("/play", playRound)
	http.HandleFunc("/", homePage)

	port := ":8080"

	log.Printf("start web server at http://localhost%s", port)
	http.ListenAndServe(port, nil)
}

// ---------------------------------------------------------------------
