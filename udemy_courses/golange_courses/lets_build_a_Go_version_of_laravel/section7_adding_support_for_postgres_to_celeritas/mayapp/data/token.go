package data

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/base32"
	"errors"
	"net/http"
	"strings"
	"time"

	up "github.com/upper/db/v4"
)

type Token struct {
	ID        int       `db:"id" json:"id"`
	UserID    int       `db:"user_id" json:"user_id"`
	FirstName string    `db:"first_name" json:"first_name"`
	Email     string    `db:"email" json:"email"`
	PlainText string    `db:"token" json:"token"`
	Hash      []byte    `db:"token_hash" json:"-"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
	UpdatedAt time.Time `db:"updated_at" json:"updated_at"`
	Expires   time.Time `db:"expires" json:"expires"`
}

func (t *Token) Table() string {
	return "tokens"
}

func (t *Token) GetUserForToken(token string) (*User, error) {
	var u User
	var theToken Token

	collection := upper.Collection(t.Table())

	res := collection.Find(up.Cond{"token": token})

	err := res.One(&theToken)

	if err != nil {
		return nil, err
	}

	collection = upper.Collection("users")
	res = collection.Find(up.Cond{"id": theToken.UserID})

	err = res.One(&u)

	if err != nil {
		return nil, err
	}

	u.Token = theToken

	return &u, nil
}

func (t *Token) GetTokensForUser(id int) ([]*Token, error) {
	var tokens []*Token

	collection := upper.Collection(t.Table())

	res := collection.Find(up.Cond{"user_id": id})

	err := res.All(&tokens)

	if err != nil {
		return nil, err
	}

	return tokens, nil
}

func (t *Token) GetTokenById(id int) (*Token, error) {

	var token Token

	collection := upper.Collection(t.Table())

	res := collection.Find(up.Cond{"id =": id})

	err := res.One(&token)

	if err != nil {
		return nil, err
	}

	return &token, nil
}

func (t *Token) GetByToken(plainText string) (*Token, error) {
	var token Token

	collection := upper.Collection(t.Table())

	res := collection.Find(up.Cond{"token =": plainText})

	err := res.One(&token)

	if err != nil {
		return nil, err
	}

	return &token, nil
}

func (t *Token) Delete(id int) error {

	collection := upper.Collection(t.Table())

	res := collection.Find(up.Cond{"id =": id})

	err := res.Delete()

	if err != nil {
		return err
	}

	return nil
}

func (t *Token) DeleteByToken(plainText string) error {

	collection := upper.Collection(t.Table())

	res := collection.Find(up.Cond{"token =": plainText})

	err := res.Delete()

	if err != nil {
		return err
	}

	return nil
}

func (t *Token) Insert(token Token, u User) error {
	collection := upper.Collection(t.Table())

	// delete existing tokens
	res := collection.Find(up.Cond{"user_id =": u.ID})
	err := res.Delete()

	if err != nil {
		return err
	}

	token.CreatedAt = time.Now()
	token.UpdatedAt = time.Now()
	token.FirstName = u.FirstName
	token.Email = u.Email

	_, err = collection.Insert(token)

	if err != nil {
		return err
	}

	return nil
}

func (t *Token) GenerateToken(userID int, ttl time.Duration) (*Token, error) {
	// Initialize a new Token with the provided userID and expiration time (current time + ttl)
	token := &Token{
		UserID:  userID,
		Expires: time.Now().Add(ttl),
	}

	// Create a byte slice to hold 16 random bytes
	randomBytes := make([]byte, 16)

	// Fill the byte slice with random data
	_, err := rand.Read(randomBytes)

	if err != nil {
		return nil, err
	}

	// Encode the random bytes to a base32 string without padding and assign it to the PlainText field
	token.PlainText = base32.StdEncoding.WithPadding(base32.NoPadding).EncodeToString(randomBytes)

	// Create a SHA-256 hash of the PlainText
	hash := sha256.Sum256([]byte(token.PlainText))

	// Convert the hash array to a slice and assign it to the Hash field
	token.Hash = hash[:]

	return token, nil
}

func (t *Token) AuthenticateToken(r *http.Request) (*User, error) {

	authorizationHeader := r.Header.Get("Authorization")
	if authorizationHeader == "" {
		return nil, errors.New("no authorization header received")
	}

	headerParts := strings.Split(authorizationHeader, " ")
	if len(headerParts) != 2 || headerParts[0] != "Bearer" {
		return nil, errors.New("no authorization header received")
	}

	token := headerParts[1]

	if len(token) != 26 {
		return nil, errors.New("token wrong size")
	}

	t, err := t.GetByToken(token)
	if err != nil {
		return nil, errors.New("no matching token found")
	}

	if t.Expires.Before(time.Now()) {
		return nil, errors.New("expired token")
	}

	user, err := t.GetUserForToken(token)
	if err != nil {
		return nil, errors.New("no matching user found")
	}

	return user, nil
}

func (t *Token) ValidToken(token string) (bool, error) {

	user, err := t.GetUserForToken(token)

	if err != nil {
		return false, errors.New("no matching user found")
	}

	if user.Token.PlainText == "" {
		return false, errors.New("no matching token found")
	}

	if t.Expires.Before(time.Now()) {
		return false, errors.New("expired token")
	}

	return true, nil
}
