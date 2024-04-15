package handlers

import (
	"encoding/gob"
	"log"
	"net/http"
	"os"
	"strconv"
	"testing"
	"time"

	"foxcode.io/internal/config"
	"foxcode.io/internal/driver"
	"foxcode.io/internal/render"
	"foxcode.io/models"
	"foxcode.io/pkg/envloader"
	"github.com/alexedwards/scs/v2"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"github.com/justinas/nosurf"

	"html/template"
	"path/filepath"
)

var app config.AppConfig
var session *scs.SessionManager

func TestMain(m *testing.M) {
	// -- from main.go -------------------------------------------------

	// Load environment variables
	app.RootPath = "../../"
	envVars, err := envloader.LoadEnvFile(app.RootPath + ".env")
	if err != nil {
		log.Fatalf("Error loading environment variables: %v", err)
	}
	app.Env = envVars

	// Register the models.Reservation type with gob to enable automatic encoding
	// and decoding in sessions, ensuring smooth serialization and deserialization.
	gob.Register(models.Reservation{})

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

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	app.InfoLog = infoLog

	errorLog := log.New(os.Stdout, "Error\t", log.Ldate|log.Ltime|log.Lshortfile)
	app.ErrorLog = errorLog

	// Create template cache
	templateCache, err := CreateTestTemplateCache()
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

	// Connecting to database
	_, err = driver.ConnectSQL(app.Env["DATABASE_URL"])

	if err != nil {
		log.Fatal("Cannot connect to database! Drying...")
	}

	// Initialize a new repository for handlers with the provided application configuration.
	// This creates a new Repository instance.
	repo := InitializeTestRepository(&app)

	// Set the initialized repository for use in the handlers package
	// by associating it with the global 'handlers.Repo'.
	SetHandlersRepository(repo)

	os.Exit(m.Run())
}

func getRoutes() http.Handler {

	// -- from routes.go -----------------------------------------------

	// Create a new Chi router.
	mux := chi.NewRouter()

	// Use middleware to recover from panics, log hits, prevent CSRF attacks, and manage sessions.
	mux.Use(middleware.Recoverer)
	mux.Use(hitLogger)
	// mux.Use(noSurf)
	mux.Use(sessionLoad)

	// Define routes and associate them with corresponding handlers from the repository.
	mux.Get("/", Repo.HomeHandler)
	mux.Get("/about", Repo.AboutHandler)

	mux.Get("/contact", Repo.ContactHandler)
	mux.Get("/eremite", Repo.EremiteHandler)
	mux.Get("/couple", Repo.CoupleHandler)
	mux.Get("/family", Repo.FamilyHandler)
	mux.Get("/reservation", Repo.ReservationHandler)
	mux.Post("/reservation", Repo.PostReservationHandler)
	mux.Post("/reservation-json", Repo.ReservationHandlerJSON)
	mux.Get("/make-reservation", Repo.MakeReservationHandler)
	mux.Post("/make-reservation", Repo.PostMakeReservation)
	mux.Get("/reservation-overview", Repo.ReservationOverview)

	// Serve static files from the "static" directory.
	fileServer := http.FileServer(http.Dir(app.RootPath + "static/"))
	mux.Handle("/static/*", http.StripPrefix("/static", fileServer))

	// Return the configured Chi router as the HTTP handler.
	return mux

}

// hitLogger is a middleware that logs a message every time a request is received.
func hitLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Println("HIT ... the road, Jack ...")
		next.ServeHTTP(w, r)
	})
}

// ---------------------------------------------------------------------

// noSurf is a middleware that adds CSRF protection using the nosurf package.
func noSurf(next http.Handler) http.Handler {
	// Create a new nosurf middleware with the provided handler as the next handler.
	csrfHandler := nosurf.New(next)

	// Set the base cookie configuration for CSRF protection.
	cookieSecure, _ := strconv.ParseBool(app.Env["COOKIE_SECURE"])

	csrfHandler.SetBaseCookie(http.Cookie{
		HttpOnly: true,                 // Ensures the cookie is only accessible through HTTP requests
		Path:     "/",                  // The path for which the cookie is valid
		Secure:   cookieSecure,         // Indicates if the cookie should only be sent over HTTPS (false for development)
		SameSite: http.SameSiteLaxMode, // Configures when the browser should send the cookie in cross-site requests
	})

	// Return the configured CSRF protection middleware.
	return csrfHandler
}

// ---------------------------------------------------------------------

// sessionLoad is a middleware that loads and saves session data using the session package.
func sessionLoad(next http.Handler) http.Handler {
	return session.LoadAndSave(next)
}

// -- frpm render ------------------------------------------------------

// CreateTestTemplateCache creates a map of template names to template sets.
// Each template set includes the main page template and any associated layout templates.
func CreateTestTemplateCache() (map[string]*template.Template, error) {

	templateCache := map[string]*template.Template{}

	// Step 1: Get all available page templates
	pages, err := filepath.Glob(app.RootPath + "templates/*-page.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Step 2: Get all available layout templates
	layouts, err := filepath.Glob(app.RootPath + "templates/layouts/*-layout.tmpl")
	if err != nil {
		return templateCache, err
	}

	// Step 3: Range through the slice of *.page.tmpl files
	for _, page := range pages {
		name := filepath.Base(page)

		// Step 4: Create a template set for the current page
		templateSet, err := template.New(name).ParseFiles(page)
		if err != nil {
			return templateCache, err
		}

		// Step 5: If layout templates exist, parse and add them to the template set
		if len(layouts) > 0 {
			templateSet, err = templateSet.ParseGlob(app.RootPath + "templates/layouts/*-layout.tmpl")
			if err != nil {
				return templateCache, err
			}
		}

		// Step 6: Add the template set to the cache with the template name as the key
		templateCache[name] = templateSet
	}

	// Step 7: Return the populated template cache
	return templateCache, nil
}
