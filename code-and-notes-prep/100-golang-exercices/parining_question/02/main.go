package main

import (
	"fmt"
	"sort"
	"time"
)

type Point struct {
	Time     time.Time
	Lat      float64
	Lng      float64
	SpeedKPH float64
}

func BuildJourneys(points []Point) [][]Point {
	if len(points) == 0 {
		return nil
	}

	sorted := make([]Point, len(points))
	copy(sorted, points)

	sort.Slice(sorted, func(i, j int) bool {
		return sorted[i].Time.Before(sorted[j].Time)
	})

	var journeys [][]Point
	var currentJourney []Point
	var lastPoint Point

	for _, p := range sorted {
		if p.SpeedKPH == 0 {
			if len(currentJourney) > 0 {
				journeys = append(journeys, currentJourney)
				currentJourney = nil
			}
			lastPoint = p
			continue
		}

		if len(currentJourney) == 0 {
			currentJourney = []Point{p}
			lastPoint = p
			continue
		}

		if p.Time.Sub(lastPoint.Time) > 20*time.Minute {
			journeys = append(journeys, currentJourney)
			currentJourney = []Point{p}
		} else {
			currentJourney = append(currentJourney, p)
		}
		lastPoint = p
	}

	if len(currentJourney) > 0 {
		journeys = append(journeys, currentJourney)
	}

	return journeys
}

func main() {

	points := []Point{
		{
			Time:     time.Date(1982, 11, 10, 0, 1, 1, 0, time.UTC),
			Lat:      10.1,
			Lng:      20.1,
			SpeedKPH: 0,
		},
		{
			Time:     time.Date(1982, 11, 10, 0, 1, 2, 0, time.UTC),
			Lat:      10.1,
			Lng:      20.1,
			SpeedKPH: 10,
		},
		{
			Time:     time.Date(1982, 11, 10, 0, 3, 1, 0, time.UTC),
			Lat:      10.1,
			Lng:      20.1,
			SpeedKPH: 0,
		},
		{
			Time:     time.Date(1982, 11, 10, 0, 4, 1, 0, time.UTC),
			Lat:      10.1,
			Lng:      20.1,
			SpeedKPH: 10,
		},
		{
			Time:     time.Date(1982, 11, 10, 0, 30, 1, 0, time.UTC),
			Lat:      10.1,
			Lng:      20.1,
			SpeedKPH: 10,
		},
		{
			Time:     time.Date(1982, 11, 10, 0, 35, 1, 0, time.UTC),
			Lat:      10.1,
			Lng:      20.1,
			SpeedKPH: 10,
		},
	}

	journeys := BuildJourneys(points)

	fmt.Println("Journeys:", len(journeys))
	for i, journey := range journeys {
		fmt.Printf("Journey %d: %d points\n", i+1, len(journey))
	}

}
