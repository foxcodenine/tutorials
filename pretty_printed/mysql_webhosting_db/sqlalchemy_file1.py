# pip install Flask-SQLAlchemy 
# pip install flask_sqlalchemy
# https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/

from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
# you can also Flask_sqlalchemy import SQLAlchemy instead 


app = Flask(__name__)

# ______________________________________________________________________

# Connecting to Database and instantiate a db object:

# mysql://F2udETTsO6:OcRns5JDpa@remotemysql.com:3306/F2udETTsO6 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com/F2udETTsO6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True

db = SQLAlchemy(app)

# class Test(db.Model):
#     id = db.Column(db.Integer, primary_key=True)

# ______________________________________________________________________ 

# Mapping the Table to a python object:
# Create a class that defines what the table is and what table are in the table:


class Cats(db.Model):
    __tablename__ = 'cats'
    cat_id = db.Column('cat_id', db.Integer, primary_key=True)
    name = db.Column('name', db.Unicode)
    breed = db.Column('breed', db.Unicode)
    sex = db.Column('sex', db.Unicode)
    months = db.Column('months', db.Integer)

    # to insert into the table:
    def __init__(self, cat_id, name, breed, sex, months):
        self.cat_id = cat_id
        self.name = name 
        self.breed = breed
        self.sex = sex
        self.months = months

# ______________________________________________________________________

# Selecting all cats from table cats:
all_cats = Cats.query.all() 
print(all_cats) 

# Itrating over all_cats and printing the cat.name (cats column)
for cat in all_cats:
    print(cat.name)


# Selecting one cat and filter_by cat_id:
cat1 = Cats.query.filter_by(cat_id=1).first()
print(cat1)
print(cat1.breed)

# ______________________________________________________________________

# inserting new record into table:

'''
new_cat = Cats(15, 'Dorothy', 'tabby', 'female', 12)
db.session.add(new_cat)
db.session.commit()
'''

# ______________________________________________________________________

# To update a record: 

'''
update_cat = Cats.query.filter_by(name='Dorothy').first() 
update_cat.months = 6
db.session.commit()
'''

# ______________________________________________________________________

# To delete a record:

'''
delete_cat = Cats.query.filter_by(name='Dorothy').first() 
db.session.delete(delete_cat)
db.session.commit()
'''



# if __name__ == '__main__':
#     app.run()