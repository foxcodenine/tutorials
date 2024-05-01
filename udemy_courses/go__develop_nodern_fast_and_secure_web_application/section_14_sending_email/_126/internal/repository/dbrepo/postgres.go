package dbrepo

import (
	"context"
	"errors"
	"time"

	"foxcode.io/models"
	"golang.org/x/crypto/bcrypt"
)

func (m *postgresDBRepo) AllUsers() bool {

	return true
}

func (m *postgresDBRepo) InsertReservation(res models.Reservation) (int, error) {

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	sql := `
		INSERT INTO reservations
			(full_name, email, phone, start_date, end_date, room_id, created_at, updated_at)
		VALUES 
			($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING id
	`

	var newId int

	err := m.DB.QueryRowContext(
		ctx,
		sql,
		res.FullName,
		res.Email,
		res.Phone,
		res.StartDate,
		res.EndDate,
		res.RoomID,
		time.Now(),
		time.Now(),
	).Scan(&newId)

	if err != nil {
		return 0, err
	}

	return newId, nil
}

func (m *postgresDBRepo) InsertRoomRestrictions(r models.RoomRestrintion) error {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	sql := `
		INSERT INTO room_restrictions
			(start_date, end_date, room_id, reservation_id, restriction_id, created_at, updated_at)
		VALUES
			($1, $2, $3, $4, $5, $6, $7)
	`

	_, err := m.DB.ExecContext(
		ctx,
		sql,
		r.StartDate,
		r.EndDate,
		r.RoomID,
		r.ReservationID,
		r.RestrictionID,
		r.CreatedAt,
		r.UpdatedAt,
	)

	if err != nil {
		return err
	}
	return err
}

func (m *postgresDBRepo) SearchAvailabilityByDate(start, end time.Time, roomId int) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	var numRows int

	// Adjust the WHERE clause to find overlaps, which indicates unavailability
	sql := `
        SELECT COUNT(id) FROM public.room_restrictions
        WHERE $1 < end_date AND $2 > start_date
        AND room_id = $3;
    `
	row := m.DB.QueryRowContext(ctx, sql, start, end, roomId)
	err := row.Scan(&numRows)

	if err != nil {
		return false, err
	}

	// If numRows > 0, it means there is at least one restriction that overlaps with the given dates, hence the room is not available
	return numRows == 0, nil
}

func (m *postgresDBRepo) SearchAvailabilityByDatesForAllRooms(start, end time.Time) ([]models.Room, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	sql := `
	select r.id, r.room_name
	from rooms r 
	where r.id  not in 
		(select room_id from room_restrictions rr where $1 < rr.end_date and $2 > rr.start_date);
	`

	var rooms []models.Room

	rows, err := m.DB.QueryContext(ctx, sql, start, end)

	if err != nil {
		return rooms, err
	}

	for rows.Next() {
		var room models.Room

		err := rows.Scan(
			&room.ID,
			&room.RoomName,
		)

		if err != nil {
			return rooms, err
		}

		rooms = append(rooms, room)
	}

	if err = rows.Err(); err != nil {
		return rooms, err
	}

	return rooms, nil
}

func (m *postgresDBRepo) GetRoomById(id int) (models.Room, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	sql := `SELECT id, room_name, created_at, updated_at FROM rooms WHERE id = $1`
	var room models.Room

	row := m.DB.QueryRowContext(
		ctx,
		sql,
		id,
	)

	err := row.Scan(
		&room.ID,
		&room.RoomName,
		&room.CreatedAt,
		&room.UpdatedAt,
	)

	if err != nil {
		return room, err
	}

	return room, nil
}

// GetUserByID get a user from database by ID
func (m *postgresDBRepo) GetUserByID(id int) (models.User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	sql := `SELECT id, fullname, email, password, role, created_at, updated_at
			FROM users WHERE id = $1`

	row := m.DB.QueryRowContext(ctx, sql, id)

	var u models.User

	err := row.Scan(
		&u.ID,
		&u.FullName,
		&u.Email,
		&u.Password,
		&u.Role,
		&u.CreatedAt,
		&u.UpdatedAt,
	)

	if err != nil {
		return u, err
	}

	return u, nil
}

// UpdateUser update a user in the database
func (m *postgresDBRepo) UpdateUser(u models.User) error {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	sql := `UPDATE users SET fullname = $1, email = $2, role = $3 updated_at = $4
			WHERE id = $5`

	_, err := m.DB.ExecContext(ctx, sql, u.FullName, u.Email, u.Role, time.Now(), u.ID)

	if err != nil {
		return err
	}
	return nil
}

// Authenticate authenticate a user
func (m *postgresDBRepo) Authenticate(email, testPassword string) (int, string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	var id int
	var hashedPassword string

	sql := `SELECT id, password FROM users WHERE email = $1 LIMIT 1`

	row := m.DB.QueryRowContext(ctx, sql, email)

	err := row.Scan(&id, &hashedPassword)

	if err != nil {
		return id, "", err
	}

	err = bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(testPassword))

	if err != bcrypt.ErrMismatchedHashAndPassword {
		return id, "", err
	} else if err != nil {
		return id, "", errors.New("incorrect password")
	}

	return id, hashedPassword, nil
}

// AllReservations returns a slice of all reservations
func (m *postgresDBRepo) AllReservations() ([]models.Reservation, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	var reservation []models.Reservation

	query := `
		SELECT r.id, r.full_name, r.email, r.phone, r.start_date,
		r.end_date, r.room_id, r.created_at, r.updated_at, 
		rm.id, rm.room_name
		FROM reservations r
		LEFT JOIN rooms rm ON r.room_id = rm.id
		ORDER BY r.start_date ASC`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return reservation, err
	}
	defer rows.Close()

	for rows.Next() {
		var i models.Reservation
		err := rows.Scan(
			&i.ID,
			&i.FullName,
			&i.Email,
			&i.Phone,
			&i.StartDate,
			&i.EndDate,
			&i.RoomID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.RoomID,
			&i.Room.RoomName,
		)

		if err != nil {
			return reservation, err
		}

		reservation = append(reservation, i)
	}

	if err = rows.Err(); err != nil {
		return reservation, err
	}

	return reservation, nil

}

// AllNewReservations returns a slice of all reservations
func (m *postgresDBRepo) AllNewReservations() ([]models.Reservation, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	var reservation []models.Reservation

	query := `
		SELECT r.id, r.full_name, r.email, r.phone, r.start_date,
		r.end_date, r.room_id, r.created_at, r.updated_at, r.processed,
		rm.id, rm.room_name
		FROM reservations r
		LEFT JOIN rooms rm ON r.room_id = rm.id
		WHERE processed = 0
		ORDER BY r.start_date ASC`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return reservation, err
	}
	defer rows.Close()

	for rows.Next() {
		var i models.Reservation
		err := rows.Scan(
			&i.ID,
			&i.FullName,
			&i.Email,
			&i.Phone,
			&i.StartDate,
			&i.EndDate,
			&i.RoomID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.Processed,
			&i.RoomID,
			&i.Room.RoomName,
		)

		if err != nil {
			return reservation, err
		}

		reservation = append(reservation, i)
	}

	if err = rows.Err(); err != nil {
		return reservation, err
	}

	return reservation, nil

}
