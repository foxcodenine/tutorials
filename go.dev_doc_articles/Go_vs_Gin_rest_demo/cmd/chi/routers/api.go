package routers

import (
	"net/http"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/controllers"
	"github.com/go-chi/chi/v5"
)

// Controllers ---------------------------------------------------------
var recipeController = controllers.ImportRecipeController()

// Routers -------------------------------------------------------------
func InitRouter() *chi.Mux {

	router := chi.NewRouter()

	// -----------------------------------------------------------------
	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome to the Chi home page"))
	})

	// recipes ---------------------------------------------------------

	router.Get("/recipe", recipeController.Index)
	router.Post("/recipe", recipeController.Store)
	router.Get("/recipe/{id}", recipeController.Show)

	// -----------------------------------------------------------------

	return router
}
