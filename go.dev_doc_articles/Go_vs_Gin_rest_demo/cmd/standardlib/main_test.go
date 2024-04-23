package main

import (
	"bytes"
	"fmt"

	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/recipes"
	"github.com/stretchr/testify/assert"
)

func readTestData(t *testing.T, name string) []byte {
	t.Helper()
	content, err := os.ReadFile("../../testdata/" + name)
	if err != nil {
		t.Errorf("Could not read %v", name)
	}

	return content
}

func TestRecipesHandlerCRUD_Integration(t *testing.T) {

	// Create a MemStore and Recipe Handler
	store := recipes.NewMemStore()
	recipesHandler := NewRecipesHandler(store)

	// Testdata
	hamAndCheese := readTestData(t, "ham_and_cheese_recipe.json")
	hamAndCheeseReader := bytes.NewReader(hamAndCheese)

	hamAndCheeseWithButter := readTestData(t, "ham_and_cheese_with_butter_recipe.json")
	hamAndCheeseWithButterReader := bytes.NewReader(hamAndCheeseWithButter)

	// CREATE - add a new recipe
	req := httptest.NewRequest(http.MethodPost, "/recipes", hamAndCheeseReader)
	w := httptest.NewRecorder()
	recipesHandler.CreateRecipe(w, req)

	res := w.Result()
	defer res.Body.Close()
	assert.Equal(t, 200, res.StatusCode)

	// Check what ID we expect to use
	expectedID := "ham-and-cheese-toasties" // Make sure this is what you expect!
	fmt.Println("Expected ID for GET:", expectedID)

	saved, _ := store.List()
	assert.Len(t, saved, 1)

	// GET - find the record we just added
	req = httptest.NewRequest(http.MethodGet, "/recipes/"+expectedID, nil)
	w = httptest.NewRecorder()
	recipesHandler.GetRecipe(w, req)

	res = w.Result()
	fmt.Println(">>", res)
	defer res.Body.Close()
	assert.Equal(t, 200, res.StatusCode)

	data, err := io.ReadAll(res.Body)
	if err != nil {
		t.Errorf("unexpected error: %v", err)
	}

	assert.JSONEq(t, string(hamAndCheese), string(data))

	// UPDATE - add butter to ham and cheese recipe
	req = httptest.NewRequest(http.MethodPut, "/recipes/ham-and-cheese-toasties", hamAndCheeseWithButterReader)
	w = httptest.NewRecorder()
	recipesHandler.UpdateRecipe(w, req)

	res = w.Result()
	defer res.Body.Close()
	assert.Equal(t, 200, res.StatusCode)

	updatedHamAndCheese, err := store.Get("ham-and-cheese-toasties")
	assert.NoError(t, err)

	assert.Contains(t, updatedHamAndCheese.Ingredients, recipes.Ingredient{Name: "butter"})

	//DELETE - remove the ham and cheese recipe
	req = httptest.NewRequest(http.MethodDelete, "/recipes/ham-and-cheese-toasties", nil)
	w = httptest.NewRecorder()
	recipesHandler.DeleteRecipe(w, req)

	res = w.Result()
	defer res.Body.Close()
	assert.Equal(t, 200, res.StatusCode)

	saved, _ = store.List()
	assert.Len(t, saved, 0)

}
