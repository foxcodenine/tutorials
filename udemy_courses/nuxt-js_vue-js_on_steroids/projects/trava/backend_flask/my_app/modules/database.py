# pipenv install pyjwt

# pipenv install flask-bcrypt
# https://flask-bcrypt.readthedocs.io/en/latest/

# https://pyjwt.readthedocs.io/en/latest/
# ______________________________________________________________________
from my_app import db, app, bcrypt
import jwt
from datetime import datetime, timedelta

# ______________________________________________________________________

class Trava_Users(db.Model):
    __tablename__ = 'trava_users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    dob = db.Column(db.DateTime())
    signup = db.Column(db.DateTime())
    signin = db.Column(db.DateTime())
    active = db.Column(db.Boolean())
    role = db.relationship('Trava_Admin', backref='user', lazy='dynamic')
    picture = db.relationship('Trava_Pictures', backref='user', lazy='dynamic')

    def __repr__(self):
        return f'<User id: {self.id} name: {self.firstname} {self.lastname}>'

    def __str__(self):
        return f'<User id: {self.id} name: {self.firstname} {self.lastname}>'

    def __init__(self, email, password, firstname, lastname, dob):
        self.email = email
        self.password = bcrypt.generate_password_hash(password)
        self.firstname = firstname.lower().capitalize() 
        self.lastname = lastname.lower().capitalize()
        self.dob = dob
        self.signup = datetime.utcnow()
        self.signin = datetime.utcnow()
        self.active = False
    
    def password_hash(self, password):
        return bcrypt.generate_password_hash(password)
    
    def password_check(self, pw_hash, candidate):
        return bcrypt.check_password_hash(pw_hash, candidate)

    def encode_auth_token(self, current_user, exp, name='user_login_token'):
        """Generates the Auth Token"""
        try:
            payload = {
                'name': name,
                'user_id': current_user.id,
                'hashed':current_user.password,
                'exp': datetime.utcnow() + timedelta(seconds=exp),
                'iat': datetime.utcnow(),
                'reset': exp
            }
            
            token = jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            ).decode("utf-8")

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

class Trava_Admin(db.Model):
    __tablename__ = 'trava_admin'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('trava_users.id'), unique=True)

    def __init__(self, user_id):
        self.user_id = user_id


# _______________________________

class Trava_Pictures(db.Model):
    __tablename__ = 'trava_pictures'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('trava_users.id'))
    image_url = db.Column(db.String(255), nullable=False)
    image_text =  db.Column(db.Text, nullable=False)
    # user = db.relationship('Trava_Users')

    def __init__(self, user_id, image_url, image_text):
        self.user_id = user_id
        self.image_url = image_url
        self.image_text = image_text


# _______________________________
