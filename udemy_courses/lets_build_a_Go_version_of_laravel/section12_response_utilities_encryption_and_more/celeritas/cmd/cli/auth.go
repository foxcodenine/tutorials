package main

import (
	"fmt"
	"time"

	"github.com/fatih/color"
)

// doAuth handles the setup for authentication in your application, including database migrations,
// model creation, and middleware setup.
func doAuth() error {

	// Step 1: Create Migrations ---------------------------------------

	// Determine the database type and prepare file names for migration scripts.
	dbType := cel.DB.DataType
	fileName := fmt.Sprintf("%d_create_auth_tables", time.Now().UnixMicro())
	upFile := cel.RootPath + "/migrations/" + fileName + ".up.sql"
	downFile := cel.RootPath + "/migrations/" + fileName + ".down.sql"

	// Create the 'up' migration file from a template specific to the database type.
	err := copyFilefromTemplate("templates/migrations/auth_tables."+dbType+".sql", upFile)
	if err != nil {
		exitGracefully(err) // Exit if there's an error in creating the migration file.
	}

	// Create the 'down' migration file to revert the changes made by the 'up' migration.
	err = copyDataToFile([]byte("drop table if exists users cascade; drop table if exists tokens cascade; drop table if exists remember_tokens;"), downFile)
	if err != nil {
		exitGracefully(err) // Exit if there's an error in creating the down migration file.
	}

	// Run the migration to set up the authentication-related tables.
	err = doMigrate("up", "")
	if err != nil {
		exitGracefully(err) // Exit if migration fails.
	}

	// Step 2: Copy Model Files ----------------------------------------

	// Copy the user model template to the data directory.
	err = copyFilefromTemplate("templates/data/user.go.txt", cel.RootPath+"/data/user.go")
	if err != nil {
		exitGracefully(err) // Exit if there's an error copying the user model file.
	}

	// Copy the token model template to the data directory.
	err = copyFilefromTemplate("templates/data/token.go.txt", cel.RootPath+"/data/token.go")
	if err != nil {
		exitGracefully(err) // Exit if there's an error copying the token model file.
	}

	// Step 3: Copy Middleware Files -----------------------------------

	// Copy the authentication middleware templates to the middleware directory.
	err = copyFilefromTemplate("templates/middleware/auth-token.go.txt", cel.RootPath+"/middleware/auth-token.go")
	if err != nil {
		exitGracefully(err) // Exit if there's an error copying the auth-token middleware file.
	}

	err = copyFilefromTemplate("templates/middleware/auth.go.txt", cel.RootPath+"/middleware/auth.go")
	if err != nil {
		exitGracefully(err) // Exit if there's an error copying the auth middleware file.
	}

	// Display success messages to inform the user that the operations were successful.
	color.Yellow("  - users, tokens, and remember_tokens migrations created and executed")
	color.Yellow("  - user and token models created")
	color.Yellow("  - auth middleware created")
	color.Yellow("")
	color.Yellow("Don't forget to add user and token models in data/models.go, and to add appropriate middleware to your routes!")

	return nil
}
