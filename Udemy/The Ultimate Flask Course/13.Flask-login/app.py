# pip install flask-login

# ______________________________________________________________________

from flask import Flask
from flask_login import LoginManager, UserMixin,login_user ,login_required
from flask_sqlalchemy import SQLAlchemy


# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'ThisIsASecret!'
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com:3306/oOp9iEOuPn'


login_manager = LoginManager(app)
db = SQLAlchemy(app)

# ______________________________________________________________________

class User(UserMixin, db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)

# ______________________________________________________________________
#  Creating user and table:

# db.create_all() 

# chris = User(username='chrismariojimmy')
# db.session.add(chris)
# db.session.commit()
# ______________________________________________________________________

# This decorator is spessifying that the following function is used by
# flask_login to connect to an actual user

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id)) 
    # return User.query.filter_by(id=int(user_id)) <- you can use this instaed of above
# ______________________________________________________________________

@app.route('/login')
def login():
    user = User.query.filter_by(username='chrismariojimmy').first() 
    login_user(user)
    return '<h1>Logged in!</h1>'


@app.route('/home')
@login_required
def home():
    return '<h1>You are in the protected area!!</h1>'

# ______________________________________________________________________
if __name__ == '__main__':
    app.run()







# ______________________________________________________________________