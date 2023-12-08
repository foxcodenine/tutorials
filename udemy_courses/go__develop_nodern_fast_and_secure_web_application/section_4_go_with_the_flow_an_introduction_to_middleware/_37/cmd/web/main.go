package main

import (
	"log"
	"net/http"
	"strconv"

	"foxcode.io/pkg/config"
	"foxcode.io/pkg/envloader"
	"foxcode.io/pkg/handlers"
	"foxcode.io/pkg/render"
)

// ---------------------------------------------------------------------

func main() {
	var app config.AppConfig

	// Create template cache
	templateCache, err := render.CreateTemplateCache()
	if err != nil {
		log.Fatalf("Error creating template cache: %v", err)
	}

	app.TemplateCache = templateCache
	render.SetAppConfig(&app)

	// Load environment variables
	envVars, err := envloader.LoadEnvFile("../../.env")
	if err != nil {
		log.Fatalf("Error loading environment variables: %v", err)
	}
	app.Env = envVars

	// Convert USE_CACHE string to boolean and assign it app.UseCache
	useCache, err := strconv.ParseBool(app.Env["USE_CACHE"])
	if err != nil {
		log.Fatalf("Error converting USE_CACHE to boolean: %v", err)
	}
	app.UseCache = useCache

	// Create and set a new repository for handlers.
	repo := handlers.CreateRepository(&app)
	handlers.SetHandlersRepository(repo)

	// Get port number from environment variables
	portNumber := app.Env["PORT_NUMBER"]

	// Set up handlers for the home and about pages
	http.HandleFunc("/", repo.HomeHandler)
	http.HandleFunc("/about", repo.AboutHandler)

	// Start the HTTP server
	log.Printf("\nStarting application http://localhost%s", portNumber)
	log.Fatal(http.ListenAndServe(portNumber, nil))
}
