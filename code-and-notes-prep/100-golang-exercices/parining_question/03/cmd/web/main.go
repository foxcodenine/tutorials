package main

import (
	"exrecises/internal/api"
	"exrecises/internal/db"
	"exrecises/internal/models"
	"exrecises/internal/mytypes"
	"log"
	"net/http"
)

type App struct {
	DB     map[string][]mytypes.Message
	Models models.Models
}

var app App

func main() {

	db, err := db.OpenDB()

	if err != nil {
		log.Fatal(err)
	}

	app.DB = db
	app.Models = models.GetModels(db)

	r := api.NewRouter(app.Models)
	http.ListenAndServe(":3000", r)
}
