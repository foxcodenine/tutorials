package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
)

// See notes: 10_signal_notify_context_breakdown

func main() {
	// Create a context that gets cancelled when an interrupt or termination signal is received (e.g., Ctrl+C or kill)
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM, syscall.SIGQUIT)
	defer stop() // Ensure resources are cleaned up when the function exits

	fmt.Println("(A)") // Simulate doing something before waiting for a signal

	<-ctx.Done() // Block until the context is cancelled (i.e., signal is received)

	fmt.Println("(B)") // Executes after receiving the signal and unblocking the line above
}
