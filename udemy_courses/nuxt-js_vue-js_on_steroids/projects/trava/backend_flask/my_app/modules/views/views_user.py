from my_app import app, mail
from flask import Blueprint, jsonify, redirect, request, url_for, render_template
from my_app.modules.helper_functions import check_header
from my_app.modules.database import db, Trava_Users
import ast
from flask_mail import Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature

# ______________________________________________________________________

app_user = Blueprint('app_user', __name__, url_prefix='/trava/user')

s = URLSafeTimedSerializer(app.config['SECRET_KEY'])
# ______________________________________________________________________

@app_user.route('/', methods=['GET','POST'])
def user():
    if check_header(request.headers.get('API_KEY')):
        return jsonify({'message': 'Unauthorized'}), 401

    if request.method == 'GET':
        return redirect(url_for('app_user.fetch_users'), code=307)

    elif request.method == 'POST':
        return redirect(url_for('app_user.add_user'), code=307)

    
    return jsonify({'message': 'user route works!'})


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
            return  jsonify({'message': 'Email Address is Already Registered!'}), 400


        # ----- adding new user in to db

        new_user = Trava_Users(**new_user_dict)

        db.session.add(new_user)
        db.session.commit()

        # ----- creating token 
        
        token = s.dumps(email, salt='validate_email')

        # ----- create validation link
        link = url_for('app_user.validate_email', token=token, _external=True)

        # ----- 
        msg = Message(
            'Confirm Email', 
            sender=(app.config['MAIL_DEFAULT_SENDER'], 
            app.config['MAIL_USERNAME']) , recipients=[email]
        )

        firstname = new_user_dict['firstname']

        msg.html = render_template(
            'email_validation.html', 
            name=firstname, 
            link=link
        )
        mail.send(msg) 

        return jsonify({'message': 'user added to database'}), 200

    except (AttributeError, TypeError) as e:
        return jsonify({'error': e})


# _______________________________
@app_user.route('/validate_email/<token>')
def validate_email(token):
    try:
        email = s.loads(token, salt='validate_email', max_age=3600)

        current_user = Trava_Users.query.filter_by(email=email).first()
        current_user.active = True 
        db.session.commit()

        # update db, activate user!
        
        return redirect('{}{}'.format(app.config['FRONTEND_BASE_URL'],email))
        # return f'<h3>(to be updated) {current_user.firstname} {current_user.lastname} {current_user.active}</h3>'
    except SignatureExpired :
        return f'<h3>(to be updated) This confirmation link has expired!</h3>'
    except BadTimeSignature:
        return f'<h3>(to be updated) This confirmation link is invalid!</h3>'
    
# ______________________________________________________________________

'''
from datetime import date
import request

requests.post('http://127.0.0.1:5000/trava/user/', data={
    'firstname': 'Dorothy',
    'lastname': 'Cassar',
    'dob': date(1990, 1, 12),
    'email': 'redfox@gmail.com',
    'password': 'qazqazqaz'
},
headers={'API-Key': '123#456#789'})



'''


@app_user.route('/test')
def test():

    return render_template(
        'email_validation.html', 
        name='firstname', 
        link='link'
    )
