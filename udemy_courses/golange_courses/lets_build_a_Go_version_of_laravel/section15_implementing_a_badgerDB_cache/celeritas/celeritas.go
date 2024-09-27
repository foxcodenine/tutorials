package celeritas

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/dgraph-io/badger/v3"
	"github.com/foxcodenine/celeritas/cache"
	"github.com/foxcodenine/celeritas/render"
	"github.com/foxcodenine/celeritas/session"
	"github.com/gomodule/redigo/redis"
	"github.com/robfig/cron/v3"

	"github.com/CloudyKit/jet/v6"
	"github.com/alexedwards/scs/v2"
	"github.com/go-chi/chi/v5"
	"github.com/joho/godotenv"
)

// version specifies the current version of the Celeritas package.
const version = "1.0.0"

// 123456
// Initialize global cache objects for Redis and Badger
var (
	myRedisCache  *cache.RedisCache
	myBadgerCache *cache.BadgerCache
	redisPool     *redis.Pool
	badgerConn    *badger.DB
)

// Celeritas is the main struct for the application, containing configuration settings.
type Celeritas struct {
	AppName       string              // Name of the application
	Debug         bool                // Debug mode flag
	Version       string              // Version of the application
	ErrorLog      *log.Logger         // Logger for error messages
	InfoLog       *log.Logger         // Logger for informational messages
	RootPath      string              // Root path of the application
	Routes        *chi.Mux            // HTTP routes for the application
	Render        *render.Render      // Template renderer for the application
	JetViews      *jet.Set            // Jet template set for the application
	Session       *scs.SessionManager // Session manager for handling user sessions
	DB            Database            // Database configuration
	config        config              // Configuration settings
	EncryptionKey string              // Key used for encrypting data.
	Cache         cache.Cache         // Cache interface for caching mechanisms (e.g., Redis)
	Scheduler     *cron.Cron          // Scheduler for managing background tasks and cron jobs
}

// New initializes a new Celeritas instance with the given root path.
func (c *Celeritas) New(rootPath string) error {
	// Define the initial paths configuration
	pathConfig := initPaths{
		rootPath: rootPath,
		folderNames: []string{
			"handlers",
			"migrations",
			"views",
			"data",
			"public",
			"logs",
			"middleware",
		},
	}

	// Initialize directories as per the path configuration
	if err := c.Init(pathConfig); err != nil {
		return err
	}

	// Check and create .env file if it doesn't exist
	if err := c.checkDotEnv(rootPath); err != nil {
		return err
	}

	// Load environment variables from .env file
	if err := godotenv.Load(rootPath + "/.env"); err != nil {
		return err
	}

	// Initialize loggers for informational and error messages
	c.startLoggers()

	// Initialize the database if DATABASE_TYPE is set
	if os.Getenv("DATABASE_TYPE") != "" {
		// Open the database connection using the provided DSN
		dsn := c.BuildDSN()
		db, err := c.OpenDB(os.Getenv("DATABASE_TYPE"), dsn)
		if err != nil {
			// Log the error and exit if the database connection fails
			c.ErrorLog.Println(err)
			os.Exit(1)
		}
		// Set the database configuration in Celeritas
		c.DB = Database{
			DataType: os.Getenv("DATABASE_TYPE"),
			Pool:     db,
		}
	}

	// Create a new Cron scheduler instance for scheduling tasks.
	scheduler := cron.New()
	c.Scheduler = scheduler // Assign the newly created scheduler to the Celeritas instance.

	// Initialize Redis cache if CACHE environment variable is set to "redis"
	if os.Getenv("CACHE") == "redis" || os.Getenv("SESSION_TYPE") == "redis" {
		myRedisCache = c.createClientRedisCache()
		c.Cache = myRedisCache

		redisPool = myRedisCache.Conn
	}

	// Initialize Badger cache if the CACHE environment variable is set to "badger".
	if os.Getenv("CACHE") == "badger" {
		myBadgerCache = c.createClientBadgerCache() // Create and initialize a Badger cache instance
		c.Cache = myBadgerCache                     // Set the main application cache to the initialized Badger cache

		badgerConn = myBadgerCache.Conn

		// Schedule a daily task to perform value log garbage collection in the Badger database.
		// This helps in reclaiming space and optimizing the database performance.
		_, err := c.Scheduler.AddFunc("@daily", func() {
			_ = myBadgerCache.Conn.RunValueLogGC(0.7) // Run garbage collection with a discard ratio of 0.7
		})

		if err != nil {
			return err // Return an error if scheduling the garbage collection task fails
		}
	}

	// Set debug mode based on the environment variable
	c.Debug, _ = strconv.ParseBool(os.Getenv("DEBUG"))

	// Set the version of the application
	c.Version = version

	// Set the root path of the application
	c.RootPath = rootPath

	// Initialize the HTTP routes
	c.Routes = c.routes().(*chi.Mux)

	// Set configuration settings based on environment variables
	c.config = config{
		port:     os.Getenv("PORT"),
		host:     os.Getenv("SERVER_NAME"),
		renderer: os.Getenv("RENDERER"),
		cookie: cookieConfig{
			name:     os.Getenv("COOKIE_NAME"),
			lifetime: os.Getenv("COOKIE_LIFETIME"),
			persist:  os.Getenv("COOKIE_PERSISTS"),
			secure:   os.Getenv("COOKIE_SECURE"),
			domain:   os.Getenv("COOKIE_DOMAIN"),
		},
		sessionType: os.Getenv("SESSION_TYPE"),
		database: databaseConfig{
			database: os.Getenv("DATABASE_TYPE"),
			dsn:      c.BuildDSN(),
		},
		redis: redisConfig{
			host:     os.Getenv("REDIS_HOST"),
			password: os.Getenv("REDIS_PASSWORD"),
			prefix:   os.Getenv("REDIS_PREFIX"),
		},
	}

	// Create session
	sess := session.Session{
		CookieLifetime: c.config.cookie.lifetime,
		CookiePersist:  c.config.cookie.persist,
		CookieName:     c.config.cookie.name,
		CookieDomain:   c.config.cookie.domain,
		SessionType:    c.config.sessionType,
		// DBPool:         c.DB.Pool,
	}

	// Determine session store based on the session type configuration
	switch c.config.sessionType {
	case "redis":
		sess.RedisPool = myRedisCache.Conn // Assign Redis connection pool for session management

	case "mysql", "postgres", "mariadb", "postgresql":
		sess.DBPool = c.DB.Pool // Assign database connection pool for session management
	}

	// Initialize session with the configured session store
	c.Session = sess.InitSession()

	// Set encryption key.
	c.EncryptionKey = os.Getenv("KEY")

	// Initialize the Jet template engine
	if c.Debug {
		var views = jet.NewSet(
			jet.NewOSFileSystemLoader(fmt.Sprintf("%s/views", c.RootPath)),
		)
		c.JetViews = views
	} else {
		var views = jet.NewSet(
			jet.NewOSFileSystemLoader(fmt.Sprintf("%s/views", c.RootPath)),
			jet.InDevelopmentMode(), // Enable development mode (remove in production)
		)
		c.JetViews = views
	}

	// Initialize the renderer
	c.createRenderer()

	return nil
}

// Init creates the necessary directories based on the provided path configuration.
func (c *Celeritas) Init(p initPaths) error {
	root := p.rootPath

	// Iterate over each folder name and create it if it doesn't exist
	for _, path := range p.folderNames {
		if err := c.CreateDirIfNotExist(root + "/" + path); err != nil {
			return err
		}
	}

	return nil
}

// ListenAndServe starts the HTTP server with the specified configuration.
func (c *Celeritas) ListenAndServe() {
	// Create a new HTTP server with the specified settings
	srv := &http.Server{
		Addr:         fmt.Sprintf(":%s", os.Getenv("PORT")), // Set the server address from the PORT environment variable
		ErrorLog:     c.ErrorLog,                            // Set the error logger
		Handler:      c.Routes,                              // Set the HTTP handler
		IdleTimeout:  30 * time.Second,                      // Set the idle timeout duration
		ReadTimeout:  30 * time.Second,                      // Set the read timeout duration
		WriteTimeout: 600 * time.Second,                     // Set the write timeout duration
	}

	if c.DB.Pool != nil {
		defer c.DB.Pool.Close()
	}

	if redisPool != nil {
		defer redisPool.Close()
	}

	if badgerConn != nil {
		defer badgerConn.Close()
	}

	protocol := "http"
	if c.Render.Secure {
		protocol = "https"
	}

	// Log the server start information
	c.InfoLog.Printf("Server running on %s://%s:%s", protocol, c.config.host, c.config.port)

	// Start the server and log any errors that occur
	err := srv.ListenAndServe()
	c.ErrorLog.Fatal(err)
}

// checkDotEnv checks for the existence of a .env file and creates it if it doesn't exist.
func (c *Celeritas) checkDotEnv(path string) error {
	if err := c.CreateFileIfNotExist(fmt.Sprintf("%s/.env", path)); err != nil {
		return err
	}
	return nil
}

// startLoggers initializes loggers for informational and error messages.
func (c *Celeritas) startLoggers() {
	// Initialize the informational logger
	c.InfoLog = log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)

	// Initialize the error logger
	c.ErrorLog = log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
}

// createRenderer initializes and returns a new renderer based on the application configuration.
func (c *Celeritas) createRenderer() {
	// Initialize a new renderer with the application's configuration settings
	myRenderer := render.Render{
		Renderer: c.config.renderer,
		RootPath: c.RootPath,
		Port:     c.config.port,
		JetViews: c.JetViews,
		Session:  c.Session,
	}

	c.Render = &myRenderer
}

// createRedisPool initializes a connection pool for Redis, setting the
// maximum idle and active connections, and configuring connection options.
func (c *Celeritas) createRedisPool() *redis.Pool {
	return &redis.Pool{
		MaxIdle:     50,                // Maximum number of idle connections
		MaxActive:   10000,             // Maximum number of active connections
		IdleTimeout: 240 * time.Second, // Idle connection timeout duration
		Dial: func() (redis.Conn, error) { // Function to establish a new connection
			return redis.Dial("tcp",
				c.config.redis.host,
				redis.DialPassword(c.config.redis.password))
		},
		TestOnBorrow: func(conn redis.Conn, t time.Time) error { // Function to test connection before borrowing
			_, err := conn.Do("PING")
			return err
		},
	}
}

// createClientRedisCache initializes a RedisCache client with a connection pool and prefix.
func (c *Celeritas) createClientRedisCache() *cache.RedisCache {
	cacheClient := cache.RedisCache{
		Conn:   c.createRedisPool(),   // Create and use a Redis connection pool
		Prefix: c.config.redis.prefix, // Prefix for Redis keys
	}

	return &cacheClient
}

// createBadgerConn opens a Badger database at a specified path in the application's root directory.
// It returns a *badger.DB instance or nil if it fails to open.
func (c *Celeritas) createBadgerConn() *badger.DB {
	// Construct the path to the Badger database directory using the application's root path.
	db, err := badger.Open(badger.DefaultOptions(c.RootPath + "/tmp/badger"))

	if err != nil {
		c.ErrorLog.Printf("Failed to open Badger database: %v", err)
		return nil
	}

	// Return the Badger database instance if successful.
	return db
}

// createClientBadgerCache creates a BadgerCache instance using an established Badger database connection.
// Returns a pointer to the initialized BadgerCache.
func (c *Celeritas) createClientBadgerCache() *cache.BadgerCache {
	cacheClient := cache.BadgerCache{
		Conn: c.createBadgerConn(), // Establish the Badger DB connection.
	}
	return &cacheClient
}

// BuildDSN constructs the Data Source Name (DSN) based on the database type and environment variables.
// Returns the DSN string which can be used to connect to the database.
func (c *Celeritas) BuildDSN() string {
	var dsn string

	// Check the type of database from the environment variable
	switch os.Getenv("DATABASE_TYPE") {
	case "postgres", "postgresql":
		// Construct DSN for PostgreSQL
		dsn = fmt.Sprintf("host=%s port=%s user=%s dbname=%s sslmode=%s timezone=UTC connect_timeout=5",
			os.Getenv("DATABASE_HOST"),
			os.Getenv("DATABASE_PORT"),
			os.Getenv("DATABASE_USER"),
			os.Getenv("DATABASE_NAME"),
			os.Getenv("DATABASE_SSL_MODE"),
		)

		// Add password to DSN if provided
		if os.Getenv("DATABASE_PASS") != "" {
			dsn = fmt.Sprintf("%s password=%s", dsn, os.Getenv("DATABASE_PASS"))
		}
	default:
		// Handle other database types or default behavior here
	}

	return dsn
}
