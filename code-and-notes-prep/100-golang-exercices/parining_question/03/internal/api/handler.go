package api

import (
	"encoding/json"
	"exrecises/internal/models"
	"github.com/go-chi/chi/v5"
	"net/http"
)

type Handler struct {
	Models models.Models
}

func (h Handler) GetLatestDeviceMsg(w http.ResponseWriter, r *http.Request) {

	id := chi.URLParam(r, "id")

	msg, err := h.Models.Device.GetLatest(id)

	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte(err.Error()))
		return
	}

	jasonData, err := json.Marshal(msg)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jasonData)
}
