# Tutorial - 1 - Basic App
# Tutorial - 2 - Routing / Mapping

from flask import Flask 

app = Flask(__name__) 

# @ singnifies a decorator:- 
# way to wrap a function and modifying its behavior
@app.route('/') 
def index(): 
    return 'This is the homepage'

@app.route('/quote/<variable>')
def quote(variable):
    return '<h1>{}</h1>'.format(variable)

# int:id_number means id_number should be an int
@app.route('/post/<int:id_number>')
def show_id_number(id_number):
    return '<h2>my id is {}M</h2>'.format(id_number)

if __name__ == '__main__':
    app.run(debug=True)

   
