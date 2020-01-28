# pip install flask-security 
# pip install bcrypt


# ______________________________________________________________________

from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy 
from flask_security import Security, SQLAlchemySessionUserDatastore, \
    SQLAlchemyUserDatastore, login_required, UserMixin, RoleMixin
from flask_security.utils import hash_password
from uuid import uuid4
# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = uuid4().hex
app.config['SECURITY_PASSWORD_SALT'] = b'$2b$12$wqKlYjmOfXPghx3FuC3Pu.'

# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////database.db'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'

db = SQLAlchemy(app)
# ______________________________________________________________________

# this is an association table to handle many to many relationships
# between our tables:
roles_users = db.Table('roles_users',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer, db.ForeignKey('role.id'))
)


# creating our tables:
class User(db.Model, UserMixin):    
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean)
    confirmed_at = db.Column(db.DateTime)
    roles = db.relationship(
        'Role', 
        secondary=roles_users, 
        backref=db.backref('users', lazy='dynamic')
    )


class Role(db.Model, RoleMixin):
    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(255))


# connecting our model (tables) to flask-security:
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)

# ______________________________________________________________________

@app.route('/register', methods=['POST', 'GET'])
def register():

    if request.method == 'POST':
        user_datastore.create_user(
            email = request.form.get('email'), 
            password = hash_password(request.form.get('password'))
        )
        db.session.commit()

        return redirect(url_for('profile'))

    return render_template('register.html')

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')

# ______________________________________________________________________


if __name__ == '__main__':
    app.run()