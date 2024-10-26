package main

import (
	"database/sql"
	"encoding/gob"
	"final_project/data"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"github.com/alexedwards/scs/redisstore"
	"github.com/alexedwards/scs/v2"
	"github.com/gomodule/redigo/redis"
	_ "github.com/jackc/pgconn"
	_ "github.com/jackc/pgx/v4"
	_ "github.com/jackc/pgx/v4/stdlib"
	"github.com/joho/godotenv"
)

const webPort = "8088"

func main() {
	// load .env
	dir, _ := os.Getwd()
	err := godotenv.Load(dir + "/.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	fmt.Println(os.Getenv("SENDGRID_API_KEY"))

	// connect to the database
	db := initDB()

	// create sessions
	session := initSession()

	// create loggers
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	// create channels

	// create waitgroup
	wg := sync.WaitGroup{}

	// set up the application config
	app := Config{
		Session:  session,
		DB:       db,
		InfoLog:  infoLog,
		ErrorLog: errorLog,
		Wait:     &wg,
		Models:   data.New(db),
	}

	// set up mail

	app.Mailer = app.createMail()
	go app.listenForMail()

	// listen for signals
	go app.listenForShutdown()

	// listen for a web connections
	app.serve()
}

func (app *Config) serve() {
	// start http server
	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", webPort),
		Handler: app.routes(),
	}

	app.InfoLog.Println("Starting web server - http://localhost:" + webPort + "/")
	err := srv.ListenAndServe()
	if err != nil {
		log.Panicln(err)
	}
}

func initDB() *sql.DB {
	conn := connectToDB()

	if conn == nil {
		log.Panicln("can't connect to database")
	}
	return conn
}

func connectToDB() *sql.DB {
	count := 0

	dns := os.Getenv("DSN")

	for {
		connection, err := openDB(dns)
		if err != nil {
			log.Println("postgress not yet ready...")
		} else {
			log.Println("connected to database!")
			return connection
		}

		if count > 10 {
			return nil
		}

		log.Println("backing off for 1 second.")
		time.Sleep(1 * time.Second)
		count++

		continue
	}
}

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

func initSession() *scs.SessionManager {
	gob.Register(data.User{})

	// set up session
	session := scs.New()
	session.Store = redisstore.New(initRedis())
	session.Lifetime = 24 * time.Hour
	session.Cookie.Persist = true
	session.Cookie.SameSite = http.SameSiteLaxMode
	session.Cookie.Secure = true

	return session
}

func initRedis() *redis.Pool {
	redisPool := &redis.Pool{
		MaxIdle: 10,
		Dial: func() (redis.Conn, error) {
			return redis.Dial("tcp", os.Getenv("REDIS"))
		},
	}
	return redisPool
}

func (app *Config) listenForShutdown() {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	app.shutdown()
	os.Exit(0)
}

func (app *Config) shutdown() {
	// perform any cleanup task
	app.InfoLog.Println("would run cleanup task...")

	// block until waitgroup is empty
	app.Wait.Wait()

	app.Mailer.DoneChan <- true

	app.InfoLog.Println("closing channels and shutting down application...")

	close(app.Mailer.MailerChan)
	close(app.Mailer.ErrorChan)
	close(app.Mailer.DoneChan)
}

func (app *Config) createMail() Mail {
	// create channels
	errorChan := make(chan error)
	mailerChan := make(chan Message, 100)
	mailerDoneChan := make(chan bool)

	m := Mail{
		Domain:      "localhost",
		Host:        "localhost",
		Port:        31025,
		Encryption:  "none",
		FromName:    "info",
		FromAddress: "chrisfarrugia.dev@gmail.com",
		Wait:        app.Wait,
		ErrorChan:   errorChan,
		MailerChan:  mailerChan,
		DoneChan:    mailerDoneChan,
	}

	return m
}
