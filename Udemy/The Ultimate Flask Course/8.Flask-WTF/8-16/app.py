# 8. Prepopulating Data
# 9. More on CSRF
# 10. Jinja Macro
# 11. Form Inheritance
# 12. Field Enclosures
# 14. Delete Field
# 15. Dynamic Forms
# ______________________________________________________________________

from flask import Flask, render_template, url_for
from flask_wtf import FlaskForm 
from wtforms import StringField, PasswordField, IntegerField, BooleanField, Form, FormField
from wtforms.validators import Length, InputRequired, Email

# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'Thisisasecret!'
app.config['DEBUG'] = True
app.config['WTF_CSRF_ENABLED'] = True
app.config['WTF_CSRF_SECRET_KEY'] = 'A_different_secret_key' # <- if not given, the 'SECRET_KEY' will be used.
app.config['WTF_CSRF_TIME_LIMIT'] = 120 # <- set the time limmit in sec, default 3600

# ______________________________________________________________________
# createing this class (Telephone) to be used with field Enclosures 
class TelephoneForm(Form):
    area_code = IntegerField('Area Code')
    landline = IntegerField('Landline')
    mobile = IntegerField('Mobile')

class LoginForm(FlaskForm):
    username = StringField(
    'Username', validators=[InputRequired(message='A Username Is Required!'), Length(min=4, max=12)]
    )

    password = PasswordField(
    'Password', validators=[InputRequired(), Length(min=4, message='Password should be < 4')]
    )
    
    age = IntegerField('Age', default='#')
    maltese = BooleanField('Maltese')
    email = StringField('Email', validators=[Email()], default='test@test.com')
    phone = FormField(TelephoneForm)               # <- field Enclosures
    emergency_contact = FormField(TelephoneForm)   # <- field Enclosures


class NameForm(LoginForm):
    first_name = StringField('First Name')
    middle_name = StringField('Middle Name')
    last_name =  StringField('Last Name')
# ______________________________________________________________________

# This class is used to prepopulat the forms:

class User:
    def __init__(self, username, email, age):
        self.username = username 
        self.email = email 
        self.age = age 

        
# ______________________________________________________________________

@app.route('/', methods = ['GET', 'POST'])
def index():

    myuser = User('FoxCode', 'chrismariojimmy@yahoo.com', 35) # object initiated with the data as par..

    form = NameForm(obj=myuser, csrf_enabled=True) # object passed in the LoginForm 
                                                    # you can also enable or desable the csrf here
   
    del form.middle_name

    if form.validate_on_submit(): # <-- this will validate only if 'POST' is send
        un = form.username.data
        pw = form.password.data
        age = form.age.data
        mt = form.maltese.data
        email = form.email.data
        fn = form.first_name.data

        if form.middle_name:
            mn = form.middle_name.data
            middlename = f'<h4>middle name: {mn}</h4>'
        else:
            middlename = ' '

        ln = form.last_name.data
        ar = form.phone.area_code.data 
        ll = form.phone.landline.data 
        mb = form.phone.mobile.data
        ear = form.emergency_contact.area_code.data 
        ell = form.emergency_contact.landline.data 
        emb = form.emergency_contact.mobile.data

        return f'<h2>The form has been submited with the following details:</h2>\
                <h4>username: {un}</h4>\
                <h4>password: {pw}</h4><h4>age: {age}</h4>\
                <h4>maltese: {mt}</h4>\
                <h4>email: {email}</h4>\
                <h4>first name: {fn}</h4>\
                {middlename}\
                <h4>last name: {ln}</h4>\
                <h4>landline: {ar}-{ll}</h4>\
                <h4>mobile: {ar}-{mb}</h4>\
                <h4>emergency landline: {ear}-{ell}</h4>\
                <h4>emergency mobile: {ear}-{emb}</h4>'


    return render_template('index.html', form=form)

# ______________________________________________________________________

@app.route('/dynamic', methods=['POST', 'GET'])
def dynamic():

    class DynamicForm(FlaskForm):
        pass 

    DynamicForm.name = StringField('Name')
    DynamicForm.surname = StringField('Surname')

    names = ['middlename', 'nickname', 'medianame']

    for n in names:
        setattr(DynamicForm, n, StringField(n.title()))


    form = DynamicForm()


    if form.validate_on_submit():

        return '<h3>This form has been submited:</h3><h5>name: {} - surname: {}</h5>'.format(
            form.name.data, form.surname.data
        )

    return render_template('dynamic.html', form=form, names=names)

    

# ______________________________________________________________________


if __name__ == '__main__':
    app.run() 
