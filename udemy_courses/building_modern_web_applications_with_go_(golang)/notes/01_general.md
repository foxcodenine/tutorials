<!-- I am learning go and i need the following code as ref.. can you add better comments: -->

# Initialize a new Go module.
    $ go mod init github.com/foxcodenine/building_modern_web_applications_with_go

# Clean up and update module dependencies.
    $ go mod tidy



# Run tests in the current directory using the default settings.
    $ go test

# Run tests in the current directory with verbose output, displaying detailed information about test functions and results.
    $ go test -v

# Run tests in the current directory and generate code coverage statistics.
    $ go test -cover

# Run tests in the current directory, generate code coverage statistics, and open a web-based coverage report in your default web browser.
    $ go test -coverprofile=coverage.out && go tool cover -html=coverage.out
