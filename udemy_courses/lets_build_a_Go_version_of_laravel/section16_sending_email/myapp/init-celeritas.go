package main

import (
	"log"
	"myapp/data"
	"myapp/handlers"
	"myapp/middleware"
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

	myMiddleware := &middleware.Middleware{
		App: cel,
	}

	// Initialize handlers with a reference to the Celeritas instance.
	myHandlers := &handlers.Handlers{
		App: cel,
	}

	// Compose the application structure with initialized components.
	app := &application{
		App:        cel,
		Handlers:   myHandlers,
		Middleware: myMiddleware,
	}

	// Initialize and assign the routes for the application.
	app.App.Routes = app.routes()

	// Initialize models using the database connection from Celeritas.
	app.Models = data.New(app.App.DB.Pool)

	// Pass models to handlers and middleware to ensure all components have access to business logic and data layer.
	myHandlers.Models = app.Models
	myMiddleware.Models = app.Models

	// Return the fully initialized application.
	return app
}
