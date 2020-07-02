# flask.make_response
# https://flask.palletsprojects.com/en/1.1.x/api/#flask.make_response
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

# jsonify
# https://kite.com/python/docs/flask.jsonify

# g
# https://kite.com/python/docs/flask.g
# https://stackoverflow.com/questions/32909851/flask-session-vs-g

# Python List insert()
# https://www.programiz.com/python-programming/methods/list/insert
# ______________________________________________________________________

from flask import Flask, redirect, request, render_template, jsonify, make_response

# ______________________________________________________________________

app = Flask(__name__,
            template_folder='templates',
            static_folder='static')

# ______________________________________________________________________

if app.config['ENV'] == 'production':
    app.config.from_object('config.ConfigProduction')
else:
    app.config.from_object('config.ConfigDevelopment')
# ______________________________________________________________________

# Multiple routes with a single function:
@app.route('/')
@app.route('/home/')
@app.route('/index/')
def index():
    return '<h4>{}</h4>'.format(app.config['CHECK_ENV'])

# ________________________________

# Route HTTP Methods
@app.route('/api/v1/users', methods=['GET', 'POST', 'PUT'])
def users():
    users_data = [
        {
            'id' : '1',
            'name' : 'Christopher',
            'surname' : 'Farrugia',
            'age' : 35
        },
        {
            'id' : '2',
            'name' : 'Asuka',
            'surname' : 'Langley',
            'age' : 35
        },
    ]
    return jsonify(users_data)

# ________________________________

# Dynamic Routes & Variable Rules


@app.route('/profile/<username>/')
def profile(username):
    return f'{username} Profile Page'


# Routes can accept the following variable types:
# string:   Accepts any text without a slash (the default).
# int:      Accepts integers.
# float:    Accepts numerical values containing decimal points.
# path:     Similar to a string, but accepts slashes.


@app.route('/file/<path:path>/<string:file>')
def file(path, file):

    # Defining file type
    filename = file
    file_extention = ['doc', 'txt']
    file_type = file.split('.')[-1]


    # Checking file type
    if file_type not in file_extention:
        return '<h3>Invalid file type!</h3>'


    # Checking file path and reading file content
    try:
        with open(f'{path}/{file}') as file:
            data = file.read()
    except FileNotFoundError:
        return '<h3>Invalid file path!</h3>'

        
    return  f'''path: {path}/{filename} 
            <br><br> 
            content: {data} 
            <br><br> 
            fle_type: {file_type}'''





@app.route('/article/<int:year>/<int:month>/<title>')
def article(year, month, title):
    
    # Simulate: find article in db

    article =       f'''SELECT year, month, title FROM articles 
                    WHERE 
                        year={year},
                        month={month},
                        title={title};'''

    return f'<h5>{article}</h5>'

# ________________________________
# Rendering Page Templates

@app.route('/greetings/')
def greetings():
    return render_template('hello_world.html')


@app.route('/story/')
def message():
    title = 'A Strange Story'

    with open('./a_strange_story.txt') as file:
        message = file.read()

    return render_template('hello_world.html',title=title ,message=message)
# ______________________________________________________________________

# Making a Response Object


@app.route('/api/v2/test_response')
def test_response():

    body = jsonify({'status': 'Test worked!'})

    response = make_response(
        body,
        200
    )
    response.headers['X-Parachutes'] = 'parachutes are cool'
    response.headers['Content-Type'] = 'application/json'

    return response



if __name__ == '__main__':
    app.run()