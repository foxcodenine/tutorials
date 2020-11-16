from flask import redirect, request, jsonify, Blueprint, url_for, flash, render_template, abort, session
from my_app import app, db
from my_app.modules.database import NuxtApiPosts, NuxtApiUsers
import ast
# ______________________________________________________________________

nuxtAPI = Blueprint('nuxtAPI', __name__, url_prefix='/nuxtAPI')

# ______________________________________________________________________

def check_token(email, token):

    user = NuxtApiUsers.query.filter_by(email=email).first()
    decoded = user.decode_auth_token(token)
    return user.password == decoded[user.email]



def check_header(request_xhr_key):
    if not request_xhr_key or request_xhr_key != '123#456#789':
        return True



# ______________________________________________________________________

@nuxtAPI.route('/', methods=['GET'])
def api():

    api_data =[]
    db_data = NuxtApiPosts.query.all()

    for record in db_data:
        post = {
            'id': record.id,
            'title': record.title,
            'author': record.author,
            'sampleText': record.sample_text,
            'thumbnail': record.thumbnail
        }
        api_data.append(post)

    #________________________

   
    if check_header(request.headers.get('API-Nuxt-Key')):
        if db_data:
            return jsonify({'message': 'Unauthorized', 'database': 'conected'}), 401

        return jsonify({'message': 'Unauthorized'}), 401
    

    #________________________

    # return jsonify(api_data)
    return jsonify(api_data)

#_______________________________________________________________________
@nuxtAPI.route('/add/<email>/<token>', methods=['POST', 'GET'])
def addAPI(email, token):

    if check_header(request.headers.get('API-Nuxt-Key')):
        return jsonify({'message': 'Unauthorized'}), 401

    #________________________

    if request.method == 'POST':

        # Validating token
        if not check_token(email, token):
            return jsonify({'message': 'Invalid token'}), 401




        dict_str = request.data.decode("UTF-8") # <-  '.decode("UTF-8")' 
                                                # decode a UTF-8-encoded byte string in Python
        mydata = ast.literal_eval(dict_str) # <- Construct an object/dict from a string

        title = mydata.get('title')  
        author = mydata.get('author')      
        sample_text = mydata.get('sample_text')  
        thumbnail = mydata.get('thumbnail') 


        post = NuxtApiPosts(
            title = title,
            author = author,
            sample_text = sample_text,
            thumbnail = thumbnail
        )

        db.session.add(post)
        db.session.commit()            

        return redirect(url_for('nuxtAPI.updateAPI', post_id=post.id))
            

#_______________________________________________________________________
@nuxtAPI.route('/update/<post_id>/', methods=['GET'])
@nuxtAPI.route('/update/<email>/<token>/<post_id>/', methods=['PUT','GET', 'DELETE'])

def updateAPI(post_id, token=None, email=None):

#________________________
# Check if user is authorized 

    if check_header(request.headers.get('API-Nuxt-Key')):
        return jsonify({'message': 'Unauthorized'}), 401
#________________________
# Fetch Record from Database

    record = NuxtApiPosts.query.filter_by(id=post_id).first_or_404()

#________________________
# Get Record    

    if request.method == 'GET':
        api_data = {
            'id': record.id,
            'title': record.title,
            'author': record.author,
            'sampleText': record.sample_text,
            'thumbnail': record.thumbnail       
        }
        return jsonify(api_data)

    else:
        # if Put or Delete check validate token
        if not check_token(email, token):    
            return jsonify({'message': 'Invalid token'}), 401
#________________________
# Put Record

    if request.method == 'PUT':


        dict_str = request.data.decode("UTF-8") # <-  '.decode("UTF-8")'
                                                # decode a UTF-8-encoded byte string in Python
        mydata = ast.literal_eval(dict_str) # <- Construct an object/dict from a string

        record.title = mydata.get('title')  
        record.author = mydata.get('author')      
        record.sample_text = mydata.get('sample_text')  
        record.thumbnail = mydata.get('thumbnail') 

        db.session.commit()
        mydata['id'] = record.id
        return jsonify(mydata)

#________________________
# Delete Record
    if request.method == 'DELETE':

        db.session.delete(record)
        db.session.commit()
        return jsonify({'message': 'record deleted'})
#________________________
# Method Not Allowed

    return abort(405)
#_______________________________________________________________________

@nuxtAPI.route('/add-user', methods=['POST'])
def add_user():
    

    if check_header(request.headers.get('API-Nuxt-Key')):
        return jsonify({'message': 'Unauthorized'}), 401
    # _____________________________________

    dirt_str = request.data.decode("UTF-8")
    mydata = ast.literal_eval(dirt_str)

    # _____________________________________
    # Check if email already exist 

    check_email = NuxtApiUsers.query.filter_by(email=mydata['email']).first()
    if check_email:
        return jsonify({'message': 'This email already exists'}), 400
    # _____________________________________
    # Adding new user to db 

    user = NuxtApiUsers(email=mydata['email'], password=mydata['password'])
    db.session.add(user)
    db.session.commit()


    # _____________________________________
    # Retuning token to frontend
    #  
    token = user.encode_auth_token(user.email, user.password) 
    return jsonify({'tokenFlask': token.decode('UTF-8')}), 200



# ______________________________________________________________________

@nuxtAPI.route('/login-user', methods=['POST'])
def login_user():
    # ______________________________________
    # Check header

    
    if check_header(request.headers.get('API-Nuxt-Key')):
        return jsonify({'message': 'Unauthorized'}), 401
    # ______________________________________
    # Get Data from frontend
    dirt_str = request.data.decode("UTF-8")
    mydata = ast.literal_eval(dirt_str)

    # ______________________________________
    # Check email and password
    user = NuxtApiUsers.query.filter_by(email=mydata['email']).first()

    if not user:
        return jsonify({'message': 'This email is not registed!'}), 400


    if not user.password_check(user.password, mydata['password']):
        return jsonify({'message': 'Email and password does not match!'}), 400

    # _____________________________________
    # Retuning token to frontend
    
    token = user.encode_auth_token(user.email, user.password) 
    return jsonify({'tokenFlask': token.decode('UTF-8')}), 200




















'''
title: The Mandalorian 

author: Star Wars 

sampleText: After the stories of Jango and Boba Fett, another warrior emerges in the Star
Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence
of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the
galaxy far from the authority of the New Republic.

thumbnail:  






requests.post('http://127.0.0.1:5000/nuxtAPI/',
data={
'title': 'The Mandalorian', 
'author': 'Star Wars', 
'thumbnail': 'https://lumiere-a.akamaihd.net/v1/images/disney-mandalorian-gallery-hero-desktop_65f5959e.jpeg?region=0,0,2048,872&width=1200',
'sampleText': "sampleText: After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic."
})

requests.post('http://127.0.0.1:5000/nuxtAPI/',
data={
'title': 'Rogue One', 
'author': 'Gareth Edwards', 
'thumbnail': 'https://www.jedinews.com/wp-content/uploads/2019/06/rogue-one-line-up.jpg',
'sampleText': "From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction."
},
headers={'API-Nuxt-Key': '123#456#789'})

'''
    