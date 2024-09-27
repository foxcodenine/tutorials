package cache

import (
	"log"
	"os"
	"testing"
	"time"

	"github.com/alicebob/miniredis/v2"
	"github.com/dgraph-io/badger/v3"
	"github.com/gomodule/redigo/redis"
)

var (
	testRedisCache  RedisCache
	testBadgerCache BadgerCache
)

func TestMain(m *testing.M) {

	// -- Setup Redis for testing

	// Start a Miniredis server, which is a pure Go Redis server for testing purposes.
	s, err := miniredis.Run()
	if err != nil {
		panic(err) // Use panic to halt if Redis cannot start, indicating severe issues.
	}

	defer s.Close() // Ensure Miniredis is closed after tests run.

	// Create a Redis connection pool for use in the tests.
	pool := redis.Pool{
		MaxIdle:     50,
		MaxActive:   1000,
		IdleTimeout: 240 * time.Second,
		Dial: func() (redis.Conn, error) {
			return redis.Dial("tcp", s.Addr()) // Connect to the Miniredis server.
		},
	}

	// Set up the Redis cache for testing, including a key prefix to avoid conflicts.
	testRedisCache.Conn = &pool
	testRedisCache.Prefix = "test-celeritas"

	// Ensure Redis connections are closed after tests.
	defer testRedisCache.Conn.Close()

	// -----------------------------------------------------------------

	// -- Setup Badger for testing

	// Clean up any existing Badger database directory from previous test runs.
	_ = os.RemoveAll("./testdata/tmp/badger")

	// create a badger database
	_, err = os.Stat("./testdata/tmp")

	// Ensure the necessary directories are present for Badger.
	if os.IsNotExist(err) {
		err := os.Mkdir("./testdata/tmp", 0755)
		if err != nil {
			log.Fatal(err) // If unable to create directory, halt as it's crucial for Badger.
		}
	}

	// Create a directory for the Badger database specifically.
	err = os.Mkdir("./testdata/tmp/badger", 0755)

	if err != nil {
		log.Fatal(err) // Critical to have this directory for database files.
	}

	// Open a Badger database in the designated directory.
	db, err := badger.Open(badger.DefaultOptions("./testdata/tmp/badger"))
	if err != nil {
		log.Fatal(err) // Halt if unable to open the Badger database.
	}
	testBadgerCache.Conn = db

	// Close the Badger database connection when all tests are done.
	defer db.Close()

	os.Exit(m.Run())
}
