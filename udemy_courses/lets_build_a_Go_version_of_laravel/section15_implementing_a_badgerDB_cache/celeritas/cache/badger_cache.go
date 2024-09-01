package cache

import (
	"time"

	"github.com/dgraph-io/badger/v3"
)

// BadgerCache struct wraps the Badger DB connection to implement a cache.
type BadgerCache struct {
	Conn   *badger.DB // The Badger database connection
	Prefix string     // Prefix to prepend to all cache keys
}

// ---------------------------------------------------------------------

// Has checks if a specific key exists in the Badger cache.
func (b *BadgerCache) Has(str string) (bool, error) {
	// Attempt to retrieve the value associated with the key
	_, err := b.Get(str)
	if err != nil {
		return false, nil // Return false if there is an error (e.g., key does not exist)
	}
	return true, nil // Return true if the key exists
}

// ---------------------------------------------------------------------

// Get retrieves a value from the Badger cache by key.
func (b *BadgerCache) Get(str string) (interface{}, error) {

	var fromCache []byte

	// View is a read-only transaction to get the item from Badger
	err := b.Conn.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte(str)) // Retrieve the item by key
		if err != nil {
			return err // Return error if the key is not found
		}

		// Extract the value from the item
		err = item.Value(func(val []byte) error {
			fromCache = append([]byte{}, val...) // Copy the value to fromCache
			return nil
		})

		if err != nil {
			return err // Return error if the value extraction fails
		}

		return nil
	})

	if err != nil {
		return nil, err // Return the error encountered during the transaction
	}

	// Decode the stored value
	decoded, err := decode(string(fromCache))

	if err != nil {
		return nil, err // Return error if decoding fails
	}

	// Retrieve the actual value stored under the key
	value := decoded[str]

	return value, nil // Return the retrieved value
}

// ---------------------------------------------------------------------

// Set stores a value in the Badger cache under the specified key, with an optional TTL (time-to-live).
func (b *BadgerCache) Set(str string, value interface{}, expires ...int) error {

	// Create a map to hold the key-value pair to be stored
	entry := Entry{}
	entry[str] = value

	// Serialize the entry map to a byte slice for storage
	encoded, err := encode(entry)
	if err != nil {
		return err // Return an error if encoding fails
	}

	// Check if a TTL (time-to-live) is provided and set the value with TTL if present
	if len(expires) > 0 {
		err = b.Conn.Update(func(txn *badger.Txn) error {
			// Create a new entry with TTL and use it in the transaction
			e := badger.NewEntry([]byte(str), encoded).WithTTL(time.Second * time.Duration(expires[0]))
			return txn.SetEntry(e) // Set the entry in the database
		})
	} else {
		// Set the value without TTL
		err = b.Conn.Update(func(txn *badger.Txn) error {
			// Create a new entry without TTL
			e := badger.NewEntry([]byte(str), encoded)
			return txn.SetEntry(e) // Set the entry in the database
		})
	}

	return err // Return nil if no errors occurred, or the error from the transaction
}

// ---------------------------------------------------------------------

// Forget removes a specific key from the Badger cache.
func (b *BadgerCache) Forget(str string) error {
	// Use the Update function to begin a transaction on the Badger database
	err := b.Conn.Update(func(txn *badger.Txn) error {
		// Attempt to delete the entry associated with the specified key from the database
		err := txn.Delete([]byte(str))
		return err // Return any error that occurs during the delete operation
	})

	return err // Return the result of the transaction, which is nil on success or an error on failure
}

// ---------------------------------------------------------------------

// EmptyByMatch removes all keys from the Badger cache that match a given pattern.
func (b *BadgerCache) EmptyByMatch(str string) error {
	return b.emptyByMatch(str)
}

// ---------------------------------------------------------------------

// Empty removes all keys from the Badger cache.
func (b *BadgerCache) Empty() error {
	return b.emptyByMatch("")
}

// ---------------------------------------------------------------------

// emptyByMatch removes all keys from the Badger database that match a specified prefix.
func (b *BadgerCache) emptyByMatch(str string) error {

	// Helper function to delete a batch of keys within a transaction
	deleteKeys := func(keysForDelete [][]byte) error {

		// Begin a transaction to delete keys
		return b.Conn.Update(func(txn *badger.Txn) error {
			// Loop through the keys and attempt to delete each one
			for _, key := range keysForDelete {
				if err := txn.Delete(key); err != nil {
					return err // If an error occurs during delete, return the error
				}
			}
			return nil // Return nil on successful deletion of all keys
		})
	}

	// Define how many keys to collect before deleting to manage memory usage
	collectSize := 100000

	// Start a read-only transaction to find keys to delete
	err := b.Conn.View(func(txn *badger.Txn) error {
		opts := badger.DefaultIteratorOptions
		opts.AllVersions = false    // Do not fetch all versions of the key
		opts.PrefetchValues = false // Only keys are needed, not values
		it := txn.NewIterator(opts) // Create an iterator with the defined options
		defer it.Close()            // Ensure the iterator is closed after use

		keysForDelete := make([][]byte, 0, collectSize) // Prepare a slice to collect keys
		keysCollected := 0                              // Counter for the collected keys

		// Seek to the first key that matches the prefix and iterate over all matching keys
		for it.Seek([]byte(str)); it.ValidForPrefix([]byte(str)); it.Next() {
			key := it.Item().KeyCopy(nil)              // Copy the key to prevent reuse
			keysForDelete = append(keysForDelete, key) // Collect the key
			keysCollected++

			// If the collect size limit is reached, delete collected keys
			if keysCollected == collectSize {
				if err := deleteKeys(keysForDelete); err != nil {
					return err // Return error if the deletion fails
				}
				// Reset the collection after deletion
				keysForDelete = make([][]byte, 0, collectSize)
				keysCollected = 0
			}
		}

		// After iteration, if there are any keys left, delete them
		if keysCollected > 0 {
			if err := deleteKeys(keysForDelete); err != nil {
				return err // Return error if the final batch deletion fails
			}
		}

		return nil // Return nil if everything succeeds
	})

	return err // Return the result of the view operation
}
