package dbRepo

import (
	"context"
	"time"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/models"
)

// ---------------------------------------------------------------------

// SelectAllIngredients retrieves all ingredients from the database.
func (m *dbRepo) SelectAllIngredients() ([]models.Ingredient, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Clean up context.

	sql := "SELECT id, name FROM ingredients"
	var ingredients []models.Ingredient

	rows, err := m.DB.QueryContext(ctx, sql)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var ingredient models.Ingredient
		if err := rows.Scan(&ingredient.Id, &ingredient.Name); err != nil {
			return nil, err
		}
		ingredients = append(ingredients, ingredient)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return ingredients, nil
}

// ---------------------------------------------------------------------

// CreateIngredient inserts a new ingredient into the database and returns the newly created ingredient.
func (m *dbRepo) CreateIngredient(name string) (*models.Ingredient, error) {
	// Create a context with a timeout

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure cleanup of context resources.

	// SQL statement to insert a new ingredient and return the new ID
	sql := "INSERT INTO ingredients (name) VALUES ($1) RETURNING id"

	// Variable to store the new ingredient's ID
	var id int
	// Execute SQL statement and capture the returned ID
	err := m.DB.QueryRowContext(ctx, sql, name).Scan(&id)

	if err != nil {
		return nil, err // Return any error that occurs
	}

	// Create and return the new ingredient instance
	return &models.Ingredient{Id: id, Name: name}, nil
}

// ---------------------------------------------------------------------
