package dbRepo

import (
	"context"
	"database/sql"
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

// CreateIngredient inserts a new ingredient into the database if it doesn't exist; otherwise, it returns the existing ingredient.
func (m *dbRepo) CreateIngredient(name string) (*models.Ingredient, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure cleanup of context resources.

	// First, try to find an existing ingredient with the same name.
	selectSQL := "SELECT id FROM ingredients WHERE name = $1"
	var id int
	err := m.DB.QueryRowContext(ctx, selectSQL, name).Scan(&id)
	if err != nil && err != sql.ErrNoRows {
		return nil, err // Handle any database error.
	}

	if err == nil {
		// Ingredient exists, return the existing one.
		return &models.Ingredient{Id: id, Name: name}, nil
	}

	// No existing ingredient found, proceed to insert.
	insertSQL := "INSERT INTO ingredients (name) VALUES ($1) RETURNING id"
	err = m.DB.QueryRowContext(ctx, insertSQL, name).Scan(&id)
	if err != nil {
		return nil, err // Return any error that occurs during insert.
	}

	// Return the new ingredient instance.
	return &models.Ingredient{Id: id, Name: name}, nil
}

// ---------------------------------------------------------------------
