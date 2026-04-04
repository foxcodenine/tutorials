package api

import (
	"exrecises/internal/models"
	"github.com/go-chi/chi/v5"
)

func NewRouter(m models.Models) *chi.Mux {
	r := chi.NewRouter()

	h := Handler{

		Models: m,
	}

	r.Get("/device/{id}", h.GetLatestDeviceMsg)

	return r
}
