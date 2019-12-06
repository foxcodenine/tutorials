# pip install flask-login

# https://flask-login.readthedocs.io/en/latest/
# https://flask.palletsprojects.com/en/1.1.x/patterns/flashing/

# https://realpython.com/using-flask-login-for-user-management-with-flask/

# Alternative-tokens
# https://flask-login.readthedocs.io/en/latest/#alternative-tokens
# ______________________________________________________________________

from flask import Flask, url_for, redirect, render_template, request, session

from flask_login import LoginManager, UserMixin,login_user ,login_required 
from flask_login import current_user, logout_user, fresh_login_required

from flask_sqlalchemy import SQLAlchemy
from urllib.parse import urlparse, urljoin
from datetime import timedelta

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, IntegerField, BooleanField, ValidationError
from wtforms.validators import Length, InputRequired, Email
from myfunctions import pass_val

from itsdangerous import URLSafeSerializer

from werkzeug.security import generate_password_hash, check_password_hash

from sqlalchemy.exc import IntegrityError

# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'ThisIsASecret!'
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com:3306/oOp9iEOuPn'
# app.config['USE_SESSION_FOR_NEXT'] = True    # <- this current doesn't work
app.config['REMEMBER_COOKIE_DURATION'] = timedelta(seconds=20)


login_manager = LoginManager(app)

login_manager.login_view = 'login'
login_manager.login_message = 'You need to login first!'

login_manager.refresh_view = 'login'
login_manager.needs_refresh_message = 'You need to login again!!'

db = SQLAlchemy(app)

serializer = URLSafeSerializer(app.secret_key)
# ______________________________________________________________________

# function to check url validation, check also the _test.py and _urllib.py files:
def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))

    return test_url.scheme in ('http', 'https') and ref_url.netloc == test_url.netloc and target is not None

# ______________________________________________________________________


class Users(UserMixin, db.Model): 
    ''' This class is used to create the table in the database '''
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(255))
    email = db.Column(db.String(100), unique=True)
    session_token = db.Column(db.String(255), unique=True)

    def get_id(self):
        return str(self.session_token)


def create_users(un, pw, em):
    new_user = Users(username=un, password=pw, email=em, session_token=serializer.dumps([un, pw, em]))
    db.session.add(new_user)
    db.session.commit()




class LoginForm(FlaskForm):
    ''' This class is used to create Flask-WTF Form '''
    username = StringField('Username', validators=[InputRequired(message='A Username Is Required!'), Length(min=4, max=30)])
    email = StringField('Email', validators=[InputRequired(), Email()], default='test@test.com')
    password = PasswordField('Password', validators=[InputRequired(), Length(min=4, message='Password must be <= 4 ')])
    
    def validate_password(self, field):
        if pass_val(field.data) == False:
            raise ValidationError('Password must contain at least one uppercase, one lowercase and one number digit!')

# ______________________________________________________________________
#  Creating user and table:

# db.create_all() 

# chris = Users(username='chrismariojimmy')
# db.session.add(chris)
# db.session.commit()
# ______________________________________________________________________

# This decorator is spessifying that the following function is used by
# flask_login to connect to an actual user

@login_manager.user_loader
def load_user(session_token):
    return Users.query.filter_by(session_token=session_token).first()
    # return Users.query.filter_by(id=int(user_id)) <- you can use this instaed of above
# ______________________________________________________________________

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    form = LoginForm()

    try:
        if form.validate_on_submit(): # <-- this will validate only if 'POST' is send
            un = form.username.data
            pw = generate_password_hash(form.password.data, method='sha256')
            em = form.email.data

            create_users(pw=pw, un=un, em=em)

            
            return f'<h2>The form has been submited</h2>\
                    <h4>username: {un}</h4>\
                    <h4>password: {pw}</h4><h4>email: {em}</h4>'
    except IntegrityError:
        return '<h4>Username / Email  already taken!</h4>'

    return render_template('signup.html', form=form)



# ______________________

@app.route('/login', methods=['POST', 'GET'])
def login():
    #-------testing code----------#
    if 'next' in session:
        next = session['next']
    
        ref_url = urlparse(request.host_url)
        test_url = urlparse(urljoin(request.host_url, next))
        print('>>>>> next =',next)
        print('>>>>>',ref_url.netloc)
        print('>>>>>',test_url.netloc)
    #-------end testing code----------#

    if request.method == 'POST':
        username = request.form['username']
        user = Users.query.filter_by(username=username).first() 

        if not user:
            return '<h1>Invalid user!</h1>'

        login_user(user, remember=True)
        
        if 'next' in session:
            next = session['next']
            
            if is_safe_url(next):
                return redirect(next)

        return '<h1>Logged In Successfully!!</h1>'

    session['next'] = request.args.get('next')
    return render_template('login.html')

# ______________________

@app.route('/home')
@login_required
def home():
    return '<h1>Hi {}! <br>You are in the protected area!!</h1>'.format(current_user.username)

# ______________________

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return '<h1>Logged Out Successfully!!</h1>'

# ______________________

@app.route('/fresh')
@fresh_login_required
def fresh():
    '''This type of route is used in secure page example password change'''
    return '<h3>You have a fresh session!!</h3>'


# ______________________________________________________________________
if __name__ == '__main__':
    app.run()







# ______________________________________________________________________