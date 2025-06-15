package main

import (
	"sync"
	"testing"
)

func Test_updateMessage(t *testing.T) {

	msg = "A"
	var mutext sync.Mutex
	var wg sync.WaitGroup

	wg.Add(2)

	go updateMessage("B", &mutext, &wg)
	go updateMessage("C", &mutext, &wg)

	wg.Wait()

	if msg != "B" && msg != "C" {
		t.Errorf("incorrect value in msg: expected \"B\" or \"C\", got %q", msg)
	}

}
