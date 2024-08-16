package main

import (
	"log"
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
	cel.InfoLog.Println("Debug:", cel.Debug)

	// Create and return the application instance
	app := &application{
		App: cel,
	}

	return app
}
