




from flask import Flask, request, render_template, redirect, url_for
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired

app = Flask(__name__)


app.config['DEBUG']= True
app.config['SECRET_KEY'] = 'ThisIsASecret'

app.config.from_pyfile('config.cfg') 


mail = Mail(app)

serializer = URLSafeTimedSerializer(app.secret_key)

# ______________________________________________________________________


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'GET':
        return render_template('index.html')

    email = request.form['email']
    token = serializer.dumps(email, salt='email-confirm')
    # salt is use to separate( make different) token that use the same input values
    
    msg = Message(
        subject='Confirm Email', sender='fourequus@gmail.com', recipients=[email]
    )

    link = url_for('confirm_email', token=token, _external=True )

    msg.body = 'Your link is {}'.format(link)
    mail.send(msg)


    return 'The email you entered is {}. \
        <br>The token is {}'.format(email, token)

# _______________


@app.route('/confirm_email/<token>')
def confirm_email(token):
    try:
        email = serializer.loads(token, salt='email-confirm', max_age=120)
        return 'The token works!'
    except SignatureExpired:
        return '<h4>Session has expired. You need to sign-in!</h4>'
        # This is were the database is update, setting the email as confermed. 





# ______________________________________________________________________



if __name__ == '__main__':
    app.run()