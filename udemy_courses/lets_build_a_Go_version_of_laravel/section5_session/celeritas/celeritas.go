package celeritas

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/foxcodenine/celeritas/render"
	"github.com/foxcodenine/celeritas/session"

	"github.com/CloudyKit/jet/v6"
	"github.com/alexedwards/scs/v2"
	"github.com/go-chi/chi/v5"
	"github.com/joho/godotenv"
)

// version specifies the current version of the Celeritas package.
const version = "1.0.0"

// Celeritas is the main struct for the application, containing configuration settings.
type Celeritas struct {
	AppName  string              // Name of the application
	Debug    bool                // Debug mode flag
	Version  string              // Version of the application
	ErrorLog *log.Logger         // Logger for error messages
	InfoLog  *log.Logger         // Logger for informational messages
	RootPath string              // Root path of the application
	Routes   *chi.Mux            // HTTP routes for the application
	Render   *render.Render      // Template renderer for the application
	JetViews *jet.Set            // Jet template set for the application
	Session  *scs.SessionManager // Session manager for handling user sessions
	config   config              // Configuration settings
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
	c.startLoggers()

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
		host:     os.Getenv("SERVER_NAME"),
		renderer: os.Getenv("RENDERER"),
		cookie: cookieConfig{
			name:     os.Getenv("COOKIE_NAME"),
			lifetime: os.Getenv("COOKIE_LIFETIME"),
			persist:  os.Getenv("COOKIE_PERSISTS"),
			secure:   os.Getenv("COOKIE_SECURE"),
			domain:   os.Getenv("COOKIE_DOMAIN"),
		},
		sessionType: os.Getenv("SESSION_TYPE"),
	}

	// Create session
	sess := session.Session{
		CookieLifetime: c.config.cookie.lifetime,
		CookiePersist:  c.config.cookie.persist,
		CookieName:     c.config.cookie.name,
		CookieDomain:   c.config.cookie.domain,
		SessionType:    c.config.sessionType,
	}
	c.Session = sess.InitSession()

	// Initialize the Jet template engine
	var views = jet.NewSet(
		jet.NewOSFileSystemLoader(fmt.Sprintf("%s/views", c.RootPath)),
		jet.InDevelopmentMode(), // Enable development mode (remove in production)
	)
	c.JetViews = views

	// Initialize the renderer
	c.createRenderer()

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
		Handler:      c.Routes,                              // Set the HTTP handler
		IdleTimeout:  30 * time.Second,                      // Set the idle timeout duration
		ReadTimeout:  30 * time.Second,                      // Set the read timeout duration
		WriteTimeout: 600 * time.Second,                     // Set the write timeout duration
	}

	protocol := "http"
	if c.Render.Secure {
		protocol = "https"
	}

	// Log the server start information
	c.InfoLog.Printf("Server running on %s://%s:%s", protocol, c.config.host, c.config.port)

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

// startLoggers initializes loggers for informational and error messages.
func (c *Celeritas) startLoggers() {
	// Initialize the informational logger
	c.InfoLog = log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)

	// Initialize the error logger
	c.ErrorLog = log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
}

// createRenderer initializes and returns a new renderer based on the application configuration.
func (c *Celeritas) createRenderer() {
	// Initialize a new renderer with the application's configuration settings
	myRenderer := render.Render{
		Renderer: c.config.renderer,
		RootPath: c.RootPath,
		Port:     c.config.port,
		JetViews: c.JetViews,
	}

	c.Render = &myRenderer
}
