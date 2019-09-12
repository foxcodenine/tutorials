from flask import Flask

app = Flask(__name__) 


@app.route('/')
def index():
    return'<h1>Hello world!<h1>'

#_______________________________________________________________________


# in this route we define the methods (you can also set it to method)
# also we added an other page named 'home'
@app.route('/home',methods=['POST','GET'])
def home():
    return '<h2>You are on the home page..</h2>'    

#_______________________________________________________________________

# here we added a variable in our route 'name'
# in the second route we set the name variable to take a defaults value
@app.route('/profile/<name>', methods=['GET']) 
@app.route('/profile/', methods=['Get'], defaults={'name' : 'Default'})
def profile(name):
    return '<h1>Hello {!r}! This is your profile page!</h1>'.format(name) 

#_______________________________________________________________________


# in this route we have set the varable 'number' to an 'int'
@app.route('/id-number/<int:number>')
def idnumber(number):
    return f'<h3>USER id: {number}</h3>'

#_______________________________________________________________________

from flask import jsonify

# this route return json syntex instead of HTML
@app.route('/json')
def json():
    return jsonify({'key' : 'value', 'listkey' : [1,2,3,4,5]})

#_______________________________________________________________________

from flask import request

# geting values from a query string

@app.route('/query')
def query():
    name = request.args.get('name', '????')
    location = request.args.get('location', '????')
    return '<h2>Hi {!r}. You are from {!r}. You are on the query \
        page!</h2>'.format(name, location)

#_______________________________________________________________________

# how to send and retrieve date from a form

# sending data:
@app.route('/theform') 
def theform():
    return '''<form method="POST" action="/process">
                <input type="test" name="name" value="Name">
                <input type="test" name="location" value="Loction">
                <input type="submit" value="Sumbit">
              <form>'''

# retrieving data:
@app.route('/process', methods=['POST'])
def process():
    name = request.form['name']
    location = request.form['location']
    return '<h3>Hello {!r},  you are from {!r}. \
    You have submitted the form successfully</h3>'.format(name, location)



#_______________________________________________________________________

# geting values back from a json object

from random import choice

@app.route('/processjson', methods=['POST']) 
def processjson():

    data = request.get_json() 

    name = data["name"] 
    location = data["location"]
    randomlist = data["randomlist"]

    return jsonify({
        'result' : 'Success!', 
        'name' : name,
        'location' : location,
        'randomkeyinlist' : choice(randomlist)})


#_______________________________________________________________________

# Getting the method that was used for the request.

# combining the 'GET' and 'POST' request in one route and process 
# them differently depending on the method that was used

@app.route('/caseref',  methods=['GET', 'POST']) 
def caseref():
    
    if request.method == 'GET' :    # here we a spesifing the 'GET' methode
                                    # and below we are changing it to 'POST'
        return '''<body>
                    <form method="POST" action="/caseref">  
                        <select name="prifix">
                            <option value="PA">PA</option>
                            <option value="DN">DN</option>
                            <option value="RG">RG</option>
                        </select>
                        <input type="number" name="number" size="5">
                        <input type="number" name="year">
                        <input type="submit">
                    </form>
                  </body>'''

    else:
        prifix = request.form['prifix']
        number = request.form['number']
        year = request.form['year']


        return f'<h2>Your Case is {prifix}{number}-{year}</h2>'

#_______________________________________________________________________




#_______________________________________________________________________

if __name__ == '__main__':
    app.run(debug=True)


