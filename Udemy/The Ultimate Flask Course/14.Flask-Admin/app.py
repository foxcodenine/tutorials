from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView 
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
    # resiver = db.relationship('Comment', secondary='resivers', backref='user_recivers')
    

    def __repr__(self):
        return '<User {}>'.format(self.username)

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment_text = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('f14_user.id'))

    def __repr__(self):
        return '<Comment {}>'.format(self.id)

# db.Table('resivers',
#     db.Column('sender', db.String, db.ForeignKey('f14_user.username')),
#     db.Column('resiver', db.String, db.ForeignKey('f14_user.username')),
#     )

    

# ______________________________________________________________________  
#     
admin.add_view(ModelView(F14_user, db.session))
admin.add_view(ModelView(Comment, db.session))



# db.create_all()
# db.drop_all()
# ______________________________________________________________________


if __name__ == '__main__':
    app.run()