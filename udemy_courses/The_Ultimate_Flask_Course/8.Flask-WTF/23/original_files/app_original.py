from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, RadioField, SelectField
from wtforms.validators import InputRequired 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisisasecret!'
app.config['DEBUG'] = True

class MyFrom(FlaskForm):
    pass

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form_original.html')

if __name__=='__main__':
    app.run()