package main

import (
	"testing"

	"foxcode.io/internal/config"
	"github.com/go-chi/chi/v5"
)

func TestRoutes(t *testing.T) {

	var app config.AppConfig

	mux := routes(&app)

	switch v := mux.(type) {
	case *chi.Mux:
		// ok, test passed
	default:
		t.Errorf("Type mismatch: Expected *chi.Mux, got %T", v)
	}
}
