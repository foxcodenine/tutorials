# 18. Flask-WTF With Flask-Bootstrap
# 19. Populate Obj
# 20. Inline Validators
# 21. Information on Other Fields and Validators

# https://wtforms.readthedocs.io/en/latest/
# https://wtforms.readthedocs.io/en/stable/

# ______________________________________________________________________
from flask import Flask, render_template
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField, ValidationError
from wtforms.validators import InputRequired, Email, Length, AnyOf 
from flask_bootstrap import Bootstrap
from myfunctions import num_in_str 

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'thisisasecret'

bootstrap =Bootstrap(app)

# ______________________________________________________________________

class LoginForm(FlaskForm):
    username = StringField(
        'Username', validators=[InputRequired(), Email(message="I don't like your email")])
    password = PasswordField(
        'Password', validators=[InputRequired(), Length(min=4), 
                                AnyOf(['password', 'secret'])
                                ])

    # custom validator 
    def validate_username(self, field): 
        if num_in_str(field.data) == False:
            raise ValidationError('Username must have a number!')

class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password 

# ______________________________________________________________________

@app.route('/', methods=['GET', 'POST'])
def index():
    form = LoginForm()
    user = User(username='Chris', password='secret')
    print(user.username, ' ', user.password)
    if form.validate_on_submit():
        form.populate_obj(user)
        print(user.username, ' ', user.password)
        return 'Form Successfully Submitted!'
    return render_template('index.html', form=form)


# ______________________________________________________________________

if __name__ == '__main__':
    app.run()
 