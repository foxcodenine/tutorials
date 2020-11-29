# pipenv install pyjwt

# pipenv install flask-bcrypt
# https://flask-bcrypt.readthedocs.io/en/latest/

# https://pyjwt.readthedocs.io/en/latest/
# ______________________________________________________________________
from my_app import db, app, bcrypt
import jwt
from datetime import datetime, timedelta

# ______________________________________________________________________

class TSA_Users(db.Model):
    __tablename__ = 'tsa_users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    dob = db.Column(db.DateTime())
    signup = db.Column(db.DateTime())
    signin = db.Column(db.DateTime())
    active = db.Column(db.Boolean())
    role = db.relationship('TSA_Admin', backref='user', lazy='dynamic')
    data = db.relationship('TSA_Data', backref='user', lazy='dynamic')

    def __repr__(self):
        return f'<User id: {self.id} name: {self.firstname} {self.lastname}>'

    def __str__(self):
        return f'<User id: {self.id} name: {self.firstname} {self.lastname}>'

    def __init__(self, email, password, firstname, lastname, dob):
        self.email = email
        self.password = bcrypt.generate_password_hash(password)
        self.firstname = firstname.lower() 
        self.lastname = lastname.lower()
        self.dob = dob
        self.signup = datetime.now()
        self.signup = datetime.now()
        self.active = False
    
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
# _______________________________

class TSA_Admin(db.Model):
    __tablename__ = 'tsa_admin'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('tsa_users.id'), unique=True)

    def __init__(self, user_id):
        self.user_id = user_id


# _______________________________

class TSA_Data(db.Model):
    __tablename__ = 'tsa_data'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('tsa_users.id'))
    image = db.Column(db.String(255), nullable=False)
    name =  db.Column(db.Text, nullable=False)

    def __init__(self, user_id, image, name):
        self.user_id = user_id
        self.image = image
        self.name = name





# _______________________________
