

    $ go mod init <name>

    $ go mod tidy

    go run *

    go test -v
    go test -cover
    go test -coverprofile=coverage.out && go tool cover -html=coverage.out
    APP_ENV=test go test -coverprofile=coverage.out ./... && go tool cover -html=coverage.out
    APP_ENV=test go test -coverprofile=coverage.out  && go tool cover -html=coverage.out

    go test -v ./...


    soda generate fizz CreateUserTable
    soda migrate
    soda migrate down
    soda reset

    go get github.com/jackc/pgx/v4
    go get github.com/jackc/pgx/v5

    go mod tidy -e

    APP_ENV=test go test -v ./...

    soda generate fizz AllowReservationIdNoNullInTableRestrictions
    soda generate sql SeedRoomTable