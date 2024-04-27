package dbRepo

import (
	"context"
	"database/sql"
	"errors"
	"log"
	"time"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/models"
	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/utils"
)

// ---------------------------------------------------------------------

// SelectAllRecipes retrieves all recipes from the database.
func (m *dbRepo) SelectAllRecipes() ([]models.Recipe, error) {
	// Set up a 5-second timeout for the database call.
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure cleanup of context resources.

	// SQL query to fetch all recipes and their ingredients.
	sql := `
    SELECT r.id, r.name, i.id, i.name
    FROM recipes r
    LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    LEFT JOIN ingredients i ON ri.ingredient_id = i.id
    ORDER BY r.id
    `

	var recipes []models.Recipe

	var lastRecipe models.Recipe

	// Execute the query.
	rows, err := m.DB.QueryContext(ctx, sql)
	if err != nil {
		return nil, err // Return error if the query fails.
	}
	defer rows.Close()

	// Process each row in the result set.
	for rows.Next() {
		var (
			rID   int
			rName string
			iID   int
			iName string
		)
		if err := rows.Scan(&rID, &rName, &iID, &iName); err != nil {
			return nil, err // Return error if scanning fails.
		}

		if lastRecipe.Id != rID {
			if lastRecipe.Name != "" {
				recipes = append(recipes, lastRecipe)
			}
			lastRecipe.Id = rID
			lastRecipe.Id = rID
			lastRecipe.Name = rName
			lastRecipe.Ingredients = []models.Ingredient{}
			lastRecipe.Ingredients = append(lastRecipe.Ingredients, models.Ingredient{Id: iID, Name: iName})
		} else if lastRecipe.Id == rID {
			lastRecipe.Ingredients = append(lastRecipe.Ingredients, models.Ingredient{Id: iID, Name: iName})
		}

	}

	recipes = append(recipes, lastRecipe)

	// Check for errors after processing all rows.
	if err = rows.Err(); err != nil {
		return nil, err // Handle any row processing errors.
	}

	return recipes, nil // Return the slice of recipes.
}

// ---------------------------------------------------------------------

func (m *dbRepo) SelectRecipe(id int) (models.Recipe, error) {
	// Set up a 5-second timeout for the database call.
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure cleanup of context resources.

	// SQL query to fetch the specific recipe and its ingredients.
	sql := `
    SELECT r.id, r.name, i.id, i.name
    FROM recipes r
    LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    LEFT JOIN ingredients i ON ri.ingredient_id = i.id
    WHERE r.id = $1
    ORDER BY r.id
    `

	var recipe models.Recipe
	var ingredient models.Ingredient

	// Execute the query.
	rows, err := m.DB.QueryContext(ctx, sql, id)
	if err != nil {
		return models.Recipe{}, err // Return error if the query fails.
	}
	defer rows.Close()

	// Process each row in the result set.
	for rows.Next() {
		if err := rows.Scan(&recipe.Id, &recipe.Name, &ingredient.Id, &ingredient.Name); err != nil {
			return models.Recipe{}, err // Return error if scanning fails.
		}
		recipe.Ingredients = append(recipe.Ingredients, ingredient)
	}

	// Check if the recipe was actually found
	if recipe.Id == 0 {
		return recipe, errors.New("recipe not found")
	}

	// Check for errors after processing all rows.
	if err = rows.Err(); err != nil {
		return models.Recipe{}, err // Handle any row processing errors.
	}

	return recipe, nil // Return the specific recipe.
}

// ---------------------------------------------------------------------

// CreateRecipe inserts a new recipe and associates ingredients, creating new ones as necessary.
func (m *dbRepo) CreateRecipe(name string, ingredientNames []string) (models.Recipe, error) {
	var newRecipe models.Recipe

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure the context is cleaned up.

	// Start a transaction
	tx, err := m.DB.BeginTx(ctx, nil)
	if err != nil {
		return newRecipe, err
	}

	// SQL statement to insert a new recipe and get its ID.
	recipeSql := "INSERT INTO recipes (name) VALUES ($1) RETURNING id"
	var recipeID int
	err = tx.QueryRowContext(ctx, recipeSql, name).Scan(&recipeID)
	if err != nil {
		tx.Rollback() // Rollback in case of error
		return newRecipe, err
	}

	for _, name := range ingredientNames {
		var ingredientID int
		checkSql := "SELECT id FROM ingredients WHERE name = $1 LIMIT 1"
		err = tx.QueryRowContext(ctx, checkSql, name).Scan(&ingredientID)

		if err == sql.ErrNoRows {
			// Ingredient does not exist, insert it
			insertIngredientSql := "INSERT INTO ingredients (name) VALUES ($1) RETURNING id"
			err = tx.QueryRowContext(ctx, insertIngredientSql, name).Scan(&ingredientID)
			if err != nil {
				tx.Rollback() // Rollback in case of error
				return newRecipe, err
			}
		} else if err != nil {
			tx.Rollback() // Handle other errors
			return newRecipe, err
		}

		// SQL statement to insert ingredient associations.
		ingredientSql := "INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ($1, $2)"
		_, err = tx.ExecContext(ctx, ingredientSql, recipeID, ingredientID)
		if err != nil {
			tx.Rollback() // Rollback in case of error
			return newRecipe, err
		}
	}

	// Commit the transaction
	if err = tx.Commit(); err != nil {
		return newRecipe, err
	}
	newRecipe.Id = recipeID
	newRecipe.Name = name
	newRecipe.Ingredients = []models.Ingredient{}

	// Re-fetch the ingredients to populate the recipe object
	for _, name := range ingredientNames {
		var ingredient models.Ingredient
		fetchSql := "SELECT id, name FROM ingredients WHERE name = $1"
		err = m.DB.QueryRowContext(ctx, fetchSql, name).Scan(&ingredient.Id, &ingredient.Name)
		if err != nil {
			return newRecipe, err // Handle error if fetching ingredients fails
		}
		newRecipe.Ingredients = append(newRecipe.Ingredients, ingredient)
	}

	return newRecipe, nil // Return the fully constructed recipe object
}

// ---------------------------------------------------------------------

func (m *dbRepo) UpdateRecipe(id int, name string, ingredientNames []string) (models.Recipe, error) {

	var recipe models.Recipe
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure the context is cleaned up.

	// Start a transaction
	tx, err := m.DB.BeginTx(ctx, nil)
	if err != nil {
		return recipe, err
	}

	// Check and Update recipe name
	sql := `SELECT name FROM recipes WHERE ID = $1 LIMIT 1`
	var rName string

	row := tx.QueryRowContext(ctx, sql, id)

	err = row.Scan(&rName)
	if err != nil {
		return recipe, err
	}

	if rName != name {

		sql := `UPDATE recipes SET name = $1 WHERE id = $2`

		_, err = tx.ExecContext(ctx, sql, name, id)
		if err != nil {
			tx.Rollback()
			return recipe, err
		}
	}

	// Get all ingredents

	sql = `
	SELECT ri.id, i.id, i.name 
    FROM recipes r
    LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    LEFT JOIN ingredients i ON ri.ingredient_id = i.id
    WHERE r.id = $1	
	`

	rows, err := tx.QueryContext(ctx, sql, id)
	if err != nil {
		return recipe, err
	}

	defer rows.Close()

	type record struct {
		row   int
		iId   int
		iName string
	}
	var records []record

	for rows.Next() {
		var rr record

		if err := rows.Scan(&rr.row, &rr.iId, &rr.iName); err != nil {
			return recipe, err
		}
		records = append(records, rr)
	}

	var iNames []string

	iNames = utils.SliceMap(records, func(rr record) string {
		return rr.iName
	})

	toRemove := utils.SliceDifference(iNames, ingredientNames)
	toAdd := utils.SliceDifference(ingredientNames, iNames)

	recordsToRemove := utils.SliceFilter(records, func(rec record) bool {
		return utils.SliceIncludes(toRemove, rec.iName)
	})

	log.Println(toRemove, toAdd, recordsToRemove)

	// Check all ingredents

	// Commit the transaction
	if err = tx.Commit(); err != nil {
		return recipe, err
	}

	return recipe, nil
}

// ---------------------------------------------------------------------
