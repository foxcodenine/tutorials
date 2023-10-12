package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// Create a new Gin router with default middleware.
	router := gin.Default()

	// Define a route group under the "/api" prefix.
	api := router.Group("/api")

	// Define a POST route for user registration.
	api.POST("/register", func(context *gin.Context) {
		// Respond with a JSON message indicating the register endpoint.
		context.JSON(http.StatusOK, gin.H{"message": "This is the register endpoint!"})
	})

	// Start the web server on port 8080.
	router.Run(":8080")
}
