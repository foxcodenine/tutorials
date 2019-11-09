from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, RadioField, SelectField
from wtforms.validators import InputRequired 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisisasecret!'
app.config['DEBUG'] = True

class MyFrom(FlaskForm):
    email = StringField('Email', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    textarea = TextAreaField('Teaxtarea')
    radio = RadioField('Radios', default='option1', choices=[('option1', 'Option one is this'), ('option2', 'Option two can be something else')])
    select = SelectField('Select', choices=[('1','1'),('2','2'),('3','3'),('4','4'),('5','5')])


@app.route('/', methods=['GET', 'POST'])
def form():
    form = MyFrom()
    
    if form.validate_on_submit():

        email = form.email.data
        password = form.password.data
        textarea = form.textarea.data
        radio = form.radio.data
        select = form.select.data

        return render_template('results.html', email=email, password=password, textarea=textarea, radio=radio, select=select)

    return render_template('form.html', form=form)

if __name__=='__main__':
    app.run()        