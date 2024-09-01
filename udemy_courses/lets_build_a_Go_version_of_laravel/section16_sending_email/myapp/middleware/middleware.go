package middleware

import (
	"myapp/data"

	"github.com/foxcodenine/celeritas"
)

// Middleware struct contains application-wide dependencies for middleware operations.
type Middleware struct {
	App    *celeritas.Celeritas // Pointer to the main application structure.
	Models data.Models          // Data models used within the middleware for database interactions.
}
