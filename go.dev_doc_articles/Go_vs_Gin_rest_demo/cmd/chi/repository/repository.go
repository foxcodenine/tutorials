package repository

import (
	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/models"
)

type DatabaseRepo interface {
	SelectAllRecipes() ([]models.Recipe, error)
	SelectRecipe(id int) (models.Recipe, error)
	CreateRecipe(name string, ingredientNames []string) (models.Recipe, error)
	UpdateRecipe(id int, name string, ingredientNames []string) (models.Recipe, error)

	SelectAllIngredients() ([]models.Ingredient, error)
	CreateIngredient(name string) (*models.Ingredient, error)

	RemoveRecordById(table string, id int) error
	RemoveRecordsByIds(table string, ids []int) error
}
