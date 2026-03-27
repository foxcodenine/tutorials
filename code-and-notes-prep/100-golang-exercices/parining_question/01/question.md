## 1) Latest telemetry per device

You are given:

```go
type Message struct {  
	DeviceID   string  
	Timestamp  int64  
	Lat        float64  
	Lng        float64  
	SpeedKPH   float64  
}
```

Write a function:

```go
func LatestByDevice(messages []Message) map[string]Message
```

It should return the latest message for each `DeviceID`.

What they’re testing:

- maps
- iteration
- edge cases
- clear thinking while coding

What they may ask next:

- What if two messages have the same timestamp?
- What if input is huge?
- How would you unit test it?

Why this is realistic for you:

- very close to tracker / IoT event processing