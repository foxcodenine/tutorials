package mailer

import (
	"bytes"
	"fmt"
	"html/template"
	"os"
	"path/filepath"
	"time"

	apimail "github.com/ainsleyclark/go-mail"
	"github.com/vanng822/go-premailer/premailer"
	mail "github.com/xhit/go-simple-mail/v2"
)

// Mail struct configures settings and channels for sending emails.
type Mail struct {
	Domain      string       // Domain used for sending emails.
	Templates   string       // Directory where email templates are stored.
	Host        string       // SMTP server host.
	Port        int          // SMTP server port.
	Username    string       // SMTP username for authentication.
	Password    string       // SMTP password for authentication.
	Encryption  string       // Type of encryption (e.g., TLS).
	FromAddress string       // Default from email address.
	FromName    string       // Default sender name.
	Jobs        chan Message // Channel to receive email messages to be sent.
	Results     chan Result  // Channel to send results of email sending.
	API         string       // API service identifier if using an email API.
	APIKey      string       // API key for authenticating to the email API.
	APIUrl      string       // URL of the email API.
}

// Message struct defines the structure of an email message.
type Message struct {
	From        string
	FromName    string
	To          string      // Recipient email address.
	Subject     string      // Subject of the email.
	Template    string      // Template file to use for the email body.
	Attachments []string    // List of paths to files to be attached.
	Data        interface{} // Data to be passed into the template.
}

// Result struct holds the outcome of an email sending operation.
type Result struct {
	Success bool  // Indicates if the sending was successful.
	Error   error // Error encountered, if any.
}

// ---------------------------------------------------------------------

// ListenForMail continuously listens for messages to process and send.
func (m *Mail) ListenForMail() {
	for {
		msg := <-m.Jobs
		err := m.Send(msg)

		if err != nil {
			m.Results <- Result{false, err}
		} else {
			m.Results <- Result{true, nil}
		}
	}
}

// ---------------------------------------------------------------------

// Send processes the message and determines the method to send the email.
func (m *Mail) Send(msg Message) error {

	// If using an API and not SMTP, choose the API to send the email.
	if len(m.API) > 0 && len(m.APIKey) > 0 && len(m.APIUrl) > 0 && m.API != "smtp" {
		return m.ChooseAPI(msg)
	}

	// Default to sending via SMTP if no valid API is set.
	return m.SendSMTPMessage(msg)
}

// ---------------------------------------------------------------------

// ChooseAPI determines which API to use for sending the email.
func (m *Mail) ChooseAPI(msg Message) error {

	switch m.API {

	case "mailgun", "sparkpost", "sendgrid":
		return m.SendUsingAPI(msg, m.API) // Use the specified API to send the email.

	default:
		// Return an error if the API is not recognized.
		return fmt.Errorf("unknown api %s; only mailgun, sparkpost or sendgrid accepted", m.API)
	}
}

// ---------------------------------------------------------------------

// SendUsingAPI sends the email using the specified API (e.g., Mailgun, SparkPost, SendGrid).
func (m *Mail) SendUsingAPI(msg Message, transport string) error {
	// Set default From address and name if not provided.
	if msg.From == "" {
		msg.From = m.FromAddress
	}
	if msg.FromName == "" {
		msg.FromName = m.FromName
	}

	// Configure the API client.
	cfg := apimail.Config{
		URL:         m.APIUrl,
		APIKey:      m.APIKey,
		Domain:      m.Domain,
		FromAddress: msg.From,
		FromName:    msg.FromName,
	}

	// Create a new client for the specified API transport.
	driver, err := apimail.NewClient(transport, cfg)
	if err != nil {
		return err
	}

	// Build the HTML and plain text versions of the email.
	formattedMessage, err := m.buildHTMLMessage(msg)
	if err != nil {
		return err
	}
	plainMessage, err := m.buildPlainTextMessage(msg)
	if err != nil {
		return err
	}

	// Prepare the transmission with recipients and content.
	tx := &apimail.Transmission{
		Recipients: []string{msg.To},
		Subject:    msg.Subject,
		HTML:       formattedMessage,
		PlainText:  plainMessage,
	}

	// Add any attachments to the transmission.
	err = m.addAPIAttachments(msg, tx)
	if err != nil {
		return err
	}

	// Send the email through the API client.
	_, err = driver.Send(tx)
	if err != nil {
		return err
	}

	return nil
}

// ---------------------------------------------------------------------

// addAPIAttachments adds attachments to the email transmission for the API.

func (m *Mail) addAPIAttachments(msg Message, tx *apimail.Transmission) error {
	if len(msg.Attachments) > 0 {
		var attachments []apimail.Attachment

		// Loop through each attachment and read its content.
		for _, x := range msg.Attachments {
			var attach apimail.Attachment
			content, err := os.ReadFile(x) // Read the file content.
			if err != nil {
				return err
			}

			// Set the attachment details.
			fileName := filepath.Base(x)
			attach.Bytes = content
			attach.Filename = fileName
			attachments = append(attachments, attach)
		}

		// Add the attachments to the transmission.
		tx.Attachments = attachments
	}

	return nil
}

// ---------------------------------------------------------------------

// SendSMTPMessage sends an email message via SMTP.
func (m *Mail) SendSMTPMessage(msg Message) error {
	// Build the HTML content of the email from the specified template.
	formattedMessage, err := m.buildHTMLMessage(msg)
	if err != nil {
		return err // Return error if building the HTML message fails.
	}

	// Build the plain text content of the email from the specified template.
	plainMessage, err := m.buildPlainTextMessage(msg)
	if err != nil {
		return err // Return error if building the plain text message fails.
	}

	// Configure the SMTP server settings.
	server := mail.NewSMTPClient()
	server.Host = m.Host
	server.Port = m.Port
	server.Username = m.Username
	server.Password = m.Password
	server.Encryption = m.getEncryption(m.Encryption) // Convert encryption type from string to mail.Encryption type.
	server.KeepAlive = false                          // Do not keep the connection alive after sending the email.
	server.ConnectTimeout = 10 * time.Second          // Timeout for connecting to the SMTP server.
	server.SendTimeout = 10 * time.Second             // Timeout for sending the email.

	// Connect to the SMTP server.
	smtpClient, err := server.Connect()
	if err != nil {
		return err // Return error if the connection to the SMTP server fails.
	}

	// Create a new email message.
	email := mail.NewMSG()
	email.SetFrom(msg.From).
		AddTo(msg.To).
		SetSubject(msg.Subject)

	// Set the HTML body of the email.
	email.SetBody(mail.TextHTML, formattedMessage)
	// Set the plain text alternative for email clients that do not support HTML.
	email.AddAlternative(mail.TextPlain, plainMessage)

	// Attach files to the email if any attachments are provided.
	if len(msg.Attachments) > 0 {
		for _, x := range msg.Attachments {
			email.AddAttachment(x) // Add each attachment to the email.
		}
	}

	// Send the email through the SMTP client.
	err = email.Send(smtpClient)
	if err != nil {
		return err // Return error if sending the email fails.
	}

	return nil // Return nil if the email is sent successfully.
}

// ---------------------------------------------------------------------

// buildHTMLMessage constructs the HTML part of the email from a template.
func (m *Mail) buildHTMLMessage(msg Message) (string, error) {

	// Construct the full path to the HTML template based on the provided template name.
	templateToRender := fmt.Sprintf("%s/%s.html.tmpl", m.Templates, msg.Template)

	// Load and parse the HTML template file.
	t, err := template.New("email-html").ParseFiles(templateToRender)
	if err != nil {
		return "", err // Return error if the template cannot be loaded or parsed.
	}

	// Execute the template with the provided data to generate the HTML content.
	var tpl bytes.Buffer
	err = t.ExecuteTemplate(&tpl, "body", msg.Data)
	if err != nil {
		return "", err
	}

	// Convert the generated HTML to a string.
	formattedMessage := tpl.String()

	// Inline CSS into the HTML to ensure proper styling in email clients.
	formattedMessage, err = m.inlineCSS(formattedMessage)
	if err != nil {
		return "", err // Return an error if CSS inlining fails.
	}

	// Return the final HTML content with inlined CSS.
	return formattedMessage, nil
}

// ---------------------------------------------------------------------

// buildPlainTextMessage constructs the plain text part of the email from a template.
func (m *Mail) buildPlainTextMessage(msg Message) (string, error) {

	// Construct the full path to the plain text template based on the provided template name.
	templateToRender := fmt.Sprintf("%s/%s.plain.tmpl", m.Templates, msg.Template)

	// Load and parse the plain text template file.
	t, err := template.New("email-html").ParseFiles(templateToRender)
	if err != nil {
		return "", err
	}

	// Execute the template with the provided data to generate the plain text content.
	var tpl bytes.Buffer
	err = t.ExecuteTemplate(&tpl, "body", msg.Data)
	if err != nil {
		return "", err
	}

	// Convert the generated plain text to a string.
	plainMessage := tpl.String()

	// Return the final plain text content.
	return plainMessage, nil
}

// ---------------------------------------------------------------------

func (m *Mail) getEncryption(str string) mail.Encryption {
	switch str {
	case "tls":
		return mail.EncryptionSTARTTLS

	case "ssl":
		return mail.EncryptionSSL

	case "none":
		return mail.EncryptionNone

	default:
		return mail.EncryptionSTARTTLS
	}
}

// ---------------------------------------------------------------------

// inlineCSS takes HTML input as a string, and inlines CSS where possible.
// This is useful for ensuring that styles are properly applied when emails are viewed in different email clients.
func (m *Mail) inlineCSS(s string) (string, error) {

	options := premailer.Options{
		RemoveClasses:     false, // Retain CSS classes in the HTML (do not remove them).
		CssToAttributes:   false, // Do not convert CSS styles into HTML attributes.
		KeepBangImportant: true,  // Preserve the '!important' declaration in CSS.
	}

	// Create a new Premailer instance using the provided HTML string and options.
	prem, err := premailer.NewPremailerFromString(s, &options)
	if err != nil {
		return "", err // Return an error if creating the Premailer instance fails.
	}

	// Transform the HTML by inlining the CSS.
	html, err := prem.Transform()
	if err != nil {
		return "", err // Return an error if the transformation fails.
	}

	// Return the transformed HTML with inlined CSS.
	return html, nil
}
