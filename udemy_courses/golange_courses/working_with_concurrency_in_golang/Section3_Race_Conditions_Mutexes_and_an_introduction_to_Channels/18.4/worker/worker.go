package worker

import (
	"context"
	"fmt"
	"sync"
	"time"
)

func DoWork(ctx context.Context, wg *sync.WaitGroup) {
	defer wg.Done()

	for i := 1; ; i++ {
		select {
		case <-ctx.Done():
			fmt.Println("Worker: received shutdown signal")
			return
		default:
			fmt.Printf("Worker: Ping #%d\n", i)
			time.Sleep(1 * time.Second)
		}
	}
}
