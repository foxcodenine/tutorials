from my_app import app, mail
from flask import Blueprint, jsonify, redirect, request, url_for, render_template
# from my_app.modules.helper_functions import check_header
from my_app.modules.database import db, Trava_Users
import ast
from flask_mail import Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError

from datetime import datetime, timedelta

# ______________________________________________________________________

app_user = Blueprint('app_user', __name__, url_prefix='/trava/user')

s = URLSafeTimedSerializer(app.config['SECRET_KEY'])
# ______________________________________________________________________

# Helper Functions

def check_header(request_xhr_key):
    if not request_xhr_key or request_xhr_key != '123#456#789':
        return True

# _______________________________

def retrive_data():
    data_str = request.data.decode("UTF-8")
    data_dict = ast.literal_eval(data_str)
    return data_dict
# _______________________________

def send_activtion_link(email, firstname):

    token = s.dumps(email, salt='validate_email')

    # ----- create validation link
    link = url_for('app_user.validate_email', token=token, _external=True)

    # ----- 
    msg = Message(
        'Email Confirmation', 
        sender=(app.config['MAIL_DEFAULT_SENDER'], 
        app.config['MAIL_USERNAME']) , recipients=[email]
    )

    msg.html = render_template(
        'email_validation.html', 
        name=firstname, 
        link=link,
        logo=app.config['MAIL_LOGO']
    )
    mail.send(msg) 


# ______________________________________________________________________

# Routes

@app_user.route('/', methods=['GET','POST'])
@app_user.route('/<goto>/', methods=['GET','POST'])
def user(goto=False):


    if check_header(request.headers.get('API_KEY')):
        return jsonify({'message': 'Unauthorized', 'state': 'error'}), 401

    if request.method == 'POST' and goto == 'signin':
        return redirect(url_for('app_user.login'), code=307)

    if request.method == 'POST' and goto == 'passwordChange':
        return redirect(url_for('app_user.change_password'), code=307)

    if request.method == 'POST' and goto == 'resetPassword':
        return redirect(url_for('app_user.reset_password'), code=307)

    if request.method == 'POST' and goto == 'resend':
        return redirect(url_for('app_user.resend_email'), code=307)

    if request.method == 'GET':
        return redirect(url_for('app_user.fetch_users'), code=307)

    elif request.method == 'POST':
        return redirect(url_for('app_user.add_user'), code=307)

    
    return jsonify({'message': 'user route works!', 'state': 'success'})


# _______________________________

@app_user.route('/fetch_users')
def fetch_users():

    all_users = Trava_Users.query.all()

    all_users_api = {}

    for u in all_users:
        
        all_users_api[u.email] = {
            'id': u.id,
            'firstname': u.firstname,
            'lastname' : u.lastname,
            'date of birth': u.dob,
            'email': u.email,
            'password': u.password,
            'signup': u.signup,
            'signin': u.signin, 
            'active': u.active                        
        }

    return jsonify(all_users_api)

# _______________________________
@app_user.route('/add_user/', methods=['GET','POST'])
def add_user():
    try:

        # ----- reciving new user info from frontend
        new_user_str = request.data.decode("UTF-8")
        new_user_dict = ast.literal_eval(new_user_str)

        # ----- check if email is already registerd
        email = new_user_dict['email']
        check_email = Trava_Users.query.filter_by(email=email).first()
        

        if check_email:
            return  jsonify({'message': 'Email Address is Already Registered!', 'state': 'error'}), 400


        # ----- adding new user in to db

        new_user = Trava_Users(**new_user_dict)

        db.session.add(new_user)
        db.session.commit()       


        # ----- creating token, create validation link and send it to user email
        firstname = new_user_dict['firstname']

        send_activtion_link(email, firstname)     


        return jsonify({'message': 'user added to database', 'state': 'success'}), 200

    except (AttributeError, TypeError) as e:
        return jsonify({'error': e})

# _______________________________

@app_user.route('/login', methods=['POST', 'GET']) 
def login():

    

    # ----- reciving new user info from frontend
    user_dict = retrive_data()

    email = user_dict['email']
    password = user_dict['password']


    # ----- check if email is already registerd
    email = user_dict['email']
    current_user = Trava_Users.query.filter_by(email=email).first()

    if not current_user:
        return jsonify({
            'message': 'The email you’ve entered doesn’t match any account!', 
            'state': 'error'
        }), 400

    if not current_user.password_check(current_user.password, password):
        return jsonify({
            'message': 'Email and Password does not match!', 
            'state': 'error'
        }), 400

    if not current_user.active:
        return jsonify({
            'message': 'Before you can login, you must active your account with the link sent to your email address!',
            'state': 'error'
        }), 400

    

    token = jwt.encode({
        current_user.email: current_user.password,
        'exp': datetime.utcnow() + timedelta(seconds=3600),
        'iat': datetime.utcnow(),
        'seconds': 3600
    }, app.config['SECRET_KEY']).decode("utf-8")

    

    user_info = {
        'firstname': current_user.firstname,
        'lastname': current_user.lastname,
        'email': current_user.email,
        'dob': current_user.dob,
        'signup': current_user.signup,
    }

    

    current_user.signin = datetime.utcnow()
    db.session.commit()

    
    
    return jsonify({
        'message': 'You have just sign-in!',
        'userInfo': user_info,
        'token': f'{token}', 
        'state': 'success'
    })
# _______________________________

@app_user.route('/resend_email', methods=['POST', 'GET'])
def resend_email():

    email = retrive_data()['email']
    user = Trava_Users.query.filter_by(email=email).first()


    if not user:
        return jsonify({
            'message': 'The email you’ve entered doesn’t match any account!', 
            'state': 'error'
        }), 400

    if user.active:
        return jsonify({'message': 'Email Address has been already Confirmed!', 'state': 'error'}), 400

    # ----- creating token, create validation link and send it to user email
    send_activtion_link(email, user.firstname) 

    return jsonify({ 'message' : f'A confirmation email has been send to {email}!'})
    

# _______________________________

@app_user.route('/validate_email/<token>')
def validate_email(token):
    try:
        email = s.loads(token, salt='validate_email', max_age=3600)

        current_user = Trava_Users.query.filter_by(email=email).first()
        current_user.active = True 
        db.session.commit()

        # update db, activate user!
        
        return redirect('{}login/{}'.format(app.config['FRONTEND_BASE_URL'], email))
        # return f'<h3>(to be updated) {current_user.firstname} {current_user.lastname} {current_user.active}</h3>'
    except SignatureExpired :
        return redirect(url_for('app_user.timeout'))
    except BadTimeSignature:
        return redirect(url_for('app_user.page_not_found'))
    
# ______________________________________________________________________
@app_user.route('/reset_password', methods=['POST'])
def reset_password():
    try:
        encoded_jwt = retrive_data()['token']
        token = jwt.decode(encoded_jwt, app.config['SECRET_KEY'])
       

        current_user = Trava_Users.query.filter_by(email=token['email']).first()
        
        if not current_user:
            return jsonify({
                'message': 'The email you’ve entered doesn’t match any account!', 
                'state': 'error'
            }), 400


        # ----- create link to frontend
        link = f'{app.config["FRONTEND_BASE_URL"]}password/reset/{encoded_jwt}'

        # ----- send the email
        msg = Message(
            'Password Reset', 
            sender=(app.config['MAIL_DEFAULT_SENDER'], 
            app.config['MAIL_USERNAME']) , recipients=[current_user.email]
        )

        msg.html = render_template(
            'email_reset_password.html', 
            name=current_user.firstname, 
            link=link,
            logo=app.config['MAIL_LOGO']
        )
        mail.send(msg) 

        return jsonify({
            'message': f'An email to reset the password has been send to {current_user.email}', 
        })

    except ExpiredSignatureError :
        return jsonify({'message': 'Token has expired!', 'state': 'error'}), 408

    except InvalidSignatureError:
        return jsonify({'message': 'Invalid Token!', 'state': 'error'}), 401

#_______________________________________________________________________

@app_user.route('/change_password', methods=['POST'])
def change_password():
    user_data = retrive_data()

    email, password = user_data.values()

    current_user = Trava_Users.query.filter_by(email=email).first()

    current_user.password = current_user.password_hash(password)

    db.session.commit()

    return jsonify({'message': 'Password have been change!'})


#_______________________________________________________________________
@app_user.route('/timeout')
def timeout():

    return render_template(
        'error_page.html',
        error_code=408,
        name='there',
        message='It seems that the activation link has expired. Kindly try again!',
        link=app.config['FRONTEND_BASE_URL'],
        logo=app.config['MAIL_LOGO']
    )

# ______________________________________________________________________

@app_user.route('/page_not_found')
def page_not_found():

    return render_template(
        'error_page.html',
        error_code=404,
        name='there',
        message='It seems the page you are loonking for does not exist. Sorry!',
        link=app.config['FRONTEND_BASE_URL'],
        logo=app.config['MAIL_LOGO']
    )

# ______________________________________________________________________

@app_user.route('/delete')
def delete():
    user_chris = Trava_Users.query.filter_by(email='chris12aug@yahoo.com').first()
    db.session.delete(user_chris)
    db.session.commit()
    return  'user has been deleted'

# ______________________________________________________________________

@app_user.route('/test')
def test():

    return render_template(
        # 'email_validation.html', 
        'email_reset_password.html', 
        name='Chris', 
        link=app.config['MAIL_LOGO'],
        logo=app.config['MAIL_LOGO']
    )

# ______________________________________________________________________
