package repository

import "github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/models"

type DatabaseRepo interface {
	SelectAllRecipes() ([]models.Recipe, error)
	CreateRecipe(name string, ingredientIDs []int) (*models.Recipe, error)
	SelectAllIngredients() ([]models.Ingredient, error)
	CreateIngredient(name string) (*models.Ingredient, error)
}
