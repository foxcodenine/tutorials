package celeritas

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io"
	"os"
)

const (
	randomString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321_+"
)

// RandomString generates a random string of length n from values in the const randomString
func (c *Celeritas) RandomString(n int) string {

	// Create a slice to hold the runes of the random string
	s := make([]rune, n)

	// Convert the randomString to a slice of runes for easy indexing
	r := []rune(randomString)

	// Iterate over each position in the result slice
	for i := range s {
		// Generate a random prime number less than the length of the rune slice
		// Using rand.Prime ensures that the randomness is cryptographically secure
		p, _ := rand.Prime(rand.Reader, len(r))
		// Convert the prime number to an unsigned integer
		x := p.Uint64()
		// Calculate the index by taking the modulus of the prime number with the length of the rune slice
		y := uint64(len(r))
		// Assign a random rune from the rune slice to the current position
		s[i] = r[x%y]
	}

	// Convert the slice of runes to a string and return it
	return string(s)
}

// ---------------------------------------------------------------------

// CreateDirIfNotExist creates a directory if it doesn't exist.
func (c *Celeritas) CreateDirIfNotExist(path string) error {
	const mode = 0755

	// Check if the directory exists
	if _, err := os.Stat(path); os.IsNotExist(err) {
		// Create the directory if it does not exist
		if err := os.Mkdir(path, mode); err != nil {
			return err
		}
	}

	return nil
}

// ---------------------------------------------------------------------

// CreateFileIfNotExist creates a file if it doesn't exist.
func (c *Celeritas) CreateFileIfNotExist(path string) error {
	// Check if the file exists
	if _, err := os.Stat(path); os.IsNotExist(err) {
		// Create the file if it does not exist
		file, err := os.Create(path)
		if err != nil {
			return err
		}

		// Ensure the file is closed after creation
		defer func(file *os.File) {
			_ = file.Close()
		}(file)
	}

	return nil
}

// ---------------------------------------------------------------------

type Encryption struct {
	Key []byte // Key contains the encryption key which should be of appropriate length for AES.
}

func (e *Encryption) Encrypt(text string) (string, error) {
	// Convert the plaintext string to a byte slice.
	plaintext := []byte(text)

	// Create a new AES cipher using the encryption key. The key length should match an AES key size (16, 24, or 32 bytes).
	block, err := aes.NewCipher(e.Key)
	if err != nil {
		// Return an error if the AES cipher could not be created, usually due to an invalid key size.
		return "", err
	}

	// Create a byte slice for the ciphertext that is the size of the AES block plus the size of the plaintext.
	ciphertext := make([]byte, aes.BlockSize+len(plaintext))

	// iv holds the initialization vector, which is the first part of ciphertext and should be random.
	iv := ciphertext[:aes.BlockSize]

	// Fill the initialization vector with random data.
	_, err = io.ReadFull(rand.Reader, iv)
	if err != nil {
		// Return an error if there was a problem generating the random initialization vector.
		return "", err
	}

	// Create a new instance of the CFB (Cipher Feedback) encrypter.
	stream := cipher.NewCFBEncrypter(block, iv)

	// Encrypt the plaintext using XORKeyStream, placing the result in the ciphertext slice beyond the AES block size.
	stream.XORKeyStream(ciphertext[aes.BlockSize:], plaintext)

	// Encode the full ciphertext (which includes the IV) in base64 URL encoding to make it safe to transport as a string.
	return base64.URLEncoding.EncodeToString(ciphertext), nil
}

func (e *Encryption) Decrypt(cryptoText string) (string, error) {
	// Decode the base64-encoded string back into a byte array.
	ciphertext, _ := base64.URLEncoding.DecodeString(cryptoText)

	// Create a new AES cipher using the same key used for encryption.
	block, err := aes.NewCipher(e.Key)
	if err != nil {
		// Return an error if the AES cipher could not be created.
		return "", err
	}

	// Ensure that the ciphertext is long enough to contain at least the IV.
	if len(ciphertext) < aes.BlockSize {
		return "", fmt.Errorf("ciphertext too short")
	}

	// The IV needs to be extracted from the first part of the ciphertext.
	iv := ciphertext[:aes.BlockSize]

	// The actual ciphertext is everything past the block size.
	ciphertext = ciphertext[aes.BlockSize:]

	// Set up the CFB decrypter just like when encrypting, using the same IV.
	stream := cipher.NewCFBDecrypter(block, iv)

	// Decrypt the ciphertext in-place. The result is stored in the ciphertext slice.
	stream.XORKeyStream(ciphertext, ciphertext)

	// Convert the decrypted byte array back into a string.
	return string(ciphertext), nil
}
