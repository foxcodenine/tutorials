from my_app import app
from flask import Blueprint, jsonify, request, redirect, url_for

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError

from my_app.modules.database import db, Trava_Users

# ______________________________________________________________________

app_pictures = Blueprint('app_pictures', __name__, url_prefix='/trava/pictures')

# ______________________________________________________________________

# Helper Functions

from ._views_helper_functions import check_header, retrive_data, validate_token

# _______________________________

@app_pictures.route('/', methods=['GET','POST', 'PUT'])
@app_pictures.route('/<goto>/', methods=['GET','POST', 'PUT'])
def pictures(goto=None):

    if check_header(request.headers.get('API_KEY')):
        return jsonify({'message': 'Unauthorized!', 'state': 'error'}), 401
    
     
 
    if request.method == 'POST' and goto == 'addPicture':
        print(11)
        return redirect(url_for('app_pictures.add_picture'), code=307)

    return jsonify({'picture': 'user route works!', 'state': 'success'})

# _______________________________

@app_pictures.route('/add_picture', methods=['POST', 'GET'])
def add_picture():

    print(request.method)



    if request.method == 'POST' and request.files:
        image_file = request.files['imageFile']
        image_text = request.form['imageText']
        token = request.form['token']

        print('\n',image_file)
        print('\n',image_text)
        print('\n',token)



    user_id = validate_token(token)
    if not user_id: 
        return jsonify({'message': 'Invalid token!', 'state': 'error'}), 401
    
    current_user = Trava_Users.query.get(user_id)
    print('\n',current_user)


    return jsonify({'user_id_ok': 'ok'})