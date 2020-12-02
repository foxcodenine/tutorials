# https://www.youtube.com/watch?v=vF9n248M1yk&t=568s

# ______________________________________________________________________

from flask import Flask, jsonify, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS, cross_origin
import os

from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature
# ______________________________________________________________________

def create_app():
    app = Flask(__name__)

    if app.config['ENV'] == 'development':
        app.config.from_object('config.ConfigDev')
    else:
        app.config.from_object('config.ConfigPro')
    return app

app = create_app()
db = SQLAlchemy(app)


mail = Mail(app)
s = URLSafeTimedSerializer(app.config['SECRET_KEY'])

# ______________________________________________________________________

@app.route('/', methods=['POST', 'GET'])
def index():

    if request.method == 'GET':
        return  '''
                <form action="/" method="POST">
                    <input name="email">
                    <input type="submit">
                </form>
               '''
    email = request.form['email']
    token = s.dumps(email, salt='email-confirm')

    msg = Message('Confirm Email', sender=(app.config['MAIL_DEFAULT_SENDER'], app.config['MAIL_USERNAME']) , recipients=[email])     

    link = url_for('confirm_email', token=token, _external=True) 

    msg.html = render_template('index.html', name='Chris', link=link)

    mail.send(msg) 
    
    return f'<h3>The email you entered is {email}. The Token is {token}</h3>'
    
# ___________________________________

@app.route('/confirm_email/<token>')
def confirm_email(token):
    
    try:
        email = s.loads(token, salt='email-confirm', max_age=60)
        return f'The token works!, {email}'
    except SignatureExpired :
        return f'<h3>This confirmation link has expired!</h3>'
    except BadTimeSignature:
        return f'<h3>This confirmation link is invalid!</h3>'


# ______________________________________________________________________


    

@app.route('/test')
def test():
    return render_template('index.html', name='Chris')
