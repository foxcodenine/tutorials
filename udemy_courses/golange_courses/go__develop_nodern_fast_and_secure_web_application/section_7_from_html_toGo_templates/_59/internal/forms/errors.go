package forms

type errors map[string][]string

// Add adds an error message to the specified field.
func (e errors) Add(field, message string) {
	e[field] = append(e[field], message)
}

// Get retrieves the first error message for the specified field.
// Returns nil if there are no errors for the field
func (e errors) Get(field string) *string {
	errorMessages := e[field]

	if len(errorMessages) == 0 {
		return nil
	}

	return &errorMessages[0]
}
