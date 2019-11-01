# http://wtforms.simplecodes.com/docs/0.6/fields.html#basic-fields
# https://www.youtube.com/watch?v=vzaXBm-ZVOQ
# ______________________________________________________________________


from flask import Flask, render_template, url_for
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField 
# ______________________________________________________________________


app = Flask(__name__) 

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'Thisisasecret!' 

# ______________________________________________________________________

class LoginForm(FlaskForm):
    username = StringField('username')
    password = PasswordField('password') 
 

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