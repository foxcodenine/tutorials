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

	sql := `
		SELECT COUNT(id) FROM public.room_restrictions
		WHERE NOT ($1 < start_date OR $2 > end_date)
		AND room_id = $3;
	`
	row := m.DB.QueryRowContext(ctx, sql, start, end, roomId)
	err := row.Scan(&numRows)

	if err != nil {
		return false, err
	}

	if numRows == 0 {
		return true, nil
	}

	return false, nil
}
