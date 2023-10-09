package helpers

import (
	"math/rand"
	"time"
)

func RandomNumber(n int) int {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	value := r.Intn(n)
	return value
}
