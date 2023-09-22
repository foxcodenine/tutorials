package main

import "fmt"

func main() {
	intMap := make(map[string]int)

	intMap["one"] = 1
	intMap["two"] = 2
	intMap["three"] = 3
	intMap["four"] = 4
	intMap["onDfivee"] = 5

	delete(intMap, "four")

	fmt.Println("\n1. ___________________________")

	for key, value := range intMap {
		fmt.Println(key, value)
	}

	fmt.Println("\n2. ___________________________")

	el, ok := intMap["four"]

	if ok {
		fmt.Println(el, "is in map")
	} else {
		fmt.Println(el, "is NOT in map")
	}

	fmt.Println("\n2. ___________________________")

	intMap["two"] = 4
}
