package dbRepo

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"strings"
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
	sql_q := `
    SELECT r.id, r.name, i.id, i.name
    FROM recipes r
    LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    LEFT JOIN ingredients i ON ri.ingredient_id = i.id
    ORDER BY r.id
    `

	var recipes []models.Recipe

	var lastRecipe models.Recipe

	// Execute the query.
	rows, err := m.DB.QueryContext(ctx, sql_q)
	if err != nil {
		return nil, err // Return error if the query fails.
	}
	defer rows.Close()

	// Process each row in the result set.
	for rows.Next() {
		var (
			rID   int
			rName string
			iID   sql.NullFloat64
			iName sql.NullString
		)

		// Scan the data into variables
		if err := rows.Scan(&rID, &rName, &iID, &iName); err != nil {
			return nil, err
		}

		// Convert nullable SQL values to Go types; handle potential NULL values gracefully.
		iNameString := ""
		if iName.Valid {
			iNameString = iName.String
		}
		iIDInt := 0
		if iID.Valid {
			iIDInt = int(iID.Float64)
		}

		// Process recipes and ingredients.
		if lastRecipe.Id != rID {
			if lastRecipe.Name != "" { // Append the last recipe to the result slice before starting a new one.
				recipes = append(recipes, lastRecipe)
			}
			// Reset lastRecipe for the new recipe entry.
			lastRecipe = models.Recipe{
				Id:          rID,
				Name:        rName,
				Ingredients: []models.Ingredient{},
			}
		}

		// Append ingredients to the current recipe if they exist.
		if iIDInt != 0 && iNameString != "" {
			lastRecipe.Ingredients = append(lastRecipe.Ingredients, models.Ingredient{Id: iIDInt, Name: iNameString})
		}

	}

	// Append the last recipe processed if not already appended.
	if lastRecipe.Name != "" {
		recipes = append(recipes, lastRecipe)
	}

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
	sql_q := `
    SELECT r.id, r.name, i.id, i.name
    FROM recipes r
    LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    LEFT JOIN ingredients i ON ri.ingredient_id = i.id
    WHERE r.id = $1
    ORDER BY r.id
    `

	var recipe models.Recipe
	var ingredientId sql.NullFloat64
	var ingredientName sql.NullString

	// Execute the query.
	rows, err := m.DB.QueryContext(ctx, sql_q, id)
	if err != nil {
		return models.Recipe{}, err // Return error if the query fails.
	}
	defer rows.Close()

	// Process each row in the result set.

	for rows.Next() {
		if err := rows.Scan(&recipe.Id, &recipe.Name, &ingredientId, &ingredientName); err != nil {
			return models.Recipe{}, err // Return error if scanning fails.
		}
		var ingredient models.Ingredient
		if ingredientId.Valid {
			ingredient.Id = int(ingredientId.Float64)
		}
		if ingredientName.Valid {
			ingredient.Name = ingredientName.String
		}
		if int(ingredientId.Float64) != 0 && ingredientName.String != "" {

			recipe.Ingredients = append(recipe.Ingredients, ingredient)
		}
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

// UpdateRecipe updates an existing recipe's name and its associated ingredients based on the provided list.
func (m *dbRepo) UpdateRecipe(id int, name string, ingredientNames []string) (models.Recipe, error) {

	var recipe models.Recipe

	// Create a context with a 5-second timeout to manage long-running database calls.
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure the context is cleaned up.

	// Start a database transaction to ensure all changes are applied atomically.
	tx, err := m.DB.BeginTx(ctx, nil)
	if err != nil {
		return recipe, err
	}

	// Retrieve the current name of the recipe to determine if it needs to be updated.
	sql_q := `SELECT name FROM recipes WHERE ID = $1 LIMIT 1`
	var rName string

	row := tx.QueryRowContext(ctx, sql_q, id)

	err = row.Scan(&rName)
	if err != nil {
		tx.Rollback()
		return recipe, err
	}

	// Update the recipe's name if it has changed.
	if rName != name {

		sql := `UPDATE recipes SET name = $1 WHERE id = $2`

		_, err = tx.ExecContext(ctx, sql, name, id)
		if err != nil {
			tx.Rollback()
			return recipe, err
		}
	}

	// Fetch all current ingredients associated with the recipe.
	sql_q = `
	SELECT ri.id, i.id, i.name 
    FROM recipes r
    LEFT JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    LEFT JOIN ingredients i ON ri.ingredient_id = i.id
    WHERE r.id = $1	
	`

	rows, err := tx.QueryContext(ctx, sql_q, id)
	if err != nil {
		tx.Rollback()
		return recipe, err
	}

	defer rows.Close()

	type record struct {
		relationRecordIDdNullFloat64 sql.NullFloat64
		iIdNullFloat64               sql.NullFloat64
		iNameNullString              sql.NullString
		relationRecordIDd            int
		iId                          int
		iName                        string
	}

	// Collect ingredient data from the query results.
	var iRecords []record

	for rows.Next() {
		var rr record

		if err := rows.Scan(&rr.relationRecordIDdNullFloat64, &rr.iIdNullFloat64, &rr.iNameNullString); err != nil {
			tx.Rollback()
			return recipe, err
		}

		if rr.iIdNullFloat64.Valid && rr.iNameNullString.Valid {
			rr.relationRecordIDd = int(rr.relationRecordIDdNullFloat64.Float64)
			rr.iId = int(rr.iIdNullFloat64.Float64)
			rr.iName = rr.iNameNullString.String
			iRecords = append(iRecords, rr)
		}
	}

	// Determine which ingredients to add or remove based on the current list.
	var currentNames []string

	currentNames = utils.SliceMap(iRecords, func(rr record) string {
		return rr.iName
	})

	iToRemove := utils.SliceDifference(currentNames, ingredientNames)
	iToAdd := utils.SliceDifference(ingredientNames, currentNames)

	// Remove unneeded ingredients from the recipe.
	relationRecToRem := utils.SliceFilter(iRecords, func(rec record) bool {
		return utils.SliceIncludes(iToRemove, rec.iName)
	})

	relationRecToRemIds := utils.SliceMap(relationRecToRem, func(rec record) int {
		return rec.relationRecordIDd
	})

	err = m.RemoveRecordsByIds("recipe_ingredients", relationRecToRemIds)

	if err != nil {
		tx.Rollback()
		return recipe, err
	}

	// Add new ingredients to the recipe.
	for _, iName := range iToAdd {
		ingredient, err := m.CreateIngredient(iName)

		if err != nil {
			return recipe, err
		}

		sql := `
		INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
		VALUES
		($1, $2);`

		_, err = tx.ExecContext(ctx, sql, id, ingredient.Id)
		if err != nil {
			return recipe, err
		}

	}

	// Commit the transaction to apply all changes.
	if err = tx.Commit(); err != nil {
		return recipe, err
	}

	// Retrieve and return the updated recipe.
	recipe, err = m.SelectRecipe(id)
	return recipe, err
}

// ---------------------------------------------------------------------

func (m *dbRepo) RemoveRecordById(table string, id int) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure the context is cleaned up.

	sql := `delete from ` + table + ` where id = $1`

	_, err := m.DB.ExecContext(ctx, sql, id)

	return err
}

// ---------------------------------------------------------------------

func (m *dbRepo) RemoveRecordsByIds(table string, ids []int) error {

	if len(ids) <= 0 {
		return nil
	}
	// -------------------------------------------

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // Ensure the context is cleaned up.

	// - Convert integers to strings -------------
	stringNumbers := make([]string, len(ids))

	for i, id := range ids {
		stringNumbers[i] = fmt.Sprint(id)
	}

	// - Use strings.Join to concatenate ---------

	joinedIds := strings.Join(stringNumbers, ", ")

	// -------------------------------------------

	sql := `delete from ` + table + ` where id in (` + joinedIds + `)`

	_, err := m.DB.ExecContext(ctx, sql)

	return err

}

// ---------------------------------------------------------------------
