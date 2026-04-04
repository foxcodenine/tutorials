package models

import "exrecises/internal/mytypes"

type Models struct {
	Device Device
}

func GetModels(db map[string][]mytypes.Message) Models {
	return Models{
		Device: Device{DB: db},
	}
}
