## 🔍 Explanation

### 🧵 Goroutine

- `go func() { ... }()` runs a function **in parallel**
    
- It’s used to perform background work or keep things responsive
    

### 📡 Channel

- `dataChan` is used to **send messages** (here: the time string)
    
- `stopChan` is used to **send a signal** (an empty struct) to stop
    

### 🔀 `select`

- Allows waiting on **multiple channels** at the same time
    
- Reacts immediately to whichever case is ready
    
    - If `stopChan` receives → stop
        
    - If `dataChan` is ready → send data
        

### 🧼 Graceful Shutdown

- Main sends a signal to `stopChan`
    
- Worker listens for it in `select` and exits