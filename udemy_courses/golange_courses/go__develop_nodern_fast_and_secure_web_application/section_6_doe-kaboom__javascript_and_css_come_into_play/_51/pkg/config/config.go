package config

import "html/template"
import "github.com/alexedwards/scs/v2"

// AppConfig holds the application configuration.
type AppConfig struct {
	RootPath      string
	TemplateCache map[string]*template.Template
	Env           map[string]string
	UseCache      bool
	InProduction  bool
	Session       *scs.SessionManager
}
