package session

import (
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/alexedwards/scs/v2"
)

// Session struct holds configuration settings for the session.
type Session struct {
	CookieLifetime string
	CookiePersist  string
	CookieName     string
	CookieDomain   string
	SessionType    string
	CookieSecure   string
}

// InitSession initializes a session manager based on the session configuration.
func (c *Session) InitSession() *scs.SessionManager {
	var persist, secure bool

	// Convert CookieLifetime to an integer (minutes)
	minutes, err := strconv.Atoi(c.CookieLifetime)
	if err != nil {
		minutes = 60
	}

	// Determine if cookies should persist
	persist = strings.ToLower(c.CookiePersist) == "true"

	// Determine if cookies should be secure
	secure = strings.ToLower(c.CookieSecure) == "true"

	// Create a new session manager
	session := scs.New()
	session.Lifetime = time.Duration(minutes) * time.Minute
	session.Cookie.Persist = persist
	session.Cookie.Name = c.CookieName
	session.Cookie.Secure = secure
	session.Cookie.Domain = c.CookieDomain
	session.Cookie.SameSite = http.SameSiteLaxMode

	// Set the session store based on SessionType (currently defaults to cookies)
	switch strings.ToLower(c.SessionType) {
	case "redis":
		// Set up Redis session store (not implemented)
	case "mysql", "mariadb":
		// Set up MySQL/MariaDB session store (not implemented)
	case "postgres", "postgresql":
		// Set up PostgreSQL session store (not implemented)
	default:
		// Default to cookies
	}

	return session
}
