package config

import (
	"html/template"
	"log"

	"foxcode.io/models"
	"github.com/alexedwards/scs/v2"
)

// AppConfig holds the application configuration.
type AppConfig struct {
	UseCache      bool
	TemplateCache map[string]*template.Template
	InfoLog       *log.Logger
	ErrorLog      *log.Logger
	InProduction  bool
	Session       *scs.SessionManager
	RootPath      string
	Env           map[string]string
	MailChan      chan models.MailData
}
