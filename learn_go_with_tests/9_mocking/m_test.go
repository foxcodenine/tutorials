package main

import (
	"io"
	"testing"
)

func BenchmarkMyPrint(b *testing.B) {
	for b.Loop() {
		MyPrint(io.Discard, "countdown: %d, go %s!\n", 3, "now")
	}
}
