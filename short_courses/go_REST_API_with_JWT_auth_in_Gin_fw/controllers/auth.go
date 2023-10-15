package controllers

import (
	"gin_jwt_api/models"
	"gin_jwt_api/utils/token"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// -- Register -----------------------------------------------------------------

// -- RegisterInput represents the input structure for the registration request
type RegisterInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// -- Register is the handler for the '/register' endpoint -------------

func Register(ctx *gin.Context) {
	var input RegisterInput

	// -- Binding the incoming JSON request to the registration input structure
	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request. Check your input data"})
		return
	}

	// -- Creating a new user instance
	user := models.User{
		Username: input.Username,
		Password: input.Password,
	}

	// -- Saving the user to the database
	_, err := user.SaveUser()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save user. Please try again later."})
		return
	}

	// -- Responding with a success message
	ctx.JSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}

// -- Login --------------------------------------------------------------------

// -- LoginInput represents the input structure for the login request
type LoginInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// -- Login is the handler for the '/login' endpoint
func Login(ctx *gin.Context) {
	var input LoginInput

	// -- Binding the incoming JSON request to the login input structure
	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// -- Creating a new user instance
	user := models.User{
		Username: input.Username,
		Password: input.Password,
	}

	// -- Checking the login credentials and generating a token

	token, err := models.LoginCheck(user.Username, user.Password)

	log.Println("..so far so good! 75")

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// -- Responding with the generated token
	ctx.JSON(http.StatusOK, gin.H{"token": token})

}

// ---------------------------------------------------------------------

func CurrentUser(ctx *gin.Context) {
	// -- Extract the user ID from the token
	userID, err := token.ExtractTokenID(ctx)

	// -- Handle any errors that occur during the extraction of the user ID
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// -- Retrieve the user from the database using the extracted user ID
	u, err := models.GetUserByID(userID)

	// -- Handle any errors that occur during the retrieval of the user
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// -- Return the user data as a JSON response
	ctx.JSON(http.StatusOK, gin.H{"message": "success", "data": u})
}
