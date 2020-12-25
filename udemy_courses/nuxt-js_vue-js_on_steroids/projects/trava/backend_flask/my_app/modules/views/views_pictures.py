from my_app import app, s3_resource
from flask import Blueprint, jsonify, request, redirect, url_for

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError

from my_app.modules.database import db, Trava_Users, Trava_Pictures

import os


# ______________________________________________________________________

app_pictures = Blueprint('app_pictures', __name__, url_prefix='/trava/pictures')

# ______________________________________________________________________

# Helper Functions

from ._views_helper_functions import check_header, retrive_data, validate_token

# _______________________________

@app_pictures.route('/', methods=['GET','POST', 'PUT'])
@app_pictures.route('/<goto>/', methods=['GET','POST', 'PUT'])
def pictures(goto=False):
    print('<picturesRootRouter>')

    if check_header(request.headers.get('API_KEY')):
        return jsonify({'message': 'Unauthorized!', 'state': 'error'}), 401         
 
    if request.method == 'POST' and goto == 'addPicture':
        return redirect(url_for('app_pictures.add_picture'), code=307)

    if request.method == 'POST' and goto == 'deletePicture':
        return redirect(url_for('app_pictures.delete_picture'), code=307)

    if request.method == 'POST' and goto == 'fetchPictures':
        return redirect(url_for('app_pictures.fetch_pictures'), code=307)

    return jsonify({'picture': 'user route works!', 'state': 'success'})


@app_pictures.route('/add_picture', methods=['POST', 'GET'])
def add_picture():

    if request.method == 'POST' and request.files:
        # Fetch request data
        image_file = request.files['imageFile']
        image_text = request.form['imageText']
        token = request.form['token']

        # ----- Validating token & get user_id -----
        user_id = validate_token(token)
        if not user_id: 
            return jsonify({'message': 'Invalid token!', 'state': 'error'}), 401        
        
        # ----- Fetch current_user -----
        current_user = Trava_Users.query.get(user_id)

        # ----- Save to db -----
        new_picture = Trava_Pictures(
            user_id = user_id,
            image_text = image_text,
            image_url = ''
        )

        db.session.add(new_picture)
        db.session.commit()

        image_id = new_picture.id

        # ----- Upload file to AWS S3 -----

        # print('\n',image_file.__dict__)

        image_format = image_file.filename.split('.')[-1].strip()

        image_name = f'{current_user.id}/{image_id}.{image_format}'
        my_bucket_name = os.getenv('my_bucket_name')
        

        s3_resource.Bucket(my_bucket_name).put_object(
            Body = image_file,
            Key = image_name,
            ACL = 'public-read'
        )
        image_url = f'https://{my_bucket_name}.s3.{os.getenv("region")}.amazonaws.com/{image_name}'

        print(image_url)    

        # ----- update image_url in db -----   

        new_picture.image_url = image_url
        db.session.commit()

        return jsonify({'image': image_url, 'text': image_text}), 200

    return jsonify({'message': 'Page not found!', 'state': 'error'}), 404

# _______________________________

@app_pictures.route('/delete_picture', methods=['POST', 'GET'])
def delete_picture():


    if request.method == 'POST':

        to_delete, token = request.get_json().values()

        # ----- Validating token & get user_id -----
        user_id = validate_token(token)
        if not user_id: 
            return jsonify({'message': 'Invalid token!', 'state': 'error'}), 401   

        # ----- Delete from db and delete from AWS -----

        bucket = s3_resource.Bucket(os.getenv('my_bucket_name'))

        for d in to_delete:
            record = Trava_Pictures.query.get_or_404(int(d))
            db.session.delete(record)
            db.session.commit()

            bucket.objects.filter(Prefix = f'{user_id}/{d}').delete()


        
        

        return jsonify({'message': 'Picture/s deleted successfully', 'state': 'success'})
    
    return jsonify({'message': 'Page not found!', 'state': 'error'}), 404

# _______________________________

@app_pictures.route('/fetch_pictures', methods=['POST', 'GET'])
def fetch_pictures():


    if request.method == 'POST':

        token = request.get_json()['token']
        user_id = validate_token(token)

        user_pictures = []

        current_user = Trava_Users.query.get(user_id)
        for m in current_user.picture:
            user_pictures.append({'text': m.image_text, 'image' : m.image_url})   

        print(user_pictures)  

        

        return jsonify({'user_pictures':user_pictures})
    
    return jsonify({'message': 'Page not found!', 'state': 'error'}), 404

