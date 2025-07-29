package main

import (
	"bytes"
	"fmt"
	"sync"
	"text/template"
	"time"

	"github.com/vanng822/go-premailer/premailer"
	mail "github.com/xhit/go-simple-mail/v2"
)

// Mail holds SMTP server settings and worker channels for sending mail.
type Mail struct {
	Domain      string
	Host        string
	Port        int
	Username    string
	Password    string
	Encryption  string
	FromAddress string
	FromName    string
	Wait        *sync.WaitGroup
	MailerChan  chan Message
	ErrorChan   chan error
	DoneChan    chan bool
}

// Message holds the information needed to send an email.
type Message struct {
	From        string
	FromName    string
	To          string
	Subject     string
	Attachments []string
	Data        any
	DataMap     map[string]any
	Template    string
}

// sendMail sends an email using SMTP with the provided message.
// If errors occur, they are sent to errorChan.
func (m *Mail) sendMail(msg Message, errorChan chan error) {
	// Set default template, sender address, and name if not provided
	if msg.Template == "" {
		msg.Template = "mail"
	}
	if msg.From == "" {
		msg.From = m.FromAddress
	}
	if msg.FromName == "" {
		msg.FromName = m.FromName
	}

	// Prepare template data map
	data := map[string]any{
		"message": msg.Data,
	}
	msg.DataMap = data

	// Build HTML and plain text message bodies
	formattedMessage, err := m.buildHTMLMessage(msg)
	if err != nil {
		errorChan <- err
	}
	plainMessage, err := m.buildPlainTextMessage(msg)
	if err != nil {
		errorChan <- err
	}

	// Configure SMTP client
	server := mail.NewSMTPClient()
	server.Host = m.Host
	server.Port = m.Port
	server.Username = m.Username
	server.Password = m.Password
	server.Encryption = m.getEncryption(m.Encryption)
	server.KeepAlive = false
	server.ConnectTimeout = 10 * time.Second
	server.SendTimeout = 10 * time.Second

	// Connect to SMTP server
	smtpClient, err := server.Connect()
	if err != nil {
		errorChan <- err
	}

	// Build the email message
	email := mail.NewMSG()
	email.SetFrom(msg.From).AddTo(msg.To).SetSubject(msg.Subject)
	email.SetBody(mail.TextPlain, plainMessage)
	email.AddAlternative(mail.TextHTML, formattedMessage)

	// Add attachments if provided
	if len(msg.Attachments) > 0 {
		for _, att := range msg.Attachments {
			email.AddAttachment(att)
		}
	}

	// Send the email
	err = email.Send(smtpClient)
	if err != nil {
		errorChan <- err
	}
}

// buildHTMLMessage renders the HTML body for an email from a Go template,
// then inlines CSS styles using premailer.
func (m *Mail) buildHTMLMessage(msg Message) (string, error) {
	// Build the path to the HTML template file based on msg.Template
	templateToRender := fmt.Sprintf("./cmd/web/templates/%s.html.gohtml", msg.Template)

	// Parse the template file for the HTML email
	t, err := template.New("email-html").ParseFiles(templateToRender)
	if err != nil {
		return "", err
	}

	// Render the template with provided data into a buffer
	var tpl bytes.Buffer
	err = t.ExecuteTemplate(&tpl, "body", msg.DataMap)
	if err != nil {
		return "", err
	}

	// Inline CSS using premailer for better email client compatibility
	formatterdMessage := tpl.String()
	formatterdMessage, err = m.inlineCSS(formatterdMessage)
	if err != nil {
		return "", err
	}

	return formatterdMessage, nil
}

// buildPlainTextMessage renders the plain text body for an email from a Go template.
func (m *Mail) buildPlainTextMessage(msg Message) (string, error) {
	// Build the path to the plain text template file based on msg.Template
	templateToRender := fmt.Sprintf("./cmd/web/templates/%s.plain.gohtml", msg.Template)

	// Parse the template file for the plain text email
	t, err := template.New("email-plain").ParseFiles(templateToRender)
	if err != nil {
		return "", err
	}

	// Render the template with provided data into a buffer
	var tpl bytes.Buffer
	err = t.ExecuteTemplate(&tpl, "body", msg.DataMap)
	if err != nil {
		return "", err
	}

	// Return the rendered plain text message
	plainMessage := tpl.String()
	return plainMessage, nil
}

// inlineCSS inlines all CSS styles in the HTML string using premailer,
// improving compatibility with email clients.
func (m *Mail) inlineCSS(s string) (string, error) {
	options := premailer.Options{
		RemoveClasses:     false,
		CssToAttributes:   false,
		KeepBangImportant: true,
	}

	// Create a new Premailer instance from the HTML string
	prem, err := premailer.NewPremailerFromString(s, &options)
	if err != nil {
		return "", err
	}

	// Transform the HTML to inline styles
	html, err := prem.Transform()
	if err != nil {
		return "", err
	}

	return html, nil
}

// getEncryption maps string encryption names to the mail library's Encryption type.
func (m *Mail) getEncryption(e string) mail.Encryption {
	switch e {
	case "tls":
		return mail.EncryptionSTARTTLS
	case "ssl":
		return mail.EncryptionSSLTLS
	case "none":
		return mail.EncryptionNone
	default:
		return mail.EncryptionSTARTTLS
	}
}
