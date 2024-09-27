package data

import (
	"errors"
	"time"

	"golang.org/x/crypto/bcrypt"

	up "github.com/upper/db/v4"
)

// User represents the user model that maps to the 'users' table in the database.
type User struct {
	ID        int       `db:"id,omitempty"`
	FirstName string    `db:"first_name"`
	LastName  string    `db:"last_name"`
	Email     string    `db:"email"`
	Active    int       `db:"user_active"`
	Password  string    `db:"password"`
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
	Token     Token     `db:"-"`
}

// Table returns the table name associated with the User model.
func (u *User) Table() string {
	return "users"
}

// Table returns the table name associated with the User model.
func (u *User) GetAll() ([]*User, error) {

	// Access the collection corresponding to the 'users' table.
	collection := upper.Collection(u.Table())

	// Slice to store the results
	var all []*User

	// Construct the query to fetch all records, ordering them by 'last_name'.
	res := collection.Find().OrderBy("last_name")

	// Retrieve all matching records
	err := res.All(&all)
	if err != nil {
		return nil, err
	}

	return all, nil
}

// ---------------------------------------------------------------------

// GetByEmail retrieves a single user based on their email.
func (u *User) GetByEmail(email string) (*User, error) {
	var theUser *User

	// Access the collection corresponding to the 'users' table.
	collection := upper.Collection(u.Table())

	// Construct the query to find the user with the specified email.
	res := collection.Find(up.Cond{"email =": email})

	// Execute the query and retrieve the first matching user.
	err := res.One(&theUser)
	if err != nil {
		return nil, err
	}

	// Initialize a variable to store the latest active token for the user.
	var token Token

	// Access the 'tokens' table
	collection = upper.Collection(token.Table())

	// Construct the query to find the latest token for the user that hasn't expired yet.
	res = collection.Find(up.Cond{"user_id =": theUser.ID, "expiry >": time.Now()}).OrderBy("created_at desc")

	// Execute the query and try to retrieve the most recent token.
	err = res.One(&token)
	if err != nil {

		// Cherk if error is neither ErrNilRecord nor ErrNoMoreRows (indicating no token data found).
		// If there's an error that is not about missing records (no token found), return the error.
		if err != up.ErrNilRecord && err != up.ErrNoMoreRows {
			return nil, err
		}
	}

	// Assign the retrieved token (if any) to the user's Token field.
	theUser.Token = token

	return theUser, nil
}

// ---------------------------------------------------------------------

// Get retrieves a single user based on their id.
func (u *User) Get(id int) (*User, error) {
	var theUser *User

	// Access the collection corresponding to the 'users' table.
	collection := upper.Collection(u.Table())

	// Construct the query to find the user with the specified id.
	res := collection.Find(up.Cond{"id =": id})

	// Execute the query and retrieve the first matching user.
	err := res.One(&theUser)
	if err != nil {
		return nil, err
	}

	// Initialize a variable to store the latest active token for the user.
	var token Token

	// Access the 'tokens' table
	collection = upper.Collection(token.Table())

	// Construct the query to find the latest token for the user that hasn't expired yet.
	res = collection.Find(up.Cond{"user_id =": theUser.ID, "expiry >": time.Now()}).OrderBy("created_at desc")

	// Execute the query and try to retrieve the most recent token.
	err = res.One(&token)
	if err != nil {

		// Cherk if error is neither ErrNilRecord nor ErrNoMoreRows (indicating no token data found).
		// If there's an error that is not about missing records (no token found), return the error.
		if err != up.ErrNilRecord && err != up.ErrNoMoreRows {
			return nil, err
		}
	}

	// Assign the retrieved token (if any) to the user's Token field.
	theUser.Token = token

	// Return the retrieved user and nil if successful.
	return theUser, nil
}

// ---------------------------------------------------------------------

// Update updates a user record in the database
func (u *User) Update(theUser User) error {

	// Set the current time as the updated time for the user.
	theUser.UpdatedAt = time.Now()

	// Access the collection corresponding to the 'users' table.
	collection := upper.Collection(u.Table())

	// Find the user record by ID.
	res := collection.Find(theUser.ID)

	// Update the found user record with the new details.
	err := res.Update(&theUser)
	if err != nil {
		return err
	}

	// Return nil if the update is successful, indicating no error occurred.
	return nil
}

// ---------------------------------------------------------------------

// Delete deletes a user by id
func (u *User) Delete(id int) error {

	// Access the collection corresponding to the 'users' table in the database.
	collection := upper.Collection(u.Table())

	// Find the user record by the given ID.
	res := collection.Find(id)

	// Execute the delete operation on the found user.
	err := res.Delete()
	if err != nil {
		return err
	}

	// Return nil if the delete operation is successful, indicating no error occurred.
	return nil
}

// ---------------------------------------------------------------------

// Insert inserts a new user, and returns the newly inserted id
func (u *User) Insert(theUser User) (int, error) {
	newHash, err := bcrypt.GenerateFromPassword([]byte(theUser.Password), 12)

	if err != nil {
		return 0, err
	}

	theUser.CreatedAt = time.Now()
	theUser.UpdatedAt = time.Now()

	theUser.Password = string(newHash)

	collection := upper.Collection(u.Table())

	res, err := collection.Insert(theUser)
	if err != nil {
		return 0, err
	}

	id := getInsertID(res.ID())

	return id, nil
}

// ---------------------------------------------------------------------

// ResetPassword resets a users's password, by id, using supplied password
func (u *User) ResetPassword(id int, newPassword string) error {

	collection := upper.Collection(u.Table())

	res := collection.Find(up.Cond{"id =": id})

	var theUser User

	err := res.One(&theUser)
	if err != nil {
		return err
	}

	newHash, err := bcrypt.GenerateFromPassword([]byte(newPassword), 12)

	if err != nil {
		return err
	}

	theUser.UpdatedAt = time.Now()
	u.Password = string(newHash)

	err = theUser.Update(*u)

	if err != nil {
		return err
	}

	return nil
}

// ---------------------------------------------------------------------

// PasswordMatches verifies a supplied password against the hash stored in the database.
// It returns true if valid, and false if the password does not match, or if there is an
// error. Note that an error is only returned if something goes wrong (since an invalid password
// is not an error -- it's just the wrong password))
func (u *User) PasswordMatches(plainText string) (bool, error) {

	err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(plainText))
	if err != nil {
		switch {
		case errors.Is(err, bcrypt.ErrMismatchedHashAndPassword):
			// invalid password
			return false, nil
		default:
			return false, err

		}
	}
	return true, nil
}
