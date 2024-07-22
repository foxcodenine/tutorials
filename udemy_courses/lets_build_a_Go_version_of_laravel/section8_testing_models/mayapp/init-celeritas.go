package main

import (
	"log"
	"myapp/data"
	"myapp/handlers"
	"os"

	"github.com/foxcodenine/celeritas"
)

// initApplication initializes the application with Celeritas framework.
func initApplication() *application {
	// Get the current working directory
	path, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	// Create a new instance of Celeritas
	cel := &celeritas.Celeritas{}
	if err = cel.New(path); err != nil {
		log.Fatal(err)
	}

	// Set application-specific settings
	cel.AppName = "myapp"

	// Initialize handlers with a reference to the Celeritas instance.
	myHandlers := &handlers.Handlers{
		App: cel,
	}

	// Create and return the application instance
	app := &application{
		App:      cel,
		Handlers: myHandlers,
	}

	// Initialize and assign the routes for the application.
	app.App.Routes = app.routes()

	// Initialize models using the database connection from Celeritas.
	app.Models = data.New(app.App.DB.Pool)

	myHandlers.Models = app.Models

	return app
}
