package config

import (
	"html/template"
	"log"
)

// AppConfig hold the application config
type AppConfig struct {
	TemplateCache map[string]*template.Template

	InfoLog *log.Logger
}
