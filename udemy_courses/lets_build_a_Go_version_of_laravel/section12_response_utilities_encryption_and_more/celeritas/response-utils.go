package celeritas

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"mime"
	"net/http"
	"path"
	"path/filepath"
)

// ---------------------------------------------------------------------

// WriteJSON sends a JSON response with the provided status code and data.
// Optional headers can also be set.
func (c *Celeritas) WriteJSON(w http.ResponseWriter, status int, data interface{}, headers ...http.Header) error {
	// Marshal data into pretty-printed JSON
	out, err := json.MarshalIndent(data, "", "\t")
	if err != nil {
		return err
	}

	// Set any optional headers if provided
	if len(headers) > 0 {
		for key, value := range headers[0] {
			w.Header()[key] = value
		}
	}

	// Set the Content-Type header to application/json
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)

	// Write the JSON response
	_, err = w.Write(out)
	if err != nil {
		return err
	}

	return nil
}

// ---------------------------------------------------------------------

// WriteXML sends an XML response with the provided status code and data.
// Optional headers can also be set.
func (c *Celeritas) WriteXML(w http.ResponseWriter, status int, data interface{}, headers ...http.Header) error {
	// Marshal data into pretty-printed XML
	out, err := xml.MarshalIndent(data, "", "    ")
	if err != nil {
		return err
	}

	// Set any optional headers if provided
	if len(headers) > 0 {
		for key, value := range headers[0] {
			w.Header()[key] = value
		}
	}

	// Set the Content-Type header to application/xml
	w.Header().Set("Content-Type", "application/xml")
	w.WriteHeader(status)

	// Write the XML response
	_, err = w.Write(out)
	if err != nil {
		return err
	}

	return nil
}

// ---------------------------------------------------------------------

// DownloadFile sends a file to the client as an attachment for download.
func (c *Celeritas) DownloadFile(w http.ResponseWriter, r *http.Request, pathToFile, fileName string) error {
	// Join the path and filename to create the full file path
	fp := path.Join(pathToFile, fileName)

	// Clean the file path to ensure it is safe and valid
	fileToServe := filepath.Clean(fp)

	//  NOTE:  Not strictly needed, as http.ServeFile sets this automatically.
	// Determine the Content-Type based on the file extension
	ext := filepath.Ext(fileName)
	mimeType := mime.TypeByExtension(ext)
	if mimeType == "" {
		mimeType = "application/octet-stream" // Default to binary stream if MIME type is unknown
	}

	//  NOTE:  Not strictly needed, as http.ServeFile sets this automatically.
	// Set the Content-Type header
	w.Header().Set("Content-Type", mimeType)

	// Set the Content-Disposition header to indicate an attachment
	w.Header().Set("Content-Disposition", fmt.Sprintf("attachment; filename=\"%s\"", fileName))

	// Serve the file to the client
	http.ServeFile(w, r, fileToServe)

	return nil
}

// ---------------------------------------------------------------------

// ErrorStatus sends a generic HTTP error response with the specified status code.
func (c *Celeritas) ErrorStatus(w http.ResponseWriter, status int) {
	http.Error(w, http.StatusText(status), status)
}

// Error404 sends a 404 Not Found error response.
func (c *Celeritas) Error404(w http.ResponseWriter, r *http.Request) {
	c.ErrorStatus(w, http.StatusNotFound)
}

// Error500 sends a 500 Internal Server Error response.
func (c *Celeritas) Error500(w http.ResponseWriter, r *http.Request) {
	c.ErrorStatus(w, http.StatusInternalServerError)
}

// ErrorUnauthorized sends a 401 Unauthorized error response.
func (c *Celeritas) ErrorUnauthorized(w http.ResponseWriter, r *http.Request) {
	c.ErrorStatus(w, http.StatusUnauthorized)
}

// ErrorForbidden sends a 403 Forbidden error response.
func (c *Celeritas) ErrorForbidden(w http.ResponseWriter, r *http.Request) {
	c.ErrorStatus(w, http.StatusForbidden)
}
