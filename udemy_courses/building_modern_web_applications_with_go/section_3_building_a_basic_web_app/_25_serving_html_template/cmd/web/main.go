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

	// Sets appPointer, a pointer in the config package, to point to this app, which is an instance of AppConfig.
	config.SetAppPointer(&app)

	// ----------------------------------------------

	// Creating a new template cache.
	tc, err := render.CreateTemplateCache()

	if err != nil {
		log.Fatal("cannot create template cache")
	}

	// Saving the created template cache to the app's TemplateCache field.
	app.TemplateCache = tc

	// Sets app, a pointer in the render package, to point to this app, which is an instance of AppConfig.
	render.NewTemplates(&app)

	// ----------------------------------------------

	// Creating a new repository using the NewRepo function and passing the address app which is an instance of AppConfig.
	repo := handlers.NewRepo(&app)

	// Setting the created repository for the handlers using the NewHandlers function.
	handlers.NewHandlers(repo)

	// ----------------------------------------------

	// Register handlers for the home and about routes.
	http.HandleFunc("/", handlers.Repo.Home)
	http.HandleFunc("/about", handlers.Repo.About)

	// Start the HTTP server and listen on port 'portNumber'.
	fmt.Println(fmt.Sprintf("Starting application: http://localhost%s", portNumber))
	_ = http.ListenAndServe(portNumber, nil)
}

// ---------------------------------------------------------------------
//lint:file-ignore SA1006 Ignore SA1006 warning for this file
//lint:file-ignore S1038 Ignore S1038 warning for this file
