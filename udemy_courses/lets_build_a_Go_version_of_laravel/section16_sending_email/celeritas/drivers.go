package celeritas

import (
	_ "github.com/jackc/pgconn"
	_ "github.com/jackc/pgx/v4"
	_ "github.com/jackc/pgx/v4/stdlib"

	"database/sql"
	"strings"
)

func (c *Celeritas) OpenDB(dbType, dns string) (*sql.DB, error) {
	if strings.ToLower(dbType) == "postgres" || strings.ToLower(dbType) == "postgresql" {
		dbType = "pgx"
	}

	db, err := sql.Open(dbType, dns)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}
