package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/repository"
	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/repository/dbRepo"
	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/config"
)

// ---------------------------------------------------------------------

type IngredientController struct {
	App *config.AppConfig
	DB  repository.DatabaseRepo
}

var ingredientController IngredientController

// ---------------------------------------------------------------------

func InitIngredientController(app *config.AppConfig) *IngredientController {
	ingredientController.App = app
	ingredientController.DB = dbRepo.NewDbRepo(app)
	return &ingredientController
}

func ImportIngredientController() *IngredientController {
	return &ingredientController
}

// ---------------------------------------------------------------------

func (c *IngredientController) Store(w http.ResponseWriter, r *http.Request) {

	var data map[string]interface{}

	err := json.NewDecoder(r.Body).Decode(&data)

	if err != nil {

		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Ensure the 'name' field exists and is a string
	name, ok := data["name"].(string)
	if !ok {
		http.Error(w, "name is required and must be a string", http.StatusBadRequest)
		return
	}

	ingredient, err := c.DB.CreateIngredient(name)

	if err != nil {

		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(ingredient)
}
