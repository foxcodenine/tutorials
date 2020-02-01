

























from sqlalchemy import create_engine, Table, Column, String, Integer, MetaData
from sqlalchemy import DateTime, ForeignKey, Numeric, CheckConstraint, DefaultClause
from sqlalchemy.sql import func, text
from datetime import datetime


engine = create_engine('mysql+pymysql://root:*****@localhost/e_commerce')
metadata = MetaData(engine)

customers = Table('customers', metadata,
    Column('id', Integer(), primary_key=True), 
    Column('first_name', String(50), nullable=False),   
    Column('last_name', String(50), nullable=True),   
    Column('username', String(50), nullable=True),   
    Column('email', String(50), nullable=True), 
    Column('address', String(255), nullable=True),   
    Column('town', String(50), nullable=True),   
    Column('created_on', DateTime(), server_default=func.now()),   
    Column('update_on', DateTime(), server_default=text('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
)

items = Table('items', metadata, 
    Column('id', Integer(), primary_key=True),
    Column('name', String(50), nullable=False),
    Column('cost_price', Numeric(8, 2), nullable=False),
    Column('selling_price', Numeric(8, 2), nullable=False),
    Column('quantity',Integer(), nullable=False, default=0),
    CheckConstraint('cost_price >= 0'),
    CheckConstraint('selling_price >= 0'),
    CheckConstraint('quantity >= 0')     
)



metadata.drop_all(engine)
metadata.create_all(engine)