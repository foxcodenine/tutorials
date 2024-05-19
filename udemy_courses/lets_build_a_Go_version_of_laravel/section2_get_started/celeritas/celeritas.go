package celeritas

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/joho/godotenv"
)

// version specifies the current version of the Celeritas package.
const version = "1.0.0"

// Celeritas is the main struct for the application, containing configuration settings.
type Celeritas struct {
	AppName  string      // Name of the application
	Debug    bool        // Debug mode flag
	Version  string      // Version of the application
	ErrorLog *log.Logger // Logger for error messages
	InfoLog  *log.Logger // Logger for informational messages
	RootPath string      // Root path of the application
	Routes   *chi.Mux    // HTTP routes for the application
	config   config      // Configuration settings
}

// config holds configuration settings for the application.
type config struct {
	port     string // Port for the application
	renderer string // Renderer for the application
}

// New initializes a new Celeritas instance with the given root path.
func (c *Celeritas) New(rootPath string) error {
	// Define the initial paths configuration
	pathConfig := initPaths{
		rootPath: rootPath,
		folderNames: []string{
			"handlers",
			"migrations",
			"views",
			"data",
			"public",
			"logs",
			"middleware",
		},
	}

	// Initialize directories as per the path configuration
	if err := c.Init(pathConfig); err != nil {
		return err
	}

	// Check and create .env file if it doesn't exist
	if err := c.checkDotEnv(rootPath); err != nil {
		return err
	}

	// Load environment variables from .env file
	if err := godotenv.Load(rootPath + "/.env"); err != nil {
		return err
	}

	// Initialize loggers for informational and error messages
	infoLog, errorLog := c.startLoggers()
	c.InfoLog = infoLog
	c.ErrorLog = errorLog

	// Set debug mode based on the environment variable
	c.Debug, _ = strconv.ParseBool(os.Getenv("DEBUG"))

	// Set the version of the application
	c.Version = version

	// Set the root path of the application
	c.RootPath = rootPath

	// Initialize the HTTP routes
	c.Routes = c.routes().(*chi.Mux)

	// Set configuration settings based on environment variables
	c.config = config{
		port:     os.Getenv("PORT"),
		renderer: os.Getenv("RENDERER"),
	}

	return nil
}

// Init creates the necessary directories based on the provided path configuration.
func (c *Celeritas) Init(p initPaths) error {
	root := p.rootPath

	// Iterate over each folder name and create it if it doesn't exist
	for _, path := range p.folderNames {
		if err := c.CreateDirIfNotExist(root + "/" + path); err != nil {
			return err
		}
	}

	return nil
}

// ListenAndServe starts the HTTP server with the specified configuration.
func (c *Celeritas) ListenAndServe() {
	// Create a new HTTP server with the specified settings
	srv := &http.Server{
		Addr:         fmt.Sprintf(":%s", os.Getenv("PORT")), // Set the server address from the PORT environment variable
		ErrorLog:     c.ErrorLog,                            // Set the error logger
		Handler:      c.routes(),                            // Set the HTTP handler
		IdleTimeout:  30 * time.Second,                      // Set the idle timeout duration
		ReadTimeout:  30 * time.Second,                      // Set the read timeout duration
		WriteTimeout: 600 * time.Second,                     // Set the write timeout duration
	}

	// Log the server start information
	c.InfoLog.Printf("Listening on port %s", c.config.port)

	// Start the server and log any errors that occur
	err := srv.ListenAndServe()
	c.ErrorLog.Fatal(err)
}

// checkDotEnv checks for the existence of a .env file and creates it if it doesn't exist.
func (c *Celeritas) checkDotEnv(path string) error {
	if err := c.CreateFileIfNotExist(fmt.Sprintf("%s/.env", path)); err != nil {
		return err
	}
	return nil
}

// startLoggers initializes and returns loggers for informational and error messages.
func (c *Celeritas) startLoggers() (*log.Logger, *log.Logger) {
	// Initialize the informational logger
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)

	// Initialize the error logger
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	return infoLog, errorLog
}
