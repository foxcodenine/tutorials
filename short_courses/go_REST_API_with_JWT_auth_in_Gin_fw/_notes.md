https://seefnasrul.medium.com/create-your-first-go-rest-api-with-jwt-authentication-in-gin-framework-dbe5bda72817

### endpoints 

    /api/login
    /api/register
    /api/admin/user

### bash commands

    $ ssh -i "~/.ssh/ssh_iot/id_ecdsa" -L 3312:localhost:3306 root@51.89.4.109 -N -f


### commands

    $ go mod init gin_jwt_api

### packages

    // gin framework
    $ go get -u github.com/gin-gonic/gin
    
    // ORM library
    $ go get -u github.com/jinzhu/gorm
    
    // package that we will be used to authenticate and generate our JWT
    $ go get -u github.com/dgrijalva/jwt-go
    
    // to help manage our environment variables
    $ go get -u github.com/joho/godotenv
    
    // to encrypt our user's password
    $ go get -u golang.org/x/crypto

    $ go get -u golang.org/x/crypto/ssh

### chatGPT
 can you optimize my code, add comments and rename variable were needed?



