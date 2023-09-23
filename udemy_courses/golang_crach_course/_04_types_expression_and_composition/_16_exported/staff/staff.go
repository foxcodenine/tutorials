package staff

import "log"

var OverPaidLimit = 75000
var UnderPaidLimit = 20000

type Employee struct {
	Firstname string
	Lastname  string
	Salary    int
	FullTime  bool
}

type Office struct {
	AllStaff []Employee
}

func (e *Office) All() []Employee {
	return e.AllStaff
}

func (e *Office) Overpaid() []Employee {
	var overpaid []Employee

	for _, x := range e.AllStaff {
		if x.Salary > OverPaidLimit {
			overpaid = append(overpaid, x)
		}
	}
	return overpaid
}

func (e *Office) UnderPaid() []Employee {
	var underpaid []Employee

	for _, x := range e.AllStaff {
		if x.Salary < UnderPaidLimit {
			underpaid = append(underpaid, x)
		}
	}
	return underpaid
}

// func (e *Office) notVisible() {
// 	log.Println("Hello World!")
// }
