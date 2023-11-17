package main

import (
	"fmt"
	"github.com/foxcodenine/small-projects/bookings/internal/config"
	"github.com/foxcodenine/small-projects/bookings/internal/handlers"
	"github.com/foxcodenine/small-projects/bookings/internal/render"
	"log"
	"net/http"
	"time"

	"github.com/alexedwards/scs/v2"
)

const portNumber = ":8080"

// ---------------------------------------------------------------------

// Initializing an instance of the AppConfig struct.
var app config.AppConfig

// Declaring a variable for managing sessions.
var session *scs.SessionManager

// ---------------------------------------------------------------------

// main function, the entry point of the application.
func main() {

	// Sets appPointer, a pointer in the config package, to point to this app, which is an instance of AppConfig.
	config.SetAppPointer(&app)

	// ----------------------------------------------

	// Creating a new instance of the session manager.
	session = scs.New()

	// Setting the lifetime of the session to 24 hours.
	session.Lifetime = 24 * time.Hour

	// Configuring the session cookie to persist across browser sessions.
	session.Cookie.Persist = true

	// Setting the SameSite attribute of the session cookie to SameSiteLaxMode to prevent cross-site request forgery (CSRF) attacks.
	session.Cookie.SameSite = http.SameSiteLaxMode

	// Configuring the session cookie to be secure in production environments.
	session.Cookie.Secure = app.InProduction

	// Assigning the session manager to the app's Session field for usage throughout the application.
	app.Session = session

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
	/*
		http.HandleFunc("/", handlers.Repo.Home)
		http.HandleFunc("/about", handlers.Repo.About)

		// Start the HTTP server and listen on port 'portNumber'.
		fmt.Println(fmt.Sprintf("Starting application: http://localhost%s", portNumber))
		_ = http.ListenAndServe(portNumber, nil)
	*/

	// Print the application start information
	fmt.Println(fmt.Sprintf("Starting application: http://localhost%s", portNumber))

	srv := &http.Server{
		Addr:    portNumber,   // Setting the server address to the specified port number
		Handler: routes(&app), // Setting the server handler to the routes defined in the application config
	}

	// Starting the server to listen and serve incoming requests
	err = srv.ListenAndServe()
	log.Fatal(err)

}

// ---------------------------------------------------------------------
//lint:file-ignore SA1006 Ignore SA1006 warning for this file
//lint:file-ignore S1038 Ignore S1038 warning for this file
