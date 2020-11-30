from my_app import app
from flask import Blueprint, jsonify, redirect, request, url_for
from my_app.modules.helper_functions import check_header
from my_app.modules.database import db, TSA_Users
import ast

# ______________________________________________________________________

app_user = Blueprint('app_user', __name__, url_prefix='/TSA/user')

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

    all_users = TSA_Users.query.all()

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

        new_user_str = request.data.decode("UTF-8")
        new_user_dict = ast.literal_eval(new_user_str)


        # firstname = request.form['firstname']
        # lastname = request.form['lastname']
        # dob = request.form['dob']
        # email = request.form['email']
        # password =request.form['password']

        # new_user = TSA_Users(
        #     firstname=firstname,
        #     lastname=lastname,
        #     dob=dob,
        #     email=email,
        #     password=password
        # )

        new_user = TSA_Users(**new_user_dict)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'user added to database'}), 200

    except (AttributeError, TypeError) as e:
        return jsonify({'error': e})


'''
from datetime import date
import request

requests.post('http://127.0.0.1:5000/TSA/user/', data={
    'firstname': 'Dorothy',
    'lastname': 'Cassar',
    'dob': date(1990, 1, 12),
    'email': 'redfox@gmail.com',
    'password': 'qazqazqaz'
},
headers={'API-Key': '123#456#789'})



'''



