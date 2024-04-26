package main

import (
	"log"
	"net/http"

	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/controllers"
	"github.com/foxcodenine/go-vs-gin-rest-demo/cmd/chi/routers"
	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/config"
	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/dbDriver"
	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/envloader"
)

var app config.AppConfig
var err error

func main() {

	if app.Env, err = envloader.LoadEnvFile("./.env"); err != nil {
		log.Fatal(err)
	}

	// -----------------------------------------------------------------

	if app.DB, err = dbDriver.ConnectSQL(app.Env["DATABASE_URL"]); err != nil {
		log.Fatal("! cannot connect to database !")
	}
	log.Println("> connecting to database")

	defer app.DB.SQL.Close()

	// -----------------------------------------------------------------

	controllers.InitRecipeController(&app)
	controllers.InitIngredientController(&app)

	// -----------------------------------------------------------------

	route := routers.InitRouter()

	// -----------------------------------------------------------------

	log.Println("> server runnig on: http://localhost:8082")
	http.ListenAndServe(":8082", route)
}
