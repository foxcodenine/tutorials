package maps

import "testing"

func TestSearch(t *testing.T) {
	dictinary := Dictinary{
		"test": "this is just a test",
	}

	t.Run("known word", func(t *testing.T) {
		got, _ := dictinary.Search(dictinary, "test")
		want := "this is just a test"

		assertStrings(t, got, want)
	})
	t.Run("unknown word", func(t *testing.T) {
		_, err := dictinary.Search(dictinary, "unknown")
		want := "could not find the word you were looking for"

		if err == nil {
			t.Fatal("expected search to fail for an unknown word")
		}

		assertStrings(t, err.Error(), want)
	})
}

func assertStrings(t testing.TB, got, want string) {
	t.Helper()

	if got != want {
		t.Errorf("got %q want %q given %q", got, want, "test")
	}
}
