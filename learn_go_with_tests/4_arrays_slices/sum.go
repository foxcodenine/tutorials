package main

// Sum adds together every number in a slice and returns the total.
func Sum(n []int) int {
	var m int
	for _, n := range n {
		m += n
	}
	return m
}

// SumAll returns a slice containing the total for each slice passed in.
func SumAll(numbersToSum ...[]int) []int {
	sums := make([]int, 0)

	for _, numbers := range numbersToSum {
		sums = append(sums, Sum(numbers))
	}

	return sums
}

// SumAllTails returns the sums of the tails of each given slice.
func SumAllTails(numbersToSum ...[]int) []int {
	sums := []int{}

	for _, numbers := range numbersToSum {
		if len(numbers) == 0 {
			sums = append(sums, 0)
		} else {
			sums = append(sums, Sum(numbers[1:]))
		}
	}

	return sums
}
