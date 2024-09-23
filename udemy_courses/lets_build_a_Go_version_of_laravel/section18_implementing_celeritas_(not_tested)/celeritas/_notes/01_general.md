
    $ go mod init github.com/foxcodenine/celeritas
    $ go mod init myapp

    $ go get github.com/foxcodenine/celeritas

    $ go run .

    $ go mod vendor


    $ go test -cover

    $ go test . --tags integration --count=1

    go get github.com/foxcodenine/celeritas; go mod vendor;

<!-- --------------------------------------------------------------- -->

go test . -coverprofile=coverage.out --tags integration --count=1
go tool cover -html=coverage.out -o coverage.html
firefox coverage.html


<!-- --------------------------------------------------------------- -->

### joho/godotenv

A Go (golang) port of the Ruby dotenv project (which loads env vars from a .env file).

https://github.com/joho/godotenv

Installation:

    $ go get github.com/joho/godotenv

<!-- --------------------------------------------------------------- -->

### go-chi/chi

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

### CloudyKit/jet

Jet a template engine for Go, developed to be easy to use, powerful, dynamic,
secure and very fast.

https://pkg.go.dev/github.com/CloudyKit/jet/v6
https://github.com/CloudyKit/jet

Installation:

    $ go get github.com/CloudyKit/jet/v6

<!-- --------------------------------------------------------------- -->


### jackc/pgconn

Package pgconn is a low-level PostgreSQL database driver.

https://github.com/jackc/pgconn

Installation:

    $ go get github.com/jackc/pgconn
    $ go get github.com/jackc/pgx/v4
    $ go get github.com/jackc/pgx/v4/stdlib

<!-- --------------------------------------------------------------- -->

### upper/db

upper/db is a productive data access layer (DAL) for Go that provides agnostic
tools to work with different databases

https://upper.io/v4/


Installation:

    $ go get github.com/upper/db/v4/adapter/{$ADAPTER}

    $ go get github.com/upper/db/v4/adapter/mysql
    $ go get github.com/upper/db/v4/adapter/postgresql

<!-- --------------------------------------------------------------- -->

### DATA-DOG / go-sqlmock

sqlmock is a mock library implementing sql/driver. Which has one and
only purpose - to simulate any sql driver behavior in tests, without
needing a real database connection. It helps to maintain correct TDD
workflow.

 https://github.com/DATA-DOG/go-sqlmock

 Installation:

    $ go get github.com/DATA-DOG/go-sqlmock
<!-- --------------------------------------------------------------- -->

### ory/dockertest

https://github.com/ory/dockertest

Installation:

    go get -u github.com/ory/dockertest/v3
    go get -u github.com/ory/dockertest/v3/docker

<!-- --------------------------------------------------------------- -->

### fatih/color

https://github.com/fatih/color

Installation:

    go get github.com/fatih/color




    go get github.com/iancoleman/strcase

<!-- --------------------------------------------------------------- -->

### golang-migrate/migrate

https://github.com/golang-migrate/migrate

    $ go get github.com/go-sql-driver/mysql
    $ go get github.com/golang-migrate/migrate/v4
    $ go get github.com/golang-migrate/migrate/v4/database/mysql
    $ go get github.com/golang-migrate/migrate/v4/database/postgres
    $ go get github.com/golang-migrate/migrate/v4/source/file


<!-- --------------------------------------------------------------- -->

### go-pluralize

https://github.com/gertd/go-pluralize

    $ go get -u github.com/gertd/go-pluralize

<!-- --------------------------------------------------------------- -->

### alexedwards/scs

https://github.com/alexedwards/scs

    $ go get github.com/alexedwards/scs/v2
    $ go get github.com/alexedwards/scs/mysqlstore 
    $ go get github.com/alexedwards/scs/postgresstore
    $ go get github.com/alexedwards/scs/redisstore

<!-- --------------------------------------------------------------- -->

### asaskevich/govalidator

https://github.com/asaskevich/govalidator

    $ go get github.com/asaskevich/govalidator

<!-- --------------------------------------------------------------- -->

### gomodule/redigo

https://github.com/gomodule/redigo

    $ go get github.com/gomodule/redigo/redis

<!-- --------------------------------------------------------------- -->

### miniredis

https://github.com/alicebob/miniredis

    $ go get github.com/alicebob/miniredis/v2

<!-- --------------------------------------------------------------- -->

### justinas/nosurf

https://github.com/justinas/nosurf

    $ go get github.com/justinas/nosurf

<!-- --------------------------------------------------------------- -->

### dgraph-io/badger

https://github.com/dgraph-io/badger

    $ go get github.com/dgraph-io/badger/v3

<!-- --------------------------------------------------------------- -->

### robfig/cron

https://github.com/robfig/cron

    $ go get github.com/robfig/cron/v3

<!-- --------------------------------------------------------------- -->

### xhit/go-simple-mail

The best way to send emails in Go with SMTP Keep Alive and Timeout for Connect and Send.

https://github.com/xhit/go-simple-mail

    $ go get github.com/xhit/go-simple-mail/v2

<!-- --------------------------------------------------------------- -->

### vanng822/go-premailer

Inline styling for HTML mail in golang

https://github.com/vanng822/go-premailer

    $ go get github.com/vanng822/go-premailer/premailer

<!-- --------------------------------------------------------------- -->

### ainsleyclark/go-mail

A cross-platform mail driver for GoLang. Featuring Mailgun, Postal, Postmark, SendGrid, SparkPost & SMTP.

https://github.com/ainsleyclark/go-mail

    $ go get github.com/ainsleyclark/go-mail@v1.0.3

<!-- --------------------------------------------------------------- -->

### ory/dockertest

https://github.com/ory/dockertest ~~(did not used in course)~~

Use Docker to run your Golang integration tests against third party
services on Microsoft Windows, Mac OSX and Linux!

    $ go get -u github.com/ory/dockertest/v3
    $ go get -u github.com/ory/dockertest/v3/docker


<!-- --------------------------------------------------------------- -->

### bwmarrin/go-alone

https://github.com/bwmarrin/go-alone

    $ go get github.com/bwmarrin/go-alone


<!-- --------------------------------------------------------------- -->

### go-git/go-git

https://github.com/go-git/go-git

    $ github.com/go-git/go-git/v5

<!-- --------------------------------------------------------------- -->