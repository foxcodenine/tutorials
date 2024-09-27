package main

import (
	"fmt"
	"time"
)

type FamilyMember struct {
	FamilyName string
	FirstName  string
	Age        int
	Birthday   time.Time
	Species    string
}

func (r *FamilyMember) sayYourName() string {
	fullName := fmt.Sprintf("%s %s", r.FirstName, r.FamilyName)
	return fullName
}
