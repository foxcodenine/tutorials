# pip install flask-mail

# https://www.tempmailaddress.com/window/id/2
# https://temp-mail.org/en/
# https://tempail.com/en/ 

# https://myaccount.google.com/lesssecureapps

# ______________________________________________________________________

from flask import Flask
from flask_mail import Mail, Message, Attachment

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
    MAIL_PASSWORD = 'a4',
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
    msg = Message('Hey There!', recipients=['rixova3353@4xmail.net','zyann.faelyn@iiron.us'])
    # or you can:
    msg.add_recipient('tepsevirte@enayu.com')

    # msg.body = 'This is a test message send from flask-mail you doen\'t need to reply'
    # or
    msg.html ='''<h1>Hey There!</h1><hr>
                 <p>This is a test message send from flask-mail, you doen't need to reply</p><hr>
                 <p>I like oranges do you like bananas?</p>'''
    mail.send(msg)

    return '<h3>Message has been send!</h3>'



@app.route('/attach')
def attach():
    msg = Message('Snakes', recipients=['chris12aug@yahoo.com'])
    msg.body = 'Attached kindly find my images\nKind regards\nFox'
    with app.open_resource('.\\images\\python.jpg') as att:
        msg.attach('python.jpg', 'image/jpg', att.read())
    mail.send(msg)

@app.route('/attachments')
def attachments():

    # atts_list = ['green.jpg', 'blue.jpg', 'black.jpg', 'yellow.jpg']

    a1 = app.open_resource('.\\images\\black.jpg')
    a2 = app.open_resource('.\\images\\blue.jpg')
    a3 = app.open_resource('.\\images\\green.jpg')
    att1 = Attachment(filename='black.jpg', content_type='image/jpg', data=a1.read(), disposition=None, headers=None)
    att2 = Attachment(filename='blue.jpg', content_type='image/jpg', data=a2.read(), disposition=None, headers=None)
    att3 = Attachment(filename='green.jpg', content_type='image/jpg', data=a3.read(), disposition=None, headers=None)
    msg = Message(
        subject = 'Snakes\'s attachments',
        recipients = ['chris12aug@yahoo.com'],
        # body = 'Kindly find attched the requested files.\nRegards\nChris',
        html='<h1>..nice snakes!\' images</h1><hr><p>This is a test email, if evreything is ok, you should find attach multiple snake images.</p>',
        # sender = ','
        cc = ['chrismariojimmy@yahoo.com'], 
        # bcc = [],
        attachments = [att1, att2, att3],
        # reply_to=[],
        # date='',
        # charset='',
        # extra_headers={'',''},
        # mail_options=[],
        # rcpt_options=[]
    )

    mail.send(msg)
    
    return '<p>email on the way!</p>'





@app.route('/bulk')
def bulk():
    users = [{'user':'Jessica', 'email':'rixova3353@4xmail.net'},
             {'user':'Cloy', 'email':'zyann.faelyn@iiron.us'},
             {'user':'Kortana', 'email':'tepsevirte@enayu.com'}]
    with mail.connect() as conn:
        for user in users:
            msg = Message('Bulk!', recipients=[user['email']])
            msg.body = 'Hi {}, this is a bulk email!'.format(user['user'])
            conn.send(msg)
    return '<h4>Bulky Emails Send!</h4>'
            

if __name__ == '__main__':
    app.run()
