from flask import Flask, render_template, redirect, url_for, request, session, flash
from uuid import uuid4
from datetime import timedelta
app = Flask(__name__) 
app.permanent_session_lifetime = timedelta(seconds=20)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = uuid4().hex

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
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        session.permanent = True

        # insert data in to session 
        session['username'] = username
        session['password'] = password
        flash('You have sign-in successfully!', 'info')
        return redirect(url_for('session_page'))

    if 'username' in session and 'password' in session:
      
        flash('You already sign-in!', 'info')
        return redirect(url_for('session_page'))
    
    return render_template('sign_in.html')



@app.route('/session_page',methods=['POST','GET'])
def session_page():
    if 'username' in session:

        username = session['username'] 
        password = session['password']
        
        return  render_template('session_page.html', username=username, password=password)
    else:
        flash('You Need to sign-in first', 'info')
        return redirect(url_for('sign_in_session'))


@app.route('/sign_out_session')
def sign_out_session():
    if 'username' in session:
        username = session['username']
        session.pop('username', None)
        session.pop('password', None)

        if 'username' not in session and 'password' not in session:
            flash(f'{username}! You have loged out successfully!', 'info')
            return redirect(url_for('sign_in_session'))
        else:
            return '<h3>You are still loged-in!</h3>'
    return redirect(url_for('sign_in_session'))

# ______________________________________________________________________
if __name__ == '__main__':
    app.run()