package config

import (
	"html/template"
	"log"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

// ---------------------------------------------------------------------

// ---------------------------------------------------------------------

// AppConfig holds the application configuration.
type AppConfig struct {
	TemplateCache map[string]*template.Template // TemplateCache holds cached templates for the application.
	InfoLog       *log.Logger                   // InfoLog holds the logger for the application.
	UseCach       bool                          // UseCach indicates whether the application should use the cache.
}

// ---------------------------------------------------------------------

var appPointer *AppConfig

// SetAppPointer sets the global appPointer to the provided pointer to app.
// It loads environment variables from the .env file.

func SetAppPointer(a *AppConfig) {
	// Load environment variables from a .env file.
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	appPointer = a
	appPointer.UseCach = strings.ToLower(os.Getenv("USES_CASH")) == "true"

}
