package models

import (
	"exrecises/internal/mytypes"
	"fmt"
)

type Store interface {
	GetLatest(deviceID string) (mytypes.Message, error)
}

type Device struct {
	DB map[string][]mytypes.Message
}

func (m *Device) GetLatest(deviceID string) (mytypes.Message, error) {
	var msg mytypes.Message

	data, ok := m.DB[deviceID]

	if !ok {
		return msg, fmt.Errorf("device %q not found", deviceID)
	}

	for _, d := range data {
		if msg.Timestamp.Before(d.Timestamp) {
			msg = d
		}
	}

	return msg, nil
}
