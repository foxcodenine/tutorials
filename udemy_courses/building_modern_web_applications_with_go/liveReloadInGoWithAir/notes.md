# installation instractions

1. If not installed correctly Remove the Cached air Directory:

        $ rm -rf $(go env GOPATH)/pkg/mod/cache/download/github.com/cosmtrek/air

This will remove the cached air directory from your Go module cache.



2. Retry the Installation:

Run the go get command again:

        $ go get -u github.com/cosmtrek/air@latest

This should download and install the air package properly. Check for any errors or warnings during this process.



2. Manually Build and Install:

If the automatic installation still doesn't work, try manually building and installing air:

        $ go install github.com/cosmtrek/air@latest

This command should build and install the air binary directly into your $(go env GOPATH)/bin directory.



3. Verify Installation:

After completing the installation, check if the air binary is present in the $(go env GOPATH)/bin directory:

        $ ls $(go env GOPATH)/bin
