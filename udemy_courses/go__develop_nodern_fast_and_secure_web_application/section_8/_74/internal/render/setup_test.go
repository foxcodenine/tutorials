package render

import (
	"encoding/gob"
	"log"
	"net/http"
	"os"
	"testing"
	"time"

	"foxcode.io/internal/config"
	"foxcode.io/models"
	"foxcode.io/pkg/envloader"
	"github.com/alexedwards/scs/v2"
)

var session *scs.SessionManager
var testApp config.AppConfig

func TestMain(m *testing.M) {

	// Load environment variables
	testApp.RootPath = "../../"
	envVars, err := envloader.LoadEnvFile(testApp.RootPath + ".env")
	if err != nil {
		log.Fatalf("Error loading environment variables: %v", err)
	}
	testApp.Env = envVars

	// Register the models.Reservation type with gob to enable automatic encoding
	// and decoding in sessions, ensuring smooth serialization and deserialization.
	gob.Register(models.Reservation{})

	// Set application configuration for rendering
	// render.SetAppConfig(&app)

	// Create a new session manager with a 24-hour lifetime.
	session = scs.New()
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist = false
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure = false

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	testApp.InfoLog = infoLog

	errorLog := log.New(os.Stdout, "Error\t", log.Ldate|log.Ltime|log.Lshortfile)
	testApp.ErrorLog = errorLog

	// Set the session manager in the application configuration.
	testApp.Session = session
	app = &testApp
	// -------------------------------------------------------------

	os.Exit(m.Run())
}

// -----------------------------------------------------------------------------
// createing a 'http.ResponseWriter' it need to implement 'Header', 'WriteHeader' and 'Write'
type myWriter struct {
}

func (tw *myWriter) Header() http.Header {
	var h http.Header
	return h
}
func (tw *myWriter) WriteHeader(i int) {

}

func (tw *myWriter) Write(b []byte) (int, error) {
	length := len(b)
	return length, nil
}

// -----------------------------------------------------------------------------
