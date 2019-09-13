from flask import Flask
import os

# this gets the current file name
filename = os.path.basename(__file__)

app = Flask(__name__) 

@app.route('/')
def index():
    return f'<h4>Hi this is the index page from modle {filename!r} </h4>'


# Passing data using a query string
# Query string is the part of a uniform resource locator (URL) 
# which assigns values to specified parameters.
# eg:  http://site/page?key1=value1&key2=value2


from flask import request

@app.route('/flights')
def flights():
    origin = request.args.get('origin')
    destination = request.args.get('destination') 

    return ''' <h2>FLIGHT</h2>
            <h3>Origin: {0!r}  Destination: {1!r}</h3>
        '''.format(origin, destination)

#-----------------------------------------------------------

# how to send and retrieve date from a form

# sending data:
@app.route('/form-input')
def form_in():
    return '''  <body>
                    <form action="/form-out" method="POST">
                        <p>
                            NAME: <input type="text" name="name"><br>
                            SURNAME: <input type="text" name="surname"><br>
                            AGE: <input type="text" name="age"><br>
                            LOCATION: <input type="text" name="location"><br>
                            E-MAIL: <input type="text" name="email"><br>
                            <input type="submit" value="send">
                        </p>
                    </form>
                </body>'''


# retrieving data:
@app.route('/form-out', methods=['POST'])
def form_out():
    
    name = request.form['name']
    surname = request.form['surname']
    age = request.form['age']
    location = request.form['location']
    email = request.form['email']
    
    return f'''
            <p>NAME: {name} {surname}</p>
            <p>AGE: {age}</p>
            <p>LOCATION: {location}</p>
            <p>E-MAIL: {email}</p>
           '''


#-----------------------------------------------------------


if __name__ == '__main__':
    app.run(debug=True)
