# https://flask-admin.readthedocs.io/en/latest/
# https://flask-admin.readthedocs.io/en/latest/api/mod_contrib_sqla/
# https://flask-admin.readthedocs.io/en/latest/api/mod_model/#flask_admin.model.BaseModelView
# https://flask-admin.readthedocs.io/en/latest/api/mod_model/

# https://github.com/flask-admin/flask-admin/tree/master/flask_admin/templates/bootstrap3/admin

# https://flask-admin.readthedocs.io/en/latest/introduction/#customizing-built-in-views
# ______________________________________________________________________


from flask import Flask, redirect, render_template, url_for, request
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView 
from werkzeug.security import generate_password_hash

from os.path import dirname, join
from flask_admin.contrib.fileadmin import FileAdmin

from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user
# ______________________________________________________________________

app = Flask(__name__) 


app.config['SECRET_KEY'] = 'ThisIsASecret!'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com:3306/F2udETTsO6'
app.config['DEBUG'] = True

db = SQLAlchemy(app)
admin = Admin(app, template_mode='bootstrap3')
# ______________________________________________________________________
# flask-login settups:

login_manager = LoginManager(app) 

@login_manager.user_loader
def load_user(user_id):
    return F14_user.query.filter_by(id=int(user_id)).first()
# ______________________________________________________________________

# Database Tables:

class F14_user(db.Model, UserMixin):
    '''This class is used to create a user in with flask_sqlalchemy
    it inherit from db.Model to use flask_sqlalchemy functionality
    and from  UserMixin to use flask_login''' 
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20)) 
    password = db.Column(db.String(100))
    age = db.Column(db.Integer) 
    birthday = db.Column(db.DateTime)  
    comments = db.relationship('Comment', backref='user', lazy='dynamic')
 
    
    def __repr__(self):
        return '<User {}>'.format(self.username)



class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment_text = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('f14_user.id'))

    def __repr__(self):
        return '<Comment {}>'.format(self.id)

# ______________________________________________________________________  
# customizing the Model View by inheriting from it 
# and change the new class (F14_userView) attributes.

class F14_userView(ModelView):
    column_exclude_list = [''] # <-- To remove a column from the Admin 
    column_display_pk = True # <-- To show id
    can_create = True 
    can_delete = True 
    can_edit = True
    can_export = True

    create_modal =True
    page_size = 20

    def on_model_change(self, form, model, is_created): 
        ''' Perform some actions before a model is created or updated.'''

        model.password = generate_password_hash(model.password, method='sha256')
    
    def after_model_change(self, form, model, is_created): 
        ''' Perform some actions after a model was created or updated and 
            committed to the database'''
        pass

    inline_models = [Comment] # this will let you edit comment in F14_user page, (or add new ones)
    
    def is_accessible(self):
        return current_user.is_authenticated

    def inaccessible_callback(self, name, **kwargs):
        return '<h2>You are not logged in!</h2>'
    

    
# ______________________________________________________________________  
#     
admin.add_view(F14_userView(F14_user, db.session, name='Users')) # <-- used F14_userView to customize columns
admin.add_view(ModelView(Comment, db.session))



# db.create_all()
# db.drop_all()
# ______________________________________________________________________

# To upload from admin:

path = join(dirname(__file__), 'static', 'images')

admin.add_view(FileAdmin(path, '/images/', name='Uploads'))
# ______________________________________________________________________ 
# Adding a New page/view in flask-admin This time we inherit from 
# BaseView instead of ModelView since we are starting from scratch


class NotificationsView(BaseView):
    @expose('/')
    def index(self):
        return self.render('admin/notification.html')

admin.add_view(NotificationsView(name='Notifications', endpoint='notify'))

# ______________________________________________________________________
# Routes:

@app.route('/login') 
def login(): 
    user = F14_user.query.filter_by(id=1).first()
    login_user(user)
    return redirect(url_for('admin.index'))
    # Note: for this exercise the user.id is set to 1 by in actual it 
    # is set accordingly (normally from html)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('admin.index'))





# ______________________________________________________________________


if __name__ == '__main__':
    app.run() 