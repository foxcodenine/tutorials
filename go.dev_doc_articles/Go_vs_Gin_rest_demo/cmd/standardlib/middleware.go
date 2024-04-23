package main

import (
	"log"
	"net/http"
	"strings"
	"time"
)

// ---------------------------------------------------------------------

// Middleware defines a function type that takes an http.Handler and returns another http.Handler.
// This type is used to wrap HTTP handlers with additional functionality, such as logging, authentication, etc.
type Middleware func(http.Handler) http.Handler

// CreateStack combines multiple middleware functions into a single Middleware.
// This single Middleware can then be applied to an HTTP handler, allowing the handler to process
// requests through a "stack" of middleware functions.
func CreateStack(xs ...Middleware) Middleware {
	return func(next http.Handler) http.Handler {
		for i := len(xs) - 1; i >= 0; i-- {
			x := xs[i]
			next = x(next)
		}
		return next
	}
}

// ---------------------------------------------------------------------

func stripSlashMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" && r.URL.Path != "/v1/" {
			r.URL.Path = strings.TrimSuffix(r.URL.Path, "/")
		}
		next.ServeHTTP(w, r)
	})
}

// ---------------------------------------------------------------------

func ensureAdminMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Println("< SHOULD BE ADMIN >")
		next.ServeHTTP(w, r)
	})
}

// ---------------------------------------------------------------------

// wrappedWriter is a struct that embeds http.ResponseWriter and adds an extra field for statusCode.
// http.ResponseWriter is an interface used in HTTP handlers to construct an HTTP response.
type wrappedWriter struct {
	http.ResponseWriter     // Embedding allows wrappedWriter to inherit all methods of http.ResponseWriter.
	statusCode          int // Additional field to keep track of the status code that is written in the response.
}

// WriteHeader is a method on wrappedWriter that overrides the WriteHeader method of the embedded http.ResponseWriter.
func (w *wrappedWriter) WriteHeader(statusCode int) {
	w.ResponseWriter.WriteHeader(statusCode) // Call the WriteHeader method of the embedded ResponseWriter.
	w.statusCode = statusCode                // Store the status code in the wrappedWriter struct.
}

func loggerMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		ww := &wrappedWriter{
			ResponseWriter: w,
			statusCode:     http.StatusOK,
		}
		next.ServeHTTP(ww, r)

		if r.URL.Path != "/favicon.ico" {
			log.Println(ww.statusCode, r.Method, r.URL.Path, time.Since(start))
		}
	})
}

// ---------------------------------------------------------------------
