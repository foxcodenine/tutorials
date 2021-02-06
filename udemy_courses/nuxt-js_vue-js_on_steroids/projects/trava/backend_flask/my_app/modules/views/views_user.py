from my_app import app, mail, bcrypt, s3_resource
from flask import Blueprint, jsonify, redirect, request, url_for, render_template, session
# from my_app.modules.helper_functions import check_header
from my_app.modules.database import db, Trava_Users
import ast
from flask_mail import Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError

from datetime import datetime, timedelta

import os

# ______________________________________________________________________

app_user = Blueprint('app_user', __name__, url_prefix='/trava/user')

s = URLSafeTimedSerializer(app.config['SECRET_KEY'])
# ______________________________________________________________________

# Helper Functions

from ._views_helper_functions import *

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

# _______________________________

def login_current_user(current_user, token, commit=True, message='You have just sign-in!'):
    user_info = {
        'firstname': current_user.firstname,
        'lastname': current_user.lastname,
        'email': current_user.email,
        'dob': current_user.dob,
        'signup': current_user.signup,
    }    
    
    if commit:
        current_user.signin = datetime.utcnow()
        db.session.commit()
    
    
    return jsonify({
        'message': message,
        'userInfo': user_info,
        'token': f'{token}', 
        'state': 'success'
    })

# _______________________________

def create_token(current_user, exp, name='user_login_token'):

    token = jwt.encode({
        # current_user.email: current_user.password,
        'name': name,
        'user_id': current_user.id,
        'hashed':current_user.password,
        'exp': datetime.utcnow() + timedelta(seconds=exp),
        'iat': datetime.utcnow(),
        'reset': exp
    }, app.config['SECRET_KEY']).decode("UTF-8")

    return token

# ______________________________________________________________________

# Routes

@app_user.route('/', methods=['GET','POST', 'PUT'])
@app_user.route('/<goto>/', methods=['GET','POST', 'PUT'])
def user(goto=False):


    if check_header(request.headers.get('API_KEY')):
        return jsonify({'message': 'Unauthorized', 'state': 'error'}), 401

    if request.method == 'POST' and goto == 'signin':
        return redirect(url_for('app_user.login'), code=307)

    if request.method == 'POST' and goto == 'deleteAccount':
        return redirect(url_for('app_user.delete_account'), code=307)

    if request.method == 'POST' and goto == 'passwordChange':
        return redirect(url_for('app_user.change_password'), code=307)

    if request.method == 'POST' and goto == 'resetPassword':
        return redirect(url_for('app_user.reset_password'), code=307)

    if request.method == 'POST' and goto == 'resend':
        return redirect(url_for('app_user.resend_email'), code=307)

    if request.method == 'POST' and goto == 'checkPassword':
        return redirect(url_for('app_user.check_password'), code=307)

    # if request.method == 'POST' and goto == 'autoLogin':
    #     return redirect(url_for('app_user.auto_login'), code=307)

    if request.method == 'PUT' and goto == 'profileUpdate':
        return redirect(url_for('app_user.profile_update'), code=307)

    if request.method == 'PUT' and goto == 'updatePassword':
        return redirect(url_for('app_user.update_password'), code=307)

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


        return jsonify({
            'message': 'An email have been send to your email address.\
                         Kindly confirm and sign-in into your account!', 
            'state': 'success'
        }), 200

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


    # ----- Create Token for login:

    token = create_token(current_user, app.config['EXP_TIME_LOGIN'])


   
    return login_current_user(current_user, token)
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
        email = s.loads(token, salt='validate_email', max_age=app.config['EXP_TIME_EMAIL_CONF'])

        current_user = Trava_Users.query.filter_by(email=email).first()
        current_user.active = True 
        db.session.commit()

        # update db, activate user!
        
        return redirect('{}'.format(app.config['FRONTEND_BASE_URL'], email))
        # return f'<h3>(to be updated) {current_user.firstname} {current_user.lastname} {current_user.active}</h3>'
    except SignatureExpired :
        return redirect(url_for('app_user.timeout'))
    except BadTimeSignature:
        return redirect(url_for('app_user.page_not_found'))
    
# ______________________________________________________________________
@app_user.route('/reset_password', methods=['POST'])
def reset_password():
    # This Router is use when User Forgets the password.
    # It will send email with link to fronted to create new password
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
        link = f'{app.config["FRONTEND_BASE_URL"]}password/reset/token/?token={encoded_jwt}'

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
            'message': f'An email with the password reset link was sent to {current_user.email}', 
        })

    except ExpiredSignatureError :
        return jsonify({'message': 'Token has expired!', 'state': 'error'}), 408

    except InvalidSignatureError:
        return jsonify({'message': 'Invalid Token!', 'state': 'error'}), 401

#_______________________________________________________________________

@app_user.route('/change_password', methods=['POST'])
def change_password():
    # This Router is use when User Forgets the password 
    # And is accessed from frontend after email is submited and link used!
    # It will save new pw in db, no need to resend toke. Cause user ist'n logged in
    
    user_data = retrive_data()

    email, password = user_data.values()

    current_user = Trava_Users.query.filter_by(email=email).first()

    current_user.password = current_user.password_hash(password)

    db.session.commit()
    token = create_token(current_user, app.config['EXP_TIME_LOGIN'])

    user_info = {
        'firstname': current_user.firstname,
        'lastname': current_user.lastname,
        'email': current_user.email,
        'dob': current_user.dob,
        'signup': current_user.signup,
    }


    current_user.signin = datetime.utcnow()
    db.session.commit()
    
    
 

    return jsonify({'message': 'Password have been change!', 'token': f'{token}', 'userInfo': user_info,'state': 'success'}), 200

#_______________________________________________________________________

@app_user.route('/update_password', methods=['PUT'])
def update_password():
    # This Router is use to change password from frontend in profile page
    # While use is loaged in. 
    # New Token need to be send and new pw need to be saved in db
    
    current_password, new_password, token = retrive_data().values()   
    

    try: 
        decoded = jwt.decode(token, app.config['SECRET_KEY'])

        current_user = Trava_Users.query.filter_by(id=decoded['user_id']).first()


        if current_user and current_user.password_check(current_user.password, current_password):

            
            current_user.signin = datetime.utcnow()
            current_user.password = current_user.password_hash(new_password)
            db.session.commit()

            current_user = Trava_Users.query.filter_by(id=decoded['user_id']).first()
            token = create_token(current_user, app.config['EXP_TIME_LOGIN'])            

            return login_current_user(current_user, token, commit=False, message='Password updated successfully')

        else:        
            return jsonify({'message': 'Current password is incorrect!', 'state': 'error'}), 401 # <-


    except ExpiredSignatureError :
        return jsonify({'message': 'Token has expired! Please sige-out and login again', 'state': 'error'}), 408

    except InvalidSignatureError:
        return jsonify({'message': 'Invalid Token!', 'state': 'error'}), 401

#_______________________________________________________________________
   
@app_user.route('/check_password', methods=['POST'])
def check_password():

    pw_hash, candidate = retrive_data().values()

    result = bcrypt.check_password_hash(pw_hash, candidate)

    return jsonify({'result': result}), 200

    

#_______________________________________________________________________

@app_user.route('/profile_update', methods=['PUT'])
def profile_update():
    user_data = retrive_data()

    user_info, token = user_data.values()    



    decoded = jwt.decode(token, app.config['SECRET_KEY'])
    
    current_user = Trava_Users.query.filter_by(id=decoded['user_id']).first()

    if current_user.password == decoded['hashed']:
        

        firstname, lastname, new_email, dob_string , signup = user_info.values()
        
        dob = datetime.strptime(dob_string, "%a, %d %b %Y")
        
        current_user.firstname = firstname
        current_user.lastname = lastname
        # current_user.email = email # <--
        current_user.dob = dob
        db.session.commit()

        # reset user_info to python date 
        # and email for db email till email confirmation
        user_info['dob'] = dob        
        user_info['email'] = current_user.email

        message = 'Your profile has been updated!'
        
        # if email change send email confirmation
        if new_email != current_user.email:
            message = '''
                An email have been send to your new address. 
                Kindly confirm to update your profile email!
            '''

            # check if new email alread in db

            chk_email = Trava_Users.query.filter_by(email=new_email).first()
            if chk_email:
                return  jsonify({
                    'message': 'Email Address is Already Registered!', 
                    'state': 'error'
                }), 400
             

            change_email(current_user.firstname, new_email, current_user.email)


        return jsonify({
            'message': message,
            'userInfo': user_info,
            'token': f'{token}', 
            'state': 'success'
        })

    return jsonify({'message': 'Rejected', 'state': 'error'}), 400

#_______________________________________________________________________
def change_email(firstname, new_email, current_email):

    
    # ----- create Token :

    payload = {
        'new_email': new_email,
        'current_email': current_email,
    }

    token = s.dumps(payload, salt='change_email')

    # ----- create validation link
    link = url_for('app_user.update_email', token=token, _external=True)

    # ----- 
    msg = Message(
        'Confirm your new email address', 
        sender=(app.config['MAIL_DEFAULT_SENDER'], 
        app.config['MAIL_USERNAME']) , recipients=[new_email]
    )

    msg.html = render_template(
        'email_change_address.html', 
        name=firstname, 
        link=link,
        logo=app.config['MAIL_LOGO'],
        new_email=new_email
    )
    mail.send(msg) 

#_______________________________________________________________________
@app_user.route('/update_email/<token>', methods=['GET'])
def update_email(token):
    try:
        new_email, current_email = s.loads(token, salt='change_email', max_age=app.config['EXP_TIME_EMAIL_CONF']).values()        

        current_user = Trava_Users.query.filter_by(email=current_email).first()

        current_user.email = new_email
        db.session.commit()
        
        return redirect('{}update/email/?email={}'.format(app.config['FRONTEND_BASE_URL'], new_email))
    except SignatureExpired :
        return redirect(url_for('app_user.timeout'))
    except :
        return redirect(url_for('app_user.page_not_found'))
    
#_______________________________________________________________________

# ----- Router depreciated

@app_user.route('/auto_login', methods=['POST'])
def auto_login():
    user_data = retrive_data()

    token, email = user_data.values()

    current_user = Trava_Users.query.filter_by(email=email).first()

    if not current_user:
        return jsonify({
            'message': '<ERROR> user not found!', 
            'state': 'error'
        }), 400
    
    decoded = jwt.decode(token, app.config['SECRET_KEY'])
    
    if not decoded or not decoded[email] or decoded[email] != current_user.password:
        return jsonify({
            'message': '<ERROR> token is invalid!', 
            'state': 'error'
        }), 400

    return login_current_user(current_user, token)

#_______________________________________________________________________

@app_user.route('/delete_account', methods=['POST', 'DELETE'])
def delete_account():

    email, hashed = retrive_data().values()

    current_user = Trava_Users.query.filter_by(email=email).first()
    

    if current_user and current_user.password and current_user.password == hashed:
        
        # Select account pictures
        user_pictures = current_user.picture

        # Delete account pictures
        for pic in user_pictures:
            # print(pic)
            db.session.delete(pic)

        # Delete account 
        db.session.delete(current_user)
        db.session.commit()

        # Delete account folder pictures from AWS        
        bucket = s3_resource.Bucket(os.getenv('my_bucket_name'))
        bucket.objects.filter(Prefix = f'{current_user.id}/').delete()

        return  jsonify({
            'message': 'You\'ve syccessfully deleted your Trava account!', 
            'state': 'success'
        }), 200
    
    else :
        return jsonify({'message': 'Authorized!', 'state': 'error'}), 401


#_______________________________________________________________________
@app_user.route('/timeout')
def timeout():

    return render_template(
        'error_page.html',
        error_code=408,
        name='there',
        message='Sorry, this link has expired. Kindly try again!',
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
        message='It seems the page you are looking for does not exist. Sorry!',
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
        # 'email_reset_password.html', 
        'email_update.html', 
        name='Chris', 
        link=app.config['MAIL_LOGO'],
        logo=app.config['MAIL_LOGO'],
        current_email='chris12auh@yahoo.com',
        new_email='chrismariojimmy@yahoo.com'
    )

# ______________________________________________________________________
