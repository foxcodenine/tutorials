package maps

import "errors"

type Dictinary map[string]string

var ErrNotFound = errors.New("could not find the word you were looking for")

// ---------------------------------------------------------------------

func (d Dictinary) Search(dictionary Dictinary, word string) (string, error) {
	w, ok := dictionary[word]

	if !ok {
		return "", ErrNotFound
	}
	return w, nil
}
