# https://overiq.com/sqlalchemy-101/defining-schema-in-sqlalchemy-core/

# ______________________________________________________________________

# Defining Schema in SQLAlchemy Core 
# Creating tables

from sqlalchemy import create_engine
from sqlalchemy import MetaData, Table, Column
from sqlalchemy import String, Text, DateTime, Boolean, Integer
from sqlalchemy import ForeignKey
from sqlalchemy import PrimaryKeyConstraint, ForeignKeyConstraint, \
    UniqueConstraint, CheckConstraint

from datetime import datetime



engine = create_engine(
    'mysql+pymysql://CovSdqWkvi:2iYSrMxaM4@remotemysql.com/CovSdqWkvi', 
    pool_recycle=3600)

engine.connect() 

metadata = MetaData() 

# we are creating a atble blog: 
blog = Table('blog', metadata,
    Column('id', Integer(), primary_key=True),
    Column('post_title', String(255), nullable=False),
    Column('post_slug', String(200), nullable=False), 
    Column('content', Text(), nullable=False), 
    Column('published', Boolean(), default=False),
    Column('created_on', DateTime(), default=datetime.now), 
    Column('update_on', DateTime(), default=datetime.now, onupdate=datetime.now)
)


# ______________________________________________________________________

# Defining Relationships
# ________________________________
# One-to-Many relationship

users = Table('users', metadata,
    Column('id', Integer(), primary_key=True),
    Column('user', String(200), nullable=False)
)

posts = Table('posts', metadata,
    Column('id', Integer(), primary_key=True),
    Column('post_title', String(200), nullable=False), 
    Column('post_slug', String(200),  nullable=False),
    Column('content', Text(),  nullable=False),
    Column('user_id', ForeignKey("users.id"))
 )


# ________________________________
# One-to-One relationship

employees = Table('employees', metadata, 
    Column('employee_id', Integer(), primary_key=True), 
    Column('first_name', String(200), nullable=False), 
    Column('last_name', String(200), nullable=False), 
    Column('dob', DateTime(), nullable=False), 
    Column('designation', String(200), nullable=False)
)

employees_detairs = Table('employee_details', metadata,
    Column('employee_id', ForeignKey('employees.employee_id'), primary_key=True),
    Column('ssn', String(200), nullable=False),
    Column('salary', String(200), nullable=False),
    Column('blood_group', String(200), nullable=False),
    Column('residential_address', String(200), nullable=False)
)

# To establish a one-to-one relationship, we define a primary key and foreign
# key on the same column in the employee_details table.

# ________________________________
# Many-to-Many relationship

postcodes = Table('postcodes', metadata,
    Column('id', Integer(), primary_key=True),
    Column('post_title', String(200), nullable=False),
    Column('post_slug', String(200), nullable=False),
    Column('content', Text(), nullable=False)    
)

tages = Table('tages', metadata,
    Column('id', Integer(), primary_key=True),
    Column('tag', String(200), nullable=False),
    Column('tag_slag', String(200), nullable=False)
)

postcode_tage = Table('postcodes_tage', metadata,
    Column('postcodes_id', Integer(), ForeignKey('postcodes.id')),
    Column('tage_id', Integer(), ForeignKey('tages.id'))
)




# ______________________________________________________________________

# Defining Constraint at the Table level

# PrimaryKeyConstraint
# ForeignKeyConstraint
# UniqueConstraint
# CheckConstraint
# Index

# ____________________________
# Adding Primary Key Constraint using PrimaryKeyConstraint

# parents =Table('parents', metadata,
#     Column('acc_no', Integer()),
#     Column('acc_type', Integer(), nullable=False), 
#     Column('name', String(20), nullable=False), 
#     PrimaryKeyConstraint('acc_no', name='acc_no_pk')
# )

# Mainly, the PrimaryKeyConstraint is used to define a composite primary
# key (a primary key spanning more than one columns). For example:

parents =Table('parents', metadata,
    Column('acc_no', Integer()),
    Column('acc_type', Integer(), nullable=False), 
    Column('name', String(20), nullable=False), 
    PrimaryKeyConstraint('acc_no', 'acc_type', name='acc_no_pk')
)

# ____________________________
# Creating Foreign Key using ForeignKeyConstraint


# genitori = Table('genitori', metadata, 
#     Column('id', Integer(), primary_key=True), 
#     Column('name', String(50), nullable=False)
# )

# figlio = Table('figlio', metadata, 
#     Column('id', Integer(), primary_key=True), 
#     Column('genitore_id', Integer(), nullable=False), 
#     Column('name', String(50), nullable=False), 
#     ForeignKeyConstraint(['genitore_id'], ['genitori.id'])    
# )

# The real utility of ForeignKeyConstraint comes into play when you want
# to define composite foreign key (a foreign key which consists of more
# than one columns). For example:

genitori = Table('genitori', metadata, 
    Column('id', Integer()),
    Column('ssn', Integer()),
    Column('name', String(50), nullable=False),
    PrimaryKeyConstraint('id','ssn', name='uniq_1')
)


figlio = Table('figlio', metadata, 
    Column('id', Integer(), primary_key=True), 
    Column('genitore_id', Integer(), nullable=False), 
    Column('genitore_ssn', Integer(),nullable=False),
    Column('name', String(50), nullable=False), 
    ForeignKeyConstraint(['genitore_id', 'genitore_ssn'], 
                         ['genitori.id', 'genitori.ssn'])    
)

# _________________________________

# Creating Unique Constraint using UniqueConstraint



retailers = Table('retailers', metadata, 
    Column('id', Integer(), primary_key=True),
    Column('vat_no', Integer(), nullable=False),
    Column('name', String(255), nullable=False), 
    UniqueConstraint('vat_no', name='unique_vat_no')
)

# The UniqueConstraint is commonly used to define unique constraint
# containing multiple columns. For example:


boutiques = Table('boutiques', metadata, 
    Column('id', Integer(), primary_key=True),
    Column('acc_no', Integer(), nullable=False),
    Column('vat_no', Integer(), nullable=False),
    Column('name', String(255), nullable=False), 
    UniqueConstraint('acc_no','vat_no', name='uniq_1')
)


# _________________________________

# We can add CHECK constraint using the CheckConstraint construct.
operators = Table('operators', metadata, 
    Column('id', Integer(), primary_key=True), 
    Column('name', String(50), nullable=False), 
    Column('salary', Integer(), nullable=False),
    CheckConstraint('salary >= 1000', name='salary_check')
)
# Currently not supported by mysql




metadata.create_all(engine)
