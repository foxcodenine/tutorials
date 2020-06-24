# pip install python-dotenv, Flask , Flask-WTF
# https://john.soban.ski/add-recaptcha-to-your-flask-application.html
# https://www.google.com/search?client=firefox-b-d&q=flask+paypal
# ______________________________________________________________________



from flask import Flask, render_template, redirect, url_for, request

from flask_wtf import FlaskForm, RecaptchaField
from wtforms import StringField, TextField, SubmitField
from wtforms.validators import DataRequired, Length, Email, email
# ______________________________________________________________________

app = Flask(__name__)

if app.config['ENV'] == 'development':
    app.config.from_object('config.ConfigDevelopment')
else:
    app.config.from_object('config.ConfigProduction')


app.config['RECAPTCHA_PUBLIC_KEY'] = '6Lc6nsAUAAAAAOFGdJSc0w9UEpcqiDY2wt8kjse6'
app.config['RECAPTCHA_PRIVATE_KEY'] = '6Lc6nsAUAAAAAO_Sg79VFqPZO1iS05NT-Q4RZnKw'
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
        return render_template('blank.html', content='form submitted successfully')

    return render_template('contact.html', form=form)

# ______________________________________________________________________
if __name__ == "__main__":
    app.run()

  