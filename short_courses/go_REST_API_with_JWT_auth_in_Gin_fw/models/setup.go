package models

import (
	"fmt"
	"log"
	"os"
	"os/exec"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
)

var DB *gorm.DB

// -- ConnectDataBase function establishes connections to the SSH and database.
func ConnectDataBase() {

	// -- Load environment variables from the .env file -----------------
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	// -- Set Gin mode -------------------------------------------------

	ginMode := os.Getenv("GIN_MODE")
	gin.SetMode(ginMode)

	// -- Set up SSH tunnel --------------------------------------------

	sshHost := os.Getenv("SSH_HOST")
	sshAuthFile := os.Getenv("SSH_AUTH_FILE")
	sshFMatchPorts := os.Getenv("SSH_MATCH_PORTS")

	sshCmd := exec.Command("ssh", "-i", sshAuthFile, "-L", sshFMatchPorts, sshHost, "-N", "-f")
	if err := sshCmd.Run(); err != nil {
		log.Fatalf("Failed to establish SSH tunnel: %v", err)
	}

	// -- Connect to the database --------------------------------------

	Dbdriver := os.Getenv("DB_DRIVER")
	DbHost := os.Getenv("DB_HOST")
	DbUser := os.Getenv("DB_USER")
	DbPassword := os.Getenv("DB_PASSWORD")
	DbName := os.Getenv("DB_NAME")
	DbPort := os.Getenv("DB_PORT")

	DBURL := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", DbUser, DbPassword, DbHost, DbPort, DbName)

	DB, err = gorm.Open(Dbdriver, DBURL)
	if err != nil {
		log.Fatalf("Failed to connect to the database %s: %v", Dbdriver, err)
	} else {
		fmt.Println("Connected to the database", Dbdriver)
	}

	DB.AutoMigrate(&User{})
}
