package main

import (
	"myapp/data"
	"myapp/handlers"

	"github.com/foxcodenine/celeritas"
)

// application struct holds the main components of your application.
type application struct {
	App      *celeritas.Celeritas
	Handlers *handlers.Handlers
	Models   data.Models
}

func main() {

	// Initialize the application setup.
	c := initApplication()

	// Start the web server.
	c.App.ListenAndServe()

}
