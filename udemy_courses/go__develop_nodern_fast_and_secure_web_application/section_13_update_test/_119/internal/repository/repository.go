package repository

import (
	"time"

	"foxcode.io/models"
)

type DatabaseRepo interface {
	AllUsers() bool

	InsertReservation(res models.Reservation) (int, error)

	InsertRoomRestrictions(r models.RoomRestrintion) error

	SearchAvailabilityByDate(start, end time.Time, roomId int) (bool, error)

	SearchAvailabilityByDatesForAllRooms(start, end time.Time) ([]models.Room, error)

	GetRoomById(id int) (models.Room, error)
}
