


Gin backend 1:

    /my-gin-app
        /cmd
            /myapp
                main.go  # The entry point of the application
        /internal
            /app
                /controller  
                    userController.go
                /middleware 
                    auth.go
                /model       
                    user.go
                /requests    
                    storeUser.go
                    updateUser.go
                /resources    
                /service     
                    userService.go
                /repository  
                    userRepository.go
            /pkg
                /config         
                    config.go
                /utils          
                    helpers.go
        /public                 # If you use Gin to serve HTML directly, though with Vue.js might not need it
            /css
            /js
        /resources              # If you use Gin to serve HTML directly, though with Vue.js might not need it
            /views              
        /routes                 
            api.go
            web.go
        /tests                  
            user_test.go
        /migrations             





    #!/bin/bash

    # Define your project name and directory
    PROJECT_NAME="my-gin-app"
    PROJECT_DIR=$(pwd)/$PROJECT_NAME

    # Create the main directory
    mkdir -p "$PROJECT_DIR"

    # Create the cmd structure
    mkdir -p "$PROJECT_DIR/cmd/$PROJECT_NAME"
    echo "package main

    import \"fmt\"

    func main() {
        fmt.Println(\"Hello, $PROJECT_NAME\")
    }" > "$PROJECT_DIR/cmd/$PROJECT_NAME/main.go"

    # Create the internal app structure
    for dir in controller middleware model requests resources service repository; do
        mkdir -p "$PROJECT_DIR/internal/app/$dir"
        # Create a placeholder .go file in each directory
        echo "// Package $dir - describe package" > "$PROJECT_DIR/internal/app/$dir/${dir}.go"
    done

    # Create the pkg structure
    for dir in config utils; do
        mkdir -p "$PROJECT_DIR/internal/pkg/$dir"
        # Create a placeholder .go file in each directory
        echo "// Package $dir - describe package" > "$PROJECT_DIR/internal/pkg/$dir/${dir}.go"
    done

    # Optional directories
    mkdir -p "$PROJECT_DIR/public/css"
    mkdir -p "$PROJECT_DIR/public/js"
    mkdir -p "$PROJECT_DIR/resources/views"

    # Create routes directory and files
    mkdir -p "$PROJECT_DIR/routes"
    echo "// Package routes - define your API routes here" > "$PROJECT_DIR/routes/api.go"
    echo "// Package routes - define your web routes here" > "$PROJECT_DIR/routes/web.go"

    # Create tests directory
    mkdir -p "$PROJECT_DIR/tests"
    echo "// Package tests - your tests go here" > "$PROJECT_DIR/tests/${PROJECT_NAME}_test.go"

    # Create migrations directory
    mkdir -p "$PROJECT_DIR/migrations"

    echo "Project skeleton created at $PROJECT_DIR"


