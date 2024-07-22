
    $ go mod init github.com/foxcodenine/celeritas
    $ go mod init myapp

    $ go get github.com/foxcodenine/celeritas

    $ go run .

    $ go mod vendor


    $ go test -cover

    go get github.com/foxcodenine/celeritas; go mod vendor;

<!-- --------------------------------------------------------------- -->

#### joho/godotenv

A Go (golang) port of the Ruby dotenv project (which loads env vars from a .env file).

https://github.com/joho/godotenv

Installation:

    $ go get github.com/joho/godotenv

<!-- --------------------------------------------------------------- -->

#### go-chi/chi

chi is a lightweight, idiomatic and composable router for building Go HTTP services.

Installation:

    $ go get -u github.com/go-chi/chi/v5


Example:

```go
    package main

    import (
        "net/http"

        "github.com/go-chi/chi/v5"
        "github.com/go-chi/chi/v5/middleware"
    )

    func main() {
        r := chi.NewRouter()
        r.Use(middleware.Logger)
        r.Get("/", func(w http.ResponseWriter, r *http.Request) {
            w.Write([]byte("welcome"))
        })
        http.ListenAndServe(":3000", r)
    }
```

<!-- --------------------------------------------------------------- -->

#### CloudyKit/jet

Jet a template engine for Go, developed to be easy to use, powerful, dynamic,
secure and very fast.

https://pkg.go.dev/github.com/CloudyKit/jet/v6
https://github.com/CloudyKit/jet

Installation:

    $ go get github.com/CloudyKit/jet/v6

<!-- --------------------------------------------------------------- -->


#### jackc/pgconn

Package pgconn is a low-level PostgreSQL database driver.

https://github.com/jackc/pgconn

Installation:

    $ go get github.com/jackc/pgconn
    $ go get github.com/jackc/pgx/v4
    $ go get github.com/jackc/pgx/v4/stdlib

<!-- --------------------------------------------------------------- -->

#### upper/db

upper/db is a productive data access layer (DAL) for Go that provides agnostic
tools to work with different databases

https://upper.io/v4/


Installation:

    $ go get github.com/upper/db/v4/adapter/{$ADAPTER}

    $ go get github.com/upper/db/v4/adapter/mysql
    $ go get github.com/upper/db/v4/adapter/postgresql

