# Field List: 
# ______________________________________________________________________

from flask import Flask, render_template, url_for
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField, IntegerField, BooleanField, Form, FormField, FieldList, FloatField
from wtforms.validators import Length, InputRequired, Email
from collections import namedtuple

# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'Thisisasecret!'
app.config['DEBUG'] = True

# ______________________________________________________________________

class CryptoBuy(Form):    
    crypto = StringField('Crypto')
    amount = FloatField('Amount')


class LoginForm(FlaskForm):
  
    year = IntegerField('Year', default='#')

    crypto_field = FieldList(FormField(CryptoBuy))
# ______________________________________________________________________

@app.route('/', methods = ['GET', 'POST'])
def index():
    
   
    Years = namedtuple('Years',['crypto', 'amount'])

    Y2016 = Years('btc', 2)
    Y2017 = Years('ada', 50000)
    Y2018 = Years('vet', 100000)

    crypto_data = {'crypto_field' : [Y2016, Y2017, Y2018]}

    form = LoginForm(data=crypto_data) 

    # if form.validate() <-- this will validate the form regardles the method 

    if form.validate_on_submit(): # <-- this will validate only if 'POST' is send
        year = form.year.data
        

        output = f'<h4> Crypto brought in {year}</h4><h5>'

        for c in form.crypto_field:
            output += 'Crypto: {} - '.format(c.crypto.data)
            output += 'Amount: {} '.format(c.amount.data)
            output += '<hr>'


        output += '</h5>'


        return output


    return render_template('index.html', form=form)

# ______________________________________________________________________

if __name__ == '__main__':
    app.run() 