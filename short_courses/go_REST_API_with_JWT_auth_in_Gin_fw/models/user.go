package models

import (
	"errors"
	"gin_jwt_api/utils/token"
	"html"
	"log"
	"strings"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// -- User represents the user model structure -------------------------

type User struct {
	gorm.Model
	Username string `gorm:"size:255;not null;unique" json:"username"`
	Password string `gorm:"size:255;not null;" json:"password"`
}

func (u *User) PrepareGive() {
	u.Password = ""
}

// -- SaveUser saves the user to the database --------------------------

func (u *User) SaveUser() (*User, error) {
	err := DB.Create(&u).Error
	if err != nil {
		return &User{}, err
	}
	return u, nil
}

// -- BeforeSave is called before saving the user ----------------------
func (u *User) BeforeSave() error {
	// Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hashedPassword)

	// Remove leading and trailing spaces in the username
	u.Username = html.EscapeString(strings.TrimSpace(u.Username))

	return nil
}

// ---------------------------------------------------------------------

func VerifyPassword(password, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}

func LoginCheck(username, password string) (string, error) {
	var err error

	u := User{}

	// -- Fetches the 1st record from the User table where the username matches the username variable.
	//    The fetched data is stored in the variable u, & any potential error is stored in err.

	err = DB.Model(User{}).Where("username = ?", username).Take(&u).Error

	if err != nil {
		return "", err
	}

	err = VerifyPassword(password, u.Password)

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", err
	}

	token, err := token.GenerateToken(u.ID)

	if err != nil {
		return "", err
	}

	log.Println("..so far so good! 81")

	return token, err
}

// -- GetUserByID retrieves a user by their ID from the database
func GetUserByID(uid uint) (User, error) {

	// -- Initialize a variable to store the user data
	var user User

	// -- Find the user with the specified ID in the database
	if err := DB.First(&user, uid).Error; err != nil {
		return user, errors.New("user not found")
	}

	// -- Prepare the user data for retrieval, such as sensitive information redaction
	user.PrepareGive()

	// -- Return the retrieved user data and a nil error, indicating success
	return user, nil
}
