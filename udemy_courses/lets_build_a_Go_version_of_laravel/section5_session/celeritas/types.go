package celeritas

// initPaths holds the root path and a list of folder names for initialization.
type initPaths struct {
	rootPath    string   // The root directory path
	folderNames []string // Names of folders to be initialized
}

// config holds configuration settings for the application.
type config struct {
	port        string       // Port for the application
	host        string       // Host for the application
	renderer    string       // Renderer for the application
	cookie      cookieConfig // Cookie configuration settings
	sessionType string       // Session management type (ex: redis)
}

// cookieConfig holds the cookie-related configuration settings.
type cookieConfig struct {
	name     string // Name of the cookie
	lifetime string // Lifetime of the cookie
	persist  string
	secure   string // Secure flag for the cookie
	domain   string // Domain for the cookie
}
