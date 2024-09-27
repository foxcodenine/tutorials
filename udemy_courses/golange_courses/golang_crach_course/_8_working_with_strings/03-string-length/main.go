package main

import "fmt"

func main() {
	// indexes start at 0
	//                       1         2         3
	//             01234567890123456789012345678901234
	courseName := "Learn Go for Beginners Crash Course"

	for i := 0; i <= 21; i++ {
		fmt.Print(string(courseName[i]))
	}
	fmt.Println()

	fmt.Println("Length of courseName is", len(courseName))

	var mySlice []string
	mySlice = append(mySlice, "one")
	mySlice = append(mySlice, "two")
	mySlice = append(mySlice, "three")

	fmt.Println("mySlice has", len(mySlice), "elements")
	fmt.Println("the last element in mySlice is", mySlice[len(mySlice) - 1])

}