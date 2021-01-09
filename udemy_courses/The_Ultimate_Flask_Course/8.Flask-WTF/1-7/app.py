# pip install flask-wtf

# 1. Install and Set Up
# 2. Creating a Form
# 3. Submit the Form
# 4. Validators
# 5. More Fields
# 6. Adding An Extra Validator
# 7. Changing Labels and Defaults

# ______________________________________________________________________

from flask import Flask, render_template, url_for
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField, IntegerField, BooleanField
from wtforms.validators import Length, InputRequired, Email

# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'Thisisasecret!'
app.config['DEBUG'] = True

# ______________________________________________________________________

class LoginForm(FlaskForm):
    username = StringField(
    'Username', validators=[InputRequired(message='A Username Is Required!'), Length(min=4, max=10)]
    )

    password = PasswordField(
    'Password', validators=[InputRequired(), Length(min=4, message='Password should be < 4')]
    )
    
    age = IntegerField('Age', default='#')
    maltese = BooleanField('Maltese')
    email = StringField('Email', validators=[Email()], default='test@test.com')
# ______________________________________________________________________

@app.route('/', methods = ['GET', 'POST'])
def index():
    form = LoginForm() 
   
    # if form.validate() <-- this will validate the form regardles the method 

    if form.validate_on_submit(): # <-- this will validate only if 'POST' is send
        un = form.username.data
        pw = form.password.data
        age = form.age.data
        mt = form.maltese.data
        email = form.email.data

        return f'<h2>The form has been submited</h2><h4>username: {un}</h4>\
                <h4>password: {pw}</h4><h4>age: {age}</h4>\
                <h4>maltese: {mt}</h4>\
                <h4>email: {email}</h4>'


    return render_template('index.html', form=form)

# ______________________________________________________________________

if __name__ == '__main__':
    app.run() 