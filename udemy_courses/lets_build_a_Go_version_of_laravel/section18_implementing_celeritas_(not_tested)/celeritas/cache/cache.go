package cache

import (
	"bytes"
	"encoding/gob"
	"fmt"

	"github.com/gomodule/redigo/redis"
)

// Cache is an interface that defines the methods required for a cache system.
type Cache interface {
	Has(string) (bool, error)              // Checks if a key exists in the cache.
	Get(string) (interface{}, error)       // Retrieves a value from the cache by key.
	Set(string, interface{}, ...int) error // Sets a value in the cache with an optional TTL (time to live).
	Forget(string) error                   // Removes a specific key from the cache.
	EmptyByMatch(string) error             // Removes all keys that match a given pattern.
	Empty() error                          // Removes all keys from the cache.
}

// ---------------------------------------------------------------------

// RedisCache is a struct that implements the Cache interface using Redis.
type RedisCache struct {
	Conn   *redis.Pool // Connection pool to Redis
	Prefix string      // Prefix to apply to all keys stored in Redis
}

// ---------------------------------------------------------------------

// Entry is a type that represents a map of key-value pairs.
type Entry map[string]interface{}

// ---------------------------------------------------------------------

// encode serializes the given Entry map into a byte slice using gob encoding.
func encode(item Entry) ([]byte, error) {
	// Create a buffer to hold the encoded data
	b := bytes.Buffer{}

	// Create a new gob encoder
	e := gob.NewEncoder(&b)

	// Encode the Entry map into the buffer
	err := e.Encode(item)
	if err != nil {
		return nil, err
	}

	// Return the encoded data as a byte slice
	return b.Bytes(), nil
}

// decode deserializes the given byte slice into an Entry map using gob decoding.
func decode(str string) (Entry, error) {
	// Create an empty Entry map
	item := Entry{}

	// Write the input string into a buffer
	b := bytes.Buffer{}
	b.Write([]byte(str))

	// Create a new gob decoder
	d := gob.NewDecoder(&b)

	// Decode the buffer content into the Entry map
	err := d.Decode(&item)
	if err != nil {
		return nil, err
	}

	// Return the decoded Entry map
	return item, nil
}

// ---------------------------------------------------------------------

// Has checks if a specific key exists in the Redis cache.
func (c *RedisCache) Has(str string) (bool, error) {
	// Format the key with the prefix
	key := fmt.Sprintf("%s:%s", c.Prefix, str)

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Check if the key exists in Redis
	ok, err := redis.Bool(conn.Do("EXISTS", key))
	if err != nil {
		return false, err
	}

	return ok, nil
}

// Get retrieves a value from the Redis cache by key.
func (c *RedisCache) Get(str string) (interface{}, error) {

	// Format the key with the prefix
	key := fmt.Sprintf("%s:%s", c.Prefix, str)

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Execute the GET command to retrieve the cached value
	cacheEntry, err := redis.Bytes(conn.Do("GET", key))
	if err != nil {
		return nil, err // Return an error if the key does not exist or if there's a Redis issue
	}

	// Decode the cached data from bytes to an Entry map
	decoded, err := decode(string(cacheEntry))
	if err != nil {
		return nil, err // Return an error if decoding fails
	}

	// Extract the specific item from the decoded map using the key
	item := decoded[key]

	// Return the retrieved item
	return item, nil
}

// Set stores a value in the Redis cache under the specified key, with an optional TTL.
func (c *RedisCache) Set(str string, value interface{}, expires ...int) error {

	// Format the key with the prefix
	key := fmt.Sprintf("%s:%s", c.Prefix, str)

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Create an Entry map to store the key-value pair
	entry := Entry{}
	entry[key] = value

	// Encode the Entry map into a byte slice
	encoded, err := encode(entry)
	if err != nil {
		return err // Return an error if encoding fails
	}

	// Check if an expiration time (TTL) is provided
	if len(expires) > 0 {
		// Use SETEX command to set the key with an expiration time
		_, err := conn.Do("SETEX", key, expires[0], string(encoded))
		if err != nil {
			return err // Return an error if the SETEX command fails
		}
	} else {
		// Use SET command to set the key without expiration time
		_, err := conn.Do("SET", key, string(encoded))
		if err != nil {
			return err // Return an error if the SET command fails
		}
	}

	return nil // Return nil if the operation is successful
}

// Forget removes a specific key from the Redis cache.
func (c *RedisCache) Forget(str string) error {

	// Format the key with the prefix
	key := fmt.Sprintf("%s:%s", c.Prefix, str)

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Execute the DEL command to remove the key from Redis
	_, err := conn.Do("DEL", key)
	if err != nil {
		return err // Return an error if the DEL command fails
	}

	return nil
}

// EmptyByMatch removes all keys from the Redis cache that match a given pattern.
func (c *RedisCache) EmptyByMatch(str string) error {
	// Format the key with the prefix to create a pattern for matching
	keyPattern := fmt.Sprintf("%s:%s*", c.Prefix, str)

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Retrieve all keys matching the pattern
	keys, err := c.getKeys(keyPattern)
	if err != nil {
		return err // Return an error if the key retrieval fails
	}

	// Delete all found keys
	for _, key := range keys {
		_, err := conn.Do("DEL", key)
		if err != nil {
			return err // Return an error if the deletion of any key fails
		}
	}

	return nil
}

// Empty removes all keys from the Redis cache that start with the specified prefix.
func (c *RedisCache) Empty() error {
	// Format the prefix to match all keys under it
	keyPattern := fmt.Sprintf("%s:*", c.Prefix)

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Retrieve all keys under the specified prefix
	keys, err := c.getKeys(keyPattern)
	if err != nil {
		return err
	}

	// Delete all found keys
	for _, key := range keys {
		_, err := conn.Do("DEL", key)
		if err != nil {
			return err // Return an error if the deletion of any key fails
		}
	}

	return nil
}

// getKeys retrieves all keys from Redis that match a given pattern.
func (c *RedisCache) getKeys(pattern string) ([]string, error) {

	// Get a Redis connection from the pool
	conn := c.Conn.Get()
	defer conn.Close()

	// Initialize an iterator for the SCAN command
	iter := 0
	var keys []string

	// Loop to scan through all keys in the Redis database that match the pattern
	for {
		// Execute the SCAN command to find keys matching the pattern
		arr, err := redis.Values(conn.Do("SCAN", iter, "MATCH", pattern))
		if err != nil {
			return nil, err // Return an error if the SCAN command fails
		}

		// Update the iterator for the next scan cycle
		iter, _ = redis.Int(arr[0], nil)

		// Extract the keys found in this scan cycle
		foundKeys, _ := redis.Strings(arr[1], nil)
		keys = append(keys, foundKeys...)

		// If the iterator is 0, all keys have been scanned
		if iter == 0 {
			break
		}
	}

	return keys, nil

	//  NOTE:  iter: This is the cursor position that Redis uses to keep track of where it is in the
	// iteration process. The first time you call SCAN, iter should be 0. Redis returns a new cursor position that
	// you use in the next SCAN call. This process continues until Redis returns a cursor value of 0, indicating
	// that the scan is complete.
}
