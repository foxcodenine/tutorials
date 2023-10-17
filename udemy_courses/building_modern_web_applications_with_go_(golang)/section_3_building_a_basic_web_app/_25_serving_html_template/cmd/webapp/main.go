package main

import (
	"fmt"
	"foxcodenine/building_modern_web_applications_with_go/pkg/config"
	"foxcodenine/building_modern_web_applications_with_go/pkg/handlers"
	"foxcodenine/building_modern_web_applications_with_go/pkg/render"
	"log"
	"net/http"
)

const portNumber = ":8080"

// ---------------------------------------------------------------------

// main function, the entry point of the application.
func main() {
	// Initializing an instance of the AppConfig struct.
	var app config.AppConfig

	// Creating a new template cache.
	tc, err := render.CreateTemplateCache()

	if err != nil {
		log.Fatal("cannot create template cache")
	}

	// Saving the created template cache to the app's TemplateCache field.
	app.TemplateCache = tc

	// Initializing the templates by passing the app's configuration.
	render.NewTemplates(&app)

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
