package main

import (
	"log"
	"net/http"
	"strconv"
	"time"

	"foxcode.io/internal/config"
	"foxcode.io/internal/handlers"
	"foxcode.io/internal/render"
	"foxcode.io/pkg/envloader"
	"github.com/alexedwards/scs/v2"
)

// ---------------------------------------------------------------------

var app config.AppConfig
var session *scs.SessionManager

func main() {

	// Load environment variables
	app.RootPath = "../../"
	envVars, err := envloader.LoadEnvFile(app.RootPath + ".env")
	if err != nil {
		log.Fatalf("Error loading environment variables: %v", err)
	}
	app.Env = envVars

	// Set application configuration for rendering
	render.SetAppConfig(&app)

	// Create a new session manager with a 24-hour lifetime.
	session = scs.New()
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist, _ = strconv.ParseBool(app.Env["COOKIE_PERSIST"])
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure, _ = strconv.ParseBool(app.Env["COOKIE_SECURE"])

	// Set the session manager in the application configuration.
	app.Session = session

	// Create template cache
	templateCache, err := render.CreateTemplateCache()
	if err != nil {
		log.Fatalf("Error creating template cache: %v", err)
	}

	app.TemplateCache = templateCache

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

	// Configure the HTTP server with specified address and route handlers.
	srv := &http.Server{
		Addr:    ":" + portNumber,
		Handler: routes(&app),
	}

	// Start the HTTP server.
	log.Printf("\nStarting application on http://localhost:%s", portNumber)
	err = srv.ListenAndServe()

	if err != nil {
		log.Fatalf("Error starting the HTTP server: %v", err)
	}
}
