# pip install flask-mail

# https://www.tempmailaddress.com/window/id/2
# https://temp-mail.org/en/
# https://tempail.com/en/ 

# https://myaccount.google.com/lesssecureapps

# ______________________________________________________________________

from flask import Flask
from flask_mail import Mail, Message

app = Flask(__name__)

app.config.update(
    DEBUG = True,
    SECRET_KEY = 'ThisIsASecret',
    # TESTING = False,

    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 465,

    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True, 

    MAIL_DEBUG = True,
    MAIL_USERNAME = 'fourequus@gmail.com', 
    MAIL_PASSWORD = 'ayanami4',
    MAIL_DEFAULT_SENDER = ('Chris from flask-mail','fourequus@gmail.com'),
    # MAIL_MAX_EMAILS = None,
    # MAIL_SUPPRESS_SEND = False,
    # MAIL_ASCII_ATTACHMENTS = False
)

# ______________________________________________________________________

mail = Mail(app)

# or you can do: 
# mail = Mail() 
# mail.init_app(app)

# ______________________________________________________________________

@app.route('/')
def index():
    msg = Message('Hey There!', recipients=['jesas54648@xmail2.net','maycol.sylis@iiron.us'])
    # or you can:
    msg.add_recipient('kortitamle@enayu.com')

    # msg.body = 'This is a test message send from flask-mail you doen\'t need to reply'
    # or
    msg.html ='''<h1>Hey There!</h1><hr>
                 <p>This is a test message send from flask-mail, you doen't need to reply</p><hr>
                 <p>I like oranges do you like bananas?</p>'''
    mail.send(msg)

    return '<h3>Message has been send!</h3>'



@app.route('/bulk')
def bulk():
    users = [{'user':'Jessica', 'email':'jesas54648@xmail2.net'},
             {'user':'Cloy', 'email':'maycol.sylis@iiron.us'},
             {'user':'Kortana', 'email':'kortitamle@enayu.com'}]
    with mail.connect() as conn:
        for user in users:
            msg = Message('Bulk!', recipients=[user['email']])
            msg.body = 'Hi {}, this is a bulk email!'.format(user['user'])
            conn.send(msg)
    return '<h4>Bulky Emails Send!</h4>'
            


if __name__ == '__main__':
    app.run()
