package celeritas

import "os"

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
