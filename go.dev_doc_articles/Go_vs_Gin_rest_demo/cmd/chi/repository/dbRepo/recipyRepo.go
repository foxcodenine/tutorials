package dbRepo

import (
	"context"
	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/models"
	"time"
)

// ---------------------------------------------------------------------

// SelectAllRecipes retrieves all recipes from the database.
func (m *dbRepo) SelectAllRecipes() ([]models.Recipe, error) {
	// Set up a 5-second timeout for the database call.
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure cleanup of context resources.

	// SQL query to fetch all recipes.
	sql := "SELECT * FROM recipes"

	var recipes []models.Recipe // Slice to store recipes.

	// Execute the query.
	rows, err := m.DB.QueryContext(ctx, sql)
	if err != nil {
		return nil, err // Return error if the query fails.
	}

	// Process each row in the result set.
	for rows.Next() {
		var recipe models.Recipe
		if err := rows.Scan(&recipe.Id, &recipe.Name); err != nil {
			return nil, err // Return error if scanning fails.
		}
		recipes = append(recipes, recipe) // Add the recipe to the slice.
	}

	// Check for errors after processing all rows.
	if err = rows.Err(); err != nil {
		return nil, err // Handle any row processing errors.
	}

	return recipes, nil // Return the slice of recipes.
}

// ---------------------------------------------------------------------

// CreateRecipe adds a new recipe to the database along with its associated ingredients, and returns the newly created recipe.
func (m *dbRepo) CreateRecipe(name string, ingredientIDs []int) (*models.Recipe, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure the context is cleaned up.

	// Start a transaction
	tx, err := m.DB.BeginTx(ctx, nil)
	if err != nil {
		return nil, err
	}

	// SQL statement to insert a new recipe and get its ID.
	recipeSql := "INSERT INTO recipes (name) VALUES ($1) RETURNING id"
	var recipeID int
	err = tx.QueryRowContext(ctx, recipeSql, name).Scan(&recipeID)
	if err != nil {
		tx.Rollback() // Rollback in case of error
		return nil, err
	}

	// SQL statement to insert ingredient associations.
	ingredientSql := "INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ($1, $2)"
	for _, id := range ingredientIDs {
		_, err = tx.ExecContext(ctx, ingredientSql, recipeID, id)
		if err != nil {
			tx.Rollback() // Rollback in case of error
			return nil, err
		}
	}

	// Commit the transaction
	if err = tx.Commit(); err != nil {
		return nil, err
	}

	// After successful insertion, create the recipe object to return.
	newRecipe := &models.Recipe{
		Id:          recipeID,
		Name:        name,
		Ingredients: []models.Ingredient{},
	}

	// Fetch the associated ingredients to add to the recipe object
	for _, id := range ingredientIDs {
		var ingredient models.Ingredient
		ingredientSql := "SELECT id, name FROM ingredients WHERE id = $1"
		err = m.DB.QueryRowContext(ctx, ingredientSql, id).Scan(&ingredient.Id, &ingredient.Name)
		if err != nil {
			return nil, err // Handle error if fetching ingredients fails
		}
		newRecipe.Ingredients = append(newRecipe.Ingredients, ingredient)
	}

	return newRecipe, nil // Return the fully constructed recipe object
}

// ---------------------------------------------------------------------
