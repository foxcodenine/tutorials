

    $ go mod init <name>

    $ go mod tidy

    go run *

    go test -v
    go test -cover
    go test -coverprofile=coverage.out && go tool cover -html=coverage.out

    go test -v ./...


    soda generate fizz CreateUserTable
    soda migrate
    soda migrate down
    soda reset