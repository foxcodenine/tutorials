
# part1 https://www.youtube.com/watch?v=tfKatqbZicA&feature=youtu.be
# part2. https://www.youtube.com/watch?v=J5bIPtEbS0Q&feature=youtu.be
# part3 https://www.youtube.com/watch?v=J5bIPtEbS0Q&feature=youtu.be

# https://jwt.io/
# https://pythonhosted.org/Flask-JSON/

# json vs jsonify
# https://stackoverflow.com/questions/13081532/return-json-response-from-flask-view

# 401 vs 403
# https://leastprivilege.com/2014/10/02/401-vs-403/#:~:text=The%20401%20(Unauthorized)%20status%20code,credentials%20for%20the%20target%20resource.&text=A%20server%20that%20receives%20valid,403%20(Forbidden)%20status%20code.
# ______________________________________________________________________

from flask import Flask, request, make_response, json, jsonify
from flask_cors import CORS, cross_origin 
from functools import wraps
import jwt
import datetime
# ______________________________________________________________________

def create_app():
    app = Flask(__name__)

    if app.config['ENV'] == 'development':
        app.config.from_object('config.ConfigDev')
    else:
        app.config.from_object('config.ConfigPro')

    return app

app = create_app()
CORS(app)

# ______________________________________________________________________

@app.route('/')
def index():   
    return '{} {}'.format(app.config['CHECK_ENV'], app.config['SECRET_KEY'])

# ______________________________________________________________________
# Part1. An Introduction to JSON Web Tokens (JWT) in Python

# Testing jason web token route:

@app.route('/testtoken')
def testtoken():

    return jwt.encode({'christopher':'farrugia'}, 'thisisasecret')


# ______________________________________________________________________
# Part2. How to Use HTTP Basic Authentication in Your Flask App

# Testing basic web auth route:

@app.route('/auth')
def auth():
    
    if request.authorization and request.authorization.username == 'testuser' and request.authorization.password == 'testpassword':
        return '<h3>You are logged in!</h3>'
    return make_response('<h3>Could not verify!</h3>', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})

# ____________________________

# Creating a wrapper to auth routes:

def auth_wrapper(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if auth and auth.username == 'user1' and auth.password == 'password1':
            return f(*args, **kwargs)
        return make_response('<h3>Could not verify!</h3>', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})
    return decorated

# ____________________________

# Trying teh auth_wrap:

@app.route('/auth-wrap')
@auth_wrapper
def auth_wrap():
    return '<h3>Auth wrapper worked! You are authenticated and logged in!</h3>'


# ______________________________________________________________________

# Part3. Authenticating a Flask API Using JSON Web Tokens 

# Create a decorater for my token

def token_required(f):    
    @wraps(f)   # <- this part is the wrapper
                # <- and below is the returned functionality
    def decorator(*args, **kwargs): 
        token = request.args.get('token') # <- http://127.0.0.1:500/route?token=kjhsbdfjhsdur

        if not token:
            return jsonify({'message': 'Token is missing! (Unauthorized)'}), 401
        
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'message': 'Token is invalide! (Forbidden)'}), 403
        
        return f(*args, **kwargs)
    return decorator

        


# ____________________________

@app.route('/unprotected')
def unprotected():
    return jsonify({'message': 'Anyone can view this!'})

# ____________________________

@app.route('/protected')
@token_required
def protected():
    return jsonify({'message': 'This is only avalible for people with valid tokens!'})

# ____________________________

@app.route('/login')
def login():

    auth = request.authorization

    if auth and auth.username == 'user2' and auth.password == 'password2':

        expiration = datetime.datetime.utcnow() + datetime.timedelta(minutes=10)
        token =  jwt.encode({'user': auth.username, 'exp': expiration}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})        

    return make_response('Could not verify!', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})
    
    # This {'WWW-Authenticate': 'Basic realm="Login Required"'} is for the popup box to show.
    # "Login Required" could be any message.

# ____________________________
