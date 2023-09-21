package packageone

import "fmt"

var PackageVar string = "!"

func PrintMe(s1, s2 string) {
	fmt.Print(s1, s2, PackageVar)
}
