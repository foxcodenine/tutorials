# http://wtforms.simplecodes.com/docs/0.6/fields.html#basic-fields
# https://www.youtube.com/watch?v=vzaXBm-ZVOQ
# ______________________________________________________________________


from flask import Flask, render_template, url_for
from flask_wtf import FlaskForm, RecaptchaField
from wtforms import StringField, PasswordField 
from wtforms.validators import InputRequired, Length, AnyOf
# ______________________________________________________________________


app = Flask(__name__) 

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'Thisisasecret!' 
app.config['RECAPTCHA_PUBLIC_KEY'] = '6Lc6nsAUAAAAAOFGdJSc0w9UEpcqiDY2wt8kjse6'
app.config['RECAPTCHA_PRIVATE_KEY'] = '6Lc6nsAUAAAAAO_Sg79VFqPZO1iS05NT-Q4RZnKw'
app.config['TESTING'] = True

# ______________________________________________________________________

class LoginForm(FlaskForm):     
    
    username = StringField('username', validators=[InputRequired(message='Username required')])    
    password = PasswordField('password', validators=[
        InputRequired(), Length(min=5), AnyOf(values='secret, password')]) 
    recaptcha = RecaptchaField()
 

# ______________________________________________________________________


@app.route('/form', methods=['GET', 'POST'])
def form(): 
    form = LoginForm()

    if form.validate_on_submit():

        un = form.username.data
        pw = form.password.data

        return f'<h3>The form has been submitted!</h3><h4>username: {un}<br>password: {pw}</h4>'
    

    return render_template('form.html', form=form) 

# ______________________________________________________________________

if __name__ == '__main__':
    app.run()