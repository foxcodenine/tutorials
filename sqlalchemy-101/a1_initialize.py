# https://overiq.com/sqlalchemy-101/intro-to-sqlalchemy/
# https://overiq.com/sqlalchemy-101/installing-sqlalchemy-and-connecting-to-database/

# ______________________________________________________________________

# Installing SQLAlchemy

# pip install sqlalchemy

# in shell :
# >>> import sqlalchemy
# >>> sqlalchemy.__version__

# ______________________________________________________________________

# Installing DBAPI

# pip install PyMySQL or MySQL-Connector, CyMySQL, MySQL-Python

# ______________________________________________________________________

# Creating Engine

from sqlalchemy import create_engine

# code examples to create an engine for some popular databases:
 
# Connecting to MySQL server at localhost using PyMySQL DBAPI
engine = create_engine("mysql+pymysql://root:pass@localhost/mydb")
 
# Connecting to MySQL server at 23.92.23.113 using mysql-python DBAPI
engine = create_engine("mysql+mysqldb://root:pass@23.92.23.113/mydb")
 
# Connecting to PostgreSQL server at localhost using psycopg2 DBAPI
engine = create_engine("postgresql+psycopg2://root:pass@localhost/mydb")
 
# Connecting to Oracle server at localhost using cx-Oracle DBAPI
engine = create_engine("oracle+cx_oracle://root:pass@localhost/mydb")
 
# Connecting to MSSQL server at localhost using PyODBC DBAPI
engine = create_engine("oracle+pyodbc://root:pass@localhost/mydb")

engine = create_engine('sqlite:///sqlite3.db') # using relative path
engine = create_engine('sqlite:////path/to/sqlite3.db') # using absolute path

# ______________________________________________________________________

# Connecting to the Database

# engine.connect() # connect to the database


from sqlalchemy import create_engine
 
engine = create_engine("postgres+psycopg2://postgres:pass@localhost/sqlalchemy_tuts")
engine.connect()
 
print(engine)

# DB NEED TO BE CREATED AHEAD OR YOU WILL GET AN OperationalError.

# ______________________________________________________________________

# Some Additional Arguments

'''
The following table lists some additional keyword arguments that you can pass to
the create_engine() function.

echo    A boolean argument if set to True, the engine will log all the SQL it is
        currently executing to the standard output. By default, it is set to
        False.

pool_size   It specifies the number of connection to keep in the connection
            pool. Its default value is 5

max_overflow    It specifies the number of connections that can be opened beyond
                the pool_size setting, by default it is set to 10.

encoding        It specifies the encoding to use by SQLAlchemy. By default, it
                is set to utf-8. Note that it doesn't control the encoding
                scheme of the database.

isolation_level The isolation level to use. This setting control how a
                transaction will be isolated from the other transactions.
                Different databases support different isolation levels. To learn
                more about the isolation levels check the database
                documentation.
'''

from sqlalchemy import create_engine
 
engine = create_engine(
    "postgres+psycopg2://postgres:pass@localhost/sqlalchemy_tuts",
    echo=True, pool_size=6, max_overflow=10, encoding='latin1'
)
 
engine.connect()
 
print(engine)