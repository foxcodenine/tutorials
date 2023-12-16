package render

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"sync"
)

// ---------------------------------------------------------------------

// RenderTemplate renders the specified template to the provided http.ResponseWriter.
func RenderTemplate(w http.ResponseWriter, tmpl string) {
	parsedTemplate, err := template.ParseFiles("../../templates/"+tmpl, "../../templates/base-layout.tmpl")
	if err != nil {
		log.Println("Error parsing template:", err)
		return
	}

	err = parsedTemplate.Execute(w, nil)
	if err != nil {
		log.Println("Error executing template:", err)
	}
}

// ---------------------------------------------------------------------

// templateCache is a concurrent-safe map to store parsed templates.
var templateCache = struct {
	sync.RWMutex                               // Embedding read-write mutex for concurrent access control
	templates    map[string]*template.Template // Map to store parsed templates with string keys
}{
	templates: make(map[string]*template.Template), // Initialize the map
}

// ---------------------------------------------------------------------

// RenderTemplateTemp renders the template using the template cache.
func RenderTemplateTemp(w http.ResponseWriter, t string) {

	templateCache.RLock() // Acquire a read lock (green light) on the template cache to allow concurrent reads
	cachedTemplate, inCache := templateCache.templates[t]
	templateCache.RUnlock() // Release the read lock once the required information is obtained

	if !inCache {
		log.Println("\n> Creating template and adding to cache")
		err := createTemplateCache(t)
		if err != nil {
			log.Println("! render.go RenderTemplateTemp 1 !", err)
			return
		}

		templateCache.RLock()
		cachedTemplate = templateCache.templates[t]
		templateCache.RUnlock()
	}

	err := cachedTemplate.Execute(w, nil)
	if err != nil {
		log.Println("! render.go RenderTemplateTemp 2 !", err)
	}
}

// ---------------------------------------------------------------------

// createTemplateCache parses the specified template files and adds them to the template cache.
func createTemplateCache(t string) error {
	templates := []string{
		fmt.Sprintf("../../templates/%s", t),
		"../../templates/base-layout.tmpl",
	}

	// Parse the template
	tmpl, err := template.ParseFiles(templates...)
	if err != nil {
		return err
	}

	// Update the template cache in a concurrent-safe way
	templateCache.Lock() // Acquire an exclusive lock (red light) for making changes to the template cache
	templateCache.templates[t] = tmpl
	templateCache.Unlock() // Release the exclusive lock in case of an error

	return nil
}

// ---------------------------------------------------------------------

/*
The RLock(), RUnlock(), Lock(), and Unlock() methods come from the
sync.RWMutex type in the Go standard library.

RLock() and RUnlock():
RLock() is used to acquire a read lock, allowing multiple goroutines to read the shared resource concurrently.
RUnlock() is used to release the read lock, allowing other goroutines to acquire it.

Lock() and Unlock():
Lock() is used to acquire an exclusive write lock, allowing only one goroutine to modify the shared resource at a time.
Unlock() is used to release the write lock, allowing other goroutines to acquire it.

*/
