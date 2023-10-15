package main

import (
	"gin_jwt_api/controllers"
	"gin_jwt_api/middlewares"
	"gin_jwt_api/models"

	"github.com/gin-gonic/gin"
)

func main() {

	// -- Connect to the database
	models.ConnectDataBase()

	// -- Create a new Gin router with default middleware.
	router := gin.Default()

	// -- Routers ------------------------------------------------------

	publicApi := router.Group("/api")

	publicApi.POST("/register", controllers.Register)
	publicApi.POST("login", controllers.Login)

	// ---------------------------------------------

	protectedApi := router.Group("/api/admin")

	protectedApi.Use(middlewares.JwtAuthMiddleware())
	protectedApi.GET("/user", controllers.CurrentUser)

	// -- Start the web server on port 8080 ----------------------------
	router.Run(":8080")
}
