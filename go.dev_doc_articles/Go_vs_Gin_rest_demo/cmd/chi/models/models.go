package models

// Represent a recipe
type Recipe struct {
	Id          int
	Name        string       `json:"name"`
	Ingredients []Ingredient `json:"ingredients"`
}

// Represents individual ingredients
type Ingredient struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}
