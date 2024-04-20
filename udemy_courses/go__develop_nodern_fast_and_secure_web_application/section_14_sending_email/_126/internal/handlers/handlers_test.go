package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"strings"

	// "net/url"
	"testing"
	"time"

	"foxcode.io/models" // Import your custom models package.
)

// Define a struct for holding POST data key-value pairs.
type postData struct {
	key   string
	value string
}

// Define a slice of tests. Each test includes the name of the test, the URL to test,
// the HTTP method (GET or POST), parameters to send with the request, and the expected status code.
var theTests = []struct {
	name   string
	url    string
	method string
	// params             []postData
	expactedStatusCode int
}{
	// List of endpoints to test with expected status codes.

	{"home", "/", "GET", http.StatusOK},
	{"about", "/about", "GET", http.StatusOK},
	{"contact", "/contact", "GET", http.StatusOK},
	{"eremite", "/eremite", "GET", http.StatusOK},
	{"couple", "/couple", "GET", http.StatusOK},
	{"family", "/family", "GET", http.StatusOK},
	{"reservation", "/reservation", "GET", http.StatusOK},
	// {"make-reservation", "/make-reservation", "GET", []postData{}, http.StatusOK},
	// // {"reservation-overview", "/reservation-overview", "GET", []postData{}, http.StatusOK},
	// {"not-existing-route", "/blablabla", "GET", []postData{}, http.StatusNotFound},

	// {"reservation", "/reservation", "POST", []postData{
	// 	{key: "startingDate", value: "2020-01-01"},
	// 	{key: "endingDate", value: "2020-01-02"},
	// }, http.StatusOK},

	// {"reservation-json", "/reservation-json", "POST", []postData{
	// 	{key: "start", value: "2020-01-01"},
	// 	{key: "end", value: "2020-01-02"},
	// }, http.StatusOK},

	// {"make-reservation", "/make-reservation", "POST", []postData{
	// 	{key: "full_name", value: "Chris Farrugia"},
	// 	{key: "email", value: "chris@yahoo.com"},
	// 	{key: "phone", value: "79461346"},
	// }, http.StatusOK},

}

// TestHandlers runs a series of tests defined in theTests slice.
func TestHandlers(t *testing.T) {
	// Initialize the routes and create a test server.
	// This server simulates your application's behavior.
	routes := getRoutes()
	testServer := httptest.NewTLSServer(routes)
	defer testServer.Close()

	// Loop through each test case.
	for _, e := range theTests {
		if e.method == "GET" {
			// For GET requests, simply send a request to the specified URL.
			resp, err := testServer.Client().Get(testServer.URL + e.url)

			// Check for errors in making the request.
			if err != nil {
				t.Log(e.name, " -> ", err)
				t.Fatal(err)
			}

			// Verify if the response status code matches the expected status code.
			if resp.StatusCode != e.expactedStatusCode {
				t.Errorf("for %s, expected %d but got %d\n", e.name, e.expactedStatusCode, resp.StatusCode)
			}
			fmt.Println("> ", e.name, e.expactedStatusCode, resp.StatusCode)

		} else {
			// Test Post POST requests has been remove from here,
		}
	}
}

// TestRepository_MakeReservationHandler specifically tests the MakeReservationHandler function.
func TestRepository_MakeReservationHandler(t *testing.T) {
	// Create a reservation model with test data.
	startDate, _ := time.Parse("2006-01-02", "2024-02-01")
	endDate, _ := time.Parse("2006-01-02", "2024-02-04")

	reservation := models.Reservation{
		RoomID:    1,
		StartDate: startDate,
		EndDate:   endDate,
		Room: models.Room{
			ID:       1,
			RoomName: "test_rooom",
		},
	}

	// Create a new GET request to the make-reservation route.
	req, _ := http.NewRequest("GET", "/make-reservation", nil)
	// Add context to the request, including session data if needed.
	ctx := getCtx(req)
	req = req.WithContext(ctx)

	// Record the response using httptest.
	responsRecorder := httptest.NewRecorder()

	// 'session' and 'Repo' are previously defined in stup_test.go and handles.go.
	// This places the reservation model into the session.
	session.Put(ctx, "reservation", reservation)

	// Execute the handler function with the request and recorder.
	handler := http.HandlerFunc(Repo.MakeReservationHandler)
	handler.ServeHTTP(responsRecorder, req)

	// Check if the response code is what we expect (OK status).
	if responsRecorder.Code != http.StatusOK {
		t.Errorf("MakeReservationHandler handler return wrong response code: got %d, wanted %d", responsRecorder.Code, http.StatusOK)
	}

	// Test case where reservation is not in session (reset everthing)

	req, _ = http.NewRequest("GET", "/make-reservation", nil) // Create a new GET request for the "/make-reservation" route.
	ctx = getCtx(req)                                         // Retrieve a context that potentially has session data loaded, without adding the reservation model this time.
	req = req.WithContext(ctx)                                // Attach the context back to the request. Since we didn't add the reservation, it simulates a scenario where the user hasn't selected a room.
	responsRecorder = httptest.NewRecorder()                  // Create a new recorder to capture the handler's response.
	handler.ServeHTTP(responsRecorder, req)                   // Serve the request through the handler, simulating an incoming request.
	if responsRecorder.Code != http.StatusTemporaryRedirect {
		// Check if the response code is a temporary redirect. This condition is expected if the user tries to access
		// the reservation page without selecting a room, hence they should be redirected.
		t.Errorf("MakeReservationHandler handler return wrong response code: got %d, wanted %d", responsRecorder.Code, http.StatusTemporaryRedirect)
	}

	// Testing with non-existent room
	req, _ = http.NewRequest("GET", "/make-reservation", nil) // Again, create a new GET request for the same route.
	ctx = getCtx(req)                                         // Retrieve a fresh context for this new request.
	req = req.WithContext(ctx)                                // Attach this context to the request.
	responsRecorder = httptest.NewRecorder()                  // Create another new recorder for capturing this attempt's response.
	reservation.RoomID = 0                                    // Modify the reservation model to use an invalid room ID (0 here implies a non-existent room).
	session.Put(ctx, "reservation", reservation)              // Place the modified reservation into the session, simulating a user selection of a non-existent room.
	handler.ServeHTTP(responsRecorder, req)                   // Serve the request, expecting the application logic to redirect due to the invalid room selection.
	if responsRecorder.Code != http.StatusTemporaryRedirect {
		// The application should redirect the user when a non-existent room is selected, indicated by checking the response code for a temporary redirect.
		t.Errorf("MakeReservationHandler handler return wrong response code: got %d, wanted %d", responsRecorder.Code, http.StatusTemporaryRedirect)
	}

}

// getCtx simulates loading a session into the request context, which is necessary for handlers that use session data.
func getCtx(req *http.Request) context.Context {
	ctx, err := session.Load(req.Context(), req.Header.Get("X-Session"))
	if err != nil {
		log.Panicln(err)
	}
	return ctx
}

func TestRepository_PostMakeReservation(t *testing.T) {

	// testing that everything is ok
	reqBody := "start_date=2050-01-01"
	reqBody = fmt.Sprintf("%s&%s", reqBody, "end_date=2025-01-02")
	reqBody = fmt.Sprintf("%s&%s", reqBody, "full_name=John_Smith")
	reqBody = fmt.Sprintf("%s&%s", reqBody, "email=john@smith.com")
	reqBody = fmt.Sprintf("%s&%s", reqBody, "phone=123456789")
	reqBody = fmt.Sprintf("%s&%s", reqBody, "room_id=3")

	req, _ := http.NewRequest("POST", "/make-reservation", strings.NewReader(reqBody))
	ctx := getCtx(req)
	req = req.WithContext(ctx)

	// this is telling the web server that this is a form post
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	rr := httptest.NewRecorder()

	handler := http.HandlerFunc(Repo.PostMakeReservation)
	handler.ServeHTTP(rr, req)

	if rr.Code != http.StatusSeeOther {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d", rr.Code, http.StatusSeeOther)
	}

	// testing "can't parse form"
	req, _ = http.NewRequest("POST", "/make-reservation", nil)
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostMakeReservation)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code for missing post body: got %d, wanted %d", rr.Code, http.StatusTemporaryRedirect)
	}

	// testing "form validation failed"
	reqBody = "start_date=2050-01-01&end_date=2025-01-02&full_name=J&email=john@smith.com&phone=123456789&room_id=2"
	req, _ = http.NewRequest("POST", "/make-reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostMakeReservation)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusSeeOther {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d", rr.Code, http.StatusSeeOther)
	}

	// testing "form validation failed"
	reqBody = "start_date=2050-01-01&end_date=2025-01-02&full_name=Jaa&email=john@smith.com&phone=123456789&room_id=600"
	req, _ = http.NewRequest("POST", "/make-reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostMakeReservation)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (333)", rr.Code, http.StatusTemporaryRedirect)
	}

	// testing "form validation failed"
	reqBody = "start_date=2050-01-01&end_date=2025-01-02&full_name=Jaa&email=john@smith.com&phone=123456789&room_id=700"
	req, _ = http.NewRequest("POST", "/make-reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostMakeReservation)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (444)", rr.Code, http.StatusTemporaryRedirect)
	}
}

func TestRepository_ReservationHandlerJSON(t *testing.T) {

	// Test - if from can not be Parsed correct
	req, _ := http.NewRequest("POST", "/reservation-json", nil)
	ctx := getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	rr := httptest.NewRecorder()

	handler := http.HandlerFunc(Repo.ReservationHandlerJSON)
	handler.ServeHTTP(rr, req)

	var jResp jsonResponse
	err := json.Unmarshal(rr.Body.Bytes(), &jResp)
	if err != nil {
		t.Fatalf("could not parse json: %v", err)
	}

	if jResp.Ok != false { // Adjust this condition based on what you expect
		t.Errorf("expected 'ok' to be %v, got %v", false, jResp.Ok)
	}

	// -----------------------------------------------------------------
	// Testing for database connect

	reqBody := "start_date=2050-01-01"
	reqBody = fmt.Sprintf("%s&%s", reqBody, "end_date=2025-01-02")
	reqBody = fmt.Sprintf("%s&%s", reqBody, "room_id=800")

	req, _ = http.NewRequest("POST", "/reservation-json", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	rr = httptest.NewRecorder()

	handler = http.HandlerFunc(Repo.ReservationHandlerJSON)
	handler.ServeHTTP(rr, req)

	err = json.Unmarshal(rr.Body.Bytes(), &jResp)
	if err != nil {
		t.Fatalf("could not parse json: %v", err)
	}

	// Test the value of 'ok'
	if jResp.Ok != false { // Adjust this condition based on what you expect
		t.Errorf("expected 'ok' to be %v, got %v", false, jResp.Ok)
	}

	// -----------------------------------------------------------------

	reqBody = "start_date=2025-01-01"
	reqBody = fmt.Sprintf("%s&%s", reqBody, "end_date=2025-01-02")
	reqBody = fmt.Sprintf("%s&%s", reqBody, "room_id=900")

	req, _ = http.NewRequest("POST", "/reservation-json", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	rr = httptest.NewRecorder()

	handler = http.HandlerFunc(Repo.ReservationHandlerJSON)
	handler.ServeHTTP(rr, req)

	err = json.Unmarshal(rr.Body.Bytes(), &jResp)
	if err != nil {
		t.Fatalf("could not parse json: %v", err)
	}

	// Test the value of 'ok'
	if jResp.Ok == false { // Adjust this condition based on what you expect
		t.Errorf("expected 'ok' to be %v, got %v", false, jResp.Ok)
	}
}

func TestRepository_PostReservationHandler(t *testing.T) {

	// testing for no form
	req, _ := http.NewRequest("POST", "/reservation", nil)
	ctx := getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Repo.PostReservationHandler)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (testing for no form)", rr.Code, http.StatusTemporaryRedirect)
	}
	// testing for no start date
	reqBody := "endingDate=2025-01-02"
	req, _ = http.NewRequest("POST", "/reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostReservationHandler)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (testing for no start date)", rr.Code, http.StatusTemporaryRedirect)
	}

	// testing for no end date
	reqBody = "startingDate=2025-01-02"
	req, _ = http.NewRequest("POST", "/reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostReservationHandler)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (testing for no end date)", rr.Code, http.StatusTemporaryRedirect)
	}

	// test for fail to search availability by dates for all rooms
	reqBody = "startingDate=2030-12-12&endingDate=2030-12-21"
	req, _ = http.NewRequest("POST", "/reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostReservationHandler)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusTemporaryRedirect {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (fail to search availability by dates for all rooms)",
			rr.Code, http.StatusTemporaryRedirect)
	}

	// test for no romms available
	reqBody = "startingDate=2030-12-13&endingDate=2030-12-21"
	req, _ = http.NewRequest("POST", "/reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostReservationHandler)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusSeeOther {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (no romms available)",
			rr.Code, http.StatusSeeOther)
	}

	// test for everything
	reqBody = "startingDate=2025-12-13&endingDate=2025-12-21"
	req, _ = http.NewRequest("POST", "/reservation", strings.NewReader(reqBody))
	ctx = getCtx(req)
	req = req.WithContext(ctx)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	rr = httptest.NewRecorder()
	handler = http.HandlerFunc(Repo.PostReservationHandler)
	handler.ServeHTTP(rr, req)
	if rr.Code != http.StatusOK {
		t.Errorf("PostReservationHandler handler return wrong response code: got %d, wanted %d (everything ok)",
			rr.Code, http.StatusOK)
	}

}
