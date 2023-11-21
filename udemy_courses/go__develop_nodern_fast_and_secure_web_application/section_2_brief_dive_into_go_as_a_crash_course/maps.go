package main

import "fmt"

func createMaps() {
	users := make(map[string]string)

	fmt.Println(users)

	users["peter@griffin.family"] = "Peter Griffin"
	users["chris12aug@yahoo.com"] = "Christopher Farrugia"
	users["danine88@gmail.com"] = "Danine Bartolo"

	delete(users, "danine88@gmail.com")

	fmt.Println(users)
	fmt.Println(users["chris12aug@yahoo.com"])
	fmt.Println(len(users))
}
