package celeritas

import (
	"crypto/rand"
	"os"
)

const (
	randomString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321_+"
)

// RandomString generates a random string of length n from values in the const randomString
func (c *Celeritas) RandomString(n int) string {

	// Create a slice to hold the runes of the random string
	s := make([]rune, n)

	// Convert the randomString to a slice of runes for easy indexing
	r := []rune(randomString)

	// Iterate over each position in the result slice
	for i := range s {
		// Generate a random prime number less than the length of the rune slice
		// Using rand.Prime ensures that the randomness is cryptographically secure
		p, _ := rand.Prime(rand.Reader, len(r))
		// Convert the prime number to an unsigned integer
		x := p.Uint64()
		// Calculate the index by taking the modulus of the prime number with the length of the rune slice
		y := uint64(len(r))
		// Assign a random rune from the rune slice to the current position
		s[i] = r[x%y]
	}

	// Convert the slice of runes to a string and return it
	return string(s)
}

// ---------------------------------------------------------------------

// CreateDirIfNotExist creates a directory if it doesn't exist.
func (c *Celeritas) CreateDirIfNotExist(path string) error {
	const mode = 0755

	// Check if the directory exists
	if _, err := os.Stat(path); os.IsNotExist(err) {
		// Create the directory if it does not exist
		if err := os.Mkdir(path, mode); err != nil {
			return err
		}
	}

	return nil
}

// ---------------------------------------------------------------------

// CreateFileIfNotExist creates a file if it doesn't exist.
func (c *Celeritas) CreateFileIfNotExist(path string) error {
	// Check if the file exists
	if _, err := os.Stat(path); os.IsNotExist(err) {
		// Create the file if it does not exist
		file, err := os.Create(path)
		if err != nil {
			return err
		}

		// Ensure the file is closed after creation
		defer func(file *os.File) {
			_ = file.Close()
		}(file)
	}

	return nil
}

// ---------------------------------------------------------------------
