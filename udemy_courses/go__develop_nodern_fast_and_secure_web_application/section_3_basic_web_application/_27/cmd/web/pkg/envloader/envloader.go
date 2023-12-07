package envloader

import (
	"os"
	"strings"

	"github.com/joho/godotenv"
)

// ---------------------------------------------------------------------

// LoadEnvFile loads environment variables from a file and returns a map of key-value pairs.
// It takes a filename as an argument and returns a map of strings (key-value pairs) and an error.
func LoadEnvFile(filename string) (map[string]string, error) {

	// Attempt to load environment variables from the specified file using godotenv.
	if err := godotenv.Load(filename); err != nil {
		// Return the error directly.
		return nil, err
	}

	// Initialize an empty map to store key-value pairs of environment variables.
	envVars := make(map[string]string)

	// Iterate over the environment variables obtained from os.Environ().
	for _, env := range os.Environ() {

		// Call the parseEnv function to extract key-value pairs from the environment variable.
		key, value := parseEnv(env)

		// If the value is not an empty string, add the key-value pair to the envVars map.
		if value != "" {
			envVars[key] = value
		}
	}

	// Return the map of environment variables and nil error (indicating success).
	return envVars, nil
}

// ---------------------------------------------------------------------

// parseEnv extracts the key and value from an environment variable string in the form "key=value".
func parseEnv(env string) (string, string) {

	// Split the environment variable string into two parts using "=" as the separator.
	pair := strings.SplitN(env, "=", 2)

	// Return the key and value directly, even if they are empty strings.
	return pair[0], pair[1]
}
