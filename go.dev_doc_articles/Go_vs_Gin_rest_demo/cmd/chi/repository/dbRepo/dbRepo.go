package dbRepo

import (
	"database/sql"

	"github.com/foxcodenine/go-vs-gin-rest-demo/pkg/config"
)

type dbRepo struct {
	App *config.AppConfig
	DB  *sql.DB
}

func NewDbRepo(a *config.AppConfig) *dbRepo {
	return &dbRepo{
		App: a,
		DB:  a.DB.SQL,
	}
}
