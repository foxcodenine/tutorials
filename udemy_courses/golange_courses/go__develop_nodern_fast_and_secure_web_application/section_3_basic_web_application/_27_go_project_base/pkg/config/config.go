package config

import "html/template"

// AppConfig holds the application configuration.
type AppConfig struct {
	TemplateCache map[string]*template.Template
	Env           map[string]string
	UseCache      bool
}
