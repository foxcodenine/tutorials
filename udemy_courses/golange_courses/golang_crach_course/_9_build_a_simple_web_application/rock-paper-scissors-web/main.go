package main

import (
	// "fmt"
	"encoding/json"
	"html/template"
	"log"
	"myapp/rps"
	"net/http"
	"strconv"
)

// ---------------------------------------------------------------------

func homePage(w http.ResponseWriter, r *http.Request) {

	// html := `<strong>Hello, world!</strong>`
	// w.Header().Set("Content-Type", "text/html")
	// fmt.Fprint(w, html)

	// ------------------------------------------

	renderTemplate(w, "./templates/index.html")

}

// ---------------------------------------------------------------------

func playRound(w http.ResponseWriter, r *http.Request) {

	playerChoice, _ := strconv.Atoi(r.URL.Query().Get("c"))

	result := rps.PlayRound(playerChoice)

	out, err := json.MarshalIndent(result, "", "   ")

	if err != nil {
		log.Println(err)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	w.Write(out)
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

	// Serve static files from the "static" directory
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	port := ":8080"

	log.Printf("start web server at http://localhost%s", port)
	http.ListenAndServe(port, nil)
}

// ---------------------------------------------------------------------
