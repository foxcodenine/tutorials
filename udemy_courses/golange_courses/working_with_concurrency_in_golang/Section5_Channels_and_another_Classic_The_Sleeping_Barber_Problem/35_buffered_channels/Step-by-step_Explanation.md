### **Step-by-step Explanation**

1. **You create a buffered channel with a capacity of 10:**
    
```go
    ch := make(chan int, 10)
```
    
    This means you can send up to 10 values into the channel before the sender (`ch <- i`) blocks.
    
2. **You start the receiver in a goroutine:**



```go
    go listenToChan(ch)
```
    
    
    This runs `listenToChan` concurrently. It receives values one by one and processes each for **1 second**.
    
3. **The sender loop:**
    
```go
for i := 0; i < 100; i++ {
    fmt.Println("Sending", i, "to channel...")
    ch <- i
    fmt.Println("Sent", i, "to channel...")
}
```
    
    
    

---

### **What actually happens?**

- **First 10 sends:**  
    The channel buffer has space, so the first 10 values (`0` to `9`) are sent **immediately**.  
    The sender does **not** wait for the receiver at this point.
    
- **After buffer is full:**  
    When you try to send the 11th value (`10`), the buffer is **full**.  
    Now, `ch <- i` **blocks** (waits) until the receiver takes at least one value from the channel.
    
- **Ongoing:**
    
    - The receiver processes values **1 by 1** (with a 1-second delay each).
        
    - As soon as it receives one value (and "frees up" a slot), the sender can send the next value.
        
    - **From this point forward:**  
        The sender and receiver proceed in lockstep—**the sender waits for the receiver to process each value before sending the next.**
        

---

### **So:**

- The first 10 go through instantly (because of the buffer).
    
- Once the buffer is full, for each new send, the sender **must wait** until the receiver has processed one item, freeing up space.
    
- This means after the initial burst, **it continues 1 by 1**, limited by the receiver’s speed.