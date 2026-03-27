package main

import "fmt"

type Message struct {
	DeviceID  string
	Timestamp int64
	Lat       float64
	Lng       float64
	SpeedKPH  float64
}

func LatestByDevice(messages []Message) map[string]Message {

	lt := map[string]Message{}

	for _, msg := range messages {

		existing, ok := lt[msg.DeviceID]

		if !ok || msg.Timestamp > existing.Timestamp {
			lt[msg.DeviceID] = msg
		}
	}

	return lt
}

func main() {
	messages := []Message{
		{
			DeviceID:  "dev-001",
			Timestamp: 1710000001,
			Lat:       35.8997,
			Lng:       14.5146,
			SpeedKPH:  0,
		},
		{
			DeviceID:  "dev-002",
			Timestamp: 1710000002,
			Lat:       35.8920,
			Lng:       14.5000,
			SpeedKPH:  42.5,
		},
		{
			DeviceID:  "dev-001",
			Timestamp: 1710000050,
			Lat:       35.9001,
			Lng:       14.5150,
			SpeedKPH:  18.2,
		},
	}

	lt := LatestByDevice(messages)

	fmt.Println(lt)
}
