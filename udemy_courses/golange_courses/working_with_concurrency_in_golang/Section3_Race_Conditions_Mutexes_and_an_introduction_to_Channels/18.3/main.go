package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"
)

func main() {
	// 1. Create a context that is cancelled on OS interrupt/termination signals.
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	var wg sync.WaitGroup
	wg.Add(1)

	// 2. Create a channel for communication between goroutines.
	ch := make(chan string)

	// 3. Start a worker goroutine that sends messages on the channel every second.
	go func() {
		for i := 1; ; i++ {
			select {
			case <-ctx.Done(): // Stop if the context is cancelled.
				fmt.Println("Worker: received shutdown signal")
				close(ch) // Close channel to signal we're done.
				wg.Done()
				return
			case ch <- fmt.Sprintf("Ping #%d", i): // Send data to main goroutine.
				time.Sleep(1 * time.Second)
			}
		}
	}()

	// 4. Main goroutine: read from channel, stop if context is cancelled or channel is closed.
	for {
		select {
		case msg, ok := <-ch: // Receive messages from the worker goroutine.
			if !ok {
				fmt.Println("Main: channel closed, worker exited")
				return
			}
			fmt.Println("Main received:", msg)
		case <-ctx.Done(): // Handle shutdown (Ctrl+C, kill).
			wg.Wait()
			fmt.Println("Main: shutdown signal received, exiting")
			return
		}
	}
}
