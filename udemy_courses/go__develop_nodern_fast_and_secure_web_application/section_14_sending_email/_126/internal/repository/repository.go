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

	GetUserByID(id int) (models.User, error)

	UpdateUser(u models.User) error

	Authenticate(email, testPassword string) (int, string, error)

	AllReservations() ([]models.Reservation, error)

	AllNewReservations() ([]models.Reservation, error)

	GetReservationByID(id int) (models.Reservation, error)

	UpdateReservation(u models.Reservation) error

	DeleteReservation(id int) error

	UpdateProcessedForReservation(id, processed int) error
}
