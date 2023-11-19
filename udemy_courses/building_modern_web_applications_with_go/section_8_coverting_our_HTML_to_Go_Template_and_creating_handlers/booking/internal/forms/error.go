package forms

// errors is a custom type representing a map where keys are strings (field names)
// and values are slices of strings (error messages associated with the fields).
type errors map[string][]string

// ---------------------------------------------------------------------

// Add method adds an error message to the list of messages for a specific field.
func (e errors) Add(field, message string) {

	e[field] = append(e[field], message)
}

// ---------------------------------------------------------------------

// Get method retrieves the first error message associated with a specific field.
// If there are no error messages for the field, it returns an empty string.
func (e errors) Get(field string) string {

	es := e[field]

	if len(es) == 0 {
		return ""
	}
	return es[0]
}
