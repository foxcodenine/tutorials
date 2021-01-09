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

from itsdangerous import URLSafeTimedSerializer, SignatureExpired

# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'ThisIsASecret!'
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com:3306/oOp9iEOuPn'
# app.config['USE_SESSION_FOR_NEXT'] = True    # <- this current doesn't work
app.config['REMEMBER_COOKIE_DURATION'] = timedelta(seconds=20)


login_manager = LoginManager(app)
serializer = URLSafeTimedSerializer(app.secret_key)

login_manager.login_view = 'login'
login_manager.login_message = 'You need to login first!'

login_manager.refresh_view = 'login'
login_manager.needs_refresh_message = 'You need to login again!!'

db = SQLAlchemy(app)
# ______________________________________________________________________

# function to check url validation, check also the _test.py and _urllib.py files:
def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))

    return test_url.scheme in ('http', 'https') and ref_url.netloc == test_url.netloc and target is not None

# ______________________________________________________________________

class Users(UserMixin, db.Model): 
    ''' This class is used to create the table in the database (Users)'''
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(255))
    email = db.Column(db.String(100), unique=True)
    session_token = db.Column(db.String(255), unique=True)

    def get_id(self):
        return self.session_token

# ______________________________________________________________________
#  Creating user and table:

# db.create_all() 

# chris = User(username='chrismariojimmy')
# db.session.add(chris)
# db.session.commit()

def create_users(un, pw, em):
    '''This function create a new User'''
    new_user = Users(username=un, password=pw, email=em, session_token=serializer.dumps([un, pw, em]))
    db.session.add(new_user)
    db.session.commit()

def token_update(_user, _password):
    '''This function update the setion_token and password'''
    this_user = Users.query.filter_by(username = _user).first()
    this_user.password = _password
    this_user.session_token = serializer.dumps([this_user.username, this_user.password, this_user.email])
    db.session.commit()
# ______________________________________________________________________

# This decorator is spessifying that the following function is used by
# flask_login to connect to an actual user

@login_manager.user_loader
def load_user(session_token):
    user = Users.query.filter_by(session_token=session_token).first()
    try:
        serializer.loads(session_token, max_age=20)
    except SignatureExpired:
        return None
    return user 
# ______________________________________________________________________

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

        user.session_token = serializer.dumps([user.username, user.password, user.email])
        db.session.commit()

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