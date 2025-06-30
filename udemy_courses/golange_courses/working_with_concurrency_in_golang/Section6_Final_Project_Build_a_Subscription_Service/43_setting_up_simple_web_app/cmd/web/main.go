package main

import (
	"database/sql"
	"log"
	"os"
	"time"

	_ "github.com/jackc/pgx/v5"
	_ "github.com/jackc/pgx/v5/stdlib"
)

const webPort = "80"

func main() {
	// connect to the db
	db := initDB()
	db.Ping()

	// create sessions

	// create channels

	// create waitgroups

	// set up the application config

	// set up mail

	// listen for web connections
}

func initDB() *sql.DB {
	conn := connectToDB()

	if conn == nil {
		log.Panic("can't connect to databse")
	}

	return conn
}

func connectToDB() *sql.DB {
	count := 0

	dsn := os.Getenv("DATABASE_URL")

	for {
		connections, err := openDB(dsn)
		if err != nil {
			log.Println("postgres not yet ready...")
		} else {
			log.Println("connected to database!")
			return connections
		}

		if count > 10 {
			return nil
		}

		log.Println("backing off for 1 second.")
		time.Sleep(1 * time.Second)
		count++

		continue
	}
}

func openDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}
