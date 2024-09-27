package celeritas

import "database/sql"

// initPaths holds the root path and a list of folder names for initialization.
type initPaths struct {
	rootPath    string   // The root directory path
	folderNames []string // Names of folders to be initialized
}

// Server holds the server configuration settings.
type Server struct {
	ServerName string // The name or identifier of the server
	Port       string // The port on which the server is running
	Secure     bool   // Indicates whether the server is using HTTPS
	URL        string // The full URL of the server (e.g., "https://localhost:8080")
}

// config holds configuration settings for the application.
type config struct {
	port        string         // Port for the application
	host        string         // Host for the application
	renderer    string         // Renderer for the application
	cookie      cookieConfig   // Cookie configuration settings
	sessionType string         // Session management type (e.g., redis)
	database    databaseConfig // Database configuration settings
	redis       redisConfig    // Redis configuration settings
}

// cookieConfig holds the cookie-related configuration settings.
type cookieConfig struct {
	name     string // Name of the cookie
	lifetime string // Lifetime of the cookie
	persist  string //Determines whether cookies should persist across browser
	secure   string // Secure flag for the cookie
	domain   string // Domain for the cookie
}

// databaseConfig holds the database-related configuration settings.
type databaseConfig struct {
	dsn      string // Data Source Name (connection string)
	database string // Name of the database
}

// Database represents a database connection pool and its type.
type Database struct {
	DataType string  // Type of the database (e.g., mysql, postgres)
	Pool     *sql.DB // Database connection pool
}

// redisConfig holds Redis-related configuration settings.
type redisConfig struct {
	host     string // Host of the Redis server
	password string // Password for the Redis server
	prefix   string // Prefix for Redis keys
}
