# Common Go CLI Commands

A quick reference for the `go` commands you'll use every day.

---

## First: what does `./...` mean?

You'll see `./...` at the end of many commands:

```bash
go test ./...
go vet ./...
```

- `.` means "the current directory (package)"
- `./...` means "the current directory **and every package below it**, recursively"

So `go test .` tests only the folder you're in, while `go test ./...` tests the
whole project. Very useful when your project has many folders.

---

## `go run` — compile and run in one step

```bash
go run m.go        # run one file
go run .           # run the package in the current folder
```

Compiles to a temporary location and runs it immediately. Nothing is left on
disk. Great for quick experiments; not what you use to ship a program.

## `go build` — compile to a binary

```bash
go build           # creates an executable named after the folder/module
go build -o app    # choose the output name yourself
```

Unlike `go run`, this leaves an executable file you can run again later
(`./app`) or copy to a server. If there are compile errors, it prints them and
produces nothing.

## `go test` — run tests

```bash
go test            # run tests in the current package
go test ./...      # run tests in the whole project
```

Looks for files ending in `_test.go` and runs every function that starts with
`Test`, like `func TestCountdown(t *testing.T)`.

### Useful flags

| Flag | What it does |
|------|--------------|
| `-v` | **Verbose**: print every test name and its PASS/FAIL, not just a summary |
| `-run Countdown` | Run only tests whose name matches (here: `TestCountdown`) |
| `-cover` | Show what % of your code is exercised by tests |
| `-bench=.` | Also run benchmarks (see below); `.` is a regex meaning "all of them" |
| `-count=1` | Force tests to run again instead of using cached results |
| `-race` | Detect data races (bugs where two goroutines touch the same data) |

Examples:

```bash
go test -v ./...
go test -run MyPrint
go test -cover
go test -race ./...
```

## `go test -bench=.` — benchmarks

```bash
go test -bench=.           # run all benchmarks in this package
go test -bench=MyPrint     # run only benchmarks matching "MyPrint"
```

Benchmarks measure **how fast** your code is. They live in `_test.go` files
too, but start with `Benchmark` and take `*testing.B`:

```go
func BenchmarkMyPrint(b *testing.B) {
	for b.Loop() {
		MyPrint(io.Discard, "countdown: %d\n", 3)
	}
}
```

Typical output:

```
BenchmarkMyPrint-22    22390380    53.30 ns/op
```

Read it as:

- `-22` — it used 22 CPU threads worth of `GOMAXPROCS` (machine info, usually ignore)
- `22390380` — the function was called ~22 million times
- `53.30 ns/op` — each call took about 53 nanoseconds on average

Add `-benchmem` to also see memory allocations per call:

```bash
go test -bench=. -benchmem
```

### `b.N` vs `b.Loop()` — the part that confused you

A benchmark needs to run your function **many times** to get a reliable
average — running it once would be pure noise. But how many times? You don't
know in advance; it depends on how fast the function is. So the testing
framework decides for you: it starts small, measures, and increases the count
until the timing is stable.

**The old way (`b.N`)** — the framework hands you a number and you loop that
many times:

```go
func BenchmarkMyPrint(b *testing.B) {
	for i := 0; i < b.N; i++ {   // b.N is chosen by the framework
		MyPrint(io.Discard, "hi %s", "there")
	}
}
```

The framework may actually call your benchmark function several times with a
growing `b.N` (100, then 10000, then 22 million...) until it's satisfied.

**The new way (`b.Loop()`, Go 1.24+)** — same idea, simpler shape:

```go
func BenchmarkMyPrint(b *testing.B) {
	for b.Loop() {               // returns true until enough iterations ran
		MyPrint(io.Discard, "hi %s", "there")
	}
}
```

`b.Loop()` returns `true` as long as the framework wants more iterations, then
`false` to stop the loop. Both versions mean exactly the same thing:
*"run this body as many times as needed to time it accurately."*

Why `b.Loop()` is preferred now:

- No loop counter to get wrong.
- Setup code before the loop is automatically excluded from the timing.
- It stops the compiler from "optimizing away" your function when the result
  isn't used — an old trap that made benchmarks report impossibly fast times.

## `go vet` — find suspicious code

```bash
go vet ./...
```

A **static analyzer**: it reads your code without running it and reports
things that compile fine but are almost certainly bugs. The name means "to
vet" = to examine carefully.

Classic catch (the exact bug you had in `MyPrint`):

```go
fmt.Fprintf(w, "hello %s", a)    // a is a slice — vet warns the %s won't match
fmt.Fprintf(w, "hello %s", a...) // correct
```

It also catches unreachable code, copied mutexes, wrong struct tags, and more.
Cheap to run — good habit before every commit.

## `go fmt` — format your code

```bash
go fmt ./...
```

Rewrites your files into the one official Go style (tabs, brace placement,
spacing). In Go there are no formatting debates — everyone's code looks the
same. Most editors run this automatically on save.

## `go mod` — dependency management

```bash
go mod init myproject   # start a new module (creates go.mod)
go mod tidy             # add missing / remove unused dependencies
```

`go.mod` is like `package.json` in Node: it names your module and lists its
dependencies. `go mod tidy` keeps it in sync with what your code actually
imports — run it whenever imports change.

## `go get` — add or update a dependency

```bash
go get github.com/some/package          # add / update to latest
go get github.com/some/package@v1.2.3   # specific version
```

## Other handy ones

| Command | What it does |
|---------|--------------|
| `go doc fmt.Fprintf` | Show documentation for any function/package in the terminal |
| `go env` | Show Go's environment settings (GOPATH, GOOS, ...) |
| `go version` | Which Go version is installed |
| `go install <pkg>@latest` | Install a Go tool globally (into `~/go/bin`) |
| `go clean -testcache` | Clear cached test results |

---

## A good daily workflow

```bash
go fmt ./...      # format
go vet ./...      # catch suspicious code
go test ./...     # make sure everything passes
```

If all three are quiet, you're in good shape to commit.
