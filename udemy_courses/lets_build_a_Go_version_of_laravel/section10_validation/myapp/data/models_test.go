package data

import (
	"fmt"
	"os"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	db2 "github.com/upper/db/v4"
)

func TestNew(t *testing.T) {
	fakeDB, mock, _ := sqlmock.New()
	defer fakeDB.Close()

	// Set environment and expect queries
	_ = os.Setenv("DATABASE_TYPE", "postgres")
	mock.ExpectQuery("SELECT CURRENT_DATABASE\\(\\) AS name").WillReturnRows(sqlmock.NewRows([]string{"name"}).AddRow("postgres"))

	m := New(fakeDB)
	if fmt.Sprintf("%T", m) != "data.Models" {
		t.Error("wrong type returned", fmt.Sprintf("%T", m))
	}

	// Change environment and expect new queries
	_ = os.Setenv("DATABASE_TYPE", "mysql")
	mock.ExpectQuery("SELECT DATABASE\\(\\) AS name").WillReturnRows(sqlmock.NewRows([]string{"name"}).AddRow("mysql"))
	m = New(fakeDB)
	if fmt.Sprintf("%T", m) != "data.Models" {
		t.Error("wrong type returned", fmt.Sprintf("%T", m))
	}

	// Check if there are any unfulfilled expectations
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Error("there were unfulfilled expectations:", err)
	}
}

func TestGetInsertID(t *testing.T) {
	var id db2.ID

	id = int64(1)

	returnedID := getInsertID(id)
	if fmt.Sprintf("%T", returnedID) != "int" {
		t.Error("wrong type returned", fmt.Sprintf("%T", returnedID))
	}

	id = 1

	returnedID = getInsertID(id)
	if fmt.Sprintf("%T", returnedID) != "int" {
		t.Error("wrong type returned", fmt.Sprintf("%T", returnedID))
	}
}
