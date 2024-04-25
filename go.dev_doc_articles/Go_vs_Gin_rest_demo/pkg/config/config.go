package config

import "github.com/foxcodenine/go-vs-gin-rest-demo/pkg/dbDriver"

type AppConfig struct {
	Env map[string]string
	DB  *dbDriver.DB
}
