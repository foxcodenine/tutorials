package db

import (
	"encoding/json"
	"exrecises/internal/mytypes"
	"fmt"
	"os"
)

func OpenDB() (map[string][]mytypes.Message, error) {
	var database map[string][]mytypes.Message
	_, err := os.Stat("devices_data.json")

	if err != nil {
		return database, fmt.Errorf("failed to access mock database file devices_data.json: %w", err)
	}

	file := "devices_data.json"
	byteFile, err := os.ReadFile(file)

	if err != nil {
		return database, fmt.Errorf("failed to read devices_data.json file: %w", err)
	}

	err = json.Unmarshal(byteFile, &database)

	if err != nil {
		return database, fmt.Errorf("failed to unmarshal devices_data.json file: %w", err)
	}

	return database, nil
}
