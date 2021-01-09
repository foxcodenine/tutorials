# Debuging Function 

from flask import Flask
from flask_sqlalchemy import SQLAlchemy , get_debug_queries
from sqlalchemy_file2 import Person, Pet

# ______________________________________________________________________
U7hQzPXXBW

app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com/F2udETTsO6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True 

db = SQLAlchemy(app)  
# ______________________________________________________________________

# Debuging Function:

def sql_debug(response):
    queries = list(get_debug_queries())
    query_str = ''
    total_duration = 0.0
    for q in queries:
        total_duration += q.duration
        stmt = str(q.statement % q.parameters).replace('\n', '\n       ')
        query_str += 'Query: {0}\nDuration: {1}ms\n\n'.format(stmt, round(q.duration * 1000, 2))

    print('=' * 80)
    print(' SQL Queries - {0} Queries Executed in {1}ms'.format(len(queries), round(total_duration * 1000, 2)))
    print('=' * 80)
    print(query_str.rstrip('\n'))
    print('=' * 80 + '\n') 

    return response 

app.after_request(sql_debug)

# ______________________________________________________________________

# Test Routes



@app.route('/') 
def index():
    return f'Database tables: <hr> {Person.__name__} <br> \n {Pet.__name__}'


@app.route('/person')
def person():    

    all_persons = Person.query.filter_by(id=1).one() 
    return f'{all_persons.name}'

# ______________________________________________________________________





if __name__ == '__main__':
    app.run()



