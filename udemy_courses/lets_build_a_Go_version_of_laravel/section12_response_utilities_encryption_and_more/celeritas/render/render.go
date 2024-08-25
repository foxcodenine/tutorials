package render

import (
	"errors"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"strings"

	"github.com/CloudyKit/jet/v6"
	"github.com/alexedwards/scs/v2"
)

// Render is the main struct for rendering templates, containing configuration settings.
type Render struct {
	Renderer   string              // Type of renderer to use (e.g., "go", "jet")
	RootPath   string              // Root path of the application
	Secure     bool                // Flag to indicate if the application is running in secure mode (HTTPS)
	Port       string              // Port on which the application is running
	ServerName string              // Name of the server
	JetViews   *jet.Set            // Jet template set
	Session    *scs.SessionManager // Session manager for user sessions
}

// TemplateData holds data to be passed to templates.
type TemplateData struct {
	IsAuthenticated bool                   // Authentication status
	InitMap         map[string]int         // Map of integer data
	StringMap       map[string]string      // Map of string data
	FloatMap        map[string]float32     // Map of float data
	Data            map[string]interface{} // General data map
	CSRFToken       string                 // CSRF token for security
	Port            string                 // Port on which the application is running
	ServerName      string                 // Name of the server
	Secure          bool                   // Flag to indicate if the application is running in secure mode (HTTPS)
}

// defaultData adds default settings to TemplateData prior to rendering.
func (c *Render) defaultData(td *TemplateData, r *http.Request) *TemplateData {
	td.Secure = c.Secure

	td.ServerName = c.ServerName

	td.Port = c.Port

	if c.Session.Exists(r.Context(), "userID") {
		td.IsAuthenticated = true
	}
	return td
}

// Page renders a template page based on the specified renderer.
func (c *Render) Page(w http.ResponseWriter, r *http.Request, view string, variables, data interface{}) error {
	switch strings.ToLower(c.Renderer) {
	case "go":
		return c.GoPage(w, r, view, data) // Render using Go templates
	case "jet":
		return c.JetPage(w, r, view, variables, data)
	default:
	}

	return errors.New("no rendering engine spacified")

}

// GoPage renders a page using Go templates.
func (c *Render) GoPage(w http.ResponseWriter, r *http.Request, view string, data interface{}) error {
	// Parse the specified template file
	tmpl, err := template.ParseFiles(fmt.Sprintf("%s/views/%s.page.tmpl", c.RootPath, view))
	if err != nil {
		return err
	}

	// Initialize template data
	td := &TemplateData{}
	if data != nil {
		td = data.(*TemplateData) // Cast 'data' to '*TemplateData'
	}

	// Execute the template and write the output to the response writer
	err = tmpl.Execute(w, td)
	if err != nil {
		return err
	}

	return nil
}

// JetPage renders a page using Jet templates.
func (c *Render) JetPage(w http.ResponseWriter, r *http.Request, templateName string, variables, data interface{}) error {

	// Initialize Jet variable map
	var vars jet.VarMap
	if variables == nil {
		// Create a new variable map if 'variables' is nil
		vars = make(jet.VarMap)
	} else {
		// Cast 'variables' to 'jet.VarMap'
		vars = variables.(jet.VarMap)
	}

	// Initialize template data
	td := &TemplateData{}
	if data != nil {
		td = data.(*TemplateData)
	}

	td = c.defaultData(td, r)

	// Get the Jet template
	template, err := c.JetViews.GetTemplate(fmt.Sprintf("%s.jet", templateName))
	if err != nil {
		log.Println(err)
		return err
	}

	// Execute the Jet template and write the output to the response writer
	err = template.Execute(w, vars, td)
	if err != nil {
		log.Println(err)
		return err
	}

	return nil
}
