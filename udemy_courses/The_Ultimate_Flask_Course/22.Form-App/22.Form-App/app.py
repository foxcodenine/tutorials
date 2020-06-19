# https://pythonise.com/series/learning-flask/flask-configuration-files
# https://www.atlassian.com/git/tutorials/saving-changes/gitignore#git-ignore-patterns
# https://flask.palletsprojects.com/en/1.1.x/patterns/favicon/
# https://strftime.org/

# flask_security
# https://pythonhosted.org/Flask-Security/models.html?highlight=register%20model   <- Models
# https://pythonhosted.org/Flask-Security/api.html?highlight=login_required#flask_security.decorators.login_required  <- login_required
# https://pythonhosted.org/Flask-Security/customizing.html <- views
# https://pythonhosted.org/Flask-Security/configuration.html  <- configuration 

# pip install bcrypt
# pip install flask_wtf

from flask import Flask, render_template, redirect, url_for, flash, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin, current_user, login_required
from wtforms import StringField, TextAreaField, SelectField
from flask_wtf import FlaskForm
from datetime import datetime

from flask_mail import Mail

from flask_security.forms import RegisterForm, ConfirmRegisterForm

# <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">


app = Flask(__name__)

app.config.from_object("config.DevelopmentConfig")

# if app.config["ENV"] == "production":
#     app.config.from_object("config.ProductionConfig")
# else:
#     app.config.from_object("config.DevelopmentConfig")


# ______________________________________________________________________


db = SQLAlchemy(app)
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

mail = Mail(app)

# ______________________________________________________________________

roles_user = db.Table('roles_users', 
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))
)



class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    descripton = db.Column(db.String(255))



class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    name = db.Column(db.String(255))
    username = db.Column(db.String(255), unique=True)
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())

    # this is use in  many-to-many relationships
    roles = db.relationship('Role', secondary=roles_user, backref=db.backref('users', lazy='dynamic'))
    
    replies = db.relationship('Reply',  backref='users', lazy='dynamic')
    

class Thread(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    description = db.Column(db.String(250))
    date_created = db.Column(db.DateTime)

    # this is use in  many-to-one/one-to-one relationships
    replies = db.relationship('Reply', backref='thread', lazy='dynamic')

    def last_reply_date(self):
        last_reply = Reply.query.filter_by(thread_id = self.id).order_by(Reply.date_created.desc()).first()

        if last_reply:
            return last_reply.date_created
        
        return self.date_created 


class Reply(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    thread_id= db.Column(db.Integer, db.ForeignKey('thread.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    message = db.Column(db.String(255))
    date_created = db.Column(db.DateTime())
   


# class TestDB(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(255), unique=True)

# ______________________________________________________________________

class ExtendRegisterForm(RegisterForm):
    name = StringField('Name')
    username = StringField('Username')

class ExtendConfirmRegisterForm(ConfirmRegisterForm):
    name = StringField('Fullname')
    username = StringField('Username')

class NewThread(FlaskForm):
    title = StringField('Title')
    description = StringField('Description')

class NewReply(FlaskForm):
    message = TextAreaField('Message')

class AdminForm(FlaskForm):
    select_by = SelectField('Select by:', choices=([('id', 'ID'), ('email', 'Email'), ('username', 'Username')]))
    user_data = StringField('User data')
    

# ______________________________________________________________________

user_datastore = SQLAlchemyUserDatastore(db, User, Role)
Security = Security(app, user_datastore, register_form=ExtendRegisterForm, confirm_register_form=ExtendConfirmRegisterForm)


# ______________________________________________________________________
import os 
from flask import send_from_directory  
@app.route('/favicon.ico') 
def favicon():     
    return send_from_directory(os.path.join(app.root_path, 'static'), 
                                   'Favicon1.ico', mimetype='image/vnd.microsoft.icon')

# ______________________________________________________________________

@app.route('/', methods=['GET', 'POST'])
def index():

    form = NewThread()

    if form.validate_on_submit():

        title = form.title.data 
        description = form.description.data

        existing_titles  = []
        for trd in Thread.query.all():
            existing_titles.append(trd.title)
        
        if title in existing_titles :
            flash('Title in use!')
            return redirect(url_for('index'))

        new_thread = Thread(title=title, description=description, date_created = datetime.now())
        db.session.add(new_thread)
        db.session.commit()

        return redirect(url_for('index') )


    all_threads = Thread.query.all()

    return render_template('index.html', form=form, threads=all_threads)
# ___________________________________

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html', current_user=current_user)
# ___________________________________

@app.route('/thread/<thread_id>', methods=['POST', 'GET'])
def thread(thread_id):

    form = NewReply()
    
    thread = Thread.query.filter_by(id=thread_id).first() # <- A

    if form.validate_on_submit():

        new_message = form.message.data 

        reply = Reply(
            user_id=current_user.id, 
            message=new_message, 
            date_created=datetime.now()
        )

        thread.replies.append(reply)   # <- A
        # No need to add since it is appended to the current thread  (A)
        db.session.commit()

        return redirect(url_for('thread', thread_id=thread_id, current_user=current_user))


    # Get replied for current thread

    thread_replies = thread.replies.all()



    return render_template(
                            'thread.html', 
                            thread=thread, 
                            form=form, 
                            replies=thread_replies
                                                    )

# ___________________________________


@app.route('/base')
def base():
    return render_template('base.html')


# ___________________________________


@app.route('/admin/', methods=['Post', 'GET'])
def admin():
    form = AdminForm()

    blk_user = None
    set_admin = None

    if form.validate_on_submit():
        
        if request.form['submit1'] == 'Search User':
            print('user user')

            select_by = form.select_by.data
            user_data = form.user_data.data

            if select_by == 'id':
                blk_user = User.query.filter_by(id = f'{user_data}').first()
            elif select_by == 'email':
                blk_user = User.query.filter_by(email = f'{user_data}').first()
            else:
                blk_user = User.query.filter_by(username = f'{user_data}').first()

        elif request.form['submit1'] == 'Search Admin':
            print('admin admin')

            select_by = form.select_by.data
            user_data = form.user_data.data

            if select_by == 'id':
                set_admin = User.query.filter_by(id = f'{user_data}').first()
            elif select_by == 'email':
                set_admin = User.query.filter_by(email = f'{user_data}').first()
            else:
                set_admin = User.query.filter_by(username = f'{user_data}').first()
        
        else:
            print('not not not')


  
        

    return render_template(
        'admin.html',
        current_user=current_user, 
        form=form, 
        blk_user=blk_user, 
        set_admin=set_admin
    )

# ___________________________________

# ___________________________________

# @app.route('/login')
# def login():
#     return render_template('login.html')

# @app.route('/register')
# def register():
#     return render_template('register.html')


# ______________________________________________________________________
# import flask_security
# import os

# print('\n>>>>>>>> >>',os.path.dirname(flask_security.__file__))

print('>>>>',app.config['SECRET_KEY'])

# ______________________________________________________________________

if __name__ == '__main__':
    manager.run()



# 6dc1a5f8c57b_.py
# cd87ca91ac81_.py
# 345dd4986ea6_.py