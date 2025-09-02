package main

import (
	"context"
	"encoding/gob"
	"final-project/data"
	"log"
	"net/http"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/alexedwards/scs/v2"
)

var testApp Config

// TestMain runs once before/after all tests in this package.
// Great for wiring a test-only app/config and shared resources.
func TestMain(m *testing.M) {

	// Allow scs (session store) to serialize/deserialize data.User in session.
	gob.Register(data.User{})

	// Create a new session manager for tests.
	session := scs.New()

	// Session settings (same as prod unless you need to loosen for tests).
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist = true
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure = true // tip: set false if your tests don’t run over https

	// Simple stdout loggers for test output.
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	// Build a minimal app config used by handlers/services in tests.
	testApp = Config{
		Session:  session,           // session manager used by handlers
		DB:       nil,               // inject a real/mock DB later if needed
		InfoLog:  infoLog,           // info logger
		ErrorLog: errorLog,          // error logger
		Wait:     &sync.WaitGroup{}, // shared waitgroup for background work
		// Models:  data.New(db),  // typically set when a real DB is provided
		ErrorChan:     make(chan error), // app-wide error channel (non-mailer)
		ErrorChanDone: make(chan bool),  // signal to stop the error listener
	}

	// --- Dummy mailer setup (so code using Mail doesn’t block in tests) ---

	// Local channels for the test mailer.
	errorChan := make(chan error)
	mailerChan := make(chan Message, 100) // buffered so tests don’t deadlock
	mailerDoneChan := make(chan bool)

	// Inject a “fake” mailer into the app config.
	testApp.Mailer = Mail{
		// Domain/Host/Port etc. not needed for unit tests.
		Wait:       testApp.Wait,
		ErrorChan:  errorChan,
		MailerChan: mailerChan,
		DoneChan:   mailerDoneChan,
	}

	// Background goroutine: drains mailer channels so sends don’t block.
	// It exits when DoneChan receives a value.
	go func() {
		for {
			select {
			case <-testApp.Mailer.ErrorChan: // ignore errors in unit tests
			case <-testApp.Mailer.MailerChan: // pretend we “sent” the email
			case <-testApp.Mailer.DoneChan: // stop draining and exit
				return
			}
		}
	}()

	// Background goroutine: listens for app errors and logs them.
	// It exits when ErrorChanDone receives a value.
	go func() {
		for {
			select {
			case err := <-testApp.ErrorChan:
				testApp.ErrorLog.Println(err)
			case <-testApp.ErrorChanDone:
				return
			}
		}
	}()

	// Run tests; capture exit code and terminate the process with it.
	os.Exit(m.Run())
}

func getCtx(req *http.Request) context.Context {
	ctx, err := testApp.Session.Load(req.Context(), req.Header.Get("X-Session"))
	if err != nil {
		log.Println(err)
	}

	return ctx
}
