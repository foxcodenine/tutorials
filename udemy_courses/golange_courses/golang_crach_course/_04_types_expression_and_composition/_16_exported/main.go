package main

import (
	"log"
	"myapp/staff"
)

var employess = []staff.Employee{
	{Firstname: "John", Lastname: "Smith", Salary: 30000, FullTime: true},
	{Firstname: "Sally", Lastname: "Jones", Salary: 50000, FullTime: true},
	{Firstname: "Mark", Lastname: "Smithers", Salary: 60000, FullTime: true},
	{Firstname: "Allan", Lastname: "Anderson", Salary: 15000, FullTime: false},
	{Firstname: "Margaret", Lastname: "Carter", Salary: 100000, FullTime: false},
}

func main() {
	mySaff := staff.Office{
		AllStaff: employess,
	}

	// log.Println(mySaff.All())

	staff.OverPaidLimit = 50000

	log.Println(mySaff.Overpaid())
	log.Println(mySaff.UnderPaid())
}
