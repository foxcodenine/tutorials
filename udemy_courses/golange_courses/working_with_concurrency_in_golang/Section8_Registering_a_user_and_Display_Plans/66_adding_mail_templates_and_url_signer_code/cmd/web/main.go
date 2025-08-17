package main

import (
	"database/sql"
	"encoding/gob"
	"final-project/data"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"sync"
	"syscall"
	"time"

	"github.com/alexedwards/scs/redisstore"
	"github.com/alexedwards/scs/v2"
	"github.com/gomodule/redigo/redis"
	_ "github.com/jackc/pgx/v5"
	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/joho/godotenv"
)

const webPort = "8188"

func main() {
	// Connect to the database (Postgres)
	db := initDB()

	// Set up session manager (using Redis)
	session := initSession()

	// Set up info and error loggers
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	// Create waitgroup for managing goroutines
	wg := sync.WaitGroup{}

	// Set up the application config
	app := Config{
		Session:  session,
		DB:       db,
		InfoLog:  infoLog,
		ErrorLog: errorLog,
		Wait:     &wg,
		Models:   data.New(db),
	}

	// set up the application config

	// set up mail
	app.Mailer = app.createMail()
	go app.listenForMail()

	// Listen for OS shutdown signals in a separate goroutine
	go app.listenForShutdown()

	// Start the web server (blocks main goroutine)
	app.serve()
}

// ---------------------------------------------------------------------

// serve starts the HTTP web server.
func (app *Config) serve() {

	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", webPort),
		Handler: app.routes(), // Sets up routes and middleware
	}

	app.InfoLog.Println("Starting web server - http://localhost:" + webPort + "/")
	err := srv.ListenAndServe()
	if err != nil {
		log.Panicln(err)
	}
}

// ---------------------------------------------------------------------

// initDB loads env vars and connects to the database.
func initDB() *sql.DB {
	loadEnv()
	conn := connectToDB()

	if conn == nil {
		log.Panic("can't connect to databse")
	}

	return conn
}

// ---------------------------------------------------------------------

// connectToDB attempts to connect, with retry and backoff (max 10 times)
func connectToDB() *sql.DB {
	count := 0

	dsn := os.Getenv("DATABASE_URL")

	for {
		connections, err := openDB(dsn)
		if err != nil {
			log.Println("postgres not yet ready...")
		} else {
			log.Println("connected to database!")
			return connections
		}

		if count > 10 {
			return nil // Give up after 10 tries
		}

		log.Println("backing off for 1 second.")
		time.Sleep(1 * time.Second)
		count++

		continue
	}
}

// ---------------------------------------------------------------------

// openDB actually opens and pings the database.
func openDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}

// ---------------------------------------------------------------------

// loadEnv loads environment variables from a .env file.
func loadEnv() error {

	var envPath = "./"

	err := godotenv.Load(fmt.Sprintf("%s.env", envPath))

	if err != nil {
		log.Panicf("Failed to load environment file '%s.env': %v", envPath, err)
	}
	return err
}

// ---------------------------------------------------------------------

// initSession registers session types and configures session settings (Redis, cookies, etc.)
func initSession() *scs.SessionManager {
	// Register User struct for session storage
	gob.Register(data.User{})

	// Set up SCS session manager with Redis backend
	session := scs.New()
	session.Store = redisstore.New(initRedis())
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist = true
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure = true

	return session
}

// ---------------------------------------------------------------------

// initRedis creates and returns a Redis connection pool.
func initRedis() *redis.Pool {
	redisDB, err := strconv.Atoi(os.Getenv("REDIS_DB"))

	if err != nil {
		redisDB = 0 // Default to DB 0 if parsing fails
	}

	redisPool := &redis.Pool{
		MaxIdle: 10,

		MaxActive: 10000,

		IdleTimeout: 240 * time.Second,

		Dial: func() (redis.Conn, error) {
			redisAddress := fmt.Sprintf("%s:%s", os.Getenv("REDIS_HOST"), os.Getenv("REDIS_PORT"))
			return redis.Dial(
				"tcp",
				redisAddress,
				redis.DialPassword(os.Getenv("REDIS_PASSWORD")),
				redis.DialDatabase(redisDB),
			)
		},
	}

	return redisPool
}

// listenForShutdown waits for termination signals and shuts down gracefully.
func (app *Config) listenForShutdown() {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit // Block until signal received

	app.shutdown()
	os.Exit(0)
}

// shutdown is where you would run any cleanup tasks before exiting.
func (app *Config) shutdown() {

	app.InfoLog.Println("would run cleanup task...")

	app.Wait.Wait() // Wait for any running goroutines to finish

	app.Mailer.DoneChan <- true

	app.InfoLog.Println("closing channels and shutting down application...")
	close(app.Mailer.MailerChan)
	close(app.Mailer.ErrorChan)
	close(app.Mailer.DoneChan)
}
