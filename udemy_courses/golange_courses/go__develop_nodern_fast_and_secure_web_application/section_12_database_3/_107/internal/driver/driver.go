package driver

import (
	"database/sql" // Standard interface for SQL operations.
	// "log"          // Logging operations (not used here).
	"time" // Operations with time, such as setting connection lifetimes.
	// PostgreSQL driver imports. These are not directly used but are necessary for the `database/sql` package.
	// _ "github.com/jackc/pgx"

	_ "github.com/jackc/pgx/v5"
	_ "github.com/jackc/pgx/v5/stdlib"
)

// DB struct holds a database connection pool.
type DB struct {
	SQL *sql.DB
}

var dbConn = &DB{} // Global instance to hold the DB connection.

// Configuration constants for database connections.
const maxOpenDbConn = 10
const maxIdleConn = 5
const maxDbLifeTime = 5 * time.Minute

// ConnectSQL initializes a database pool for PostgreSQL with the given DSN. (data soure name)
func ConnectSQL(dsn string) (*DB, error) {
	d, err := NewDataBase(dsn)
	if err != nil {
		panic(err) // Stops program execution if cannot connect.
	}

	// Set connection pool parameters.
	d.SetMaxOpenConns(maxOpenDbConn)
	d.SetMaxIdleConns(maxIdleConn)
	d.SetConnMaxLifetime(maxDbLifeTime)

	dbConn.SQL = d // Save DB connection to the global variable.

	// Test the database connection.
	err = testDB(d)
	if err != nil {
		return nil, err // Return error if the test fails.
	}

	return dbConn, nil
}

// NewDataBase creates a new database connection.
func NewDataBase(dsn string) (*sql.DB, error) {
	db, err := sql.Open("pgx", dsn) // Open a new connection using the pgx driver.
	if err != nil {
		return nil, err
	}

	// Verify the database connection.
	if err = db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}

// testDB performs a connectivity test on the database connection.
func testDB(d *sql.DB) error {
	err := d.Ping()
	return err
}
