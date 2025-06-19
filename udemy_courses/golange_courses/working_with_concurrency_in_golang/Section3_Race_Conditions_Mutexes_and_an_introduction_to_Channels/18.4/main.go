package main

import (
	"context"
	"myapp/worker"
	"os"
	"os/signal"
	"sync"
	"syscall"
)

func main() {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM, syscall.SIGQUIT)
	defer stop()

	var wg sync.WaitGroup

	wg.Add(1)
	go worker.DoWork(ctx, &wg) // Pass the WaitGroup pointer

	<-ctx.Done() // Wait for shutdown signal
	wg.Wait()    // Wait for all workers to finish
}
