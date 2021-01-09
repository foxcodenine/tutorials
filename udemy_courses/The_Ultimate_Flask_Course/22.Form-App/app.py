# https://pythonise.com/series/learning-flask/flask-configuration-files
# https://www.atlassian.com/git/tutorials/saving-changes/gitignore#git-ignore-patterns
# https://flask.palletsprojects.com/en/1.1.x/patterns/favicon/
# https://strftime.org/

# flask_security
# https://pythonhosted.org/Flask-Security/models.html?highlight=register%20model   <- Models
# https://pythonhosted.org/Flask-Security/api.html?highlight=login_required#flask_security.decorators.login_required  <- login_required
# https://pythonhosted.org/Flask-Security/customizing.html <- views
# https://pythonhosted.org/Flask-Security/configuration.html  <- configuration

# Creating Many-To-Many Relationships in Flask-SQLAlchemy
# https://www.youtube.com/watch?time_continue=1093&v=OvhoYbjtiKc&feature=emb_logo

# how to implement not-required DateField using Flask-WTF
# validators=(validators.Optional()
# onchange="this.form.submit()

# Python __str__ and __repr__
# https://www.journaldev.com/22460/python-str-repr-functions#python--str

# pip install bcrypt
# pip install flask_wtf

from flask import Flask, render_template, redirect, url_for, flash, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin, current_user, login_required, roles_accepted
from wtforms import StringField, TextAreaField, SelectField, validators
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

roles_user = db.Table('roles_user',
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))
)
class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

    def __repr__(self):
        return self.name

    def __str__(self):
        return self.name


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    name = db.Column(db.String(255))
    username = db.Column(db.String(255), unique=True)
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())

    # this is use in  many-to-many relationships or many-to-one
    roles = db.relationship('Role', secondary=roles_user, backref=db.backref('users', lazy='dynamic'))

    # this is use in  one-to-many/one-to-one relationships
    replies = db.relationship('Reply',  backref='users', lazy='dynamic')

    def status(self):
        user = User.query.filter_by(id =self.id).first()
        return user.roles

class Thread(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    description = db.Column(db.String(250))
    date_created = db.Column(db.DateTime)

    # this is use in  one-to-many/one-to-one relationships
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

    blk_this_user = SelectField('Block this user', choices=([('/', '/'), ('blocked', 'Blocked'), ('unblocked', 'Unblock')]), validators=[validators.Optional()], default='/')
    set_to_admin= SelectField('Set to Admin', choices=([('/', '/'), ('add', 'Admin'), ('remove', 'Remove')]), validators=[validators.Optional()], default='/')


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

    if 'blocked'in current_user.status():
        return redirect(url_for('security.logout'))

    return render_template('profile.html', current_user=current_user)
# ___________________________________

@app.route('/thread/<thread_id>', methods=['POST', 'GET'])
@login_required
def thread(thread_id):

    if 'blocked'in current_user.status():
        return redirect(url_for('security.logout'))

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
@roles_accepted('admin')
def admin():

    if 'blocked'in current_user.status():
        return redirect(url_for('security.logout'))

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

@app.route('/add_admin/<user_id>', methods=['POST'])
def add_admin(user_id):

    form = AdminForm()

    set_admin = form.set_to_admin.data

    user = User.query.filter_by(id=user_id).first()

    admin_role = Role.query.filter_by(name='admin').first()

    if set_admin == 'add':
        if 'admin' in user.status():
            pass
        else:
            admin_role.users.append(user)
            db.session.commit()

    if set_admin == 'remove':
        if 'admin' not in user.status():
            pass

        else:
            admin_role.users.remove(user)
            db.session.commit()

    return redirect(url_for('admin'))


# ___________________________________

@app.route('/block_user/<user_id>', methods=['POST'])
def block_user(user_id):

    form = AdminForm()

    blk_user = form.blk_this_user.data

    user = User.query.filter_by(id=user_id).first()

    blocked_role = Role.query.filter_by(name='blocked').first()

    if blk_user == 'blocked':
        if 'blocked' in user.status():
            pass
        else:
            blocked_role.users.append(user)
            db.session.commit()

    if blk_user == 'unblocked':
        if 'blocked' not in user.status():
            pass

        else:
            blocked_role.users.remove(user)
            db.session.commit()

    return redirect(url_for('admin'))
# ___________________________________

@app.route('/test_add_admin')
def test_add_admin():
    admin_role = Role.query.filter_by(name='admin').first()

    user_to_add = User.query.filter_by(id=1).first()

    admin_role.users.append(user_to_add)

    db.session.commit()

    return '<h1>testpage</h1>'
# ___________________________________

@app.route('/test_remove_admin')
def test_remove_admin():
    admin_role = Role.query.filter_by(name='admin').first()

    user_to_add = User.query.filter_by(id=1).first()

    admin_role.users.remove(user_to_add)

    db.session.commit()

    return '<h1>testpage</h1>'

# ___________________________________

@app.route('/test')
def test():


    user_to_add = User.query.filter_by(id=1).first()

    print(user_to_add.status())

    return '<h1>testpage</h1>'

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
