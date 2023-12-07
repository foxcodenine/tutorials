package config

import "html/template"

// AppConfig holds the application configuration.
type AppConfig struct {
	// TemplateCache is a map storing pre-parsed HTML templates.
	TemplateCache map[string]*template.Template

	// Env is a map holding environment variables.
	Env map[string]string

	UseCache bool
}
