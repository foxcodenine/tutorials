package render

import (
	"os"
	"testing"

	"github.com/CloudyKit/jet/v6"
)

// Initialize a new Jet template set with OS file system loader pointing to the views directory.
// The InDevelopmentMode enables debug mode for the Jet templates.
var views = jet.NewSet(
	jet.NewOSFileSystemLoader("./testdata/views"),
	jet.InDevelopmentMode(),
)

// testRenderer is an instance of the Render struct initialized with empty values and the JetViews set.
var testRenderer = Render{
	Renderer: "",
	RootPath: "",
	JetViews: views,
}

// TestMain is the entry point for testing in this package.
// It runs the tests and exits with the returned status code.
func TestMain(m *testing.M) {
	os.Exit(m.Run())
}
