# pipenv install pyjwt

# pipenv install flask-bcrypt
# https://flask-bcrypt.readthedocs.io/en/latest/

# https://pyjwt.readthedocs.io/en/latest/
# ______________________________________________________________________
from my_app import db, app
import jwt
from datetime import datetime, timedelta
from my_app import bcrypt

# ______________________________________________________________________

class NuxtApiPosts(db.Model):
    __tablename__ = 'nuxt_api_post'
    
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(50), nullable=False)
    sample_text = db.Column(db.Text, nullable=False)
    thumbnail = db.Column(db.Text, nullable=False)

    def __init__(self, title, author, sample_text, thumbnail):
        self.title = title
        self.author = author 
        self.sample_text = sample_text 
        self.thumbnail = thumbnail
    
    def __repr__(self):
        return f'<Post id: {self.id}>'

# _____________________
'''
from my_app import NuxtApiUsers, db
user = NuxtApiUsers('chris12aug@yahoo.com', '12345')
db.session.add(user)
db.session.commit()
user.encode_auth_token(user.email, user.password)

token = NuxtApiUsers.encode_auth_token('james@yahoo.com', '32132154stas')

'''

class NuxtApiUsers(db.Model):
    __tablename__ = 'nuxt_api_users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    registered_on = db.Column(db.DateTime())
    signed_in = db.Column(db.DateTime())


    def __init__(self, email, password):
        self.email = email 
        self.password = bcrypt.generate_password_hash(password)
        self.registered_on = datetime.now()
        self.signed_in = datetime.now()


    def password_check(self, pw_hash, candidate):
        return bcrypt.check_password_hash(pw_hash, candidate)


    def encode_auth_token(self, email, hash_password):
        """Generates the Auth Token"""
        try:
            payload = {
                email : hash_password,
                'exp': datetime.utcnow() + timedelta(days=0, minutes=60),
                'iat': datetime.utcnow()
            }
            
            token = jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
            print(token)
            return token
            
        except Exception as e:
            print(e)
            return e
    

    def decode_auth_token(self, token):
        try:
            decoded = jwt.decode(
                token, 
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
            return decoded

        except Exception as e :
            print(e)
            return e


