package main

import (
	"encoding/json"
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
	mux := http.NewServeMux()

	// Register the routes and handlers
	mux.Handle("/", &homeHandler{})
	mux.Handle("/recipes", recipesHandler)
	mux.Handle("/recipes/", recipesHandler)

	// Run the server
	http.ListenAndServe(":8080", mux)
}

// ---------------------------------------------------------------------

type homeHandler struct{}

func (h *homeHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
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
	RecipeRe       = regexp.MustCompile(`^/recipes/?$`)
	RecipeReWithID = regexp.MustCompile(`^/recipes/([a-z0-9]+(?:-[a-z0-9]+)+)$`)
)

// -------------------------

func (h *RecipesHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	switch {
	// Handle creating a new recipe: POST /recipes or /recipes/
	case r.Method == http.MethodPost && RecipeRe.MatchString(r.URL.Path):
		h.CreateRecipe(w, r)

	// Handle listing all recipes: GET /recipes or /recipes/
	case r.Method == http.MethodGet && RecipeRe.MatchString(r.URL.Path):
		h.ListRecipe(w, r)

	// Handle fetching a single recipe by ID: GET /recipes/{id}
	case r.Method == http.MethodGet && RecipeReWithID.MatchString(r.URL.Path):
		h.GetRecipe(w, r)

	// Handle updating a recipe by ID: PUT /recipes/{id}
	case r.Method == http.MethodPut && RecipeReWithID.MatchString(r.URL.Path):
		h.UpdateRecipe(w, r)

	// Handle deleting a recipe by ID: DELETE /recipes/{id}
	case r.Method == http.MethodDelete && RecipeReWithID.MatchString(r.URL.Path):
		h.DeleteRecipe(w, r)

	// Default case for unmatched routes or methods
	default:
		NotFountHandler(w, r)
	}
}

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

func (h *RecipesHandler) ListRecipe(w http.ResponseWriter, r *http.Request)   {}
func (h *RecipesHandler) GetRecipe(w http.ResponseWriter, r *http.Request)    {}
func (h *RecipesHandler) UpdateRecipe(w http.ResponseWriter, r *http.Request) {}
func (h *RecipesHandler) DeleteRecipe(w http.ResponseWriter, r *http.Request) {}

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

func NotFountHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotFound)
	w.Write([]byte("404 Not Found"))
}

// ---------------------------------------------------------------------
