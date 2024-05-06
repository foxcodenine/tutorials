package controllers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"runtime"
	"strconv"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/repository"
	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/repository/dbRepo"

	"github.com/go-playground/validator/v10"

	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/config"

	"github.com/go-chi/chi/v5"
)

// ---------------------------------------------------------------------

type RecipeController struct {
	App *config.AppConfig
	DB  repository.DatabaseRepo
}

var recipeController RecipeController

// ---------------------------------------------------------------------

func InitRecipeController(app *config.AppConfig) *RecipeController {
	recipeController.App = app
	recipeController.DB = dbRepo.NewDbRepo(app)
	return &recipeController
}

func ImportRecipeController() *RecipeController {
	return &recipeController
}

// ---------------------------------------------------------------------

func (c *RecipeController) Index(w http.ResponseWriter, r *http.Request) {

	recipes, err := c.DB.SelectAllRecipes()

	if err != nil {
		log.Println("! RecipeController Index !")
		log.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(recipes)
}

// ---------------------------------------------------------------------
type RecipeData struct {
	Name        string   `json:"name" validate:"required"`
	Ingredients []string `json:"ingredients" validate:"required"`
}

func (c *RecipeController) Store(w http.ResponseWriter, r *http.Request) {

	var data RecipeData
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, "Invalid JSON data: "+err.Error(), http.StatusBadRequest)
	}

	validate := validator.New()
	err = validate.Struct(data)
	if err != nil {
		http.Error(w, "Validation error: "+err.Error(), http.StatusBadRequest)
	}

	newRecipe, err := c.DB.CreateRecipe(data.Name, data.Ingredients)
	if err != nil {
		http.Error(w, "Internal server error: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newRecipe)

}

// ---------------------------------------------------------------------

func (c *RecipeController) Show(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		fmt.Println("Error converting string to int32:", err)
	}

	fetchedRecipe, err := c.DB.SelectRecipe(id)
	if err != nil {

		if err.Error() == "recipe not found" {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		http.Error(w, "Internal server error: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(fetchedRecipe)
}

// ---------------------------------------------------------------------

func (c *RecipeController) Update(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		fmt.Println("Error converting string to int32:", err)
	}

	var data RecipeData
	err = json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, "Invalid JSON data: "+err.Error(), http.StatusBadRequest)
	}

	_, err = c.DB.UpdateRecipe(id, data.Name, data.Ingredients)
	if err != nil {
		http.Error(w, "Internal server error: "+err.Error(), http.StatusInternalServerError)
		return
	}
}

// ---------------------------------------------------------------------

func (c *RecipeController) Delete(w http.ResponseWriter, r *http.Request) {

	id, err := strconv.Atoi(chi.URLParam(r, "id"))

	if err != nil {
		fmt.Println("Error converting string to int32:", err)
	}

	err = c.DB.RemoveRecordById("recipes", id)

	if err != nil {

		_, file, line, ok := runtime.Caller(1)

		if ok {

			fmt.Printf("\n%s - %d", file, line)
		}

		http.Error(w, "Internal server error: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// -------------------------------------

	c.Index(w, r)
}

// ---------------------------------------------------------------------
