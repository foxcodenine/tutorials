# 18. Flask-WTF With Flask-Bootstrap

# ______________________________________________________________________
from flask import Flask, render_template
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField 
from wtforms.validators import InputRequired, Email, Length, AnyOf 

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'thisisasecret'

# ______________________________________________________________________

class LoginForm(FlaskForm):
    username = StringField(
        'Username', validators=[InputRequired(), Email(message="I don't like your email")])
    password = PasswordField(
        'Password', validators=[InputRequired(), Length(min=4), 
                                AnyOf(['password', 'secret'])
                                ])

# ______________________________________________________________________

@app.route('/', methods=['GET', 'POST'])
def index():
    form = LoginForm()
    if form.validate_on_submit():
        return 'Form Successfully Submitted!'
    return render_template('index.html', form=form)


# ______________________________________________________________________

if __name__ == '__main__':
    app.run()
 