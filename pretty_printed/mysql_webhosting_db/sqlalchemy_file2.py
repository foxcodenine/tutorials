# one_to_many_relation 

from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com/F2udETTsO6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True 

db = SQLAlchemy(app)  

class Person(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    pets = db.relationship('Pet', backref='owner')

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20)) 
    owner_id = db.Column(db.Integer, db.ForeignKey('person.id'))



# creating tables:

# db.create_all()

# ______________________________________________________________________

# Inserting in the person table:

anthony = Person(name='Anthony')
# db.session.add(anthony)
# db.session.commit()


michelle = Person(name='Michelle')
# db.session.add(michelle)
# db.session.commit()


chris = Person(name='Chris')
# db.session.add(chris)
# db.session.commit()


mandy = Person(name='Mandy')
# db.session.add(mandy)
# db.session.commit()


# ______________________________________________________________________

# Inserting in the pet table:

# spot = Pet(name='Spot', owner = anthony)
# db.session.add(spot)

# brian = Pet(name='Brian', owner = michelle)
# db.session.add(brian)

# db.session.commit()

# ______________________________________________________________________

# getting a user from database and assign it a pet to it:

# some_owner = Person.query.filter_by(id=1).first() 
# jack = Pet(name='Jack', owner=some_owner)
# db.session.add(jack)
# db.session.commit()


# some_owner = Person.query.filter_by(id=1).first() 
# clifford = Pet(name='Clifford', owner=some_owner)
# db.session.add(clifford)
# db.session.commit() 

print('\n___________________________________________________________\n')

# getting data from database: 

person_id1 = Person.query.filter_by(id=1).first() 

# print('{} - {} - {} - {}'.format(
#            person_id1, person_id1.id, person_id1.name, person_id1.pets))

print('\n___________________________________________________________\n')

# getting data from database: 

select_pet = Pet.query.filter_by(id=1).first() 

# print(select_pet)
# print(select_pet.name)
# print(select_pet.owner)
# print(select_pet.owner.name)

print('\n___________________________________________________________\n')

