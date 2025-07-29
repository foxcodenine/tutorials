# Go: Using `recover` in Testing

## What is `recover`?

- `recover` is a built-in Go function that allows a program to **regain control** of a panicking goroutine.
    
- It is used inside a `defer` function to intercept a panic and prevent the application (or test) from crashing.
    

---

## Example Usage in a Test

```go
func TestInitializeCache(t *testing.T) {
    // Set up environment variables expected by initializeCache
    os.Setenv("REDIS_PORT", "6379")
    os.Setenv("REDIS_DB", "0")

    // Defer a function to recover from a panic, if one occurs
    defer func() {
        if r := recover(); r != nil {
            t.Errorf("initializeCache() panicked: %v", r)
        }
    }()

    // Run the function under test. If it panics, the deferred recover above will catch it.
    initializeCache()
}

```

## Key Points

- **When to use:**  
    Use `recover` in tests when you want to catch panics and report them as test failures instead of crashing the test suite.
    
- **How it works:**
    
    - Place `recover()` inside a deferred function.
        
    - If the code inside your test panics, the deferred function runs, and `recover()` receives the panic value.
        
    - You can then log or handle the panic as needed.
        
- **Limitations:**  
    `recover()` only works if called from the same goroutine as the panic, and only within deferred functions.
    

---

## Summary Table

|Function|Purpose|
|---|---|
|`defer`|Schedule a function to run after the enclosing function returns (including after a panic)|
|`recover`|Regain control after a panic; returns panic value or nil|

---

**In practice:**  
Use `recover` in your tests to make panics visible as test errors rather than crashing the whole test run.