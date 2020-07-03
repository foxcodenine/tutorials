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

# Add response headers to flask web app
# https://stackoverflow.com/questions/29464276/add-response-headers-to-flask-web-app
# 
# Generic Exception Handlers
# https://flask.palletsprojects.com/en/1.1.x/errorhandling/
# https://flask.palletsprojects.com/en/1.1.x/patterns/errorpages/
# https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-error-handling
#

# https://pythonise.com/series/learning-flask
# ______________________________________________________________________

from flask import Flask, redirect, request, render_template, \
jsonify, make_response, url_for, g, send_from_directory

from werkzeug.exceptions import HTTPException
import os

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
@app.route('/api/v1/users/', methods=['GET', 'POST', 'PUT'])
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
# ________________________________

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

# ________________________________

# The Request Object


# Using request.args.get('****’)
@app.route('/mail/', methods=['GET'])
def mail():

    if (
        request.args.get('inp-subject') and 
        request.args.get('inp-email') and
        request.args.get('inp-message')
    ):
        data = request.args
        print('Data >>',data)

        
        content = request.args.get('inp-subject')

        body = [request.args.get('inp-message')]

        return render_template('blank.html', content=content, body=body)

    
    return render_template('mail.html')


# ________________________________

@app.route('/contact/', methods=['POST', 'GET'])
def contact():

    if request.method == 'POST':

        contact = request.form['inp-email']
        body = [request.form['inp-name'], request.form['inp-message']]

        return render_template('blank.html', content=contact, body=body)


    return render_template('contact.html')


# ________________________________

# The "g" Object
# Flask's g . "G" stands for "global. g is an object we can
# attach values to.
# ________________________________


@app.errorhandler(HTTPException)
def http_error_handler(e):

    error_body = jsonify({
        'code': e.code,
        'name': e.name,
        'description': e.description
    })

    response = make_response(
        error_body,
        e.code
    )
    response.headers['Content-Type'] = 'application/json'
    response.headers['Code'] = e.code
    response.headers['Error'] = e.name
    response.headers['Description'] = e.description
   

    return response


# ________________________________
# Add response headers to render_template

@app.route('/test_page')
def test_page():
    
    resp = make_response(render_template( 
                            'blank.html',
                            content='Contebt-Security-Policy',
                            body=['default-src\'self\'']))


    resp.headers.add('Content-Security-Policy','default-src \'self\'')
    resp.headers.add('Test_Header_','This_is_my_test_header!')
    
    return resp
# ________________________________
# Adding a favicon

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', 
                               mimetype='image/vnd.microsoft.icon')
# ______________________________________________________________________

if __name__ == '__main__':
    app.run()