package dbrepo

import (
	"errors"
	"time"

	"foxcode.io/models"
)

func (m *testDBRepo) AllUsers() bool {

	return true
}

func (m *testDBRepo) InsertReservation(res models.Reservation) (int, error) {

	if res.RoomID == 600 {
		return 0, errors.New("some error")
	}

	return 1, nil
}

func (m *testDBRepo) InsertRoomRestrictions(r models.RoomRestriction) error {
	if r.RoomID == 700 {
		return errors.New("some error")
	}
	return nil
}

func (m *testDBRepo) SearchAvailabilityByDate(start, end time.Time, roomId int) (bool, error) {

	if roomId == 800 {
		return false, errors.New("some error")
	}
	if roomId == 900 {
		return true, nil
	}

	return false, nil
}

func (m *testDBRepo) SearchAvailabilityByDatesForAllRooms(start, end time.Time) ([]models.Room, error) {

	var rooms []models.Room

	rooms = append(rooms, models.Room{
		ID:        1,
		RoomName:  "New Room",
		CreatedAt: start,
		UpdatedAt: end,
	})

	startDate := start.Format("2006-01-02")

	if startDate == "2030-12-12" {
		return rooms, errors.New("some error")
	}

	if startDate == "2030-12-13" {
		rooms = []models.Room{}
	}

	return rooms, nil
}

func (m *testDBRepo) GetRoomById(id int) (models.Room, error) {
	var room models.Room
	if id == 0 {
		return room, errors.New("Some error")
	}
	return room, nil
}

func (m *testDBRepo) GetUserByID(id int) (models.User, error) {
	var u models.User

	return u, nil
}

func (m *testDBRepo) UpdateUser(u models.User) error {
	return nil
}

func (m *testDBRepo) Authenticate(email, testPassword string) (int, string, error) {

	return 0, "", nil
}

func (m *testDBRepo) AllReservations() ([]models.Reservation, error) {
	var reservations []models.Reservation
	return reservations, nil
}
func (m *testDBRepo) AllNewReservations() ([]models.Reservation, error) {
	var reservations []models.Reservation
	return reservations, nil
}

func (m *testDBRepo) GetReservationByID(id int) (models.Reservation, error) {
	var reservation models.Reservation
	return reservation, nil
}

func (m *testDBRepo) UpdateReservation(u models.Reservation) error {
	return nil
}

func (m *testDBRepo) DeleteReservation(id int) error {
	return nil
}
func (m *testDBRepo) UpdateProcessedForReservation(id, processed int) error {
	return nil
}

func (m *testDBRepo) AllRooms() ([]models.Room, error) {
	var rooms []models.Room

	return rooms, nil
}

// GetRestrictionsForRoomByDate returns restrictions for a room by date range
func (m *testDBRepo) GetRestrictionsForRoomByDate(roomID int, start, end time.Time) ([]models.RoomRestriction, error) {

	var restrictions []models.RoomRestriction

	return restrictions, nil
}

func (m *testDBRepo) InsertBlockForRoom(id int, startDate time.Time) error {

	return nil
}
func (m *testDBRepo) DeleteBlockByID(id int) error {

	return nil
}
