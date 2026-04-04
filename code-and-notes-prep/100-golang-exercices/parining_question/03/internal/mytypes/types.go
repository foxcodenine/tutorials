package mytypes

import (
	"time"
)

type Message struct {
	Status      string
	Timestamp   time.Time
	SensorValue int
}
