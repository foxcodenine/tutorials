## 2) Group journeys from tracker points

Given ordered GPS points for one asset, group them into journeys.

A new journey starts when:

- the vehicle starts moving after being stopped
- or there is a gap of more than 20 minutes between points

Input:

```go
type Point struct {  
	Time      time.Time  
	Lat       float64  
	Lng       float64  
	SpeedKPH  float64  
}
```

Write:

```go
func BuildJourneys(points []Point) [][]Point
```

What they’re testing:

- translating business rules into code
- handling state
- naming and readability
- talking through assumptions

Good follow-up questions:

- What counts as “stopped”?
- What if the points are unsorted?
- Would you return a custom `Journey` struct instead?

This is the kind of task that feels much more like real backend work than beginner exercises.