package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/jackc/pgx/v4/stdlib"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// connect to a database
	conn, err := sql.Open("pgx", os.Getenv("DATABASE_URL"))

	if err != nil {
		log.Fatal(fmt.Sprintf("Unable to connect to: %v\n", err))
	}
	defer conn.Close()

	log.Println("Connected to database!")

	// text my connection
	err = conn.Ping()

	if err != nil {
		log.Fatal("Cannot ping database!")
	}

	log.Println("Pinged database!")

	// get rows from table

	err = getAllRows(conn)
	if err != nil {
		log.Fatal("err")
	}

	// insert a row

	err = insertRow(conn, "Luke", "Abela")
	if err != nil {
		log.Fatal("err")
	}

	// get rows from table again

	err = getAllRows(conn)
	if err != nil {
		log.Fatal("err")
	}

	// update a row

	err = updateRow(conn, 5, "Hanna", "Petrov")
	if err != nil {
		log.Fatal("err")
	}

	// get rows from table again
	err = getAllRows(conn)
	if err != nil {
		log.Fatal("err")
	}
	// get one row by id

	err = getUserById(conn, 5)
	if err != nil {
		log.Fatal("err")
	}

	// delete a row

	err = deleteUserById(conn, 6)
	if err != nil {
		log.Fatal("err")
	}

	// get row again
	err = getAllRows(conn)
	if err != nil {
		log.Fatal("err")
	}
}

func getAllRows(conn *sql.DB) error {
	rows, err := conn.Query("select id, first_name, last_name from users")
	if err != nil {
		return err
	}
	defer rows.Close()

	var firstName, LastName string
	var id int

	for rows.Next() {
		err := rows.Scan(&id, &firstName, &LastName)
		if err != nil {
			return err
		}

		fmt.Println("Record is", id, firstName, LastName)
	}

	if err = rows.Err(); err != nil {
		log.Fatal("Error scanning rows: ", err)
	}

	fmt.Println("-----------------------------------------------------")

	return nil
}

func insertRow(conn *sql.DB, first_name, last_name string) error {
	sql := `INSERT INTO users (first_name, last_name) VALUES ($1, $2)`
	_, err := conn.Exec(sql, first_name, last_name)

	return err
}

func updateRow(conn *sql.DB, id int, first_name, last_name string) error {
	sql := `UPDATE users set first_name = $1, last_name = $2 where id = $3`
	_, err := conn.Exec(sql, first_name, last_name, id)

	return err
}

func getUserById(conn *sql.DB, id int) error {
	sqlStmt := `SELECT id, first_name, last_name FROM users WHERE id = $1 LIMIT 1`
	row := conn.QueryRow(sqlStmt, id)

	var firstName, lastName string
	var queriedId int

	err := row.Scan(&queriedId, &firstName, &lastName)
	if err != nil {
		return err
	}

	fmt.Println("QueryRow returns", queriedId, firstName, lastName)

	return nil
}

func deleteUserById(conn *sql.DB, id int) error {
	sql := `DELETE FROM users WHERE id = $1`

	_, err := conn.Exec(sql, id)

	return err
}
