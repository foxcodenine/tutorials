# https://flask-admin.readthedocs.io/en/latest/
# https://flask-admin.readthedocs.io/en/latest/api/mod_contrib_sqla/
# https://flask-admin.readthedocs.io/en/latest/api/mod_model/#flask_admin.model.BaseModelView
# https://flask-admin.readthedocs.io/en/latest/api/mod_model/

# https://github.com/flask-admin/flask-admin/tree/master/flask_admin/templates/bootstrap3/admin

# https://flask-admin.readthedocs.io/en/latest/introduction/#customizing-built-in-views
# ______________________________________________________________________


from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView 
from werkzeug.security import generate_password_hash

from os.path import dirname, join
from flask_admin.contrib.fileadmin import FileAdmin
# ______________________________________________________________________

app = Flask(__name__) 


app.config['SECRET_KEY'] = 'ThisIsASecret!'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com:3306/F2udETTsO6'
app.config['DEBUG'] = True

db = SQLAlchemy(app)
admin = Admin(app, template_mode='bootstrap3')

# ______________________________________________________________________

# Database Tables:

class F14_user(db.Model):
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

# ______________________________________________________________________  
#     
admin.add_view(F14_userView(F14_user, db.session)) # <-- used F14_userView to customize columns
admin.add_view(ModelView(Comment, db.session))



# db.create_all()
# db.drop_all()
# ______________________________________________________________________

# To upload from admin:

path = join(dirname(__file__), 'static', 'images')

admin.add_view(FileAdmin(path, '/images/', name='Uploads'))


# ______________________________________________________________________


if __name__ == '__main__':
    app.run()