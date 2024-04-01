package models

import "time"

type Reservation struct {
	Name  string
	Email string
	Phone string
}

type User struct {
	ID        int
	FullName  string
	Email     string
	Role      int
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Room struct {
	ID        int
	RoomName  string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Restriction struct {
	ID        int
	FullName  string
	Email     string
	Phone     string
	StartDate time.Time
	EndDate   time.Time
	RoomId    int
	Room      Room
	Processed int
	CreatedAt time.Time
	UpdatedAt time.Time
}

type RoomRestrintion struct {
	ID            int
	FullName      string
	Email         string
	Phone         string
	StartDate     time.Time
	EndDate       time.Time
	RoomId        int
	ReservationId int
	RestrictionId int
	Room          Room
	Reservation   Reservation
	Restriction   Restriction
	Processed     int
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
