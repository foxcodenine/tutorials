package handlers

import (
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"myapp/data"
	"net/http"
	"time"

	"github.com/CloudyKit/jet/v6"
	"github.com/foxcodenine/celeritas/mailer"
	"github.com/foxcodenine/celeritas/urlsigner"
)

// UserLogin renders the login page.
func (h *Handlers) UserLogin(w http.ResponseWriter, r *http.Request) {
	err := h.App.Render.Page(w, r, "login", nil, nil)
	if err != nil {
		h.App.ErrorLog.Println(err)
	}
}

// PostUserLogin handles login form submission.
func (h *Handlers) PostUserLogin(w http.ResponseWriter, r *http.Request) {

	// Parse the form values from the request.
	err := r.ParseForm()
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	// Retrieve email and password from the form.
	email := r.Form.Get("email")
	password := r.Form.Get("password")

	// Fetch the user by email.
	user, err := h.Models.Users.GetByEmail(email)
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	// Check if the provided password matches the stored password hash.
	matches, err := user.PasswordMatches(password)
	if err != nil {
		w.Write([]byte("Error validating password"))
		return
	}

	// If the password doesn't match, return an error.
	if !matches {
		w.Write([]byte("Invalid password"))
		return
	}

	// If the "remember me" option is selected, create and store a remember token.
	if r.Form.Get("remember") == "remember" {
		randomString := h.randomString(12) // Generate a random string.
		hasher := sha256.New()
		_, err := hasher.Write([]byte(randomString)) // Hash the random string.
		if err != nil {
			h.App.ErrorStatus(w, http.StatusBadRequest)
			return
		}

		// Encode the hash to a base64 string.
		sha := base64.URLEncoding.EncodeToString(hasher.Sum(nil))
		rm := data.RememberToken{}
		// Insert the remember token into the database.
		err = rm.InsertToken(user.ID, sha)
		if err != nil {
			h.App.ErrorStatus(w, http.StatusBadRequest)
			return
		}

		// Create a cookie for the remember token.
		expire := time.Now().Add(365 * 24 * 60 * 60 * time.Second)
		cookie := http.Cookie{
			Name:     fmt.Sprintf("_%s_remember", h.App.AppName), // Cookie name based on app name.
			Value:    fmt.Sprintf("%d|%s", user.ID, sha),         // User ID and hash as the cookie value.
			Path:     "/",
			Expires:  expire, // Cookie expires in one year.
			HttpOnly: true,
			Domain:   h.App.Session.Cookie.Domain,
			MaxAge:   315350000,
			Secure:   h.App.Session.Cookie.Secure,
			SameSite: http.SameSiteStrictMode,
		}
		http.SetCookie(w, &cookie)

		// Save the hash in the session for validation.
		h.App.Session.Put(r.Context(), "remember_token", sha)
	}

	// Store the user ID in the session and redirect to the home page.
	h.App.Session.Put(r.Context(), "userID", user.ID)
	http.Redirect(w, r, "/", http.StatusSeeOther)
}

// Logout logs the user out, removes session data and clears the remember token.
func (h *Handlers) Logout(w http.ResponseWriter, r *http.Request) {
	// Delete the remember token from the database if it exists.
	if h.App.Session.Exists(r.Context(), "remember_token") {
		rt := data.RememberToken{}
		_ = rt.Delete(h.App.Session.GetString(r.Context(), "remember_token"))
	}

	// Delete the remember token cookie by setting it with an expired date.
	newCookie := http.Cookie{
		Name:     fmt.Sprintf("_%s_remember", h.App.AppName),
		Value:    "", // Empty the cookie value.
		Path:     "/",
		Expires:  time.Now().Add(-100 * time.Hour), // Expire the cookie in the past.
		HttpOnly: true,
		Domain:   h.App.Session.Cookie.Domain,
		MaxAge:   -1, // MaxAge -1 indicates immediate removal.
		Secure:   h.App.Session.Cookie.Secure,
		SameSite: http.SameSiteStrictMode,
	}
	http.SetCookie(w, &newCookie)

	// Clear session data and renew the session token.
	h.App.Session.RenewToken(r.Context())
	h.App.Session.Remove(r.Context(), "userID")
	h.App.Session.Remove(r.Context(), "remember_token")
	h.App.Session.Destroy(r.Context())
	h.App.Session.RenewToken(r.Context())

	// Redirect to the login page after logout.
	http.Redirect(w, r, "/users/login", http.StatusSeeOther)
}

func (h *Handlers) Forgot(w http.ResponseWriter, r *http.Request) {
	err := h.render(w, r, "forgot", nil, nil)
	if err != nil {
		h.App.ErrorLog.Println("Error rendering: ", err)
		h.App.Error500(w, r)
	}
}

func (h *Handlers) PostForgot(w http.ResponseWriter, r *http.Request) {
	// parse form
	err := r.ParseForm()
	if err != nil {
		h.App.ErrorStatus(w, http.StatusBadRequest)
		return
	}

	// verify that supplied email exists
	var u *data.User
	email := r.Form.Get("email")
	u, err = u.GetByEmail(email)
	if err != nil {
		h.App.ErrorStatus(w, http.StatusBadRequest)
		return
	}

	// create a link to password reset form
	link := fmt.Sprintf("%s/users/reset-password?email=%s", h.App.Server.URL, email)

	// sign the link
	sign := urlsigner.Signer{
		Secret: []byte(h.App.EncryptionKey),
	}

	signedLink := sign.GenerateTokenFromString(link)
	h.App.InfoLog.Println("Signed link is", signedLink)

	// email the message
	var data struct {
		Link string
	}
	data.Link = signedLink

	msg := mailer.Message{
		To:       u.Email,
		Subject:  "Password reset",
		Template: "password-reset",
		Data:     data,
		From:     "chris12aug@gmail.com",
	}

	h.App.Mail.Jobs <- msg
	res := <-h.App.Mail.Results
	if res.Error != nil {
		h.App.ErrorStatus(w, http.StatusBadRequest)
		return
	}

	// redirect the user
	http.Redirect(w, r, "/users/login", http.StatusSeeOther)
}

func (h *Handlers) ResetPasswordForm(w http.ResponseWriter, r *http.Request) {
	// get from values

	email := r.URL.Query().Get("email")

	theURL := r.RequestURI

	testURL := fmt.Sprintf("%s%s", h.App.Server.URL, theURL)

	//  validate the url

	signer := urlsigner.Signer{
		Secret: []byte(h.App.EncryptionKey),
	}

	valid := signer.VerifyToken(testURL)

	if !valid {
		h.App.ErrorLog.Println("Invalid url")
		h.App.ErrorUnauthorized(w, r)
		return
	}

	// make sure it's not expired

	expired := signer.Expired(testURL, 60)

	if expired {
		h.App.ErrorLog.Println("Link expired")
		h.App.ErrorUnauthorized(w, r)
		return
	}

	// display form

	encryptedEmail, _ := h.encrypt(email)

	vars := make(jet.VarMap)
	vars.Set("email", encryptedEmail)

	err := h.render(w, r, "reset-password", vars, nil)
	if err != nil {
		return
	}
}

func (h *Handlers) PostResetPassword(w http.ResponseWriter, r *http.Request) {
	// parse the form
	err := r.ParseForm()
	if err != nil {
		h.App.Error500(w, r)
		return
	}

	// get and decrypt the email

	email, err := h.decrypt(r.Form.Get("email"))

	if err != nil {
		h.App.Error500(w, r)
		return
	}

	// get the user

	var u data.User
	user, err := u.GetByEmail(email)

	if err != nil {
		h.App.Error500(w, r)
		return
	}

	// reset the password

	err = user.ResetPassword(user.ID, r.Form.Get("password"))

	if err != nil {
		h.App.Error500(w, r)
		return
	}

	// redirect

	h.App.Session.Put(r.Context(), "flash", "Password reset. You can now log in.")
	http.Redirect(w, r, "/", http.StatusSeeOther)
}
