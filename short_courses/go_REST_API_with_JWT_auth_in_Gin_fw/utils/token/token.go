package token

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// -- GenerateToken generates a JWT token with the specified user ID ----

func GenerateToken(user_id uint) (string, error) {

	// -- Fetching the token lifespan from the environment variables
	token_lifespan, err := strconv.Atoi(os.Getenv("TOKEN_HOUR_LIFESPAN"))

	if err != nil {
		return "", err
	}

	// -- Creating the JWT claims with authorization, user ID, and expiration time

	claims := jwt.MapClaims{}
	claims["authorized"] = true
	claims["user_id"] = user_id
	claims["exp"] = time.Now().Add(time.Hour * time.Duration(token_lifespan)).Unix()

	// -- Creating a new JWT token with the claims and the specified signing method
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// -- Generating the signed token string
	signedToken, err := token.SignedString([]byte(os.Getenv("API_SECRET")))

	if err != nil {
		log.Println("Error signing token:", err)
		return "", err
	}

	// -- Returning the generated JWT token
	return signedToken, nil
}

// ---------------------------------------------------------------------

func TokenValid(ctx *gin.Context) error {

	// -- Extract the token from the context
	tokenString := ExtractToken(ctx)

	// -- Parse the token and validate its signature
	_, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {

		// -- Check if the signing method is HMAC
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		// -- Get the API secret from environment variables for validation
		return []byte(os.Getenv("API_SECRET")), nil
	})

	if err != nil {
		return err
	}
	return nil
}

func ExtractToken(ctx *gin.Context) string {
	// -- Check if the token is passed as a query parameter
	token := ctx.Query("token")
	if token != "" {
		return token
	}

	// -- Check if the token is passed in the Authorization header
	bearerToken := ctx.Request.Header.Get("Authorization")
	if len(strings.Split(bearerToken, " ")) == 2 {

		// -- Extract the token from the Authorization header
		return strings.Split(bearerToken, " ")[1]
	}

	// -- Return an empty string if the token is not found
	return ""
}

// ---------------------------------------------------------------------

func ExtractTokenID(ctx *gin.Context) (uint, error) {
	// -- Extract the token from the context
	tokenString := ExtractToken(ctx)

	// -- Parse the token and validate its signature
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {

		// -- Check if the signing method is HMAC
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// -- Get the API secret from environment variables for validation
		return []byte(os.Getenv("API_SECRET")), nil
	})
	if err != nil {
		return 0, err
	}
	// -- Extract the user ID from the token claims
	claims, ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		uid, err := strconv.ParseUint(fmt.Sprintf("%.0f", claims["user_id"]), 10, 32)
		if err != nil {
			return 0, err
		}
		return uint(uid), nil
	}
	// -- Return 0 if the user ID is not found or the token is invalid
	return 0, nil
}
