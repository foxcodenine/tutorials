package utils

// SliceDifference returns the elements in `a` that aren't in `b`.
func SliceDifference(a, b []string) []string {
	m := make(map[string]bool)
	var diff []string

	// Map each element of `b` to true
	for _, item := range b {
		m[item] = true
	}

	// Add only elements not in map to the diff slice
	for _, item := range a {
		if _, ok := m[item]; !ok {
			diff = append(diff, item)
		}
	}

	return diff
}

// SliceMap applies a function fn to each element of slice s and returns a new slice.
func SliceMap[S ~[]T, T any, U any](s S, fn func(T) U) []U {
	result := make([]U, len(s))
	for i, v := range s {
		result[i] = fn(v)
	}
	return result
}

// SliceFind returns the first element in the slice s that matches the predicate fn.
// If no elements match, the second return value is false.
func SliceFind[S ~[]T, T any](s S, fn func(T) bool) (T, bool) {
	var zero T
	for _, v := range s {
		if fn(v) {
			return v, true
		}
	}
	return zero, false
}

// SliceFindIndex returns the index of the first element in slice s that matches
// the predicate fn. If no elements match, it returns -1.
func SliceFindIndex[S ~[]T, T any](s S, fn func(T) bool) int {
	for i, v := range s {
		if fn(v) {
			return i
		}
	}
	return -1
}

// SliceFilter returns a new slice containing all elements in s that match
// the predicate fn.
func SliceFilter[S ~[]T, T any](s S, fn func(T) bool) S {
	var result S // Creating a slice of the same type as S
	for _, v := range s {
		if fn(v) {
			result = append(result, v)
		}
	}
	return result
}

// SliceIncludes checks if an element is present in the slice.
func SliceIncludes[T comparable](slice []T, element T) bool {
	for _, elem := range slice {
		if elem == element {
			return true
		}
	}
	return false
}
