package controllers

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/config"

	"github.com/go-chi/chi/v5"
)

// ---------------------------------------------------------------------

type RecipeController struct {
	App *config.AppConfig
}

var recipeController RecipeController

// ---------------------------------------------------------------------

func InitRecipeController(app *config.AppConfig) *RecipeController {
	recipeController.App = app
	return &recipeController
}

func ImportRecipeController() *RecipeController {
	return &recipeController
}

// ---------------------------------------------------------------------

func (c *RecipeController) Index(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)

	defer cancel()

	sql := `SELECT * FROM recipes`

	var recipes []rrr

	rows, err := c.App.DB.SQL.QueryContext(ctx, sql)

	if err != nil {
		log.Println("! RecipeController (1) !")
		log.Println(err.Error())
		return
	}

	for rows.Next() {
		var r rrr

		err := rows.Scan(
			&r.id,
			&r.name,
		)
		if err != nil {
			log.Fatalln("! RecipeController (2) !")
			return
		}

		recipes = append(recipes, r)
	}

	fmt.Println("func: index", recipes)
}

type rrr struct {
	id   int
	name string
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
