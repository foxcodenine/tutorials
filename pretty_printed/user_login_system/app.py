from flask import Flask, render_template, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField, BooleanField 
from wtforms.validators import InputRequired, Email, Length
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__) 


app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'ThisIsASecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com/oOp9iEOuPn'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

Bootstrap(app) 

db = SQLAlchemy(app)

# ______________________________________________________________________

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


# ______________________________________________________________________

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80)) 

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# _____________________

# db.create_all()


# ______________________________________________________________________
class LoginForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])
    remember = BooleanField('remember me')

class RegisterForm(FlaskForm):
    email = StringField('email', validators=[InputRequired(),  Email(message='Invalid email'), Length(max=50)])
    username = StringField('username', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])

# ______________________________________________________________________

@app.route('/')
def index():
    return render_template('index.html')

# _____________________

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        user = User.query.filter(User.username == form.username.data).first()
        if user:
            if check_password_hash(user.password, form.password.data):
                login_user(user, remember=form.remember.data)
                return redirect(url_for('dashboard'))
            return '<h2>Invaled username or password!</h2>'
        

    return render_template('login.html', form=form)

# _____________________


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = RegisterForm() 

    if form.validate_on_submit():

        hashed_password = generate_password_hash(form.password.data, method='sha256')
        
        new_user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return '<h4>New user has been created!</h4>'

        # return '<h2>' + form.username.data + ' ' + form.email.data + ' ' + form.password.data + '</h2>'


    return render_template('signup.html', form=form)


# _____________________


@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html', name=current_user.username)


# ______________________________________________________________________

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run()