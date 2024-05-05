package main

import (
	"encoding/gob"
	"fmt"
	"log"
	"net/http"

	// "net/smtp"
	"os"
	"strconv"
	"time"

	"foxcode.io/internal/config"
	"foxcode.io/internal/driver"
	"foxcode.io/internal/handlers"
	"foxcode.io/internal/helpers"
	"foxcode.io/internal/render"
	"foxcode.io/models"
	"foxcode.io/pkg/envloader"
	"github.com/alexedwards/scs/v2"
)

// ---------------------------------------------------------------------

var app config.AppConfig
var session *scs.SessionManager
var infoLog *log.Logger
var errorLog *log.Logger

func main() {
	db, err := run()

	if err != nil {
		log.Fatal(err)
	}

	defer db.SQL.Close()
	defer close(app.MailChan)

	listenForMail()
	fmt.Println("Starting mail listener...")

	// ------------------------------------------

	// msg := models.MailData{
	// 	To:      "john@do.ca",
	// 	From:    "me@here.com",
	// 	Subject: "Test Email",
	// 	Content: "Test Body",
	// }

	// app.MailChan <- msg

	// ------------------------------------------

	// from := "me@here.com"
	// to := []string{"me@there.com"}
	// auth := smtp.PlainAuth("", from, "", "localhost")
	// err = smtp.SendMail("localhost:1025", auth, from, to, []byte("Hello, world"))
	// if err != nil {
	// 	log.Println(err)
	// }

	// ------------------------------------------

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

func run() (*driver.DB, error) {
	// Load environment variables
	app.RootPath = "./"

	if os.Getenv("APP_ENV") == "test" {
		app.RootPath = "../../"
	}
	envVars, err := envloader.LoadEnvFile(app.RootPath + ".env")
	if err != nil {
		log.Fatalf("Error loading environment variables: %v", err)
	}
	app.Env = envVars

	// Register the models.Reservation type with gob to enable automatic encoding
	// and decoding in sessions, ensuring smooth serialization and deserialization.
	gob.Register(models.User{})
	gob.Register(models.Room{})
	gob.Register(models.Restriction{})
	gob.Register(models.Reservation{})
	gob.Register(models.RoomRestriction{})
	gob.Register(map[string]int{})

	// ------------------------------------------

	mailChan := make(chan models.MailData)
	app.MailChan = mailChan

	// ------------------------------------------

	// Set application configuration for rendering
	render.SetAppConfig(&app)
	helpers.SetAppConfig(&app)

	// Create a new session manager with a 24-hour lifetime.
	session = scs.New()
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist, _ = strconv.ParseBool(app.Env["COOKIE_PERSIST"])
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure, _ = strconv.ParseBool(app.Env["COOKIE_SECURE"])

	app.InProduction = false

	infoLog = log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	app.InfoLog = infoLog

	errorLog = log.New(os.Stdout, "Error\t", log.Ldate|log.Ltime|log.Lshortfile)
	app.ErrorLog = errorLog

	// Set the session manager in the application configuration.
	app.Session = session

	// Connecting to database
	db, err := driver.ConnectSQL(app.Env["DATABASE_URL"])

	if err != nil {
		log.Fatal("Cannot connect to database! Drying...")
	}
	log.Println("Connecting to database!")

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

	// Initialize a new repository for handlers with the provided application configuration.
	// This creates a new Repository instance.
	repo := handlers.InitializeRepository(&app, db)

	// Set the initialized repository for use in the handlers package
	// by associating it with the global 'handlers.Repo'.
	handlers.SetHandlersRepository(repo)

	return db, nil

}
