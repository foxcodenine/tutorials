package data

import (
	"database/sql"
	"fmt"
	"os"

	db2 "github.com/upper/db/v4"
	"github.com/upper/db/v4/adapter/mysql"
	"github.com/upper/db/v4/adapter/postgresql"
)

// ---------------------------------------------------------------------

var db *sql.DB
var upper db2.Session

// ---------------------------------------------------------------------

// Models struct will hold references to all the database models
type Models struct {
	// any models inserted here (and in the New function)
	// are easily accessible throughout the entire application

	Users  User
	Tokens Token
}

// ---------------------------------------------------------------------

// New initializes a new Models struct and sets up the upper/db session.
func New(databasePool *sql.DB) Models {
	db = databasePool

	// Initialize the upper/db session based on the database type
	if os.Getenv("DATABASE_TYPE") == "mysql" || os.Getenv("DATABASE_TYPE") == "mariadb" {
		upper, _ = mysql.New(databasePool)
	} else {
		upper, _ = postgresql.New(databasePool)
	}

	return Models{
		Users:  User{},
		Tokens: Token{},
	}
}

// ---------------------------------------------------------------------

// getInsertID converts a db2.ID interface to an int, handling different numeric ID types from databases.
func getInsertID(i db2.ID) int {

	// Detect the runtime type of 'i' as a string.
	idType := fmt.Sprintf("%T", i)

	// If 'i' is an int64, convert to int and return.
	if idType == "int64" {
		return int(i.(int64))
	}

	// Default assumption: 'i' is an int, directly assert and return.
	return i.(int)
}
