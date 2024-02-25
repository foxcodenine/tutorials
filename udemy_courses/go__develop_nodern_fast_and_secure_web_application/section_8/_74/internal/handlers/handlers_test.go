package handlers

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"net/url"
	"testing"
)

type postData struct {
	key   string
	value string
}

var theTests = []struct {
	name               string
	url                string
	method             string
	params             []postData
	expactedStatusCode int
}{
	{"home", "/", "GET", []postData{}, http.StatusOK},
	{"about", "/about", "GET", []postData{}, http.StatusOK},
	{"contact", "/contact", "GET", []postData{}, http.StatusOK},
	{"eremite", "/eremite", "GET", []postData{}, http.StatusOK},
	{"couple", "/couple", "GET", []postData{}, http.StatusOK},
	{"family", "/family", "GET", []postData{}, http.StatusOK},
	{"reservation", "/reservation", "GET", []postData{}, http.StatusOK},
	{"make-reservation", "/make-reservation", "GET", []postData{}, http.StatusOK},
	// {"reservation-overview", "/reservation-overview", "GET", []postData{}, http.StatusOK},
	{"not-existing-route", "/blablabla", "GET", []postData{}, http.StatusNotFound},

	{"reservation", "/reservation", "POST", []postData{
		{key: "startingDate", value: "2020-01-01"},
		{key: "endingDate", value: "2020-01-02"},
	}, http.StatusOK},

	{"reservation-json", "/reservation-json", "POST", []postData{
		{key: "start", value: "2020-01-01"},
		{key: "end", value: "2020-01-02"},
	}, http.StatusOK},

	{"make-reservation", "/make-reservation", "POST", []postData{
		{key: "full_name", value: "Chris Farrugia"},
		{key: "email", value: "chris@yahoo.com"},
		{key: "phone", value: "79461346"},
	}, http.StatusOK},
}

func TestHandlers(t *testing.T) {
	routes := getRoutes()
	testServer := httptest.NewTLSServer(routes)
	defer testServer.Close()

	for _, e := range theTests {
		if e.method == "GET" {
			resp, err := testServer.Client().Get(testServer.URL + e.url)

			if err != nil {
				t.Log(e.name, " -> ", err)
				t.Fatal(err)
			}

			if resp.StatusCode != e.expactedStatusCode {
				t.Errorf("for %s, expected %d but got %d\n", e.name, e.expactedStatusCode, resp.StatusCode)
			}
			fmt.Println("> ", e.name, e.expactedStatusCode, resp.StatusCode)

		} else {
			values := url.Values{}
			for _, x := range e.params {
				values.Add(x.key, x.value)
			}

			resp, err := testServer.Client().PostForm(testServer.URL+e.url, values)

			if err != nil {
				t.Log(err)
				t.Fatal(err)
			}
			if resp.StatusCode != e.expactedStatusCode {
				t.Errorf("for %s, expected %d but got %d\n", e.name, e.expactedStatusCode, resp.StatusCode)
			}
		}
	}
}
