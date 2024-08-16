package main

import (
	"fmt"
	"time"
)

// doSessionTable handles the creation of session table migrations for different database types.
func doSessionTable() error {
	// Retrieve the current database type from the global application configuration.
	dbType := cel.DB.DataType

	// Normalize database type names to common identifiers used in migration files.
	if dbType == "mariadb" {
		dbType = "mysql"
	}
	if dbType == "postgresql" {
		dbType = "postgres"
	}

	// Generate a unique file name for the migration files based on the current timestamp.
	fileName := fmt.Sprintf("%d_create_sessions_table", time.Now().UnixMicro())

	// Construct file paths for the up and down migration files.
	upFile := cel.RootPath + "/migrations/" + fileName + "." + dbType + ".up.sql"
	downFile := cel.RootPath + "/migrations/" + fileName + "." + dbType + ".down.sql"

	// Create the 'up' migration file from a template specific to the database type.
	err := copyFilefromTemplate("templates/migrations/"+dbType+"_session.sql", upFile)
	if err != nil {
		exitGracefully(err) // Exit the application if file creation fails.
	}

	// Create the 'down' migration file. This file contains SQL to revert the 'up' migration.
	err = copyDataToFile([]byte("drop table if exists sessions"), downFile)
	if err != nil {
		exitGracefully(err) // Exit the application if file creation fails.
	}

	// Execute the migration to create the sessions table.
	err = doMigrate("up", "")
	if err != nil {
		exitGracefully(err) // Exit the application if migration fails.
	}

	// Return nil on successful migration.
	return nil
}
