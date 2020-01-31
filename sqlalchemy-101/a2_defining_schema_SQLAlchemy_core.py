# https://overiq.com/sqlalchemy-101/defining-schema-in-sqlalchemy-core/

# ______________________________________________________________________

# Defining Schema in SQLAlchemy Core 
# Creating tables

from sqlalchemy import create_engine
from sqlalchemy import MetaData, Table, Column
from sqlalchemy import String, Text, DateTime, Boolean, Integer
from sqlalchemy import ForeignKey

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
    Column('employee_id', ForeignKey('employees. employee_id'), primary_key=True),
    Column('ssn', String(200), nullable=False),
    Column('salary', String(200), nullable=False),
    Column('blood_group', String(200), nullable=False),
    Column('residential_address', String(200), nullable=False)
)

# To establish a one-to-one relationship, we define a primary key and foreign
# key on the same column in the employee_details table.

# ________________________________
# Many-to-Many relationship


# metadata.create_all(engine)