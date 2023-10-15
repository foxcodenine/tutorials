package middlewares

import (
	"gin_jwt_api/utils/token"
	"net/http"

	"github.com/gin-gonic/gin"
)

// -- JwtAuthMiddleware is a middleware function that performs JWT authentication
func JwtAuthMiddleware() gin.HandlerFunc {

	return func(ctx *gin.Context) {
		// -- Checking if the token is valid using the TokenValid function from the token package
		err := token.TokenValid(ctx)

		// -- If the token is not valid, return an Unauthorized status and abort the request
		if err != nil {
			ctx.String(http.StatusUnauthorized, "Unauthorized")
			ctx.Abort()
			return
		}

		// -- If the token is valid, continue to the next handler
		ctx.Next()
	}
}
