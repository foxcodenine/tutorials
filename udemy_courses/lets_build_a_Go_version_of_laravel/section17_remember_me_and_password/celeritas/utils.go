package celeritas

import (
	"fmt"
	"regexp"
	"runtime"
	"time"
)

// LoadTime logs the duration it takes for a function to execute.
// It uses reflection to get the name of the function that called it.
func (c *Celeritas) LoadTime(start time.Time) {
	elapsed := time.Since(start) // Calculate the time elapsed since the provided start time.

	// runtime.Caller(1) gets info about the caller of the function:
	// 1 level up in the stack, thus the immediate caller of LoadTime.
	pc, _, _, _ := runtime.Caller(1)

	// runtime.FuncForPC gets a *runtime.Func object representing the caller.
	funcObj := runtime.FuncForPC(pc)

	// Compile a regex to extract the function name from the full function signature.
	runtimeFunc := regexp.MustCompile(`^.*\.(.*)$`)

	// Apply the regex to the function name to retrieve just the function's name without package path.
	name := runtimeFunc.ReplaceAllString(funcObj.Name(), "$1")

	// Log the function name and its execution time.
	c.InfoLog.Println(fmt.Sprintf("Load Time: %s took %s", name, elapsed))
}
