package controllers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/repository"
	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/repository/dbRepo"

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

	fmt.Println("func: index", recipes)
}

// ---------------------------------------------------------------------

func (c *RecipeController) Store(w http.ResponseWriter, r *http.Request) {
	var id, recipe string
	fmt.Println("func: store, id:", id, "recipe", recipe)
}

// ---------------------------------------------------------------------

func (c *RecipeController) Show(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	fmt.Println("func: show, id:", id)
}

// ---------------------------------------------------------------------
