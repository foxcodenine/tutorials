# pip install python-dotenv, Flask , Flask-WTF
# https://john.soban.ski/add-recaptcha-to-your-flask-application.html
# https://www.google.com/search?client=firefox-b-d&q=flask+paypal
# ______________________________________________________________________



from flask import Flask, render_template, redirect, url_for, request, flash

from flask_wtf import FlaskForm, RecaptchaField
from flask_wtf.html5 import URLField, DateField
from wtforms import StringField, TextField, SubmitField, PasswordField, SelectField
from wtforms.validators import DataRequired, Length, Email, URL, EqualTo
# ______________________________________________________________________

app = Flask(__name__)

if app.config['ENV'] == 'development':
    app.config.from_object('config.ConfigDevelopment')
else:
    app.config.from_object('config.ConfigProduction')

# ______________________________________________________________________

class ContactForm(FlaskForm):
    
    name = StringField('Name', validators=[DataRequired(message='Name field is required.')])

    email = StringField(
        'Email', validators=[
            DataRequired(message='Email field is required.'), Email(message='Not a valid email address.'),            
            ])    
    message = TextField('Message', validators=[
        DataRequired(message='Message field is required.'), Length(min=4, message='Your message is too short.')
            ])
    submit = SubmitField('Submit')

    recaptcha = RecaptchaField()

class SignupForm(FlaskForm):
    email = TextField('Email', validators=[
        DataRequired(message='Email field is required.'), 
        Email(message='Not a valid email address.')
    ])
    password = PasswordField('Password', validators=[
        DataRequired(message='Password field is required.'), 
        Length(min=6, max=8, message='Password must be between 6 to 15 characters long.')
    ])

    repeat_password = PasswordField('Repeat Password ', validators=[
        DataRequired(message='Password field is required.'), EqualTo('password', message='Passwords does not match.')])

    gender = SelectField('Gender', choices=[('m', 'Male'),('f', 'Female'),('o', 'Others')])

    website = URLField('Website', validators=[DataRequired(message='Website is required.'), URL()])

    birthday = DateField('Your Birthday', validators=[DataRequired(message=' Your birthday is required.')])
        
    recaptcha = RecaptchaField()

# ______________________________________________________________________

@app.route('/')
def index():
    my_env = '{}'.format(app.config['CHECK_ENV'])
    return render_template('blank.html', content=my_env)


# _____________________________


@app.route('/contact', methods=['POST', 'GET'])
def contact():
    form = ContactForm() 

    if form.validate_on_submit():

        _name = form.name.data
        _email = form.email.data
        _message = form.message.data

        body = [
            {'Name': _name},
            {'Email': _email},
            {'Message': _message}
        ]

        return render_template('blank.html', content='form submitted successfully', body=body)

    return render_template('contact.html', form=form)

# _____________________________

@app.route('/signup', methods=['POST', 'GET'])
def signup():

    form = SignupForm()

    if form.validate_on_submit():

        email = form.email.data
        password = form.password.data
        repeat_password = form.repeat_password.data
        gender = form.gender.data
        website = form.website.data
        birthday = form.birthday.data

        # if password != repeat_password:
        #     flash('Password does not match.')
        #     return redirect(url_for('signup'))

        body = [
            {'email': email},
            {'password': password},
            {'repeat_password': repeat_password},
            {'gender': gender},
            {'website': website},
            {'birthday': birthday}
        ]


        return render_template('blank.html', content='Singup form submitted successfully', body=body)

    return render_template('sign_up.html', form=form)


print('>>>>', app.config['CHECK_ENV'])


# ______________________________________________________________________
if __name__ == "__main__":
    app.run()

  