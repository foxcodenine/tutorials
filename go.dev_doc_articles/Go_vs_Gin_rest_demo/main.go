package main

import (
	"encoding/json"
	"log"
	"net/http"
	"regexp"

	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/recipes"
	"github.com/gosimple/slug"
)

func main() {

	// Create the Store and Recipe Handler
	store := recipes.NewMemStore()
	recipesHandler := NewRecipesHandler(store)

	// Create a new request multiplexer
	// Take incoming requests and dispatch them to the matching handlers
	router := http.NewServeMux()
	adminRouter := http.NewServeMux()

	// Register the routes and handlers
	router.Handle("GET /", &homeHandler{})

	/* using Go 1.22.2 new fetcher - http methods */
	router.Handle("POST /recipes", http.HandlerFunc(recipesHandler.CreateRecipe))
	router.Handle("GET /recipes", http.HandlerFunc(recipesHandler.ListRecipe))
	router.Handle("GET /recipes/{id}", http.HandlerFunc((recipesHandler.GetRecipe)))
	router.Handle("PUT /recipes/{id}", http.HandlerFunc(recipesHandler.UpdateRecipe))
	adminRouter.Handle("DELETE /recipes/{id}", http.HandlerFunc(recipesHandler.DeleteRecipe))

	stackedMiddlewares := CreateStack(
		stripSlashMiddleware,
		loggerMiddleware,
	)

	// ----------------------------------------------
	/* using Go 1.22.2 new fetcher - sub-routing */

	router.Handle("/", ensureAdminMiddleware(adminRouter))

	// ----------------------------------------------
	// Run the servers
	server := http.Server{
		Addr:    ":8080",
		Handler: stackedMiddlewares(router),
	}

	log.Println("Server listening on post 8080")
	server.ListenAndServe()

	// ----------------------------------------------
	/* using Go 1.22.2 new fetcher - sub-routing */
	v1 := http.NewServeMux()
	v1.Handle("/v1/", http.StripPrefix("/v1", router))
	serverV1 := http.Server{
		Addr:    ":8081",
		Handler: stackedMiddlewares(v1),
	}
	serverV1.ListenAndServe()
	// ----------------------------------------------
}

// ---------------------------------------------------------------------

type homeHandler struct{}

func (h *homeHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("This is my home page"))
}

// ---------------------------------------------------------------------

type RecipesHandler struct {
	store recipeStore
}

// -------------------------

// NewRecipesHandler - a RecipesHandler constructor
func NewRecipesHandler(s recipeStore) *RecipesHandler {
	return &RecipesHandler{
		store: s,
	}
}

// -------------------------

var (
	RecipeRex       = regexp.MustCompile(`^/recipes/?$`)
	RecipeRexWithID = regexp.MustCompile(`^/recipes/([a-z0-9]+(?:-[a-z0-9]+)+)$`)
)

// -------------------------

// -------------------------

func (h *RecipesHandler) CreateRecipe(w http.ResponseWriter, r *http.Request) {

	// Recipe object that will be populated from JSON payload
	var recipe recipes.Recipe

	err := json.NewDecoder(r.Body).Decode(&recipe)

	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}

	// Convert the name of the recipe into URL friendly string
	resourceID := slug.Make(recipe.Name)

	// Call the store to add the recipe
	err = h.store.Add(resourceID, recipe)

	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}

	// Set the status code to 200
	w.WriteHeader(http.StatusOK)
}

// -------------------------

func (h *RecipesHandler) ListRecipe(w http.ResponseWriter, r *http.Request) {
	// Retrieve the recipes from the store:

	resources, err := h.store.List()

	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}

	// Convert the return list into JSON using the json.Marshal function:

	jsonBytes, err := json.Marshal(resources)

	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}

	// Add the JSON payload to the HTTP response
	// using the Write function of http.ResponseWriter & set the header to 200:

	w.WriteHeader(http.StatusOK)
	_, err = w.Write(jsonBytes)

	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}
}

// -------------------------

func (h *RecipesHandler) GetRecipe(w http.ResponseWriter, r *http.Request) {

	/* using Go 1.22.2 new fetcher - path parameters */
	id := r.PathValue("id")

	// -----------------------------------------

	recipe, err := h.store.Get(id)

	// -----------------------------------------

	if err != nil {
		// Special case of NotFound Error
		if err == recipes.ErrNotFound {
			NotFoundHandler(w, r)
			return
		}

		// Every other error
		InternalServerErrorHandler(w, r)
		return
	}

	// Marshal the recipe into JSON format
	jsonBytes, err := json.Marshal(recipe)

	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}

	// Respond with the JSON and a 200 OK status
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)

}

// -------------------------

func (h *RecipesHandler) UpdateRecipe(w http.ResponseWriter, r *http.Request) {

	/* using Go 1.22.2 new fetcher - path parameters */
	id := r.PathValue("id")

	// -----------------------------------------

	// Declare a variable to hold the recipe data from the request body
	var recipe recipes.Recipe

	// Decode the JSON payload into the recipe struct
	err := json.NewDecoder(r.Body).Decode(&recipe)
	if err != nil {
		InternalServerErrorHandler(w, r)
		return
	}

	// Attempt to update the recipe in the store with the given ID
	err = h.store.Update(id, recipe)
	if err != nil {
		// Handle the case where the recipe does not exist
		if err == recipes.ErrNotFound {
			NotFoundHandler(w, r)
			return
		}
		// Handle any other errors
		InternalServerErrorHandler(w, r)
		return
	}

	// If the update is successful, set the status code to 200 OK
	w.WriteHeader(http.StatusOK)
}

// -------------------------

func (h *RecipesHandler) DeleteRecipe(w http.ResponseWriter, r *http.Request) {

	/* using Go 1.22.2 new fetcher - path parameters */
	id := r.PathValue("id")

	err := h.store.Remove(id)

	if err != nil {
		if err == recipes.ErrNotFound {
			NotFoundHandler(w, r)
			return
		}

		InternalServerErrorHandler(w, r)
		return
	}

	w.WriteHeader(http.StatusOK)
}

// ---------------------------------------------------------------------

type recipeStore interface {
	Add(name string, recipe recipes.Recipe) error
	Get(name string) (recipes.Recipe, error)
	Update(name string, recipes recipes.Recipe) error
	List() (map[string]recipes.Recipe, error)
	Remove(name string) error
}

// ---------------------------------------------------------------------

func InternalServerErrorHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusInternalServerError)
	w.Write([]byte("500 Internal Server Error"))
}

func NotFoundHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotFound)
	w.Write([]byte("404 Not Found"))
}

// ---------------------------------------------------------------------
