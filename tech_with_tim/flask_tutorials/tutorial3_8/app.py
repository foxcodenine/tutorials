from flask import Flask, render_template, redirect, url_for, request, session, flash
from uuid import uuid4
from datetime import timedelta
import sqlalchemy
from passlib.hash import sha256_crypt
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) 
app.permanent_session_lifetime = timedelta(seconds=600)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = uuid4().hex
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydb.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# ______________________________________________________________________
# tutorial #7
db = SQLAlchemy(app)

class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(255))
    email = db.Column(db.String(100), unique=True)

    def __init__(self, username, password, email=None):
        self.username = username 
        self.password = password
        self.email = email



# ______________________________________________________________________
# tutorial #3

@app.route("/")
def index():
    return render_template('index.html', content='Testing Index Page')

@app.route("/new_page")
def new_page():
    return render_template('new_page.html')

# ______________________________________________________________________
# tutorial #4 
@app.route('/login', methods=['POST','GET'])
def login():

    if request.method == 'POST':
        user = request.form['name']
        return redirect(url_for('user', usr=user))


    return render_template('login.html')


@app.route('/<usr>')
def user(usr):
    return f'<h2 >Yes they do {usr}!</h2>'


# ______________________________________________________________________
# tutorial #5 Session, #6 Flash 
@app.route('/sign_in_session', methods=['POST','GET'])
def sign_in_session():

    if 'username' in session and 'password' in session:      
        flash('You already sign-in!', 'info')
        return redirect(url_for('session_page'))


    if request.method == 'POST':
        username = request.form['username']
        password = sha256_crypt.encrypt(request.form['password'])
        
        session.permanent = True



        current_user = Users.query.filter_by(username = username).first()

        

        if current_user:
            if sha256_crypt.verify(request.form['password'], current_user.password):
                # insert data in to session 
                session['username'] = username
                session['password'] = password
                
                flash('You have sign-in successfully!', 'info')
                return redirect(url_for('session_page'))
            else:
                flash('Incorrect password!', 'info')
                return redirect(url_for('sign_in_session'))

        else:
            new_user = Users(username, password, None)
            db.session.add(new_user)
            db.session.commit()
            session['username'] = username
            session['password'] = password      
            flash('New user created, successfully!', 'info')
            return redirect(url_for('session_page'))
    
    
    return render_template('sign_in.html')



@app.route('/session_page',methods=['POST','GET'])
def session_page():
    if 'username' in session:
        

        username = session['username'] 
        current_user = Users.query.filter_by(username = username).first()
        password = current_user.password
        email = current_user.email

        if request.method == 'POST':
            email = request.form['email']
            session['email'] = email
            
            current_user .email = email 
            db.session.commit()
            flash('Email has been updated', 'info')
            return redirect(url_for('session_page'))



        else:
            if 'email' in session:
                email = session['email']
                
        
        return  render_template(
                                'session_page.html', 
                                username = username, 
                                password = password,
                                email = email)
    else:
        flash('You Need to sign-in first', 'info')
        return redirect(url_for('sign_in_session'))


@app.route('/sign_out_session')
def sign_out_session():
    if 'username' in session:
        username = session['username']
        session.pop('username', None)
        session.pop('password', None)
        session.pop('email', None)
               


        if 'username' not in session and 'password' not in session:
            flash(f'{username}! You have loged out successfully!', 'info')
            return redirect(url_for('sign_in_session'))
        else:
            return '<h3>You are still loged-in!</h3>'
    return redirect(url_for('sign_in_session'))
# ______________________________________________________________________


@app.route('/delete', methods=['POST', 'GET'])
def delete():
    if 'username' in session:
          
        current_user = Users.query.filter_by(username=session['username']).first()

        try:
            if request.method == 'POST':
                un_pw = request.form['un#pw']
                un_pw = un_pw.split('#')
                username, password = un_pw[0],un_pw[1]
                print(username, password)

                if username == current_user.username and sha256_crypt.verify(
                    password, current_user.password):
                    db.session.delete(current_user)
                    db.session.commit()
                    session.pop('username', None)
                    session.pop('password', None)
                    session.pop('email', None)
                    flash('Account deleted!')
                    return redirect(url_for('sign_in_session'))
                else:
                    flash('Insert "username#password" to delete account!')        
                    return render_template('delete_account.html', username = current_user.username) 
        
        except IndexError:
            flash('Insert "username#password" to delete account!')
            return render_template('delete_account.html', username = current_user.username)

                
        
        
        
        return render_template('delete_account.html', username = current_user.username)  


    flash('You need to be sign-in!')
    return redirect(url_for('sign_in_session'))







# ______________________________________________________________________
if __name__ == '__main__':
    app.run()

'''
JamesTheCat a
Chrismariojimmy
JoelleGirl
Red
JameTheCat

'''