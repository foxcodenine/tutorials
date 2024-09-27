package dbrepo

import (
	"context"
	"time"

	"foxcode.io/models"
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
